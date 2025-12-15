import { Box, Button, TextField } from '@mui/material'

const UserAddress = () => {
   
  return (
    <div className='p-6'>
        <Box className="flex gap-4 w-full p-4 mb-4">
            <TextField variant='standard' fullWidth  type='text' placeholder='Street Address'  size='small' label="Street Address" />
            <TextField variant='standard' fullWidth  type='text' placeholder='City' size='small' label="City" />
            <TextField  variant='standard' fullWidth type='text' placeholder='State'  size='small' label="State"/>
        </Box>
        <Box className="flex gap-4 w-full p-4">
            <TextField variant='standard' fullWidth  type='text' placeholder='Zip Code'  size='small' label="Zip Code" />
            <TextField variant='standard' fullWidth  type='text' placeholder='Country' size='small' label="Country" />
        </Box>
       
        <Box className="flex gap-4  mt-[250px] justify-end">
           
        <Button variant='contained' color='info'>Cancel</Button>
            <Button  variant='contained'>Submit</Button>
        </Box>
      
    </div>
  )
}

export default UserAddress

