import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import AddTour from './components/AddTour/AddTour';
import NotFound from './components/NotFound/NotFound';
import OrderPlace from './components/OrderPlace/OrderPlace';
import Login from './components/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/Login/Login/PrivateRoute/PrivateRoute';
import MyOrders from './components/MyOrders/MyOrders';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <AuthProvider>
      <Router>
      <Nav></Nav>

      <Switch>

        <Route path="/home">
          <Home></Home>
        </Route>

        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/addTour">
          <AddTour></AddTour>
        </Route>

        <PrivateRoute path="/orderPlace/:id">
          <OrderPlace></OrderPlace>
        </PrivateRoute>

        <PrivateRoute path="/myOrders">
          <MyOrders></MyOrders>
        </PrivateRoute>

        <PrivateRoute path="/manageAllOrders">
          <ManageAllOrders></ManageAllOrders>
        </PrivateRoute>

        <Route path="/login">
          <Login></Login>
        </Route>

        <Route path="*">
          <NotFound></NotFound>
        </Route>

      </Switch>

      <Footer></Footer>
    </Router>
    </AuthProvider>
    
  );
}

export default App;
