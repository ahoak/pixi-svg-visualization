import { DogDescriptionItem } from '../../../../types/data'
import { FilterMap, ScaleProps, SpriteInternalCoords } from '../../types'

class ScalesManager {
	private filters: FilterMap
	private scales: ScaleProps

	constructor(filters: FilterMap, scales: ScaleProps) {
		this.filters = filters
		this.scales = scales
	}

	public setFilters(filters: FilterMap) {
		this.filters = filters
	}

	public setScales(scales: ScaleProps) {
		this.scales = scales
	}

	public getXYPosition(
		d: DogDescriptionItem,
		radius: number,
	): SpriteInternalCoords {
		const { xScale, yScale, colorScale } = this.scales
		const { x, y } = this.filters
		return {
			x: (xScale(d[x]) || 0) - radius,
			y: (yScale(d[y]) || 0) + yScale.bandwidth() / 2 - radius,
			hex: colorScale ? colorScale(d[y]) : undefined,
			node: d,
		}
	}
}
export default ScalesManager
