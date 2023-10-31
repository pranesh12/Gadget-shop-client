import { TextField, Grid, Typography, Button } from "@mui/material";
import { useState } from "react";
import "./loginForm.css";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions/AuthAction";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [loginFrom, setLoginForm] = useState({ email: "", password: "" });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(loginFrom));
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
              Account login
            </Typography>
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
            Login
          </Button>
        </Grid>

        <Grid>
          <Typography variant="body"> Don't have an account?</Typography>
        </Grid>
        <Grid>
          <Link to="/register">
            <Button
              color="secondary"
              variant="contained"
              type="submit"
              fullWidth
            >
              Go to Register page
            </Button>
          </Link>
        </Grid>
      </form>
    </div>
  );
};

export default LoginForm;
