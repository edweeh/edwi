import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Navmovie = () => {
  return (
    <div>
      <Box sx={{flexGrow:1}}>
        <AppBar position='static'>
        <Toolbar>
            <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{mr:2}}>
            </IconButton>
<Typography variant='h6' component='div' sx={{flexGrow:1}} align="left">
</Typography>
        </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default Navmovie
