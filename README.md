# Pixi-SVG-Visualization

Example application for a simple data visual using Pixi.js webGL renderer layered on top of SVG. This application visualizes all the pets on PetFinder for a specific day (Sept 29th 2019).

Data was collected and processed by the Pudding and can be found in [this](https://github.com/ahoak/data/tree/master/dog-shelters) fork. For the purpose of this application dog ages were approximated based on age categorization and layout is precalulated. For a more dynamic layout, the use of a webworker would help reduce CPU overhead.

_This is not meant to be productionized code but hightlight how to use webGL for the purpose of data visualization._

This was built for the CascadiaJS 2020 Virtual Conference talk about SVG, Canvas, and WebGL. Links from talk in related section.

## Application

!["App Preview"](/assets/app_screenshot.JPG)
<br />

🐶[Deployed application](https://ahoak.github.io/pixi-svg-visualization)

## Architecture

In src/components/charts directory contains the SVG, Canvas, and WebGL implementations. The SVG implementation is under /SVG and webGL & canvas is in the /Pixi directory.

### SVG

In the [SVG implementation](src\components\Chart\SVG\BeeSwarmSVG.tsx), the axis and data plotting is done using react hooks. The data circles are drawn using UseLayoutEffect() hook and D3's .join() function to specify data lifecycle events.

```js:
useLayoutEffect() {
    d3.select(dataRef)
        .selectAll(".data-items")
        .data(data)
        .join( enter, update, exit)
},[props...]
```

<br />

SVG does not handling rendering and animating the full dataset well and it is recommended that the node count is reduced before testing SVG.

### PIXI

<img src="/assets/hybrid_approach.JPG" alt="Hybrid Approach"
	title="Hybrid Approach" height="200" />
<br />

The pixi application uses a layered approach where an SVG component creates the axis. The pixi component is layered above the SVG. Each of the pixi sprites are interactive, which means we can attach a event handler to the sprites. The tooltip is called when the `onMouseOver` event occurs and sends coordinates to position tooltip.

The pixi implementation uses same [class component](src/components/Chart/Pixi/PixiRenderer.ts) and changes the renderer type to use either canvas (using legacy pixi mix-in) and webGL. At a high level the class is set up with the following logic:
!["Pixi Class Data Handling"](/assets/pixi_class_data_handling.JPG)
<br />

The constructor sets up the Pixi stuff to include creating the renderer based on the renderer prop. Note, using forceCanvas will not work without pixi-legacy package. The constructor also sets up a pixi texture which could be subsituted for an image source and it also sets up a sprite container element for rendering.

When data is initialized, the enter() function will create a sprite map using a unqiue key and holds a reference to the Sprite as well as an \_data for prev data reference. Sprite properties are updated and then rendered.

When nodes need to be updated, the logic to update is done in a requestAnimationFrame loop, which is also referred to as a game loop.

<img src="/assets/RAF_loop.JPG" alt="RAF Loop"
	title="RAF Loop" width="200" height="200" />
<br />

In updateTransition() function is where this RAF loop starts. RequestAnimationFrame is called on TweenRender() which iterates over the data, and update the corresponding sprite from the sprite map for each data point. The x,y positions are calculated based on the current progress of the tween and interpolated using d3-ease utility. After iterating through the data, the renderer will render the updated sprites on the scene. The cycle will continue until the total length of tween duration.

### Related Content

!["Benchmark Preview"](/assets/renderer_benchmark_screenshot.JPG)

<br />

#### Preformance

⏳[Performance Benchmarking application repositiory](https://github.com/ahoak/renderer-benchmark)
⏳[Benchmark deployment](https://ahoak.github.io/renderer-benchmark/)

🐰[Pixi Bunny Mark](https://pixijs.io/bunny-mark/)

#### Compatibility

💻 [WebGL 2.0 Compatibility](https://caniuse.com/#feat=webgl2)
💻 [Canvas 2D API Compatibility](https://caniuse.com/#feat=mdn-api_canvasrenderingcontext2d)
💻 [SVG Compatibility](https://caniuse.com/#feat=mdn-svg_elements_svg)

#### WebGL Samples

✨[wikiverse: 3D Visualization of Wikipedia](http://wikiverse.io/)
✨[Three.js protein](https://twitter.com/edankwan/status/1278677798744403968)
✨[Interactive Nature Publication Graph](https://www.nature.com/immersive/d41586-019-03165-4/index.html)
✨[SandDance](https://sanddance.js.org/app/)

#### Canvas 2D API Sample

🌟[Four Years of Vacations in 20,000 Colors](http://sxywu.com/travel/)

#### SVG Samples

⭐[10 Things Everyone Hates About You](https://pudding.cool/2017/12/hater/)
⭐[Yankee Candle: Making Scents of Emotions](http://www.tidbits.fyi/candles)

#### Accessibility

[Data Visualization Accessibility: Where Are We Now, and What’s Next?](https://medium.com/nightingale/data-visualization-accessibility-where-are-we-now-and-whats-next-b2c9eeac4e8b)
[Accessible Charts with Aria (SVG)](https://blog.tenon.io/accessible-charts-with-aria)
A few notes...
This is a pretty broad topic but here are a couple angles we can look at:

- With color-impaired users, using colors that allow differentiation of categories
- With visually impaired, not blind users, customizing font size, enabling high contrast mode, kerning space between characters, border contrast between bars
- For blind users, using keyboard-navigation and tabbing through the visual. For more complex visuals and webGL, we may need to make something custom or a table and configure screen reader interaction.
- Replace visual with table for screen readers or summarization for large data sets and allow option for data exploration.
- Allow Enable/Disable animation.
- Alternative descriptions for the charts.

But the true way to see if the data visual is accessible is to conduct user tests with our target audience.

<b>WebGL Tutorials and optimization resources</b>
[Rendering 100k spheres, instantiating and draw calls](https://velasquezdaniel.com/blog/rendering-100k-spheres-instantianing-and-draw-calls/)

[webGL + shader guide](https://xem.github.io/articles/webgl-guide.html)

If your looking for 3D, try [three.js](https://threejs.org/)

_Icons made by Freepik from www.flaticon.com_
