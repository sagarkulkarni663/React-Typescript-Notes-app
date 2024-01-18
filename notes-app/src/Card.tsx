import { Box, Typography } from "@mui/material"
type childrenNode = {
  children: React.ReactNode
}
const Card = ({ children }: childrenNode) => {
  return (
    <Box>
      <Typography>{children}</Typography>
    </Box>
  )
}

export default Card