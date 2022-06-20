import React, { useState } from 'react'
import Header from './Header';
import axios from 'axios';

const AddProduct = () => {


    const [name, setName] = useState("");
    const [file, setFile] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("")


    async function addProduct() {

        const url = 'http://127.0.0.1:8000/api/addProduct'

        const formData = new FormData();
        formData.append('file', file);
        formData.append('price', price);
        formData.append('name', name);
        formData.append('description', description);

        let result = await axios.post(url, formData)
            .then(response => {
                /* console.log(response); */
                alert("Data has been saved")
            })
            .catch(error => {
                console.log(error);
            });



    }




    return (
        <>
            <Header />
            <div className='text-center justify-center items-center mt-10'>
                <h1>Add products</h1>
                <div className="form-control">
                    <input type="text" name="" id="" placeholder='name' onChange={(e) => setName(e.target.value)} className='outline-none border-2 p-2 rounded-md w-80' />

                </div>
                <div className="form-control mt-2">
                    <input type="file" name="" id="" placeholder='file' onChange={(e) => setFile(e.target.files[0])} className='outline-none border-2 p-2 rounded-md' />

                </div>
                <div className="form-control mt-2">
                    <input type="text" name="" id="" placeholder='price' onChange={(e) => setPrice(e.target.value)} className='outline-none border-2 p-2 rounded-md w-80' />

                </div>
                <div className="form-control mt-2">
                    <input type="text" name="" id="" placeholder='description' onChange={(e) => setDescription(e.target.value)} className='outline-none border-2 p-2 rounded-md w-80' />

                </div>
                <div className="button">
                    <button onClick={addProduct} className='submit-btn '>Add Product</button>

                </div>
            </div>

        </>
    )
}

export default AddProduct