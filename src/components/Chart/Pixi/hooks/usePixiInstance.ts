import { FilterYOptions, FilterOptions } from '../../../../types/data'
import { useState, useEffect, useMemo, useCallback } from 'react'
import PixiRenderer from '../PixiRenderer'
import { Dimensions } from '../../../../utils/types'
import { Renderers } from '../../../Controls/RendererControls'
import { ScaleProps } from '../../types'

export interface PixiInstance {
	containerElement: HTMLDivElement | null
	toolTipElement: HTMLDivElement | null
	width: number
	height: number
	renderer: Renderers
	scales: ScaleProps
	yAxisFilter: FilterYOptions
	xAxisFilter: FilterOptions
}

export function usePixiInstance({
	width,
	height,
	toolTipElement,
	containerElement,
	renderer,
	scales,
	yAxisFilter,
	xAxisFilter,
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

	const filters = useMemo(() => ({ x: xAxisFilter, y: yAxisFilter }), [
		xAxisFilter,
		yAxisFilter,
	])

	useEffect(() => {
		if (pixiInstance) {
			pixiInstance.setFilters(filters)
		}
	}, [filters, pixiInstance])
	useEffect(() => {
		if (pixiInstance) {
			pixiInstance.setScales(scales)
		}
	}, [scales, pixiInstance])

	const setUpPixi = useCallback(
		(instance?: PixiRenderer) => {
			if (!instance && containerElement !== null) {
				const PIXIinstance = new PixiRenderer(
					containerElement,
					toolTipElement,
					dimensions,
					renderer,
					filters,
					scales,
				)
				setPixiInstance(PIXIinstance)
			}
		},
		[containerElement, toolTipElement, dimensions, renderer, scales, filters],
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
