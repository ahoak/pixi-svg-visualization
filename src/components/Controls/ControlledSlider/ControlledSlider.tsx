import React, { memo } from 'react'
import { Slider, ISliderStyles } from '@fluentui/react'
import { SliderSettings } from '../../../hooks/useSliderSettings'
import styled from 'styled-components'

interface ControlledSliderProps {
	sliderOnChange: (value: number) => void
	sliderValue: number
	sliderSettings: SliderSettings
}

const sliderStyles: Partial<ISliderStyles> = {
	slideBox: { maxWidth: 300 },
	root: { display: 'inline-table', fontFamily: "'Gaegu', cursive" },
	titleLabel: { fontFamily: "'Gaegu', cursive" },
}

export const ControlledSlider: React.FC<ControlledSliderProps> = memo(
	function ControlledSlider({ sliderOnChange, sliderValue, sliderSettings }) {
		return (
			<Spacer>
				<Slider
					label="Adjust node count"
					min={sliderSettings.min}
					max={sliderSettings.max}
					step={1000}
					showValue={true}
					snapToStep={true}
					value={sliderValue}
					onChange={sliderOnChange}
					styles={sliderStyles}
				/>
			</Spacer>
		)
	},
)

const Spacer = styled.div`
	margin-left: 10px;
	display: inline-table;
`
