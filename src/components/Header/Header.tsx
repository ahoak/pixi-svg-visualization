import React, { memo } from 'react'
import styled from 'styled-components'
import { Logo } from './Logo'

export const Header: React.FC = memo(function Header() {
	return (
		<HeaderStyles>
			<Logo />
			<HeaderText>
				<h1> ❤ All the Dogs </h1>
				<p>
					All the posts on PetFinder on Sept 29th 2019 plotted based on
					approximate age of the dog. Data gather by The Pudding for the essay:{' '}
					<a
						rel="noopener noreferrer"
						target="_blank"
						href="https://pudding.cool/2019/10/shelters"
						style={{ color: '#F683BA' }}
					>
						Finding Forever Homes
					</a>
				</p>
			</HeaderText>
		</HeaderStyles>
	)
})
const HeaderStyles = styled.div`
	margin-left: 100px;
	display: flex;
`
const HeaderText = styled.div`
	display: block;
`
