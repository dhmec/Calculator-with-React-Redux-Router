import React from 'react';
import { Link } from 'react-router-dom';



const Nav = () => 
{
    return(
        <nav>
            <h1>Welcome to my Calculator made with React-Redux-Router</h1>
            <ul>
                <li>
                    <Link>
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