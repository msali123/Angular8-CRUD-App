<?php
header("Content-Type: application/json");
require('dbcon.php');
$data = file_get_contents("php://input");
$data1 = json_decode($data,true);

$getid = json_encode($data1);

$update = "select * from std_data where id = $getid";
$result = $conn->query($update);
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