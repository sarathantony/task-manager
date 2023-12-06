import React from 'react'

import Link from '@mui/material/Link'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

const PageNotFound = () => {
  return (
    <Container>
      <Grid container sx={(theme) => ({ paddingTop: theme.spacing(6) })}>
        <Grid item>
          <Grid item>
            <Typography variant='subtitle1' gutterbottom>404 Error!</Typography>
          </Grid>
          <Grid item>
            <Typography variant='h4' gutterBottom>Page not found</Typography>
          </Grid>
          <Grid item>
            <Typography variant='subtitle2' gutterBottom color='gray'>
              Sorry! the page you are looking for could not be found or has been removed.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='subtitle2' gutterBottom color='gray'>
              Click <Link href='/'>here</Link> to go home
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default PageNotFound
