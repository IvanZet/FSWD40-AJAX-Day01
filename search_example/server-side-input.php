<?php

    $conn = new mysqli("localhost", "root", "root", "google");

    $name = $_POST['name'];

    $salary = $_POST['salary'];

    $position = $_POST['position'];

    if($conn -> query("INSERT INTO employees (name, salary, position) VALUES ('$name', '$salary', '$position')")){
        echo "Succesfully Inserted new Employee";
    } else {
        echo "Unsuccesful Insertion";
    }

?>