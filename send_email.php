<?php
	if (!isset($_POST['name']) || !isset($_POST['email']) || !isset($_POST['subject']) || !isset($_POST['message'])) {
		echo "I'm sorry, there appears to be some missing fields in the form you submitted.";
		die();
	} else {
		$email_to = "adimitui@princeton.edu";
		$email_sender = $_POST['name'];
		$email_from = $_POST['email'];
		$email_subject = $_POST['subject'];
		$email_message = $_POST['message'];

		$email_content = "Full Name: ".$email_sender."\n";
		$email_content .= "Email: ".$email_from."\n";
		$email_content .= "Message: ".$email_message."\n";

		$header = "From: ".$email_from;

		mail($email_to, $email_subject, $email_content, $header);
	}
?>