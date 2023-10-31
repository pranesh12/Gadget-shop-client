import { TextField, Grid, Typography, Button } from "@mui/material";
import { useState } from "react";
import "../LoginForm/LoginForm";
import { registerUser } from "../../redux/actions/AuthAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [loginFrom, setLoginForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(loginFrom));
  };
  const handleChange = (e) => {
    setLoginForm({ ...loginFrom, [e.target.name]: e.target.value });
  };

  return (
    <div className="boxCenter">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs="12">
            <Typography sx={{ textAlign: "center" }} variant="h5">
              Register Account
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">First Name</Typography>
          </Grid>
          <Grid item xs="12">
            <TextField
              name="firstName"
              label="First Name"
              size="small"
              fullWidth
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item>
            <Typography variant="h6">Last Name</Typography>
          </Grid>
          <Grid item xs="12">
            <TextField
              name="lastName"
              label="Last Name"
              size="small"
              fullWidth
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item>
            <Typography variant="h6">Email Address :</Typography>
          </Grid>
          <Grid item xs="12">
            <TextField
              name="email"
              label="Email"
              size="small"
              fullWidth
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item>
            <Typography variant="h6">Password:</Typography>
          </Grid>
          <Grid item xs="12">
            <TextField
              name="password"
              label="Password"
              size="small"
              fullWidth
              onChange={handleChange}
              required
            />
          </Grid>
        </Grid>
        <Grid item sx={{ marginTop: 3 }}>
          <Button color="secondary" variant="contained" type="submit" fullWidth>
            Register
          </Button>
        </Grid>

        <Grid>
          <Typography variant="body">Already have an account?</Typography>
        </Grid>
        <Grid>
          <Link to="/login">
            <Button
              color="secondary"
              variant="contained"
              type="submit"
              fullWidth
            >
              Go to Login pages
            </Button>
          </Link>
        </Grid>
      </form>
    </div>
  );
};

export default RegisterForm;
