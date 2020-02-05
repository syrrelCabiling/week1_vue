<?php
    require('connect.php');

    //USERS of the SITE!!
    function getUsers($conn) {
        $getData = 'SELECT * FROM users';
        $runQuery = $conn->query($getData);

        $result = array();

        while($row = $runQuery->fetch(PDO::FETCH_ASSOC)) {
            //push each row of data into our array to make it easy to itemized
            $result[] = $row;

        }

        return $result; //result of the function
    }


