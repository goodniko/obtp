<?php

if($_POST && isset($_FILES['file']))
{
    $from_email         = 'info@obtpgroup.com'; //from mail, it is mandatory with some hosts
    $reply_to_email = 'info@obtpgroup.com'; //sender email used in "reply-to" header

    $recipient_email    = 'gooodniko@your_domain.com'; //recipient email (most cases it is your personal email)
    
    //Capture POST data from HTML form and Sanitize them, 
    $sender_name    = filter_var($_POST["name"], FILTER_SANITIZE_STRING); //sender name
    $sender_surname    = filter_var($_POST["surname"], FILTER_SANITIZE_STRING); //sender surname
    $sender_company    = filter_var($_POST["company"], FILTER_SANITIZE_STRING); //sender company
    $sender_mail    = filter_var($_POST["mail"], FILTER_SANITIZE_STRING); //sender mail
    $sender_theme    = filter_var($_POST["theme"], FILTER_SANITIZE_STRING); //senderthemename
    $sender_phone    = filter_var($_POST["phone"], FILTER_SANITIZE_STRING); //sender phone
    $sender_text    = filter_var($_POST["text"], FILTER_SANITIZE_STRING); //sender text
    $subject        = 'OBTP - Заявка'; //get subject from HTML form
    
    $message =  $sender_name. " <br/>".
                $sender_surname. " <br/>".
                $sender_company. " <br/>".
                $sender_mail. " <br/>".
                $sender_phone. " <br/>".
                $sender_theme. " <br/>".
                $sender_text. " <br/>".
    
    //Get uploaded file data
    $file_tmp_name    = $_FILES['file']['tmp_name'];
    $file_name        = $_FILES['file']['name'];
    $file_size        = $_FILES['file']['size'];
    $file_type        = $_FILES['file']['type'];
    $file_error       = $_FILES['file']['error'];

    if($file_error > 0)
    {
        die('Upload error or No files uploaded');
    }

    //read from the uploaded file & base64_encode content for the mail
    $handle = fopen($file_tmp_name, "r");
    $content = fread($handle, $file_size);
    fclose($handle);
    $encoded_content = chunk_split(base64_encode($content));

    $boundary = md5("yakodev");

    //header
    $headers = "MIME-Version: 1.0\r\n"; 
    $headers .= "From:".$from_email."\r\n"; 
    $headers .= "Reply-To: ".$reply_to_email."" . "\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary = $boundary\r\n\r\n"; 
    
    //plain text 
    $body = "--$boundary\r\n";
    $body .= "Content-Type: text/plain; charset=ISO-8859-1\r\n";
    $body .= "Content-Transfer-Encoding: base64\r\n\r\n"; 
    $body .= chunk_split(base64_encode($message)); 
    
    //attachment
    $body .= "--$boundary\r\n";
    $body .="Content-Type: $file_type; name=".$file_name."\r\n";
    $body .="Content-Disposition: attachment; filename=".$file_name."\r\n";
    $body .="Content-Transfer-Encoding: base64\r\n";
    $body .="X-Attachment-Id: ".rand(1000,99999)."\r\n\r\n"; 
    $body .= $encoded_content; 
    
    $sentMail = @mail($recipient_email, $subject, $body, $headers);
    if($sentMail) //output success or failure messages
    {       
        die('Thank you for your email');
    }
    else
    {
        die('Could not send mail! Please check your PHP mail configuration.');  
    }
}