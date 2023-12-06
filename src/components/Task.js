import React from 'react'

import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import EditNoteIcon from '@mui/icons-material/EditNote'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import { toPascalCase, capitalizeFirstLetter } from '../utils';
import { priorities, statuses, NUMERIC_TWO, statusColors } from '../constants'

const Task = ({
  task,
  task: {
    id, taskName, priority, status, percentCompleted
  },
  handleChangeStatus,
  index,
  handleEditTask,
  setEditMode,
  setDeleteOpen,
  setFormData
}) => {
  return (
    <Paper sx={{backgroundColor: (index % 2 === 0) ? '#FFFFFF' : '#E5F3FD'}}>
      <Grid container padding='1rem' marginTop='0.75rem' alignItems='center'>
        <Grid item xs={12} md={5} textAlign='left'>
          <Typography variant='subtitle1' color='gray'>Task</Typography>
          <Typography sx={{ fontWeight: 600 }} variant='subtitle1'>{taskName}</Typography>
        </Grid>
        <Grid item xs={12} md={2} textAlign='left'>
          <Typography variant='subtitle1' color='gray'>Priority</Typography>
          <Typography
            sx={{ fontWeight: 'bold' }}
            variant='subtitle1'
            color={statusColors[priority]}
          >
              {capitalizeFirstLetter(priorities[priority])}
            </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container>
            <Grid item xs={8} textAlign='center'>
              <Button
                size='small'
                variant="contained"
                sx={{
                  backgroundColor: '#dadada',
                  color: 'black',
                  textTransform: 'none',
                  padding: '0.25rem 1.5rem'
                }}
                onClick={(event) => handleChangeStatus(event, id)}
                disabled={status === NUMERIC_TWO}
              >
                {toPascalCase(statuses[status])}
              </Button>
            </Grid>
            <Grid item xs={4}>
              {percentCompleted === 0 ?
                <CircularProgress
                  sx={{
                    '.MuiCircularProgress-circle': {
                      color: '#DADADA'
                    }
                  }}
                  variant="determinate"
                  size={30}
                  value={100}
                /> :
                <CircularProgress
                  sx={{
                    '.MuiCircularProgress-circle': {
                      color: '#5A51E0'
                    }
                  }}
                  variant="determinate"
                  size={30}
                  value={percentCompleted}
                />
              }
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={1}>
          <Grid container textAlign='right'>
            <Grid item xs={6}>
              <Box component='span' sx={{ cursor: 'pointer'}}>
                <EditNoteIcon
                  fontSize='medium'
                  onClick={(event) => {
                    event.preventDefault()

                    setEditMode(true)
                    handleEditTask(event, task)
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box component='span' sx={{ cursor: 'pointer' }}>
                <DeleteOutlinedIcon
                  fontSize='medium'
                  sx={{ color: '#FF6865' }}
                  onClick={(event) => {
                    event.preventDefault()

                    setDeleteOpen(true)
                    setFormData(task)
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Task
