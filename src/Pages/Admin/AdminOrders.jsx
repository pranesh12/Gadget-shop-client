import { Box, Toolbar, Typography } from "@mui/material";

const drawerWidth = 240;
const AdminOrders = () => {
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
        <Typography paragraph>adminOrder</Typography>
      </Box>
    </>
  );
};

export default AdminOrders;
