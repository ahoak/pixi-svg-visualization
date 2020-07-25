import { SpriteMap, SpriteInternalCoords, Data } from '../types'
import * as PIXI from 'pixi.js'
import { Dimensions } from '../../../utils/types'
import { easeCubic } from 'd3-ease'
import { correctedMargins } from '../constants'
import TooltipManager from './utils/TooltipManager'
import { DogMap } from '../../../types/data'
import { Renderers } from '../../Controls/RendererControls/constants'
// @ts-ignore
export * from 'pixi.js-legacy'
// @ts-ignore
export * from '@pixi/canvas-renderer'

const duration = 1000
const radius = 2

class PixiRenderer {
	private pixiElement: HTMLDivElement
	private renderer: PIXI.Renderer | PIXI.CanvasRenderer | null
	private circleTexture: PIXI.Texture
	private nodesStage: PIXI.Container
	private stage: PIXI.Container
	private dimensions: Dimensions
	private spriteKeys: Set<string> = new Set([])
	private tweenedScale = 1
	private ToolTipManagerInstance?: TooltipManager //handles visibility of tooltip
	private rendererType: Renderers
	private spriteMap: SpriteMap = {}

	constructor(
		containerEl: HTMLDivElement,
		toolTipElement: HTMLDivElement | null,
		dimensions: Dimensions,
		renderer: Renderers,
	) {
		this.dimensions = dimensions
		this.pixiElement = containerEl
		this.ToolTipManagerInstance = new TooltipManager(toolTipElement)
		this.rendererType = renderer
		// === set up pixi stuff ===
		this.renderer = this.setRenderer(renderer, dimensions)
		const circleTemplate = new PIXI.Graphics()
			.beginFill(0xffffff)
			.lineStyle(0)
			.drawCircle(0, 0, 100)
			.endFill()
		this.circleTexture = this.renderer.generateTexture(
			circleTemplate,
			PIXI.SCALE_MODES.NEAREST,
			dimensions.width / dimensions.height,
		)
		// canvas element to draw to
		this.pixiElement.appendChild(this.renderer.view)
		this.nodesStage = new PIXI.Container()

		// stage is container for our sprite elements
		this.stage = new PIXI.Container()
		this.stage.addChild(this.nodesStage)
		// adjust for the margins
		this.stage.transform.position.y = correctedMargins.top
		this.stage.transform.position.x = correctedMargins.left
	}

	private setRenderer(renderer: Renderers, dimensions: Dimensions) {
		// Renderer will choose webGL if supported and failover to canvas
		// For only canvas renderer use forceCanvas option but only supported with pixi-legacy module
		// alternatively can use PIXI.Application

		const pixiRender = PIXI.autoDetectRenderer({
			width: dimensions.width,
			height: dimensions.height,
			antialias: true,
			transparent: true,
			forceCanvas: renderer === Renderers.Canvas,
		})
		const rendererType =
			pixiRender.type === PIXI.RENDERER_TYPE.CANVAS ? 'CANVAS' : 'WEBGL'
		console.log(`pixiRenderer flavor: ${rendererType}`)
		return pixiRender
	}

	public getRendererType(): Renderers {
		return this.rendererType
	}

	public setTooltipElement(element: HTMLDivElement | null) {
		if (this.ToolTipManagerInstance) {
			this.ToolTipManagerInstance.setTooltipElement(element)
		}
	}
	public setTooltipDetails(dogMap?: DogMap) {
		if (this.ToolTipManagerInstance) {
			this.ToolTipManagerInstance.setDogMap(dogMap)
		}
	}

	public updateChart(data: Data[]) {
		this.updateTransition(data)
	}

	public remove() {
		if (this.renderer) {
			this.spriteKeys = new Set([])
			this.spriteMap = {}
			this.stage.destroy({ children: true })
			this.pixiElement.removeChild(this.renderer.view)
			this.renderer.destroy(true)
			this.renderer = null
		}
	}

	// More info on managing pixi sprites for improving performance
	// https://stackoverflow.com/questions/33437002/pixi-js-animate-circle-improving-performance
	private enter(data: Data[]) {
		if (data) {
			// Set the sprite map up once
			data.forEach(node => {
				const sprite = new PIXI.Sprite(this.circleTexture)
				const posAttrs = {
					x: node.x - radius,
					y: node.y - radius,
					hex: node.hex,
					node,
				}
				this.mapSpriteProps(sprite, posAttrs, radius)

				const key = `${node.id}`
				sprite.name = key
				// map sprite key with sprite
				this.spriteMap[key] = { sprite, _data: posAttrs }
				// setting sprite interactive allows for mouse events
				sprite.interactive = true
				sprite.interactiveChildren = true
				sprite.on('mouseover', (ev: any) => this.handleMouseover(ev, key))
				sprite.on('mouseout', (ev: any) => this.handleMouseout(ev, key))
				this.spriteKeys.add(key)
				this.nodesStage.addChild(sprite)
			})
			// uncomment to debug sprite props
			// console.log(this.spriteMap[Object.keys(this.spriteMap)[0]].height)
			this.renderPixi()
		}
	}

