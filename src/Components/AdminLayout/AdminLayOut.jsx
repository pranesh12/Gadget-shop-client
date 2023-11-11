import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { getAllUsers, logout } from "../../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import BoltIcon from "@mui/icons-material/Bolt";
import InventoryIcon from "@mui/icons-material/Inventory";
import PersonIcon from "@mui/icons-material/Person";
import { useEffect } from "react";
import { getAllOrder } from "../../redux/actions/orderAction";

const drawerWidth = 240;

function AdminLayOut(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.loginReducer.currentUser);
  useEffect(() => {
    dispatch(getAllOrder());
    dispatch(getAllUsers());
  }, [dispatch]);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const drawer = (
    <div>
      <Toolbar />

      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PersonIcon sx={{ color: "#2979ff" }} />
            </ListItemIcon>
            <Typography sx={{ textTransform: "capitalize" }}>
              {user.firstName} {user.lastName}
            </Typography>
          </ListItemButton>
        </ListItem>

        <Link to={"/admin"}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AdminPanelSettingsIcon sx={{ color: "#9c27b0" }} />
              </ListItemIcon>
              <ListItemText primary={"Admin"} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to={"/admin/products"}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InventoryIcon sx={{ color: "#9c27b0" }} />
              </ListItemIcon>
              <ListItemText primary={"Products"} />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to={"/admin/orders"}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BoltIcon sx={{ color: "#ff5722" }} />
              </ListItemIcon>
              <ListItemText primary={"Orders"} />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to={"/admin/users"}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AdminPanelSettingsIcon sx={{ color: "#33eb91" }} />
              </ListItemIcon>
              <ListItemText primary={"Uesrs"} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <ListItem onClick={handleLogout} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon sx={{ color: "red" }} />
            </ListItemIcon>
            <ListItemText primary={"Log out"} />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin pannel
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Outlet />
    </Box>
  );
}

export default AdminLayOut;
