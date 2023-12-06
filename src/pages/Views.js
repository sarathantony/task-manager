import React from 'react'

import Grid from '@mui/material/Grid'

import Chart from '../components/Chart'
import Table from '../components/Table'

const Views = () => {
  return (
    <>
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
    </>
  )
}

export default Views
