<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contact;

class ContactsController extends Controller
{
    //
    public function index(){
        return Contact::all();
    }
    public function post(Request $request){
        $contact = Contact::create($request->all());        
        $result = $contact;
        return response()->json($result);
    }
}
