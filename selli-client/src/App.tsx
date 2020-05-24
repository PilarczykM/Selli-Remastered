import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { GlobalStyle } from './GlobalStyles'
import { Home } from './modules/Home/Home'
import { Register } from './modules/Register/Register'

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    </>
  )
}

export default App
