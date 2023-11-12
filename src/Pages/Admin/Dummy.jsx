import { Box, Toolbar, Typography } from "@mui/material";

const drawerWidth = 240;
const Dummy = () => {
  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Typography paragraph>THis will be used if necessary</Typography>
      </Box>
    </>
  );
};

export default Dummy;
