
import { Component } from 'react'

import logo from './logo.png'
import './index.css'

class Home extends Component{
    render(){
        
        return(
            <div className='home-container'>
                <img src={logo} alt='logo' className='logo1'/>
                <h1>Welcome to AU Dashboard</h1>
                <h3>Unlock Insights, Elevate Education: Your All-in-One University Data Companion</h3>
            </div>
        )
    }
}

export default Home