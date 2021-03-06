import { DogMap } from '../../../../types/data'
import { getTooltipHtml } from '../../../../utils'

class TooltipManager {
	private toolTipElement: HTMLDivElement | null
	private dogMap: DogMap = {}

	constructor(toolTipElement: HTMLDivElement | null) {
		this.toolTipElement = toolTipElement
	}

	public setTooltipElement(element: HTMLDivElement | null) {
		this.toolTipElement = element
	}

	public setDogMap(dogMap?: DogMap) {
		if (dogMap) {
			this.dogMap = dogMap
		}
	}

	private updateTooltipPositioner(postion: [number, number]) {
		const element = this.toolTipElement
		if (postion && element) {
			const xPos = postion[0]
			const yPos = postion[1]
			if (element) {
				element.style.left = `${xPos + 150}px`
				element.style.top = `${yPos - 10}px`
				element.style.visibility = 'visible'
			}
		}
	}

	public showToolTip(id: string, coords: [number, number]) {
		const tooltip = this.toolTipElement
		if (tooltip) {
			const innerHTML = this.dogMap[id] ? getTooltipHtml(this.dogMap[id]) : ''
			tooltip.style.padding = `2px`
			tooltip.innerHTML = innerHTML
			tooltip.style.backgroundColor = '#f1f1f1'
			tooltip.style.border = `1px solid #767676`
			tooltip.style.color = 'black'
			tooltip.style.fontSize = '14px'
			tooltip.style.visibility = 'visible'
			this.updateTooltipPositioner(coords)
		}
	}

	public hideTooltip() {
		const tooltip = this.toolTipElement
		if (tooltip) {
			tooltip.style.visibility = 'hidden'
		}
	}
}
export default TooltipManager
