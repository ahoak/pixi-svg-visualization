import { DogDetails } from '../types/data'

export function getTooltipHtml(data: DogDetails): string {
	return `
	<h2>${data.name.toUpperCase()}</h2>
	<img src=${process.env.PUBLIC_URL + data.imgSrc} style="width: 100px;"> </img>
	Age: ${Math.round(data.age)}<br />Posted: ${new Date(
		data.posted,
	).toDateString()}
	<br /> State: ${data.state}
	`
}
