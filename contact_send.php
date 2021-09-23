<?php
 
if($_POST) {
    $first = "";
    $last = "";
    $email = "";
    $textarea = "";

    if(isset($_POST['first'])) {
        $first = filter_var($_POST['first'], FILTER_SANITIZE_STRING);
    }
    if(isset($_POST['last'])) {
        $last = filter_var($_POST['last'], FILTER_SANITIZE_STRING);
    }
    if(isset($_POST['email'])) {
        $email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['email']);
        $email = filter_var($email, FILTER_VALIDATE_EMAIL);
    }
    if(isset($_POST['textarea'])) {
        $textarea = htmlspecialchars($_POST['textarea']);
    }

    $recipient = "thenewbreedrising@gmail.com";
    // $recipient = "jbosko28@gmail.com";

    $headers  = 'MIME-Version: 1.0' . "\r\n"
    .'Content-type: text/html; charset=utf-8' . "\r\n"
    .'From: ' . $email . "\r\n";

    $email_content = "<html><body style='background-color: #000; color: #fff'>";
    $email_content .= "<table style='font-family: Arial;'><tbody><tr><td style='background: #484848; padding: 10px;'>First Name:</td><td style='background: #484848; padding: 10px;'>$first</td></tr>";
    $email_content .= "<tr><td style='background: #3c3c3c; padding: 10px;'>Last Name:</td><td style='background: #484848; padding: 10px;'>$last</td></tr>";
    $email_content .= "<tr><td style='background: #b6b5b5; padding: 10px;'>Email:</td><td style='background: #b6b5b5; padding: 10px;'>$email</td></tr>";
    $email_content .= "<tr><td style='background: #3c3c3c; padding: 10px;'>Message</td><td style='background: #484848; padding: 10px;'>$textarea</td></tr>";
    $email_content .= '</body></html>';

    echo $email_content;

    if(mail($recipient, "Messaged Successfully Submitted from Newbreedrising Website", $email_content, $headers)) {
        echo '<p style="font-family:Inter;">Thank you for sending your message!</p>';
        echo '<button style="background-color: #ccc; border-radius: .5rem; padding: .5rem 1rem; border: none; margin: 0 0 .5rem 2px"><a style="color:#000; font-weight:bold;" href="index.html">BACK</a></button>';
             
    } else {
        echo '<p>Please try again, the message was not submited.</p>';
    }
     
} else {
    echo '<p>Something went wrong</p>';
}

?>


