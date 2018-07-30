import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import QueueList from './queue-list/'

const App = (props) => (
  <Router>
  <div>
    <Route
      path='/'
      component={QueueList}
    />
  </div>
  </Router>
)

export default App