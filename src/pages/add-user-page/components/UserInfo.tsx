import { Box, Button, Grid, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import AppButton from '../../../components/app-button/AppButton'

const UserInfo = () => {
   
  return (
    <div className='p-6'>
        <Box className="flex gap-4 w-full p-4 mb-4">
                <TextField variant='standard' fullWidth  type='text' placeholder='User Name'  size='small' label="User Name" />
            <TextField variant='standard' fullWidth  type='text' placeholder='First Name' size='small' label="First Name" />
            <TextField  variant='standard' fullWidth type='text' placeholder='Last Name'  size='small' label="Last Name"/>
        </Box>
        <Box className="flex gap-4 w-full p-4">
            <TextField variant='standard' fullWidth  type='text' placeholder='Email'  size='small' label="E-mail" />
            <TextField variant='standard' fullWidth  type='text' placeholder='Password' size='small' label="Password  " />
            <TextField  variant='standard' fullWidth type='date' placeholder='Last Name'  size='small' label="Date of Birth"/>
        </Box>
       
        <Box className="flex gap-4  mt-[250px] justify-end">
           
        <Button variant='contained' color='info'>Cancel</Button>
            <Button  variant='contained'>Submit</Button>
        </Box>
      
    </div>
  )
}

export default UserInfo
