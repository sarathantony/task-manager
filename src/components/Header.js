import React from 'react'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'

const Header = () => {
  return (
    <Grid
      item
      sx={{
        position: 'fixed',
        width: '100%',
        top: 0,
        left: 0,
        background: '#F8F9F9',
        zIndex: 1
      }}
    >
      <Box sx={{ marginTop: '5rem'}}>
        <Divider />
      </Box>
    </Grid>
  )
}

export default Header
