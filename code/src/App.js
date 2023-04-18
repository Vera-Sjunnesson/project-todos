import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { ToDoList } from 'components/ToDoList'
import { NewToDo } from 'components/NewToDo'
import { WaveAnimation } from 'components/WaveAnimation'
import { NewProjectButton } from 'components/NewProjectButton'
import { tasksproject } from 'reducers/tasksproject'
import styled from 'styled-components'
import { tasks } from './reducers/tasks'

export const Main = styled.main`
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const reducer = combineReducers({
  tasks: tasks.reducer,
  tasksproject: tasksproject.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Main>
      <Provider store={store}>
        <NewToDo />
        <ToDoList />
        <NewProjectButton />
        <WaveAnimation />
      </Provider>
    </Main>
  )
}