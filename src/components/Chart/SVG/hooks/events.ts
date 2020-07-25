import { useCallback } from 'react'
import { useTooltipPositioner } from './useTooltipPositioner'
import { DogMap } from '../../../../types/data'
import { getTooltipHtml } from '../../../../utils'

export function useHoverEvents(
	tooltip?: HTMLDivElement | null,
	details?: DogMap,
): [
	// onMouseEnter
	(d: string, coords: [number, number]) => void,
	// onMouseLeave
	() => void,
] {
	const showToolTip = useTooltipPositioner(tooltip)

	const onMouseEnter = useCallback(
		(id: string, coords: [number, number]) => {
			if (tooltip) {
				const innerHTML =
					details && details[id] ? getTooltipHtml(details[id]) : ''
				tooltip.style.padding = `2px`
				tooltip.innerHTML = innerHTML
				tooltip.style.backgroundColor = '#f1f1f1'
				tooltip.style.border = `1px solid #767676`
				tooltip.style.color = 'black'
				tooltip.style.fontSize = '14px'
				tooltip.style.fontSize = '14px'
				tooltip.style.visibility = 'visible'
				showToolTip(coords)
			}
		},
		[tooltip, showToolTip, details],
	)
	const onMouseLeave = useCallback(() => {
		if (tooltip) {
			tooltip.style.visibility = 'hidden'
		}
	}, [tooltip])

	return [onMouseEnter, onMouseLeave]
}
