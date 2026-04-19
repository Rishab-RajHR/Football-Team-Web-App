import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { FormHelperText } from "@mui/material";



export default function SelectForm({label, options,value,name,onChange,onBlur,error,helperText}) {


     return (
       
           <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                 labelId="demo-simple-select-label"
                 id="demo-simple-select"
                 label={label}
                 value={value}
                 name={name}
                 onChange={onChange}
                 onBlur={onBlur}
                 error={error}
                 helperText={helperText}
                >
                   {
                       options.map((option) => {
                           return <MenuItem key={option.id}  value={option.id}>{option.name}</MenuItem>
                       })
                   }
                </Select>
                <FormHelperText error>{helperText}</FormHelperText>
           </FormControl>   
     )
}