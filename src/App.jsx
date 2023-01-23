import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import Editor from "./Editor.jsx"; 
import { OutputStory } from '@googleforcreators/output';
import './App.css'; 

const props = {
  id: '123',
  backgroundColor: { type: 'solid', color: { r: 255, g: 255, b: 255 } },
  story: {
    title: 'Example',
    slug: 'example',
    status: 'publish',
    author: { id: 1, name: 'John Doe' },
    date: '123',
    modified: '123',
    excerpt: '123',
    featuredMedia: {
      id: 123,
      url: 'https://example.com/poster.png',
      width: 640,
      height: 853,
    },
    fonts: {},
    publisherLogo: {
      id: 1,
      url: 'https://example.com/logo.png',
      height: 0,
      width: 0,
    },
    password: '123',
    link: 'https://example.com/story',
    autoAdvance: false,
  },
  pages: [
    {
      id: '123',
      animations: [
        { id: 'anim1', targets: ['123'], type: 'bounce', duration: 1000 },
        { id: 'anim1', targets: ['124'], type: 'spin', duration: 500 },
      ],
      backgroundColor: {
        type: 'solid',
        color: { r: 255, g: 255, b: 255 },
      },
      page: {
        id: '123',
      },
      elements: [
        {
          type: 'text',
          id: '123',
          x: 50,
          y: 100,
          height: 1920,
          width: 1080,
          rotationAngle: 0,
          content: "Hello world",
          // content: '<span style="font-style: italic">Hello World</span>',
          // color: { type: 'solid', color: { r: 255, g: 255, b: 255 } },
          padding: {
            horizontal: 0,
            vertical: 0,
          },
          font: {
            // family: 'Roboto',
            service: 'fonts.google.com',
          //   variants: [
          //     [0, 400],
          //     [1, 400],
          //   ],
          },
        },
        {
          type: 'text',
          id: '124',
          x: 50,
          y: 100,
          height: 1920,
          width: 1080,
          rotationAngle: 0,
          content: "Hello world 2",
          // content: '<span style="font-weight: 400">Hello World</span>',
          // color: { type: 'solid', color: { r: 255, g: 255, b: 255 } },
          // padding: {
          //   horizontal: 0,
          //   vertical: 0,
          // },
          font: {
            // family: 'Lato',
            service: 'fonts.google.com',
          //   variants: [
          //     [0, 400],
          //     [1, 400],
          //   ],
          },
        },
      ],
    },
  ],
  metadata: {
    publisher: 'Publisher Name',
  },
};

const flags={
  isMedia: false
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <OutputStory
        // story={story}
        story={props.story}
        // pages={pages}
        pages={props.pages}
        // metadata={metadata}
        metadata={props.metadata}
        flags={flags}
      />
    </div>
  )
}

export default App
