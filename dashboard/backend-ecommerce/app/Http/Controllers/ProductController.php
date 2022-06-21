<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;




class ProductController extends Controller
{
  function addProduct(Request $req){
  /*   return $req->file('file')->store('products'); */
    $product = new Product;
    $product->name=$req->input('name');
    $product->price=$req->input('price');
    $product->description=$req->input('description');
    $product->file_path=$req->file('file')->store('products'); // config filesystems change 
    $product->save();
    
    return $product;

/*     return $req->input();
 */  }

      function list() {

        return Product::all();
         
      }

      function delete($id){
       
        $result=Product::where('id', $id)->delete();

        if($result){
          return ["result" => "product has been deleted"];
        } else {
          return ["result" => "Operation failed"];
        }
      }

      function getProduct($id){
        return Product::find($id);
      }
}