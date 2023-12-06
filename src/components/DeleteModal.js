import React from 'react'

import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import CloseIcon from '@mui/icons-material/Close'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { Dialog as BaseModal } from '@mui/material'

const Modal = ({ deleteOpen, setDeleteOpen, handleDelete, resetForm }) => {
  return (
    <Box>
      <BaseModal open={deleteOpen}>
        <DialogTitle sx={{ borderBotttom: '1px solid gray' }}>
          <Grid container justifyContent='space-between' alignItems='center'>
            <Grid item>
              <Typography variant='h6' fontSize='1.5rem' fontWeight='bold' gutterBottom>Delete</Typography>
            </Grid>
            <Grid item>
              <CloseIcon
                fontSize='medium'
                style={{ color: 'gray', cursor: 'pointer' }}
                onClick={event => {
                  event.preventDefault()

                  setDeleteOpen(false)
                  resetForm()
                }}
              />
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this Task?
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={(theme) => ({
            padding: theme.spacing(2),
            columnGap: theme.spacing(1)
          })}
        >
          <Button onClick={(event) => {
              event.preventDefault()

              setDeleteOpen(false)
            }}
            variant='contained'
            color='error'
            style={{
              padding: '0.25rem 1rem'
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={(event) => {
              handleDelete()
            }}
            variant='contained'
            style={{
              background: '#5a51e0',
              padding: '0.25rem 1rem'
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </BaseModal>
    </Box>
  )
}

export default Modal
