import { TextField } from "@mui/material"

function CustomTextField({ label, variant }) {

  return (
    <>
    <TextField 
      fullWidth 
      label={label} 
      variant={variant} 
      sx={{ backgroundColor: 'gray', margin: '10px 0' }} />
    </>
  )
}

export default CustomTextField