	private handleMouseover(ev: PIXI.InteractionEvent, nodeId: string) {
		ev.stopPropagation()

		if (this.spriteMap[nodeId] && this.ToolTipManagerInstance) {
			const { sprite, _data } = this.spriteMap[nodeId]
			const coords = [_data.x, _data.y] as [number, number]
			this.ToolTipManagerInstance.showToolTip(_data.node.id, coords)
			const hoverColor = '#2e78ce'
			sprite.height = 20
			sprite.width = 20
			sprite.tint = parseInt(hoverColor.replace('#', ''), 16)
		}

		this.renderPixi()
		ev.stopPropagation()
	}

	private handleMouseout(ev: PIXI.InteractionEvent, nodeId: string) {
		ev.stopPropagation()
		if (this.ToolTipManagerInstance) {
			this.ToolTipManagerInstance.hideTooltip()
		}
		if (this.spriteMap[nodeId]) {
			const { sprite, _data } = this.spriteMap[nodeId]
			const defaultColor = _data.hex
			if (defaultColor) {
				sprite.tint = defaultColor
			}
			sprite.height = 4
			sprite.width = 4
		}

		this.renderPixi()
	}

	private mapSpriteProps(
		sprite: PIXI.Sprite,
		coords: SpriteInternalCoords,
		radius: number,
	): void {
		sprite.x = coords.x
		sprite.y = coords.y
		sprite.width = radius * 2
		sprite.height = radius * 2
		sprite.alpha = 1.0
		sprite.tint = coords.hex
	}

	private updateTransition(currentData: Data[]) {
		if (Object.keys(this.spriteMap).length > 0) {
			let startScale = this.tweenedScale
			let targetScale = 1
			let start: number | undefined
			const tweenRender = () => {
				if (start === undefined) {
					start = Date.now()
				}
				const deltaTime = Date.now() - start
				const percent = Math.max(0, Math.min(deltaTime / duration, 1)) // add min to not "overshoot" value
				const eased = easeCubic(percent)
				const finalScale = startScale + (targetScale - startScale) * eased
				// track which ones need to be visible
				const spriteQueue = this.spriteKeys
				const nodesToAdd: Data[] = []
				currentData.forEach(currNode => {
					const spriteKey = `${currNode.id}`
					if (this.spriteMap[spriteKey]) {
						const { sprite, _data } = this.spriteMap[spriteKey]
						const currNodePos = {
							x: currNode.x - radius,
							y: currNode.y - radius,
							hex: currNode.hex,
							node: currNode,
						}
						const prevNode = _data

						spriteQueue.delete(spriteKey)
						sprite.visible = true
						this.mapSpriteProps(sprite, currNodePos, radius)

						const x = eased * (currNodePos.x - prevNode.x) + prevNode.x
						const y = eased * (currNodePos.y - prevNode.y) + prevNode.y
						sprite.x = x - radius
						sprite.y = (y! - radius) * finalScale
						if (percent >= 1) {
							this.spriteMap[spriteKey]._data = currNodePos
						}
					} else {
						if (percent >= 1) {
							// add for this first time
							nodesToAdd.push(currNode)
						}
					}
				})
				if (percent >= 1) {
					spriteQueue.forEach((id: string) => {
						const sprite = this.spriteMap[id].sprite as PIXI.Sprite
						sprite.visible = false
					})
					if (nodesToAdd.length > 0) {
						this.enter(nodesToAdd)
					}
				}

				this.tweenedScale = finalScale
				this.renderPixi()
				if (percent < 1.0) {
					requestAnimationFrame(tweenRender)
				}
			}
			requestAnimationFrame(tweenRender)
		} else {
			this.enter(currentData)
		}
	}

	public resize = (width: number, height: number) => {
		this.dimensions.height = height
		this.dimensions.width = width
		if (this.renderer) {
			this.renderer.resize(width, height)
		}
	}
	private renderPixi() {
		// render the stage
		if (this.renderer) {
			this.renderer.render(this.stage)
		}
	}
}
export default PixiRenderer
