<?php

    $conn = new mysqli("localhost", "root", "root", "google");

    $name = $_POST['name'];


    if($conn -> query("SELECT employees (name) VALUES first_name WHERE ('$name')")){
        echo "Succesfully search";
    } else {
        echo "Unsuccesful search";
    }

?>