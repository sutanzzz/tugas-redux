import withRoot from './components/theme/withRoot'
import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignIn from './components/auth/signIn'
import SignUp from './components/auth/signUp'
import Dasboard from './components/auth/dashboard'
import Appbar from  './components/layouts/appbar'
import AppbarFooter from './components/layouts/appbarFooter'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className='App'>
              <Appbar />
              <Switch>
                <Route exact path='/' component={Dasboard} /> 
                <Route path='/signin' component={SignIn} />
                <Route path='/signup' component={SignUp} />
              </Switch>
              <AppbarFooter />
            </div>
        </BrowserRouter>
    );
  }
}

export default withRoot(App);