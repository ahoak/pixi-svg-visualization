import { useEffect } from 'react'
import PixiRenderer from '../PixiRenderer'
import { Data } from '../../types'
import { Renderers } from '../../../Controls/RendererControls/constants'

interface UpdateProps {
	data: Data[]
	pixiInstance: PixiRenderer | undefined
	renderer: Renderers
}
export function useUpdatedData({ data, pixiInstance, renderer }: UpdateProps) {
	useEffect(() => {
		if (pixiInstance && pixiInstance.getRendererType() === renderer) {
			pixiInstance.updateChart(data)
		}
	}, [data, pixiInstance, renderer])
}
