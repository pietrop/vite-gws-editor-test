import { StoryEditor, InterfaceSkeleton } from '@googleforcreators/story-editor';
import { elementTypes } from '@googleforcreators/element-library';
import { registerElementType } from '@googleforcreators/elements';

const Editor = () => {
  const apiCallbacks = {
    saveStoryById: () => Promise.resolve({}),
  };

  elementTypes.forEach(registerElementType);

  return (
    <StoryEditor config={{ apiCallbacks }} initialEdits={{ story: {} }}>
      <InterfaceSkeleton />
    </StoryEditor>
  );
};

export default Editor;
