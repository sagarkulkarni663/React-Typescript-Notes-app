import { Button, Box } from "@mui/material";
type CustomButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  disabled: boolean;
};
const CustomButton:React.FC<CustomButtonProps> = ( {children ,onClick,disabled}) => {
  return (
    <Box>
      <Button onClick={onClick} disabled={disabled}>
        {children}
      </Button>
    </Box>
  );
};

export default CustomButton;
