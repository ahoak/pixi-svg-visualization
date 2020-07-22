import React, { memo } from 'react'
import styled from 'styled-components'
const imageURL = process.env.PUBLIC_URL + '/dog.svg'
export const Logo: React.FC = memo(function Logo() {
	return (
		<Container>
			<LogoText src={imageURL} alt="puppy" />
		</Container>
	)
})

const Container = styled.div`
	display: flex;
	align-items: center;
`

const LogoText = styled.img`
	margin: 0;
	margin-top: 8px;
	height: 100px;
`
