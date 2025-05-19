import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {

    const user = use(AuthContext)
    console.log(user)

    return (
        <div>
            Navbar
        </div>
    );
};

export default Navbar;