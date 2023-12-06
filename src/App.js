import React, { useMemo } from 'react'

import { Routes, Route } from 'react-router-dom'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import Header from './components/Header'
import Home from './pages/Home'
import Views from './pages/Views'
import Tasks from './pages/Tasks'
import PageNotFound from './pages/PageNotFound'

import "./App.css"

const Wrapper = ({ component, props })=> {
  const Component = useMemo(() => component, [component, props])

  return (
    <Grid container sx={(theme) => ({ padding: `${theme.spacing(12)} ${theme.spacing(4)}`, zIndex: 2 })}>
      <Component {...props} />
    </Grid>
  )
}

const App = () => {
	return (
    <Box>
      <Header />
      <Routes>
        <Route path='/' element={<Wrapper component={Home} props={{}} />} />
        <Route path='/views' element={<Wrapper component={Views} props={{}} />} />
        <Route path='/tasks' element={<Wrapper component={Tasks} props={{}} />} />
        <Route path='*' element={<Wrapper component={PageNotFound} props={{}} />} />
      </Routes>
    </Box>
	)
}

export default App
