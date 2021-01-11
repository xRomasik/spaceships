import { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import HomePage from './pages/homepage/homepage.component.jsx';
import Shop from './pages/shop/shop.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';
import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions';

import './App.css';


function App() {

  const user = useSelector(state => selectCurrentUser(state))

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())

  }, [dispatch]);


  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/signin' render={() => user ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
      </Switch>
    </div>
  );
}

export default App;