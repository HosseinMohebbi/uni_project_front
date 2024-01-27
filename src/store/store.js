import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './user.slice';
import {textReducer} from "./text.slice";
import {tagsReducer} from "./tags.slice";
import { imageReducer } from './image.slice';
import { voiceToTextReducer } from './voiceToText.slice';
import { textToVoiceReducer } from './TextToVoice.slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    text: textReducer,
    image: imageReducer,
    voiceToText: voiceToTextReducer,
    textToVoice: textToVoiceReducer,
    tags: tagsReducer,
  }
})
