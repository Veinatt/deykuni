<?php

$token = "5096006721:AAHxxLW7-YbuZ8EalR4wTqCTzJtAOXU_49A";
$chat_id = "-1001619683520";
$name = $_POST['form_name'];
$tel = $_POST['form_tel'];
$text = $_POST['form_text'];
$biz = $_POST['form_biz'];
$bud = $_POST['form_bud'];
$rate = $_POST['form_rate'];

$arr = array(
    'Имя пользователя: ' => $name,
    'Телефон: ' => $tel,
    'Вид деятельности:' => $biz,
    'Бюджет:' => $bud,
    'Тариф:' => $rate,
    'Примечание:' => $text,
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
    $biz = $_POST['form_biz'];
    $bud = $_POST['form_bud'];
    $rate = $_POST['form_rate'];
    $text = $_POST['form_text'];
    $message = "\nИмя: " . $name . "\nНомер телефона: " . $tel . "\nВид деятельности: " . $biz . "\nБюджет: " . $bud . "\nТариф: " . $rate . "\nПримечание: " . $text;
    
    mail($to,$subject,$message);
}
?>