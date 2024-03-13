import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todos/todoSlices'

export const store = configureStore({
    reducer: todoReducer
})