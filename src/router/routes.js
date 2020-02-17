import React from 'react'

import { BrowserRouter, Link,  Switch, Route  } from 'react-router-dom'

import Home from './../components/home'
import Chat from './../components/chat'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
    </Switch>
  </BrowserRouter>
)

export default Routes;






