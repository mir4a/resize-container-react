# Resize Container React

A simple React component to resize a container. Fully customizable. Zero dependencies.

## Installation

```bash
npm install --save @mir4a/resize-container-react
```

## Usage


### Basic

```jsx
import React from 'react'
import {ResizeContainer, ResizeBothHandle} from '@mir4a/resize-container-react'

const App = () => {
  return (
    <ResizeContainer>
      <p>
        Any content here
      </p>
      <ResizeBothHandle />
    </ResizeContainer>
  )
}
```

### With customizations

```jsx
import React from 'react'
import {ResizeContainer, ResizeBothHandle} from '@mir4a/resize-container-react'

const App = () => {
  return (
    <ResizeContainer
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'yellow',
      }}
    >
      <p style={{
        width: 'inherit',
        height: 'inherit',
        overflow: 'auto',
      }}>
        Any content here
      </p>
      <ResizeBothHandle>
        <img src="https://img.icons8.com/ios/50/000000/resize.png" />
      </ResizeBothHandle>
    </ResizeContainer>
  )
}
```

### RTL

> automatic detection is not supported yet

```jsx
import React from 'react'
import {ResizeContainer, ResizeBothHandle} from '@mir4a/resize-container-react'

const App = () => {
  return (
    <div dir="rtl">
      <ResizeContainer
        isRTL={true}
      >
        <p style={{
          width: 'inherit',
          height: 'inherit',
          overflow: 'auto',
        }}>
          Any content here
        </p>
        <ResizeBothHandle>
          <img src="https://img.icons8.com/ios/50/000000/resize.png" />
        </ResizeBothHandle>
      </ResizeContainer>
    </div>
  )
}
```

## Props

### ResizeContainer

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| children | ReactNode | null | any of your content |
| style? | CSSProperties | {} | any css styles |
| initialWidth? | number | undefined | Initial width of the container |
| initialHeight? | number | undefined | Initial height of the container |
| onResize? | ({width: number, height: number}) => void | undefined | Callback function fired while container is resizing |
| onResizeEnd? | ({width: number, height: number}) => void | undefined | Callback function when the container is resized |

### ResizeBothHandle

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| children? | ReactNode | null | custom icon or whatever component to use as resize handle |
| style? | CSSProperties | {} | override default position and other styles |

### ResizeHorizontalHandle

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| children? | ReactNode | null | custom icon or whatever component to use as resize handle |
| style? | CSSProperties | {} | override default position and other styles |

### ResizeVerticalHandle

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| children? | ReactNode | null | custom icon or whatever component to use as resize handle |
| style? | CSSProperties | {} | override default position and other styles |

## Known Issues
1. Children containing image will cause the container's height to jump during resizing.
2. `onResize` callback returns negative values when resizing collapses the container.

## License

ISC

