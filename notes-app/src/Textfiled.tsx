import { TextField, Box } from "@mui/material"
type TextfieldProps= {
  name: string;
  value: string;
  onChange: (event: { target: { name: string, value: string } }) => void;
  onFocus: (event: { target: { name: string, value: string } }) => void;
  onBlur: (event: { target: { name: string, value: string } }) => void;
  error:boolean
}
const Textfiled:React.FC<TextfieldProps> = ({name,value,onChange,onFocus,onBlur,error}) => {
  return (
    <Box>
      <TextField
      error={error}
      variant="standard"
      name={name}
      placeholder="Enter your data"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      helperText={error && "requried"}
      
      />
    </Box>
  )
}

export default Textfiled