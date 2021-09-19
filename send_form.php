<?php
        $from_name 	= $_POST['first'];
		$from_email = $_POST['email'];
		$to_name 	= "Recipent of NewBreedRising";
        $to_email 	= "thenewbreedrising@gmail.com";
		// $to_emailb 	= "";


		$subject 	= "The New Breed Rising Website Submission Form";

		$headers 	 = "MIME-Version: 1.0\r \n";
		$headers	.= "Content-type: text/html; charset=UTF-8\r \n";
		$headers	.= "From: \"".$from_name."\" <".$from_email.">\r \n";
		$headers	.= "Reply-To: \"".$from_name."\" <".$from_email.">\r \n";
		$headers	.= "X-Priority: 3\r \n";
		$headers	.= "X-MSMail-Priority: High\r \n";
		$headers	.= "X-Mailer: Just My Server";
		$date 		= date('d.m.Y');
		
		
		$message = "<html><head></head>";
		$message .= "<body leftmargin=50px>";
        $message .= "<table><tr><td colspan=2 align=center><b>NewbreedRising<br> Website Submission Form</b></td></tr>";
        
		$message .= "<tr><td align=left>First Name:</td><td align=left>".$_POST['first']."</td></tr>";
		$message .= "<tr><td align=left>Last Name:</td><td align=left>".$_POST['last']."</td></tr>";
        $message .= "<tr><td align=left>Email:</td><td align=left>".$_POST['email']."</td></tr>";
        // $message .= "<tr><td align=left>Event type Online Course Choice:</td><td align=left>".$_POST['course1a']."</td></tr>";
        // $message .= "<tr><td align=left>Event type Online Course Choice:</td><td align=left>".$_POST['course2a']."</td></tr>";	
        $message .= "<tr><td align=left>Comments: </td><td align=left>".$_POST['textarea']."</td></tr>";

        // $message .= "<tr><td align=left>Phone:</td><td align=left>".$_POST['phone']."</td></tr>";
		// $message .= "<tr><td align=left>Best time to Contact:</td><td align=left>".$_POST['best_time_to_contact']."</td></tr>";
		// $message .= "<tr><td align=left>Address:</td><td align=left>".$_POST['address']."</td></tr>";
		// $message .= "<tr><td align=left>Address 2:</td><td align=left>".$_POST['address2']."</td></tr>";
		// $message .= "<tr><td align=left>City:</td><td align=left>".$_POST['city']."</td></tr>";
		// $message .= "<tr><td align=left>State:</td><td align=left>".$_POST['state']."</td></tr>";
		// $message .= "<tr><td align=left>Zip Code:</td><td align=left>".$_POST['zip_code']."</td></tr>";
		// $message .= "<tr><td align=left>Event type Other:</td><td align=left>".$_POST['event_type_other']."</td></tr>";
		// $message .= "<tr><td align=left>Source:</td><td align=left>".$_POST['source']."</td></tr>";

		
		$message .= "<tr><td>&nbsp;</td><td>&nbsp;</td></tr></table></body></html>";
		
		mail("$to_name<$to_email>", $subject, $message, $headers);
		// mail("$to_name<$to_emailb>", $subject, $message, $headers);
?>

<head>
<title>The NewBreedRising Website Submission Form</title>
<!-- <script type="text/javascript" src="js/contactformvalidator.js"></script> -->
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"><type="text/css">
</head>

<body>

<style>
p {
  text-align: center;
  padding: 10px;
  font-weight: 800;
  color: transparent;
  font-size: 5em;
  background: url("https://phandroid.s3.amazonaws.com/wp-content/uploads/2014/05/rainbow-nebula.jpg") repeat;
  background-position: 40% 50%;
  -webkit-background-clip: text;
  position: relative;
  text-align: center;
  line-height: 90px;
  letter-spacing: -8px;
}

p a {
text-decoration: none;
font-size: 87px;
color: #28404b;
}

p a:hover {
	color: #3f6961;
}

</style>

<section> 

<div class="container demo">
   <div class="content">
      <div id="large-header" class="large-header">
         <canvas id="demo-canvas"></canvas>
         <h1 class="main-title"><span class="thin"><p>   
Your request has been sent. Thank You! </p> <hr> 
<a href=https://newbreedrising.org> Back to The NewBreed</a></h1>
      </div>
   </div>
</div>


</section>

</body>
</html>


