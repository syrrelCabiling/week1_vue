<?php

//this is where we hit the API. Like a routing file

include('functions.php');

// if we're passing in a user key in the $_GET superglobal, then go get a user

if(isset($_GET["getUsers"])){
    $users = getUsers($pdo);

    echo json_encode($users); //just like asking an object; THE RESULT IS SHOWN IN THE BROWSER
}