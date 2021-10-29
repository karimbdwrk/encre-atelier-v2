<?php
    //  if (isset($_POST['submit'])) {
    //     $name = $_REQUEST['name'];
    //     $email = $_REQUEST['email'];
    //     $message = $_REQUEST['message'];

    //   // Set your email address where you want to receive emails. 
    //    $to = 'krimobadworker@gmail.com';
    //    $subject = 'Contact Request From Website';
    //    $headers = "From: ".$name." <".$email."> \r\n";
    //    $send_email = mail($to,$subject,$message,$headers);

    //    echo ($send_email) ? 'success' : 'error';

    // }
?>

<?php
    // if ($_SERVER["REQUEST_METHOD"] == "POST") {

    //     # FIX: Replace this email with recipient email
    //     $mail_to = "krimobadworker@gmail.com";
        
    //     # Sender Data
    //     $subject = trim($_POST["subject"]);
    //     $name = str_replace(array("\r","\n"),array(" "," ") , strip_tags(trim($_POST["name"])));
    //     $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    //     $phone = trim($_POST["phone"]);
    //     $message = trim($_POST["message"]);
        
    //     if ( empty($name) OR !filter_var($email, FILTER_VALIDATE_EMAIL) OR empty($phone) OR empty($subject) OR empty($message)) {
    //         # Set a 400 (bad request) response code and exit.
    //         http_response_code(400);
    //         echo "Please complete the form and try again.";
    //         exit;
    //     }
        
    //     # Mail Content
    //     $content = "Name: $name\n";
    //     $content .= "Email: $email\n\n";
    //     $content .= "Phone: $phone\n";
    //     $content .= "Message:\n$message\n";

    //     # email headers.
    //     $headers = "From: $name &lt;$email&gt;";

    //     # Send the email.
    //     $success = mail($mail_to, $subject, $content, $headers);
    //     if ($success) {
    //         # Set a 200 (okay) response code.
    //         http_response_code(200);
    //         echo "Thank You! Your message has been sent.";
    //     } else {
    //         # Set a 500 (internal server error) response code.
    //         http_response_code(500);
    //         echo "Oops! Something went wrong, we couldn't send your message.";
    //     }

    //     } else {
    //         # Not a POST request, set a 403 (forbidden) response code.
    //         http_response_code(403);
    //         echo "There was a problem with your submission, please try again.";
    //     }
?>

<?php
    $to = 'krimobadworker@gmail.com';
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $headers = 'From: ' . $_POST['email'] . "\r\n" . 'Reply-To: ' . $_POST['email'] . "\r\n" . 'X-Mailer: PHP/' . phpversion();
    // On envoie le mail et on stocke le résultat
    $result = mail($to, $subject, $message, $headers);
    // Le contenu sera renvoyé au format JSON
    header('Content-Type: application/json');
    echo json_encode([
        'result' => $result
    ]);