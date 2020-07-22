import { useCallback } from 'react'
import { useTooltipPositioner } from './useTooltipPositioner'
import { DogDescriptionItem } from '../../../../types/data'
import { getTooltipHtml } from '../../../../utils'

export function useHoverEvents(
	tooltip: HTMLDivElement | null,
): [
	// onMouseEnter
	(d: DogDescriptionItem, coords: [number, number]) => void,
	// onMouseLeave
	() => void,
] {
	const showToolTip = useTooltipPositioner(tooltip)

	const onMouseEnter = useCallback(
		(data: DogDescriptionItem, coords: [number, number]) => {
			if (tooltip) {
				tooltip.style.padding = `2px`
				tooltip.innerHTML = getTooltipHtml(data)
				tooltip.style.backgroundColor = '#f1f1f1'
				tooltip.style.border = `1px solid #767676`
				tooltip.style.color = 'black'
				tooltip.style.fontSize = '14px'
				tooltip.style.fontSize = '14px'
				tooltip.style.visibility = 'visible'
				showToolTip(coords)
			}
		},
		[tooltip, showToolTip],
	)
	const onMouseLeave = useCallback(() => {
		if (tooltip) {
			tooltip.style.visibility = 'hidden'
		}
	}, [tooltip])

	return [onMouseEnter, onMouseLeave]
}
