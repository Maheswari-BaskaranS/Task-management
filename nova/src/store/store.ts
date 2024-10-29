import React from 'react'
import {configureStore} from '@reduxjs/toolkit'
import taskReducer from './reducer'
const store = configureStore ({
reducer: taskReducer,
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store
