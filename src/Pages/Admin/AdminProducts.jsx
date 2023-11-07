import { Box, Toolbar, Typography } from "@mui/material";

const drawerWidth = 240;
const AdminProducts = () => {
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
        <Typography paragraph>Admin Product</Typography>
      </Box>
    </>
  );
};

export default AdminProducts;
