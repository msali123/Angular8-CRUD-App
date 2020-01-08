<?php
header("Content-Type: application/json");
require('dbcon.php');
$data = file_get_contents("php://input");
$data1 = json_decode($data,true);

$get_id = json_encode($data1['id']);
$get_name = json_encode($data1['name']);
$get_gender = json_encode($data1['gender']);
$get_class = json_encode($data1['class']);

$update = "update std_data set name = $get_name,gender = $get_gender, class = $get_class where id = $get_id";
$result = $conn->query($update);


echo json_encode($result);


?>