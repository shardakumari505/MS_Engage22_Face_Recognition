import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components

// Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import Dashboard from "./screens/dashboard-page/dashboard-page";
import SigninPage from './screens/signin-page/signin-page';
import SignupPage from "./screens/signup-page/signup-page";
import TransactionPage from "./components/transaction-page/transaction-page";
import LoggedInDashboard from "./screens/loggedin-dashboard/loggedin-dashboard";

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <main className="app">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/eshop" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
          <Route exact path="/signin" component={SigninPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/transactionpage" component={TransactionPage} />
          <Route exact path="/loggedindashboard" component={LoggedInDashboard} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
