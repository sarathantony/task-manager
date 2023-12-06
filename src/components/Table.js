import React, { Fragment } from 'react'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { TextField } from '@mui/material'
import { makeStyles } from '@material-ui/core/styles'
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined'

import data from '../data'

import '../App.css'

const useStyles = makeStyles(() => ({
  'content-table': {
    width: '100%',
    tableLayout: 'fixed',
    padding: '1rem',
    borderBottom: '2px solid #DADADA'
  },
  'text-content': {
    textAlign: 'left',
    verticalAlign: 'top',
    paddingRight: '1rem'
  }
}))

const Table = () => {
  const classes = useStyles()

  return (
    <>
      <Grid
        container
        sx={(theme) => ({
          padding: theme.spacing(1),
          background: '#DADADA'
        })}
        alignItems='center'
      >
        <Grid item xs={3}>
          <TextField
            id="search-field"
            name='search'
            variant="outlined"
            placeholder='Search for projects, QP#'
            value={''}
            onChange={() => {}}
            fullWidth
            sx={{
              background: '#FFFFFF'
            }}
            size='small'
            inputProps={{
              style: {
                height: '1rem',
                fontStyle: 'italic'
              }
            }}
            InputProps={{
             style: {
              borderRadius: '0px'
             }
            }}
          />
        </Grid>
        <Grid item xs={9}>
          <Grid container columnGap={1} justifyContent='end'>
            <Box sx={{ cursor: 'pointer' }}>
              <ExitToAppOutlinedIcon sx={{ color: '#A7A7A7' }} fontSize='medium' />
            </Box>
            <Box sx={{ cursor: 'pointer' }}>
              <Typography color='#67B7D1'>Export to excel</Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <table className={classes['content-table']}>
        <thead>
          <tr>
            <th className={classes['text-content']} style={{ width: '5%'}}>
                <Typography
                  variant='body1'
                  sx={{
                    fontWeight: 'bold'
                  }}
                  display='block'
                  gutterBottom
                >
                  Sr. #
                </Typography>
            </th>
            <th className={classes['text-content']} style={{ width: '10%'}}>
                <Typography
                  variant='body1'
                  sx={{
                    fontWeight: 'bold'
                  }}
                  display='block'
                  gutterBottom
                >
                  # of Participants
                </Typography>
            </th>
            <th className={classes['text-content']} style={{ width: '50%'}}>
                <Typography
                  variant='body1'
                  sx={{
                    fontWeight: 'bold'
                  }}
                  display='block'
                  gutterBottom
                >
                  Questions
                </Typography>
            </th>
            <th className={classes['text-content']} style={{ width: '25%'}}>
                <Typography
                  variant='body1'
                  sx={{
                    fontWeight: 'bold'
                  }}
                  display='block'
                  gutterBottom
                >
                  Answer Options
                </Typography>
            </th>
            <th className={classes['text-content']} style={{ width: '10%'}}>
                <Typography
                  variant='body1'
                  sx={{
                    fontWeight: 'bold'
                  }}
                  display='block'
                  gutterBottom
                >
                  Percentage
                </Typography>
            </th>
          </ tr>
        </thead>
        <tbody>
          {data && Object.entries(data).map((row) => {
            const [key, poll] = row

            return (
              <tr key={key}>
                <td className={classes['text-content']} style={{ width: '5%' }}>
                  <Typography color='slategray'>{key}</Typography>
                </td>
                <td className={classes['text-content']} style={{ width: '10%'}}>
                  <Typography color='slategray'>{poll.participants}</Typography>
                </td>
                <td className={classes['text-content']} style={{ width: '50%'}}>
                  <Typography color='slategray' sx={{ wordWrap: 'break-word'}}>{poll.question}</Typography>
                </td>
                <td className={classes['text-content']} colSpan={2} style={{ width: '35%'}}>
                  {poll.options && poll.options.map((option) => {
                    return (
                      <Fragment key={option.answer}>
                        <div style={{ display: 'flex'}}>
                          <div style={{ width: '75%'}}>
                            <Typography color='slategray' sx={{ wordWrap: 'break-word'}}>{option.answer}</Typography>
                          </div>
                          <div style={{ width: '25%' }}>
                            <Typography color='slategray'>{option.score}</Typography>
                          </div>
                        </div>
                      </ Fragment>
                    )
                  })}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default Table
