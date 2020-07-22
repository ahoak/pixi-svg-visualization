import { useState, useCallback } from 'react'
import { IDropdownOption } from '@fluentui/react'
import { FilterOptions, FilterYOptions } from '../types/data'

const defaultXOption = FilterOptions.posted
const defaultYOption = FilterYOptions.coat

export function useStateSelection(): [
	FilterOptions,
	(event: React.FormEvent<HTMLDivElement>, item?: IDropdownOption) => void,
	FilterYOptions,
	(event: React.FormEvent<HTMLDivElement>, item?: IDropdownOption) => void,
] {
	const [XSelectedItem, setXSelectedItem] = useState<FilterOptions>(
		defaultXOption,
	)
	const onXChange = useCallback(
		(event: React.FormEvent<HTMLDivElement>, item?: IDropdownOption): void => {
			if (item) {
				const selection = item.key as FilterOptions
				setXSelectedItem(selection)
			}
		},
		[setXSelectedItem],
	)
	const [YSelectedItem, setYSelectedItem] = useState<FilterYOptions>(
		defaultYOption,
	)
	const onYChange = useCallback(
		(event: React.FormEvent<HTMLDivElement>, item?: IDropdownOption): void => {
			if (item) {
				const selection = item.key as FilterYOptions
				setYSelectedItem(selection)
			}
		},
		[setYSelectedItem],
	)
	return [XSelectedItem, onXChange, YSelectedItem, onYChange]
}
