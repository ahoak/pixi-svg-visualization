import React, { memo } from 'react'
import styled from 'styled-components'
import VisualizePage from '../VisualizePage'
import { useDogData } from '../../hooks/useDogData'

export const IndexPage: React.FC = memo(function IndexPage() {
	const [data, details] = useDogData()
	return data ? (
		<Container>
			<VisualizePage data={data} details={details} />{' '}
		</Container>
	) : (
		<Loading>
			<iframe
				src="https://giphy.com/embed/gfl7CKcgs6exW"
				width="480"
				height="384"
				frameBorder="0"
				className="giphy-embed"
				allowFullScreen={false}
				title="talking dog"
			></iframe>
			<h1>loading data... please hold ❤ ❤ ❤</h1>
		</Loading>
	)
})

export default IndexPage

const Container = styled.div`
	display: flex;
	flex: 1;
	height: 100%;
	width: 100%;
	font-family: 'Gaegu', cursive;
`
const Loading = styled.div`
	position: relative;
	display: block;
	font-family: 'Gaegu', cursive;
	margin-left: 40%;
	margin-top: 20%;
`
