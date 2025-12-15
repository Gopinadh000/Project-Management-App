import { Box, Button, TextField } from '@mui/material'

const UserEducation = () => {
   
  return (
    <div className='p-6'>
        <Box className="flex gap-4 w-full p-4 mb-4">
            <TextField variant='standard' fullWidth  type='text' placeholder='Institution Name'  size='small' label="Institution Name" />
            <TextField variant='standard' fullWidth  type='text' placeholder='Degree' size='small' label="Degree" />
            <TextField  variant='standard' fullWidth type='text' placeholder='Field of Study'  size='small' label="Field of Study"/>
        </Box>
        <Box className="flex gap-4 w-full p-4">
            <TextField variant='standard' fullWidth  type='date' placeholder='Start Date'  size='small' label="Start Date" />
            <TextField variant='standard' fullWidth  type='date' placeholder='End Date' size='small' label="End Date" />
        </Box>
       
        <Box className="flex gap-4  mt-[250px] justify-end">
           
        <Button variant='contained' color='info'>Cancel</Button>
            <Button  variant='contained'>Submit</Button>
        </Box>
    </div>
  )
}

export default UserEducation

