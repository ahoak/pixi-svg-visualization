import React, { memo } from 'react'
import styled from 'styled-components'
import { ControlledDropdown } from './ControlledDropdown'
import { ControlledSlider } from './ControlledSlider/ControlledSlider'
import { FilterYOptions, DropdownYOptions } from '../../types/data'
import { IDropdownOption, IChoiceGroupOption } from '@fluentui/react'
import { SliderSettings } from '../../hooks/useSliderSettings'
import { RendererControls } from './RendererControls'

interface ControlsProps {
	yAxisFilter: FilterYOptions

	onYDropDrownChange: (
		event: React.FormEvent<HTMLDivElement>,
		item?: IDropdownOption,
	) => void
	onSliderChange: (value: number) => void
	sliderSettings: SliderSettings
	selectedMax: number

	selectedRender: string
	onRendererChange: (
		ev: React.FormEvent<HTMLElement | HTMLInputElement> | undefined,
		option?: IChoiceGroupOption,
	) => void
}

export const Controls: React.FC<ControlsProps> = memo(function Controls({
	yAxisFilter,
	onYDropDrownChange,
	onSliderChange,
	sliderSettings,
	selectedMax,
	selectedRender,
	onRendererChange,
}) {
	return (
		<ControlStyles>
			<ControlledDropdown
				selectedOption={yAxisFilter}
				onDropDrownChange={onYDropDrownChange}
				options={DropdownYOptions}
				label={'group dogs by:'}
			/>
			<ControlledSlider
				sliderOnChange={onSliderChange}
				sliderSettings={sliderSettings}
				sliderValue={selectedMax}
			/>
			<RendererControls
				selectedRender={selectedRender}
				onChange={onRendererChange}
			/>
		</ControlStyles>
	)
})

const ControlStyles = styled.div`
	display: 'inline-flex';
	margin-left: 100px;
`
