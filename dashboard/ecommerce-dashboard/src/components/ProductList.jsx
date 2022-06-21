import React, { useState, useEffect } from 'react'
import Header from './Header'
import axios from 'axios'
import Loading from './Loading'



const ProductList = () => {

    const [productlists, setProductlists] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getData()
    }, [])


    async function deleteOperation(id) {

        let result = await fetch("http://127.0.0.1:8000/api/delete/" + id, {
            method: "DELETE"
        })

        result = await result.json();
        console.table(result);
        getData()
    }

    function getData() {

        axios.get('http://127.0.0.1:8000/api/list')
            .then(function (response) {
                let productData = response.data;
                setProductlists(productData)
                setLoading(false)
            }).catch(function (error) {
                console.log(error.message)
            })
    }


    return (
        <>
            <Header />

            <div className='container mx-auto text-center justify-center'>

                <h1>Product Listing</h1>

                <div className='m-10'>

                    <Loading loading={loading} />

                    <table >
                        <tbody>
                            <tr >
                                <th>Id</th>
                                <th>Name</th>
                                <th>File</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Operations</th>

                            </tr>
                            {
                                productlists && productlists.map(productlist => {
                                    const { id, name, file, description, price } = productlist;
                                    let pathList = `http://127.0.0.1:8000/`
                                    return (

                                        <tr key={id}>
                                            <td>{id}</td>
                                            <td>{name}</td>
                                            <td> <img src={`${pathList}` + productlist.file_path} alt="" className='w-12' /></td>
                                            <td>{description}</td>
                                            <td>{price}</td>
                                            <td><span onClick={() => deleteOperation(id)} className='delete-btn'>Delete</span></td>
                                        </tr>

                                    )

                                }
                                )
                            }

                        </tbody>
                    </table>




                </div>

            </div >
        </>

    )
}

export default ProductList