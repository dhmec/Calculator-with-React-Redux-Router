import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';



const Nav = () => 
{
    return(
        <nav>            
            <ul>
                <li>
                    <Link to = '/'>
                        HOME
                    </Link>
                </li>
                <li>
                    <Link to = '/calculator'>
                        CALCULATOR
                    </Link>
                </li>
                <li>
                    <Link to = '/past-calculate'>
                        PAST CALCULATE LIST
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;