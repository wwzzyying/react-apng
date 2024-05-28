# react-apng

APNG implementation on canvas as a [React.js](http://facebook.github.io/react) component, provides functions for control it (base on [apng-js](https://github.com/davidmz/apng-js)).

## Notice

**Based on [react-apng](https://github.com/sl2782087/react-apng)**

* added support for callback events in [apng-js](https://github.com/davidmz/apng-js), such as play, frame, end, and other events.
* added Typescript declaration of `ApngComponent`
* fix apng-js occasional frame skipping after calling `pause`

## Demo & Examples

Live demo: [https://wwzzyying.github.io/react-apng/](https://wwzzyying.github.io/react-apng/)

To run the examples locally:

```
npm install or yarn
npm start or yarn start
```

Then open [`localhost:8080/docs/`](http://localhost:8080/docs/) in a browser.

## Installation

react-apng is available through npm or yarn:

```
npm install @wwzzyying/react-apng --save
```

```
yarn add @wwzzyying/react-apng --save
```

## Usage

Require the react-apng component and render it with JSX:

```javascript
import React from 'react';
import ApngComponent from '@wwzzyying/react-apng';
//const ApngComponent = require('react-apng'); or this way
import apic1 from './apic1.png';

class ApngComponent extends React.Component {
	render() {
		return <ApngComponent src={apic1} />;
	}
}

React.render(<App />, document.getElementById('app'));
```

### Methods && State

#### methods

* `play` play the apng
* `pause` pause the apng
* `stop` stop the apng
* `one` play the apng once

#### state

* `isPlay` apng play status

```javascript
class ApngComponent extends React.Component {
	playAndPause =()=>{
		const apngcom = this.refs.apngcom;
		const isPlay = apngcom.isPlay;
		if(isPlay){
			apngcom.pause();
		}else {
			apngcom.play();
		}
	}
	render() {
		return (
				<ApngComponent
					ref="apngcom"
					onClick={this.playAndPause}
					src={apic1}
				/>;
			)
	}
}
```

You can interact with the component instance using a `ref` after the `componentDidMount` lifecycle event has fired (including inside the `componentDidMount` event in a parent Component).

### Properties

* `className` `string` canvas className
* `style` `string` canvas style
* `src` `string` local image path
* `autoPlay` `bool` auto play apng (default false)
* `rate` `floot` apng play rate (default 1.0)
* `onPlay` playback started
* `onFrame` frame played (frame number passed as event parameter)
* `onPause` playback paused
* `onStop` playback stopped
* `onEnd` playback ended (for APNG with finite count of plays)
* `onClick,onMouseOver...` `function` bind events like a real dom

Copyright (c) 2018 wangzy [MIT](LICENSE) Licensed.
