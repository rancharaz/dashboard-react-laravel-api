import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'



const Header = () => {

    let user = JSON.parse(localStorage.getItem('user-info'))
    const navigate = useNavigate();


    const logout = () => {
        localStorage.removeItem('user-info');
        navigate("/register");
    }



    return (
        <>
            <nav className="navbar ">
                <div className="logo">
                    <Link to="/">Ecommerce-app</Link>
                </div>

                <ul className='navbar-items '>
                    {
                        localStorage.getItem('user-info') ? <>
                            <Link to="/addproduct">Add product</Link>
                            <Link to="/updateproduct">Update product</Link>
                            <Link to="/productlist">Product list</Link>

                        </> :

                            <>
                                <Link to="/login">Login</Link>
                                <Link to="/register">Register</Link>

                            </>
                    }


                </ul>
                {
                    localStorage.getItem('user-info') ?
                        <>
                            <label htmlFor="cars" className=' text-white ml-5'>Username: {user && user.name}</label>
                            <div className='btn-logout ' onClick={logout}> Logout</div>
                        </>
                        : null
                }



            </nav>

        </>

    )
}

export default Header