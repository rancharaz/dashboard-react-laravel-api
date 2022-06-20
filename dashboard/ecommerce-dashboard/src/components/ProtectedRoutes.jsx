import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';




const ProtectedRoutes = (props) => {

    let Cmp = props.Cmp;
    const navigate = useNavigate();

    useEffect(() => {

        if (!localStorage.getItem('user-info')) {
            navigate("/addproduct");
        }

    }, [])


    return (
        <Cmp />
    )
}

export default ProtectedRoutes