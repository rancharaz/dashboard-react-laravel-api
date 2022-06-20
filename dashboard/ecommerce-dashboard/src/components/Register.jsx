import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    useEffect(() => {

        if (localStorage.getItem('user-info')) {
            navigate("/addproduct");
        }

    }, [])




    const signup = async (e) => {

        e.preventDefault();
        let items = { name, email, password };

        let result = await fetch("http://127.0.0.1:8000/api/register",
            {
                method: 'POST',
                body: JSON.stringify(items),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            })

        result = await result.json()

        localStorage.setItem("user-info", JSON.stringify(result));
        navigate("/addproduct")

    }


    return (
        <>
            <Header />
            <div className="container mx-auto form-container ">
                <h1 className='mb-5'>Register</h1>
                <form action="">
                    <div className="form-control mb-3">
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='input-text' placeholder='name' />
                    </div>
                    <div className="form-control mb-3">
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className='input-text' placeholder='Email' />

                    </div>
                    <div className="form-control">
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='input-text' placeholder='password' />

                    </div>
                    <button onClick={signup} type="submit" className='submit-btn '>Sign up</button>
                </form>

            </div>

        </>

    )
}

export default Register