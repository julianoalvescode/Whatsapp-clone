import React from 'react'

import { BrowserRouter, Link,  Switch, Route  } from 'react-router-dom'

import Home from './../components/home'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
    </Switch>
  </BrowserRouter>
)

export default Routes;






