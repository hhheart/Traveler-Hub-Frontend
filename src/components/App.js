import React from 'react'
import Navbar from './navbar';
import '../static/css/App.css';

const App = ({children}) => (
  
  <div>
    <Navbar />
    <main>{children}</main>
  </div>
)

export default App
