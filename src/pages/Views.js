import React, { lazy, Suspense } from 'react'

import Grid from '@mui/material/Grid'
import CircularProgress from '@mui/material/CircularProgress'

const Table = lazy(() => import('../components/Table'))
const Chart = lazy(() => import('../components/Chart'))

const Views = () => {
  return (
    <Suspense fallback={<CircularProgress color="secondary" />}>
      <Grid container>
        <Grid item>
          <Table />
        </Grid>
        <Grid
          container
          sx={(theme) => ({
            marginTop: theme.spacing(12)
          })}
        >
          <Chart />
        </Grid>
      </Grid>
    </Suspense>
  )
}

export default Views
