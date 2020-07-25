import { useState, useEffect, useMemo, useCallback } from 'react'
import PixiRenderer from '../PixiRenderer'
import { Dimensions } from '../../../../utils/types'
import { DogMap } from '../../../../types/data'
import { Renderers } from '../../../Controls/RendererControls/constants'

export interface PixiInstance {
	containerElement: HTMLDivElement | null
	toolTipElement: HTMLDivElement | null
	width: number
	height: number
	renderer: Renderers
	details?: DogMap
}

export function usePixiInstance({
	width,
	height,
	toolTipElement,
	containerElement,
	renderer,
	details,
}: // events,
PixiInstance): PixiRenderer | undefined {
	const [pixiInstance, setPixiInstance] = useState<PixiRenderer | undefined>()

	// resize canvas on dimension change
	const dimensions: Dimensions = useMemo(() => {
		if (pixiInstance) {
			pixiInstance.resize(width, height)
		}
		return { width, height }
	}, [width, height, pixiInstance])

	// update toolTipElement in PixiRenderer
	useMemo(() => {
		if (pixiInstance && toolTipElement !== null) {
			pixiInstance.setTooltipElement(toolTipElement)
		}
	}, [toolTipElement, pixiInstance])
	useMemo(() => {
		if (pixiInstance) {
			pixiInstance.setTooltipDetails(details)
		}
	}, [details, pixiInstance])

	const setUpPixi = useCallback(
		(instance?: PixiRenderer) => {
			if (!instance && containerElement !== null) {
				const PIXIinstance = new PixiRenderer(
					containerElement,
					toolTipElement,
					dimensions,
					renderer,
				)
				setPixiInstance(PIXIinstance)
			}
		},
		[containerElement, toolTipElement, dimensions, renderer],
	)
	useEffect(() => {
		if (pixiInstance) {
			const currentRenderer = pixiInstance.getRendererType()
			if (currentRenderer !== renderer) {
				pixiInstance.remove()
				setUpPixi()
			}
		} else {
			setUpPixi(pixiInstance)
		}
	}, [pixiInstance, renderer, setUpPixi])

	return pixiInstance
}
