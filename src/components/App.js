import React from 'react'
import Navbar from './navbar';

//import '../static/css/App.css';

const App = ( {children} ) => (
    <div>
        <Navbar />
        <main>{children}</main>
        <div className="fb-customerchat" page_id="327284147773040"></div>
    </div>
)

export default App
