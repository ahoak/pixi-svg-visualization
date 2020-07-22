import { useMemo } from 'react'
import { correctedMargins } from '../constants'

export function useViewportDimensions(
	width: number,
	height: number,
): [number, number] {
	const vpWidth = useMemo(
		() => width - correctedMargins.left - correctedMargins.right,
		[width],
	)
	const vpHeight = useMemo(
		() => height - correctedMargins.top - correctedMargins.bottom,
		[height],
	)
	return [vpWidth, vpHeight]
}
