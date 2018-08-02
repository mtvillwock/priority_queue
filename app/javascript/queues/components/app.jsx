import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Base from './base'

const App = (props) => (
  <Router>
  <div>
    <Route
      path='/'
      component={Base}
    />
  </div>
  </Router>
)

export default App