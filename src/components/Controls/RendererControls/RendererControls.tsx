import * as React from 'react'
import { memo, FormEvent } from 'react'
import { IChoiceGroupOption, ChoiceGroup } from '@fluentui/react'
import styled from 'styled-components'
import { RendererOptions } from './constants'

interface RendererControlsProps {
	selectedRender: string
	onChange: (
		ev: FormEvent<HTMLElement | HTMLInputElement> | undefined,
		option?: IChoiceGroupOption,
	) => void
}
export const RendererControls: React.FC<RendererControlsProps> = memo(
	function RendererControls({ selectedRender, onChange }) {
		return (
			<Spacer>
				<ChoiceGroup
					selectedKey={selectedRender}
					options={RendererOptions}
					onChange={onChange}
					label="Renderer"
				/>
			</Spacer>
		)
	},
)

const Spacer = styled.div`
	margin-left: 10px;
	display: inline-table;
`
