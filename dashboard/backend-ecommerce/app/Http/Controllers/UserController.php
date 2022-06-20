<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    function register(Request $req) {

        //input elements
        $user = new User;
        $user->name = $req->input('name');
        $user->email = $req->input('email');
        $user->password = Hash::make($req->input('password'));
        $user->save();
        
        return $user;
    }
    function login( Request $req){

        //check for login elements 

        //email check
        $user = User::where('email', $req->email)->first();

        //user or password not matched
        if(!$user || !Hash::check($req->password, $user->password)){
            return response(['error' => true], 404);


        }
        return $user;
    }
}