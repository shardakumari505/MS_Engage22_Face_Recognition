import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./screens/dashboard-page/dashboard-page";
import SigninPage from './screens/signin-page/signin-page';
import SignupPage from "./screens/signup-page/signup-page";
import TransactionPage from "./components/transaction-page/transaction-page";
import Eshop from "./components/transaction-page/eshop";
import FaceRecognize from "./components/transaction-page/facerecognise";

function App() {

  return (
    <Router>
      <main className="app">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/signin" component={SigninPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/transactionpage" component={TransactionPage} />
          <Route exact path="/eshop" component={Eshop} />          
          <Route exact path="/facerecognize" component={FaceRecognize} />          
        </Switch>
      </main>
    </Router>
  );
}

export default App;
