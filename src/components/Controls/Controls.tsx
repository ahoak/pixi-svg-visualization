import React, { memo } from 'react'
import styled from 'styled-components'
import { ControlledDropdown } from './ControlledDropdown'
import { ControlledSlider } from './ControlledSlider/ControlledSlider'
import {
	FilterOptions,
	FilterYOptions,
	DropdownXOptions,
	DropdownYOptions,
} from '../../types/data'
import { IDropdownOption, IChoiceGroupOption } from '@fluentui/react'
import { SliderSettings } from '../../hooks/useDataBounds'
import { RendererControls } from './RendererControls'

interface ControlsProps {
	xAxisFilter: FilterOptions
	yAxisFilter: FilterYOptions
	onXDropDrownChange: (
		event: React.FormEvent<HTMLDivElement>,
		item?: IDropdownOption,
	) => void
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
	xAxisFilter,
	yAxisFilter,
	onXDropDrownChange,
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
				selectedOption={xAxisFilter}
				onDropDrownChange={onXDropDrownChange}
				options={DropdownXOptions}
				label={'x-axis'}
			/>
			<ControlledDropdown
				selectedOption={yAxisFilter}
				onDropDrownChange={onYDropDrownChange}
				options={DropdownYOptions}
				label={'grouped dogs by:'}
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
