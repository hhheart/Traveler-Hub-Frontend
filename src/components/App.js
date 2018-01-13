import React from 'react'
import Navbar from './navbar';
//import '../static/css/App.css';

const App = ( {children} ) => (

    <div>
        <Navbar />
        <div class="fb-customerchat" page_id="327284147773040"></div>
        <main>{children}</main>
    </div>
)

export default App
