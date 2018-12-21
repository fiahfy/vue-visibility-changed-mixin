# @fiahfy/vue-visibility-changed-mixin

> Vue mixin for visibility changed.

## Installation
```
npm install @fiahfy/vue-visibility-changed-mixin
```

## Usage
```js
import VisibilityChanged from '@fiahfy/vue-visibility-changed-mixin'

new Vue({
  mixins: [VisibilityChanged],
  visibilityChanged(visible) {
    console.log(visible) // true -> visible, false -> hidden
  }
})
```
