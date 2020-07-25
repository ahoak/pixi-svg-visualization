import { useState, useCallback } from 'react'
import { IDropdownOption } from '@fluentui/react'
import { FilterYOptions } from '../types/data'

const defaultYOption = FilterYOptions.coat

export function useStateSelection(): [
	FilterYOptions,
	(event: React.FormEvent<HTMLDivElement>, item?: IDropdownOption) => void,
] {
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
	return [YSelectedItem, onYChange]
}
