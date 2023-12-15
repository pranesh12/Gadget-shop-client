import {
  Box,
  Card,
  Toolbar,
  Typography,
  CardContent,
  Grid,
} from "@mui/material";

const Admin = () => {
  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${240}px)` },
        }}
      >
        <Toolbar />
        <Typography paragraph>
          <Typography
            variant="h5"
            sx={{ textAlign: "center", fontWeight: "600", marginBottom: 3 }}
            component="h1"
          >
            Overview
          </Typography>

          <Grid container justifyContent="center" spacing={3}>
            <Grid item>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="h6" component="h1" fontWeight="400">
                    Products
                  </Typography>
                  <Typography sx={{ mt: 1.5 }} color="text.secondary">
                    12
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="h6" component="h1" fontWeight="400">
                    Orders
                  </Typography>
                  <Typography sx={{ mt: 1.5 }} color="text.secondary">
                    12
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="h6" component="h1" fontWeight="400">
                    Users
                  </Typography>
                  <Typography sx={{ mt: 1.5 }} color="text.secondary">
                    12
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Typography>
      </Box>
    </>
  );
};

export default Admin;
