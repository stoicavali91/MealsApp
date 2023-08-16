
import { configureStore } from '@reduxjs/toolkit';
import faviresReducer from './favorites'

export const store = configureStore({
  //a reducer is a function that takes in the current state of an application and an action as arguments, and returns a new state based on the action
  reducer: {
    favoriteMeals: faviresReducer
  }, 
})