import React, { useMemo, lazy, Suspense } from 'react'

import { Routes, Route } from 'react-router-dom'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

import "./App.css"

const Header = lazy(() => import('./components/Header'))
const Home = lazy(() => import('./pages/Home'))
const Views = lazy(() => import('./pages/Views'))
const Tasks = lazy(() => import('./pages/Tasks'))
const PageNotFound = lazy(() => import('./pages/PageNotFound'))

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
      <Suspense fallback={<CircularProgress color="secondary" />}>
        <Header />
        <Routes>
          <Route path='/' element={<Wrapper component={Home} props={{}} />} />
          <Route path='/views' element={<Wrapper component={Views} props={{}} />} />
          <Route path='/tasks' element={<Wrapper component={Tasks} props={{}} />} />
          <Route path='*' element={<Wrapper component={PageNotFound} props={{}} />} />
        </Routes>
      </Suspense>
    </Box>
	)
}

export default App
