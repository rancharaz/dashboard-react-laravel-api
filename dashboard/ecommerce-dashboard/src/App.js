import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
import Login from './components/Login';
import Register from './components/Register';
import ProtectedRoutes from './components/ProtectedRoutes';
import ProductList from './components/ProductList';



function App() {
  return (
    <>
      <Router>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addproduct" element={

            <ProtectedRoutes Cmp={AddProduct}>
              <AddProduct />
            </ProtectedRoutes>


          } />

          <Route path="/updateproduct" element={
            <ProtectedRoutes Cmp={UpdateProduct}>
              <UpdateProduct />
            </ProtectedRoutes>
          } />

          <Route path="/Login" element={<Login />} />
          <Route path="/productlist" element={<ProductList />} />

        </Routes>
      </Router>

    </>
  );
}

export default App;
