import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import ResponsiveAppBar from './components/app-bar/app-bar';
import Home from './pages/home/home';
import Register from './pages/auth/register/register';
import Login from './pages/auth/login/login';
import PrivateRoute from './Routes/private-routes';
import FreeRoutes from "./Routes/free-routes";
import { Fragment } from "react";

function App() {
  return (
       <Router>
        <Fragment>
          <ResponsiveAppBar/>
          <Routes>
            <Route exact path='/' Component={PrivateRoute}>
              <Route index Component={Home} />
            </Route>
            <Route exact path='/' component={FreeRoutes}>
              <Route exact path='/register' Component={Register}/>
                <Route exact path='/login' Component={Login}/>
            </Route>
          </Routes>
        </Fragment>
    </Router>
  );
}

export default App;
