import React from "react";
import { Autocomplete, Box, FormLabel, TextField } from "@mui/material";

import Select from 'react-select';

const options = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
]

const SelectFeild = () => {

  return( 

    <Box>
         <FormLabel >{"Select Priroity"}</FormLabel>
  <Autocomplete
//   disablePortal
  options={options}
  size="small"
  renderInput={(params) => <TextField {...params} label="Movie" />}/>


    </Box>

  
)
};

export default SelectFeild;
