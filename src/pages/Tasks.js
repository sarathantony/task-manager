import React from 'react'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

import Todo from '../components/Todo'

const Tasks = () => {
  return (
    <Container>
      <Box
        textAlign='center'
        sx={(theme) => ({
          marginTop: theme.spacing(2)
        })}
      >
        <Todo />
      </Box>
    </Container>
  )
}

export default Tasks
