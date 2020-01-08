<?php

header('application/json'); //What type of data it will recieve
require('dbcon.php'); //requires the following file
$data = file_get_contents("php://input");//getting the content from serivce
$data1 = json_decode($data,true);//decoding it to an array

$get_name = json_encode($data1['name']);//fetching data from the desired key
$get_gender = json_encode($data1['gender']);
$get_class = json_encode($data1['class']);

$insert = "insert into std_data(name,gender,class) values ($get_name,$get_gender,$get_class)"; //query
$result = $conn->query($insert);
if($result === true) //checking if the data is been inserted or not
{
   $response['Status'] = "Done";
}
  else { $response['Status'] = "Error: " . $conn->error;
}

echo json_encode( $response); //sending the response back in the encoded form



?>