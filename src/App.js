import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Container, AppBar, Typography, Button, Grid, Toolbar} from "@material-ui/core";
import Landing from "./admin/Landing";

function App() {
  return (
    <Router>
      <Container maxWidth="lg">
        <AppBar>
          <Toolbar>
            <Grid container spacing={3}>
              <Grid item xs={9}>
                <Typography variant="h6">
                  <Button color='inherit' component={Link} to={'/'} style={{color: '#fff'}}>
                    HomeBox
                  </Button>
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Button color="inherit" style={{float: 'right'}}>Users</Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>

        <Switch>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
