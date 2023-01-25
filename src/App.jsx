import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import Editor from "./Editor.jsx"; 
import { getStoryMarkup } from '@googleforcreators/output';
import { registerElementType } from '@googleforcreators/elements';
import { elementTypes } from '@googleforcreators/element-library';

import './App.css'; 
// https://github.com/GoogleForCreators/web-stories-wp/blob/2f21b00d44a954a63794988da0740ab33c6d1a7f/packages/output/src/test/story.js#L31
elementTypes.forEach(registerElementType);

// https://github.com/GoogleForCreators/web-stories-wp/blob/2f21b00d44a954a63794988da0740ab33c6d1a7f/packages/elements/src/types/story.ts
// https://github.com/GoogleForCreators/web-stories-wp/blob/2f21b00d44a954a63794988da0740ab33c6d1a7f/packages/elements/src/types/page.ts
// https://github.com/GoogleForCreators/web-stories-wp/blob/2f21b00d44a954a63794988da0740ab33c6d1a7f/packages/elements/src/types/element.ts
const props = {
  id: '123',
  backgroundColor: { type: 'solid', color: { r: 255, g: 255, b: 255 } },
  story: {
    title: 'McCarthy Gains Ground in Speaker Bid but Still Short',
    slug: 'example',
    status: 'publish',
    author: { id: 1, name: 'John Doe' },
    date: '123',
    modified: '123',
    excerpt: '123',
    featuredMedia: {
      id: 123,
      url: 'https://bloximages.newyork1.vip.townnews.com/news-journal.com/content/tncms/assets/v3/editorial/b/43/b43383c6-8c7a-11ed-9a51-cf5e4ac0f98d/63b5f659e7517.image.jpg?resize=1200%2C956',
      width: 640,
      height: 853,
    },
    fonts: {},
    publisherLogo: {
      id: 1,
      url: 'https://blog.logomyway.com/wp-content/uploads/2021/10/new-york-times-symbol.jpg',
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
      // https://github.com/GoogleForCreators/web-stories-wp/blob/2f21b00d44a954a63794988da0740ab33c6d1a7f/packages/patterns/src/types.ts#L72
      backgroundColor: {
        type: 'solid',
        // https://github.com/GoogleForCreators/web-stories-wp/blob/2f21b00d44a954a63794988da0740ab33c6d1a7f/packages/patterns/src/types.ts#L30
        color: { r: 0, g: 0, b: 225 },
      },
      page: {
        id: '123',
      },
      elements: [
        {
          type: 'text',
          id: '123',
          // x: 50,
          // y: 400,
          // height: 1920,
          // width: 1080,
          height: 300,
          width: 300,
          rotationAngle: 0,
          // content: "Hello world1",
          content: '<span style="font-weight: bold; color: white">Why has there been so many votes?</span>',
          // color: { type: 'solid', color: { r: 255, g: 255, b: 255 } },
          padding: {
            horizontal: 0,
            vertical: 0,
          },
          font: {
            family: 'Roboto',// 
            service: 'fonts.google.com',
            variants: [
              [0, 400],
              [1, 400],
            ],
          },
        },
        {
          type: 'text',
          id: '124',
          x: 50,
          y: 450,
          // height: 1920,
          // width: 1080,
          height: 300,
          width: 300,
          rotationAngle: 0,
          // content: "It’s immensely satisfying when you realize that a commonly bought item is easily prepared at home. Take bagels, for instance. This guide will explain how to make them, from mixing to forming, boiling to baking.",
          content: '<span style="color:white; overflow-wrap: break-word; width:100%">It’s immensely satisfying when you realize that a commonly bought item is easily prepared at home. Take bagels, for instance. This guide will explain how to make them, from mixing to forming, boiling to baking.</span>',
          color: { type: 'solid', color: { r: 255, g: 255, b: 255 } },
          padding: {
            horizontal: 0,
            vertical: 0,
          },
          font: {
            family: 'Lato',
            service: 'fonts.google.com',
            variants: [
              [0, 400],
              [1, 400],
            ],
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
  const [count, setCount] = useState(0);

 const content = getStoryMarkup(props.story, props.pages, props.metadata, flags)

  console.log(content)

  const openPreviewLink = async () => {
    // await saveStory();

    const previewLink = window.origin + "/preview";

    // Start a about:blank popup with waiting message until saving operation
    // is done. That way, we will not bust the popup timeout.
    try {
      const popup = window.open("about:blank", "story-preview");
     
      if (popup) {
        popup.document.write(content)
      }
    } catch (e) {
      console.log(e);
    }
  };


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
    
      <button onClick={openPreviewLink}>Preview</button><br/><br/>
   <textarea style={{width:"80vw", height:"100vh"}}>{content}</textarea> 
    </div>
  )
}

export default App
