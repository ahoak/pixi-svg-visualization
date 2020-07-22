import { useEffect } from 'react'
import {
	FilterOptions,
	FilterYOptions,
	DogDescriptionItem,
} from '../../../../types/data'
import { Renderers } from '../../../Controls/RendererControls'
import PixiRenderer from '../PixiRenderer'

interface UpdateProps {
	data: DogDescriptionItem[]
	pixiInstance: PixiRenderer | undefined
	yAxisFilter: FilterYOptions
	xAxisFilter: FilterOptions
	renderer: Renderers
}
export function useUpdatedData({
	data,
	pixiInstance,
	yAxisFilter,
	xAxisFilter,
	renderer,
}: UpdateProps) {
	useEffect(() => {
		if (pixiInstance && pixiInstance.getRendererType() === renderer) {
			pixiInstance.updateChart(data)
		}
	}, [data, pixiInstance, xAxisFilter, yAxisFilter, renderer])
}
