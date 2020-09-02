import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import Profile from "../components/profile"
import PrivateRoute from "../components/privateRoute"
//import Login from "../components/login"

const NotFound = () => {
  return (
    <div>
      <h1>Not Found</h1>
    </div>
  )
}

const App = () => (
  <Layout>
    <Router>
      <NotFound path="/app/" />
      <PrivateRoute path="/app/profile/" component={Profile} />
      {/* <Login path="/app/" /> */}
    </Router>
  </Layout>
)
export default App
