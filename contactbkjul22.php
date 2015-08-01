<?php 	

ob_start();

session_start();

//include("dbcon.php");

//elmdu_connectdb();

error_reporting(0);

function send_email($from, $to, $subject, $message,$mail_from,$cc='',$bcc='')

{

	

	$headers  = 'MIME-Version: 1.0' . "\r\n";

	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

	$headers .= 'From: '.$mail_from.' <'.$from.'>' . "\r\n";

	$headers .= "Reply-To: ".$from."\r\n";

	$headers .= "Return-Path: ".$from."\r\n"; 

	if($cc != '')

	$headers .= "CC: ".$cc."\r\n";



	if($bcc != '')

	$headers .= "BCC:  ".$bcc."\r\n";



	$headers .= "Content-type: text/html\r\n"; 





	@mail($to,$subject,html_entity_decode($message),$headers);



}



$name="";

$email="";

$phone="";

$city="";

$program="";



//var_dump($_POST);exit;

if(isset($_POST['txtName']))

{ 

$name1=$_POST['txtName']; //var_dump($_POST['name']);exit;

}

if(isset($_POST['txtEmail']))

{

$email=$_POST['txtEmail']; 

}

if(isset($_POST['txtContact']))

{

$phone=$_POST['txtContact'];  

}

if(isset($_POST['txtQuery']))

{

 $query=$_POST['txtQuery'];

}

if(isset($_POST['selProgram']))

{

 $program=$_POST['selProgram'];

}
if(isset($_POST['txtCity']))

{

 $city=$_POST['txtCity'];

}
if(isset($_POST['selState']))

{

 $state=$_POST['selState'];

}


$name=$name1;



						  

								  

$coursearray=array('1'=>'Bachelors','2'=>'Masters','3'=>'Ph.D');





/*$uchk    = "select * from contact where`email`='".$_POST['email']."' order by id DESC Limit 1";

$uchkqry = mysql_query($uchk);

$uchkres = mysql_fetch_array($uchkqry);

$uchknum = mysql_num_rows($uchkqry);

if($uchknum>0)

{

header('Location:index.php?already');

	exit();

}else{

$sql = "insert into contact(name,email,phone,country,program) values('$name','$email','$phone','$company','$product')";

mysql_set_charset('utf8');

$query = mysql_query($sql) or die(mysql_error());

}*/



$newarray=array(

		'Name'=>trim($name),

		'Email Address'=>trim($email),

		'Contact Number'=>trim($phone),
		
		'Selected Course'=>trim($program),
		
		'City'=>trim($city),
		
		'State'=>trim($state),

		'Query'=>trim($query),

		/*'Product Interested'=>trim($coursearray[$program]),	*/

		/*'Product Interested'=>trim($product),*/

		'Date Time'=>date('Y-m-d H:i:s'),

		'IP Address'=>$_SERVER['REMOTE_ADDR']);





		$leadid=intval($_POST['last_lead_id']);

		





$subject = "MVJCE:: Adwords Lead Detail";



$mailmessage='<html>

  <body bgcolor="#DCEEFC">

    <center><table cellpadding="0" cellspacing="0" border="0" width="549">';

					foreach ($newarray	 as $key => $value)

					{ 

					$mailmessage.='<tr>

						<td valign="top" align="left" nowrap="nowrap" width="150"><p style="margin:5px 0; padding:0; font-family:Verdana, Arial, Helvetica, sans-serif; font-size:12px; line-height:22px; color:#555555;">'.$key.'</p></td>

						<td valign="top" align="left" width="10"><p style="margin:5px 0; padding:0; font-family:Verdana, Arial, Helvetica, sans-serif; font-size:12px; line-height:22px; color:#555555;">:</p></td>

						<td valign="top" align="left" width="440"><p style="margin:5px 0; padding:0; font-family:Verdana, Arial, Helvetica, sans-serif; font-size:12px; line-height:22px; color:#555555; font-weight:bold;">'.$value.'</p></td>

					</tr>';

																  

					}

					$mailmessage.='</table> </center>

  </body>

