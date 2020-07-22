import React, { memo } from 'react'
import styled from 'styled-components'
import { Logo } from './Logo'

export const Header: React.FC = memo(function Header() {
	return (
		<HeaderStyles>
			<Logo />
			<h1> ❤ All the Dogs </h1>
		</HeaderStyles>
	)
})
const HeaderStyles = styled.div`
	margin-left: 100px;
	display: flex;
`
