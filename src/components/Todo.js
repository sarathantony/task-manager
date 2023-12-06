import React, { useState, useReducer } from "react"

import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import styled from '@emotion/styled'

import Select from "./Select"
import Modal from './Modal'
import Task from './Task'
import DeleteModal from '../components/DeleteModal'

import {
  PERCENT_INCREMENTOR,
  initialValues as initialTasks,
  sortOptions as options,
  formData as data,
  ACTIONS
} from '../constants'

const Content = styled(Box)({
  display: 'inline-block',
  minWidth: '70%'
})

const reducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case ACTIONS.NEXT_STATUS:
      return state.map((task) => {
        const { id: taskId, taskName, priority, status, percentCompleted } = task

        if (taskId === payload.id) {
          return {
            taskName,
            priority,
            status: status + 1,
            percentCompleted: percentCompleted + PERCENT_INCREMENTOR,
            id: taskId,
          }
        }

        return task
      })
    case ACTIONS.DELETE_TASK:
      return state.filter(({ id }) => id !== payload.id)
    case ACTIONS.EDIT_TASK:
      return state.map((task) => {
        if (task.id === payload.task.id) return payload.task

        return task
      })
    case ACTIONS.ADD_TASK:
      return [...state, payload.task]
    case ACTIONS.SORT_TASKS:
      return state.sort((a, b) => (
        a[payload.sortBy] < b[payload.sortBy] ? -1 : a[payload.sortBy] > b[payload.sortBy] ? 1 : 0
      ))
    default:
      return state;
  }
}

const Todo = () => {
  const [tasks, dispatch] = useReducer(reducer, initialTasks)
	const [order, setOrder] = useState('')
  const [open, setOpen] = useState(false)
  const [deleteOpen, setDeleteOpen] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [formData, setFormData] = useState(data)

	const handleChange = (event) => {
		event.preventDefault()

    const { target: { value } } = event

    setOrder(value)
    dispatch({ type: ACTIONS.SORT_TASKS, payload: { sortBy: value }})
	}

  const handleDelete = () => {
    dispatch({ type:ACTIONS.DELETE_TASK, payload: { id: formData.id } })

    resetForm()
    setDeleteOpen(false)
  }

  const handleChangeStatus = (event, id) => {
    event.preventDefault()

    dispatch({ type: ACTIONS.NEXT_STATUS, payload: { id } })
  }

  const handleEditTask = (event, task) => {
    event.preventDefault()

    setFormData(task)
    setOpen(true)
  }

  const handleFormData = (event, fieldName) => {
    event.preventDefault()

    setFormData({
      ...formData,
      [fieldName]: event.target.value || event.currentTarget.value
    })
  }

  const resetForm = () => {
    setOpen(false)
    setFormData(data)
    setEditMode(false)
  }

  const handleSubmit = (editMode, task) => {
    if (editMode) dispatch({ type: ACTIONS.EDIT_TASK, payload: { task } })
    else dispatch({ type: ACTIONS.ADD_TASK, payload: { task } })

    resetForm()
  }

	return (
    <Content>
      <Grid container alignItems='center'>
        <Grid item xs={12} md={6} textAlign='left'>
          <Typography fontSize='2rem' fontWeight='bold' variant="h6" gutterBottom>
            Task List
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} textAlign='right'>
          <Grid container columnGap={3} justifyContent='end'>
            <Grid
              item
              xs={12}
              md={5}
              textAlign='right'
              sx={(theme) => ({
                [theme.breakpoints.down("md")]: {
                  paddingTop: theme.spacing(4)
                }
                })
              }
              >
              <FormControl fullWidth size="small">
                <Select value={order} {...{ handleChange, options }} />
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              sx={(theme) => ({
                [theme.breakpoints.down("md")]: {
                  padding: `${theme.spacing(4)} ${theme.spacing(0)}`
                }
                })
              }
              >
              <Button
                fullWidth
                variant="contained"
                size='small'
                style={{
                  background: '#5a51e0',
                  textTransform: 'none',
                  padding: '0.25rem 1.5rem'
                }}
                onClick={(event) => {
                  event.preventDefault()

                  setOpen(true)
                }}
              >
                + Add Task
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12}>
          {tasks.length ? tasks.map((task, index) => (
            <Task
              key={task.id}
              {...{
                task,
                handleChangeStatus,
                index,
                handleEditTask,
                setEditMode,
                setDeleteOpen,
                setFormData
            }}
            />
          )) : null}
        </Grid>
      </Grid>

      {open && (
        <Modal {...{ open, resetForm, handleSubmit, editMode, formData, handleFormData }} />
      )}
      {deleteOpen && <DeleteModal {...{ deleteOpen, setDeleteOpen, handleDelete, resetForm }} />}
    </Content>
	)
}

export default Todo
