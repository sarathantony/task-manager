import React from 'react'

import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
import { Select as BaseSelect } from '@mui/material'
import { makeStyles } from '@material-ui/core/styles'

import { sortOptions } from '../constants'

const useStyles = makeStyles(() => ({
  root: {
    height: '2rem',
    textAlign: 'left'
  }
}))

const Select = ({ label = '', value = '', options = [], handleChange }) => {
  const classes = useStyles()

	return (
		<Box className='custom-select'>
      <BaseSelect
        labelId="select-label"
        id="simple-select"
        value={value}
        label={label}
        onChange={handleChange}
        fullWidth
        displayEmpty
        className={classes.root}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <p>By Order</p>
          }

          return sortOptions.find((item) => item.value === value).title || ''
        }}
        sx={{ color: 'gray' }}
        MenuProps={{
          PaperProps: {
            style: {
              color: 'gray'
            },
          }
        }}
      >
        {options.length && options.map(({ value, title }) => <MenuItem key={value} value={value}>{title}</MenuItem>)}
      </BaseSelect>
		</Box>
	)
}

export default Select
