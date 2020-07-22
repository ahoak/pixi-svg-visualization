import { useEffect } from 'react'
import { select } from 'd3-selection'

export function useResizeHandling(
	element: SVGSVGElement | null,
	width: number,
	height: number,
): void {
	useEffect(() => {
		if (element) {
			select(element).attr('width', width).attr('height', height)
		}
	}, [element, width, height])
}
