<?php
use \google\appengine\api\mail\Message;
    $nome = $_POST['nome'];
    $telefone = $_POST['telefone'];
    $email = $_POST['email'];
    $assunto = $_POST['assunto'];
    $from = 'contato@henriquegranatto.com.br';
    $conteudo = 
        '
        <center>
            <div style="1px solid #CCCCCC !important">
            <table width="500px"style="border-collapse: collapse; text-align: center; font-family: "Roboto", sans-serif;">
              <thead>
                <th style="padding: 20px; color: #ffffff; background-color:orange; font-size: 15pt;">Novo email recebido<br><br>via Portifólio</th>
              </thead>
              <tbody style="font-size:13pt">
                <tr><td style="padding: 20px; border-bottom: 1px solid #CCCCCC"><b>Nome:</b> '.$nome.'</td></tr>
                <tr><td style="padding: 20px; border-bottom: 1px solid #CCCCCC"><b>Telefone:</b> '.$telefone.'</td></tr>
                <tr><td style="padding: 20px; border-bottom: 1px solid #CCCCCC"><b>Email:</b> '.$email.'</td></tr>
                <tr><td style="padding: 20px;"><b>Assunto:</b> '.$assunto.'</td></tr>
              </tbody>
            </table>
        </center>
    ';
// $headers = "MIME-Version: 1.0" . "\r\n";
// $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
// More headers
// $headers .= 'From: '.$nome.'' . "\r\n";
   $to = {"henrique.ramires.granatto@gmail.com"};
    try {
        $message = new Message();
        $message->setSender('Contato via Site'.'<'.$from.'>');
        $message->addTo(".$to.");
        $message->setSubject(".$nome.");
        $message->setHtmlBody("".$conteudo."");
        $message->send();
        echo 1;
	    
        } catch (InvalidArgumentException $e) {
        $error = "Unable to send mail. $e";
        return false;
    }
?>
