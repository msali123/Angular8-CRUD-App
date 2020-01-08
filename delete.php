<?php
header("Content-Type: application/json");
require('dbcon.php');
$data = file_get_contents("php://input");
$data1 = json_decode($data,true);
$getid = json_encode($data1);

$delete = "delete  from std_data where id = $getid ";
$result = $conn->query( $delete);
if($result === true)
{
   $response['Status'] = "Done";

}
  else { $response['Status'] = "Error: " . $conn->error;
}

echo json_encode($response);
//echo json_encode($getid);
?>