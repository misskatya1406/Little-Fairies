<?php

$emailsite = "info@".$_SERVER['SERVER_NAME'];
$frm_name  = $_SERVER['SERVER_NAME'];
$sitename  = $_SERVER['SERVER_NAME'];
$subject   = "Заявка с сайта \"$sitename\"";

$input001 = trim($_POST["name"]);
$input002 = trim($_POST["phone"]);

$recepient = "skorpion_05@inbox.ru";

if (($input001 != '') and ($input002 != '')) {
	$message = "
	Имя: $input001 <br>
	Телефон: $input002
	";

	mail($recepient, $subject, $message, "From: $frm_name <$emailsite>" . "\r\n" . "Reply-To: $recepient" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
} else {
	echo "No send mail";
}
