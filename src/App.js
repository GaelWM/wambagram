import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register';
import firebase from './firebase/config'

function App() {

  const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  useEffect(() => {
    firebase.isInitialized().then((val) => {
      setFirebaseInitialized(val);
    });
  }, [firebaseInitialized]);

  return firebaseInitialized !== false ? (
    <div className="App">
      <Switch>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/auth/login" component={Login}></Route>
        <Route exact path="/auth/register" component={Register}></Route>
        <Redirect from="/" to="/home"></Redirect>
      </Switch>
    </div>
  ) : <div className="app-loader">Connecting to Firebase</div>;
}

export default App;
