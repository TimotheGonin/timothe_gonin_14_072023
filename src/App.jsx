import React from 'react'
import Header from './components/Header'
import Router from './router/Router'

/**
 * Main application component.
 * @component
 * @returns {JSX.Element} - The rendered App component.
 */
function App() {
  return (
    <React.Fragment>
      <Header />
      <Router />
    </React.Fragment>
  )
}

export default App
