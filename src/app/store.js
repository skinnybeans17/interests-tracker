import { configureStore } from '@reduxjs/toolkit'
import { saveState, loadState } from '../persistState';
import interestsReducer from '../interests/interestsSlice'

export const store = configureStore({
    reducer: {
      interests: interestsReducer
    },
    preloadedState: loadState() 
  })

store.subscribe(() => {
    saveState(store.getState());
  })