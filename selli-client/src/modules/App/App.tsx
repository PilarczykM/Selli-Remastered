import { GeomanistFont, GlobalStyle } from 'components'
import { Home } from 'modules/Home/Home'
import { Register } from 'modules/Register/Register'
import React, { FC } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export const App: FC = () => {
  return (
    <>
      <GeomanistFont />
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
