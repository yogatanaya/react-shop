import React, { Component } from 'react'
import About from './About'

const Header = () => {
    return(
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <a href="" className='navbar-brand'>DEV.APPAREL</a>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportContent'  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul className='navbar-nav mr-auto'>
                    <li>
                        <a href="" className='nav-link'>Home <span className='sr-only'>(Current)</span></a>
                    </li>
                    <li>
                        <a href="" className='nav-link'>About <span className='sr-only'>(Current)</span></a>
                    </li>
                </ul>
                <ul className='navbar-nav navbar-right'>
                    <li>
                        <a href="" className='nav-link'><i className='material-icons'>add_shopping_cart</i></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Header