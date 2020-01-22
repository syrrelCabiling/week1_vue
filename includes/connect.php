<?php 

    $db_dsn = array(
        'host' => 'localhost',
        'dbname' => 'week1_vue',
        'charset' => 'utf8',
    );
    
    $dsn = 'mysql:' . http_build_query($db_dsn, '', ';');

    // Set up connection credentials
    $db_user = 'root'; // blank for windows
    $db_pass = 'root';

    $pdo = new PDO($dsn, $db_user, $db_pass); //reusable object that runs the table

    /* check connection */
    try {
        $pdo = new PDO($dsn, $db_user, $db_pass);
    } catch (PDOException $exception) {
        echo "Connection error: " . $exception->getMessage();
        exit();
    }
