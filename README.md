# DOM Tool

Tool for DOM

```bash
npm install domtool --save
```

## docs

[domtool doc](https://unpkg.com/domtool@latest/docs/index.html)

## insertKeyframesRule

```js
import insertKeyframesRule from 'domtool/lib/insertKeyframesRule';
let keyframes = {
  '0%': {
    transform: 'scale(1)'
  },
  '50%': {
    transform: 'scale(0.5)',
    opacity: 0.7
  },
  '100%': {
    transform: 'scale(1)',
    opacity: 1
  }
};

let animationName = insertKeyframesRule(keyframes);
```

## insertRule

```js
import insertRule from 'domtool/lib/insertRule';
let css = '.foo {}'
insertRule(css);
```

## appendVendorPrefix

```js
import appendVendorPrefix from 'domtool/lib/appendVendorPrefix';
let style = {
  transform: 'scaleX(1)'
}
appendVendorPrefix(style);
```

## getVendorPrefix

```js
import getVendorPrefix from 'domtool/lib/getVendorPrefix';
let vendorPrefix = getVendorPrefix(); // => -webkit-
```

## addClass

```js
import addClass from 'domtool/lib/addClass';
addClass(this.getDOMNode(), 'foo');
```

## removeClass

```js
import removeClass from 'domtool/lib/removeClass';
removeClass(this.getDOMNode(), 'foo');
```

## hasClass

```js
import hasClass from 'domtool/lib/hasClass';
hasClass(this.getDOMNode(), 'foo'); // => true
```

## transitionEventsa

```js
import transitionEvents from 'domtool/lib/transitionEvents';
transitionEvents.addEndEventListener(node, eventListener);
transitionEvents.removeEndEventListener(node, eventListener);
```

## classNames

```js
import classNames from 'domtool/lib/classNames';

classNames('foo', 'bar'); // => 'foo bar'
classNames('foo', { bar: true }); // => 'foo bar'
classNames({ foo: true }, { bar: true }); // => 'foo bar'
classNames({ foo: true, bar: true }); // => 'foo bar'

// lots of arguments of various types
classNames('foo', { bar: true, duck: false }, 'baz', { quux: true }) // => 'foo bar baz quux'

// other falsy values are just ignored
classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'

// Arrays will be recursively flattened as per the rules above:
let arr = ['b', { c: true, d: false }];
classNames('a', arr); // => 'a b c'
```

## canUseDOM

```js
import canUseDOM from 'domtool/lib/canUseDOM';
if(canUseDOM){
  // balabala
}
```

## addEventListener

```js
import addEventListener from 'domtool/lib/addEventListener';
addEventListener(window, 'scroll', handle)
```

## removeEventListener

```js
import removeEventListener from 'domtool/lib/removeEventListener';
removeEventListener(window, 'scroll', handle)
```

## throttle

```js
import throttle from 'domtool/lib/throttle';
throttle(fn, 100)

import {funcThrottle} from 'domtool/lib/throttle';
throttle(fn, data, null, 500, 1000)
```

## onEndTransition

```js
import onEndTransition from 'domtool/lib/onEndTransition';
onEndTransition(el, handle)
```

## inViewport

```js
import inViewport from 'domtool/lib/inViewport';
inViewport(el) // true if elem is in the current viewport
inViewport(el, 100) // true if elem is in the current viewport or within 100px of it
inViewport(el, -100) // true if elem is in the current viewport and not within 99px of the edge
```

## scrollIntoView

```js
import { scrollIntoView } from 'domtool';

scrollIntoView(source, container, config);
```

* options

  |params|type|default|description|
  |------|------|------|------|
  | source | HTMLElement | - | node wanted to show |
  | container | HTMLElement | - | scroll to container |
  | config | object | - | config |

* config

  |params|type|default|description|
  |------|------|------|------|
  | alignWithLeft | Boolean | - | whether align with left edge |
  | alignWithTop | Boolean | - | whether align with top edge |
  | offsetTop | Number | - | offset top |
  | offsetLeft | Number | - | offset left |
  | offsetBottom | Number | - | offset bottom |
  | offsetRight | Number | - | offset right |
  | allowHorizontalScroll | Boolean | - | whether allow horizontal scroll container |
  | onlyScrollIfNeeded | Boolean | - | whether scroll container when source is visible |
