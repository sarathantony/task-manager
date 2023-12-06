import React from 'react'

import { Link } from 'react-router-dom'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'

const bull = (
  <Box
    component="span"
    sx={{
      display: 'inline-block',
      mx: '2px',
      transform: 'scale(0.8)'
    }}
  >
    •
  </Box>
)

const Home = () => {
  return (
    <Container>
      <Grid
        container
        justifyContent='space-around'
        alignContent='baseline'
        sx={(theme) => ({
          top: '25%',
          position: 'absolute',
          left: 0,
          right: 0,
          [theme.breakpoints.down("md")]: {
            top: theme.spacing(12),
            padding: `${theme.spacing(0)} ${theme.spacing(2)}`
          }
        })}
      >
        <Grid
          item
          xs={12}
          md={5}
          sx={(theme) => ({
            [theme.breakpoints.down('md')]: {
              marginBottom: theme.spacing(4)
            }
          })}
        >
          <Card>
            <CardContent>
              <Typography
                sx={{
                  fontSize: 14
                }}
                color="text.secondary"
                gutterBottom
              >
                Todo Manager
              </Typography>
              <Typography variant="h5" component="div" gutterBottom>
                Task List
              </Typography>
              <Typography variant="body2" flexWrap='wrap' gutterBottom color='gray'>
                Add a list of things you have to do. Make a not of your simple to important things.
                Effectively track your tasks based on priority and monitor it's progress.
              </Typography>
              <Typography variant="body2">
                {bull} Add Tasks
                <br />
                {bull} Prioritize
                <br />
                {bull} Monitor
              </Typography>
            </CardContent>
            <CardActions>
              <Link to='/tasks'>
                <Button size="small">Learn More</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} md={5}>
          <Card>
            <CardContent>
              <Typography
                sx={{
                  fontSize: 14
                }}
                color="text.secondary"
                gutterBottom
              >
                Presentation
              </Typography>
              <Typography variant="h5" component="div" gutterBottom>
                Data Visulizer
              </Typography>
              <Typography variant="body2" flexWrap='wrap' gutterBottom color='gray'>
                Present and visualize your data in terms of bar charts and tables. Your JSON data is
                transformed into more informal visualisations in a pictoral representation. Get more
                from your raw data to an understandable representation.
              </Typography>
              <Typography variant="body2">
                {bull} Tabular Form
                <br />
                {bull} Chart Form
              </Typography>
            </CardContent>
            <CardActions>
              <Link to='/views'>
                <Button size="small">Learn More</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home
