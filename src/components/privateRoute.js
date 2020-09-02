import React from "react"

import Login from './login'
import { isLoggedIn } from "../services/auth"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (!isLoggedIn()) {
    return <Login />
  }
  return <Component {...rest} />
}

export default PrivateRoute