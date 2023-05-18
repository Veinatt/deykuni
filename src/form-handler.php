<?php

$token = "5096006721:AAHxxLW7-YbuZ8EalR4wTqCTzJtAOXU_49A";
$chat_id = "-1001619683520";
$type = $_POST['form_type'];
$name = $_POST['form_name'];
$tel = $_POST['form_tel'];

$arr = array(
    'Имя пользователя: ' => $name,
    'Телефон: ' => $tel,
    'Тариф:' => 'Лендинг'
);

foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");


if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $to = "denmuraviov17@gmail.com";
    $subject = "Новая заявка";
    $name = $_POST['form_name'];
    $tel = $_POST['form_tel'];
    $message = "\nИмя: " . $name . "\nНомер телефона: " . $tel;
    
    mail($to,$subject,$message);
}
?>