import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    /*     const [error, setError] = useState(
            { "Error": "Error" }
        ) */
    useEffect(() => {

        if (localStorage.getItem('user-info')) {
            navigate("/addproduct");
        }
    }, [])

    async function login(e) {
        e.preventDefault()
        let item = { email, password };

        try {
            const response = await fetch('http://127.0.0.1:8000/api/login',
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify(item)
                });

            if (!response.ok) {
                throw new Error(alert(`Email or password incorrect`));

            }

            const result = await response.json();
            localStorage.setItem("user-info", JSON.stringify(result));
            console.log(result);
            navigate("/addproduct");

        } catch (err) {
            console.log(err);
        }
        /* console.log(await login()) */


    }


    return (
        <>
            <Header />
            <div className="container mx-auto form-container ">
                <h1 className='mb-5'>Login</h1>
                <form action="">

                    <div className="form-control mb-3">
                        <input type="text" className='input-text' onChange={(e) => setEmail(e.target.value)} placeholder='Email' />

                    </div>
                    <div className="form-control">
                        <input type="password" className='input-text' onChange={(e => setPassword(e.target.value))} placeholder='password' />

                    </div>
                    <button type="submit" onClick={(e) => login(e)} className='submit-btn '>Login</button>
                </form>

            </div>
        </>
    )
}

export default Login