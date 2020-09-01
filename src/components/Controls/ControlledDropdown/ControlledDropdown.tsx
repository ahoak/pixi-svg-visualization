import React, { memo } from 'react'
import { Dropdown, IDropdownStyles, IDropdownOption } from '@fluentui/react'
import { FilterOptions, FilterYOptions } from '../../../types/data'
import { debounce } from '../../../utils/debounce'
import styled from 'styled-components'

const dropdownStyles: Partial<IDropdownStyles> = {
	dropdown: { maxWidth: 150 },
	root: { display: 'inline-table' },
	title: { fontFamily: "'Gaegu', cursive", fontSize: 18 },
	label: { fontFamily: "'Gaegu', cursive" },
	dropdownOptionText: { fontFamily: "'Gaegu', cursive", fontSize: 18 },
}

interface ControlledDropdownProps {
	selectedOption: FilterOptions | FilterYOptions
	onDropDrownChange: (
		event: React.FormEvent<HTMLDivElement>,
		item?: IDropdownOption,
	) => void
	options: IDropdownOption[]
	label?: string
}

export const ControlledDropdown: React.FC<ControlledDropdownProps> = memo(
	function ControlledDropdown({
		selectedOption,
		onDropDrownChange,
		options,
		label,
	}) {
		return (
			<Spacer>
				<Dropdown
					label={label || ''}
					onChange={debounce(onDropDrownChange)}
					selectedKey={selectedOption}
					options={options}
					styles={dropdownStyles}
				/>
			</Spacer>
		)
	},
)

const Spacer = styled.div`
	margin-left: 10px;
	display: inline-table;
`
