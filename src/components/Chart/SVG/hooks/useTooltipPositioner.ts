import { useCallback } from 'react'

// updates the position of the tooltip and change visibility
export function useTooltipPositioner(
	element?: HTMLDivElement | null,
): (pos: [number, number]) => void {
	return useCallback(
		(postion: [number, number]) => {
			if (postion && element) {
				const xPos = postion[0]
				const yPos = postion[1]
				if (element) {
					element.style.left = `${xPos + 150}px`
					element.style.top = `${yPos - 10}px`
					element.style.visibility = 'visible'
				}
			}
		},
		[element],
	)
}