</html>';





	/*echo $frommail,$tomail,$subject,$mailmessage,$mail_from,'','';

	exit;*/

   //end of message

     $frommail=$email;

 /*  $tomail='ashok@digicliff.com';



   send_email($frommail,$tomail,$subject,$mailmessage,$mail_from,'','');

   

    $tomail='ananth@digicliff.com';



   send_email($frommail,$tomail,$subject,$mailmessage,$mail_from,'','');

   

   $tomail='ravi@digicliff.com';



   send_email($frommail,$tomail,$subject,$mailmessage,$mail_from,'','');

   

    $tomail='karthick@digicliff.com';



   send_email($frommail,$tomail,$subject,$mailmessage,$mail_from,'',''); */



    $tomail='testlead@digicliff.com';
   
   
   send_email($frommail,$tomail,$subject,$mailmessage,$mail_from,'','');

   $tomail='admission@mvjce.edu.in';
   
   
   send_email($frommail,$tomail,$subject,$mailmessage,$mail_from,'','');

 /*$tomail='vennila@digicliff.com';

    send_email($frommail,$tomail,$subject,$mailmessage,$mail_from,'','');
  */

   /* $tomail='Vijay@oesindia.com';

	 send_email($frommail,$tomail,$subject,$mailmessage,$mail_from,'','');

*/


$message1.='<p class="service-content">

						<span class="address"> Dear'." ".$name.'

							

							<p>Thank you for showing your interest in MVJ College of Engineering !</p>
						
                            
                            <p>MVJ College of Engineering is renowned world-wide for providing quality professional education. At MVJCE, every experience and opportunity presented to the student is significant, carefully planned and it gives us immense pleasure in introducing ourselves as one of the greatly reputed and highly trusted college in Bangalore. MVJ College of Engineering established in the year 1982 offers Engineering and Management courses across 11 Undergraduate Engineering courses and 8 Post Graduate Engineering and Management courses.
                            </p>
                            
							<p>We request you to visit <a href="http://www.mvjce.edu.in/?utm_source=thankyou-mail">www.mvjce.edu.in</a> to know more about course structure and other informations.</p>

                            <p>For any assistance, please call +91-80-4299 1040 or mail to <a href="mailto:admission@mvjce.edu.in">admission@mvjce.edu.in</a></p>
                            
                            </span>
                                       
						<br />
						<br />
                        <p>Regards,</p>
						<p>Director, Admissions </p>
                        <p>MVJ College of Engineering,</p>
						<p>Near ITPB, Whitefield,</p>
                        <p>Bangalore-560 067</p>

					</p>

					';

 

 $newarray=array(

		'Name'=>trim($name),

		'Email Address'=>trim($email),

		'Contact Number'=>trim($phone),
		
		'Selected Course'=>trim($program),
		
		'City'=>trim($city),
		
		'State'=>trim($state),

		'Query'=>trim($query),

		/*'Product Interested'=>trim($coursearray[$program]),	*/

		/*'Product Interested'=>trim($product),*/

		'Date Time'=>date('Y-m-d H:i:s'),

		'IP Address'=>$_SERVER['REMOTE_ADDR']);
		
		
$subject = "Welcome to MVJ College of Engineering.";		

$mailmessage='<html>

  <body bgcolor="#DCEEFC">

    <left><table cellpadding="0" cellspacing="0" border="0" width="800">';

     $mailmessage.='';
				$mailmessage.='<tr>

						<td valign="top" align="left" nowrap="nowrap" width="150"><p style="margin:5px 0; padding:0; font-family:Verdana, Arial, Helvetica, sans-serif; font-size:12px; line-height:22px; color:#555555;"><img src="http://digicliff.net/lp_demo/MVJ_landingpages/mvj_BTech_landingpage/images/logo.png"></p></td>

					

					</tr>
					<tr>
						<td valign="top" align="left" width="440"><p style="margin:5px 0; padding:0; font-family:Verdana, Arial, Helvetica, sans-serif; font-size:16px; line-height:26px; color:#555555; font-weight:bold;">'.$message1.'</p></td>
					</tr>
					</td>';

					$mailmessage.='</table> </left>

  </body>

</html>';

$frommail='admission@mvjce.edu.in';
$tomail=$email;



   send_email($frommail,$tomail,$subject,$mailmessage,$mail_from,'','');


/*header('Location:index.php?return='.$response['return']);*/

header('Location:thankyou.php');

exit();



?>

