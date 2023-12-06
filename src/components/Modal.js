import React from 'react'

import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import FormLabel from '@mui/material/FormLabel'
import FormControl from '@mui/material/FormControl'
import ButtonGroup from '@mui/material/ButtonGroup'
import CloseIcon from '@mui/icons-material/Close'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { Dialog as BaseModal } from '@mui/material'

import { NUMERIC_ZERO, NUMERIC_ONE, NUMERIC_TWO } from '../constants'

const Modal = ({ open, resetForm, handleSubmit, editMode, formData: { taskName, priority, id }, handleFormData }) => {
  const submit = (event) => {
    event.preventDefault()
    if (!taskName || !priority) return

    const data = {
      taskName,
      priority,
      id: id || +new Date(),
      status: NUMERIC_ZERO,
      percentCompleted: NUMERIC_ZERO
    }

    handleSubmit(editMode, data)
  }

  return (
    <BaseModal open={open} fullWidth maxWidth='sm'>
      <DialogTitle>
        <Grid container justifyContent='space-between' alignItems='center'>
          <Grid item>
            <Typography variant='h6' fontSize='1.5rem' fontWeight='bold' gutterBottom>
            {`${editMode ? 'Edit' : 'Add'} Task`}
            </Typography>
          </Grid>
          <Grid item>
            <CloseIcon
              fontSize='medium'
              style={{ color: 'gray', cursor: 'pointer' }}
              onClick={event => {
                event.preventDefault()

                resetForm()
              }}
            />
          </Grid>
        </Grid>
      </DialogTitle>

      <DialogContent>
        <Grid item marginTop='1rem'>
          <FormControl fullWidth>
            <Box marginBottom='0.5rem'>
              <FormLabel>Task</FormLabel>
            </Box>
            <TextField
              id="outlined-basic"
              name='name'
              variant="outlined"
              placeholder='Type your task here'
              value={taskName}
              onChange={event => handleFormData(event, 'taskName')}
              fullWidth
            />
          </FormControl>
        </Grid>
        <Grid item sx={(theme) => ({ marginTop: theme.spacing(2) })}>
          <Box>
            <Typography variant='subtitle1' color='gray' marginBottom='0.3rem'>Priority</Typography>
          </Box>
          <ButtonGroup>
            <Grid container columnGap={3}>
              <Grid item>
                <Button
                  disableFocusRipple
                  disableRipple
                  variant={priority == NUMERIC_ZERO ? 'contained' : 'outlined'}
                  size='small'
                  color='error'
                  style={{
                    textTransform: 'none',
                    padding: '0.25rem 1.5rem'
                  }}
                  value={NUMERIC_ZERO}
                  onClick={(event) => handleFormData(event, 'priority')}
                >
                  High
                </Button>
              </Grid>
              <Grid item>
                <Button
                  disableRipple
                  variant={priority == NUMERIC_ONE ? 'contained' : 'outlined'}
                  size='small'
                  color='warning'
                  style={{
                    textTransform: 'none',
                    padding: '0.25rem 1.5rem'
                  }}
                  value={NUMERIC_ONE}
                  onClick={(event) => handleFormData(event, 'priority')}
                >
                  Medium
                </Button>
              </Grid>
              <Grid item>
                <Button
                  disableRipple
                  variant={priority == NUMERIC_TWO ? 'contained' : 'outlined'}
                  size='small'
                  style={{
                    textTransform: 'none',
                    padding: '0.25rem 1.5rem'
                  }}
                  color='success'
                  value={NUMERIC_TWO}
                  onClick={(event) => handleFormData(event, 'priority')}
                >
                  Low
                </Button>
              </Grid>
              </Grid>
          </ButtonGroup>
        </Grid>
      </DialogContent>
      <DialogActions sx={(theme) => ({ padding: theme.spacing(3) })}>
        <Button
          variant="contained"
          size='small'
          style={{
            background: '#5a51e0',
            textTransform: 'none',
            padding: '0.5rem 2rem'
          }}
          onClick={submit}
        >
          {`${editMode ? 'Update' : 'Add'}`}
        </Button>
      </DialogActions>
    </BaseModal>
  )
}

export default Modal
