<?php

header('Content-Type: application/json');
require('dbcon.php');


$read = "select * from std_data"; 
$result = $conn->query( $read);

$i = 0;

while($row = $result->fetch_assoc()) {

    
    $arr[$i]["id"] = $row["id"];
    $arr[$i]["name"] = $row["name"];
    $arr[$i]["gender"] = $row["gender"];
    $arr[$i]["class"] = $row["class"];
    $i++;
}
$response['Status'] = $arr;

echo json_encode($response['Status']);




?>