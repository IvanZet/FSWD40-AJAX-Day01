<?php
//fetch.php
$connect = mysqli_connect("localhost", "root", "root", "google");
$output = '';
if(isset($_POST["query"]))
{
 $search = mysqli_real_escape_string($connect, $_POST["query"]);
 $query = "
  SELECT * FROM employees 
  WHERE name LIKE '%".$search."%'
  OR position LIKE '%".$search."%' 
  OR salary LIKE '%".$search."%' 
 ";
}
else
{
 $query = "
  SELECT * FROM employees ORDER BY id
 ";
}
$result = mysqli_query($connect, $query);
if(mysqli_num_rows($result) > 0)
{
 $output .= '
  <div class="table-responsive">
   <table class="table table bordered">
    <tr>
     <th>name</th>
     <th>position</th>
     <th>salary</th>
    </tr>
 ';
 while($row = mysqli_fetch_array($result))
 {
  $output .= '
   <tr>
    <td>'.$row["name"].'</td>
    <td>'.$row["position"].'</td>
    <td>'.$row["salary"].'</td>
   </tr>
  ';
 }
 echo $output;
}
else
{
 echo 'Data Not Found';
}

?>