import { TextField, Grid, Typography, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../../redux/actions/authAction";
import "./loginForm.css";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [registerForm, setRegisterForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(registerForm));
  };
  const handleChange = (e) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
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
              type="password"
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
          <Link to="/auth/login">
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
