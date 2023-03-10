<?php

$token = "5096006721:AAHxxLW7-YbuZ8EalR4wTqCTzJtAOXU_49A";
$chat_id = "-1001619683520";
$type = $_POST['form_type'];
$name = $_POST['form_name'];
$tel = $_POST['form_tel'];


if($type == "landing") {
    $arr = array(
        'Имя пользователя: ' => $name,
        'Телефон: ' => $tel,
        'Тариф:' => 'Лендинг'
    );

} elseif ($type == "market") {
    $arr = array(
        'Имя пользователя: ' => $name,
        'Телефон: ' => $tel,
        'Тариф:' => 'Интернет-магазин'
    );

} elseif ($type == "card") {
    $arr = array(
        'Имя пользователя: ' => $name,
        'Телефон: ' => $tel,
        'Тариф:' => 'Визитка'
    );

} elseif ($type == "pages") {
    $arr = array(
        'Имя пользователя: ' => $name,
        'Телефон: ' => $tel,
        'Тариф:' => 'Многостраничник'
    );

} elseif ($type == "quiz") {
    $arr = array(
        'Имя пользователя: ' => $name,
        'Телефон: ' => $tel,
        'Тариф:' => 'Квиз'
    );

} elseif ($type == "ad") {
    $arr = array(
        'Имя пользователя: ' => $name,
        'Телефон: ' => $tel,
        'Тариф:' => 'Продвижение в контекстной рекламе'
    );

} elseif ($type == "corp") {
    $arr = array(
        'Имя пользователя: ' => $name,
        'Телефон: ' => $tel,
        'Тариф:' => 'Корпоративный'
    );

} elseif ($type == "mob") {
    $arr = array(
        'Имя пользователя: ' => $name,
        'Телефон: ' => $tel,
        'Тариф:' => 'Мобильное приложение'
    );

} elseif ($type == "timeout") {
    $arr = array(
        'Имя пользователя: ' => $name,
        'Телефон: ' => $tel,
        'Тариф:' => 'Ожидание звонка'
    );

} else {
    $arr = array(
        'Имя пользователя: ' => $name,
        'Телефон: ' => $tel,
        'Тариф:' => 'Новая запись'
    );

}


foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");


if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $to = "androshd+lead@mail.amocrm.ru";
    if(isset($_POST['form_type'])) {
        $type = $_POST['form_type'];
        if($type == "landing") {
            $subject = "Лендинг";
            $name = $_POST['form_name'];
            $tel = $_POST['form_tel'];
            
            $message = "\nИмя: " . $name . "\nНомер телефона: " . $tel;

        } elseif ($type == "market") {
            $subject = "Интернет-магазин";
            $name = $_POST['form_name'];
            $tel = $_POST['form_tel'];
            
            $message = "\nИмя: " . $name . "\nНомер телефона: " . $tel;
        
        } elseif ($type == "card") {
            $subject = "Визитка";
            $name = $_POST['form_name'];
            $tel = $_POST['form_tel'];
            
            $message = "\nИмя: " . $name . "\nНомер телефона: " . $tel;
        
        } elseif ($type == "pages") {
            $subject = "Многостраничник";
            $name = $_POST['form_name'];
            $tel = $_POST['form_tel'];
            
            $message = "\nИмя: " . $name . "\nНомер телефона: " . $tel;
        
        } elseif ($type == "quiz") {
            $subject = "Квиз / опросник";
            $name = $_POST['form_name'];
            $tel = $_POST['form_tel'];
            
            $message = "\nИмя: " . $name . "\nНомер телефона: " . $tel;
        
        } elseif ($type == "ad") {
            $subject = "Продвижение в контекстной рекламе";
            $name = $_POST['form_name'];
            $tel = $_POST['form_tel'];
            
            $message = "\nИмя: " . $name . "\nНомер телефона: " . $tel;
        
        } elseif ($type == "corp") {
            $subject = "Корпоративный";
            $name = $_POST['form_name'];
            $tel = $_POST['form_tel'];
            
            $message = "\nИмя: " . $name . "\nНомер телефона: " . $tel;
        
        } elseif ($type == "mob") {
            $subject = "Мобильное приложение";
            $name = $_POST['form_name'];
            $tel = $_POST['form_tel'];
            
            $message = "\nИмя: " . $name . "\nНомер телефона: " . $tel;
        
        } elseif ($type == "timeout") {
            $subject = "Ожидание звонка";
            $name = $_POST['form_name'];
            $tel = $_POST['form_tel'];
            
            $message = "\nИмя: " . $name . "\nНомер телефона: " . $tel;
        
        } else {
            $subject = "Новая запись";
            $name = $_POST['form_name'];
            $tel = $_POST['form_tel'];
            
            $message = "\nИмя: " . $name . "\nНомер телефона: " . $tel;
        
        }
        
        mail($to,$subject,$message);
    }
}
?>