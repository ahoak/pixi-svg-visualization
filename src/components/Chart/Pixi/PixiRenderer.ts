import { SpriteMap, FilterMap, ScaleProps } from '../types'
import * as PIXI from 'pixi.js'
import { Dimensions } from '../../../utils/types'
import { circle, attrs } from './utils'
import { easeCubic } from 'd3-ease'
import { correctedMargins } from '../constants'
import TooltipManager from './utils/TooltipManager'
import { Renderers } from '../../Controls/RendererControls'
import { DogDescriptionItem } from '../../../types/data'
import ScalesManager from './utils/ScalesManager'
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
	public ScalesManagerInstance: ScalesManager
	private spriteMap: SpriteMap = {}

	constructor(
		containerEl: HTMLDivElement,
		toolTipElement: HTMLDivElement | null,
		dimensions: Dimensions,
		renderer: Renderers,
		filters: FilterMap,
		scales: ScaleProps,
	) {
		this.dimensions = dimensions
		this.pixiElement = containerEl
		this.ToolTipManagerInstance = new TooltipManager(toolTipElement)
		this.rendererType = renderer
		this.ScalesManagerInstance = new ScalesManager(filters, scales)
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
		console.log('pixiRenderer', rendererType)
		return pixiRender
	}

	public getRendererType(): Renderers {
		return this.rendererType
	}

	public setScales(scales: ScaleProps) {
		this.ScalesManagerInstance.setScales(scales)
	}

	public setFilters(filters: FilterMap) {
		this.ScalesManagerInstance.setFilters(filters)
	}

	public setTooltipElement(element: HTMLDivElement | null) {
		if (this.ToolTipManagerInstance) {
			this.ToolTipManagerInstance.setTooltipElement(element)
		}
	}

	public updateChart(data: DogDescriptionItem[]) {
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
	private enter(data: DogDescriptionItem[]) {
		if (data) {
			// Set the sprite map up once
			data.forEach(node => {
				const sprite = new PIXI.Sprite(this.circleTexture)
				const posAttrs = this.ScalesManagerInstance.getXYPosition(node, radius)
				attrs(sprite, circle(posAttrs, radius))
				const key = `${node.petId}`
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
			// const current = this.data[nodeId]
			const coords = [_data.x, _data.y] as [number, number]
			this.ToolTipManagerInstance.showToolTip(_data.node, coords)
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
				sprite.tint = parseInt(defaultColor.replace('#', ''), 16)
			}
			sprite.height = 4
			sprite.width = 4
		}

		this.renderPixi()
	}

	private updateTransition(currentData: DogDescriptionItem[]) {
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
				const nodesToAdd: DogDescriptionItem[] = []
				currentData.forEach(currNode => {
					const spriteKey = `${currNode.petId}`
					if (this.spriteMap[spriteKey]) {
						const { sprite, _data } = this.spriteMap[spriteKey]
						const currNodePos = this.ScalesManagerInstance.getXYPosition(
							currNode,
							radius,
						)
						const prevNode = _data

						spriteQueue.delete(spriteKey)
						sprite.visible = true
						attrs(sprite, circle(currNodePos, radius))
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
