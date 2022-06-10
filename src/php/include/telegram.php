<?php
$newline = "%0A";
$text = "";

$content = array(
  'Target' => "$subject%0A",
  'Name' => $user_name,
  'Email' => $user_email,
  'Phone number' => $user_phone,
  'Message' => $user_message,
);

if ($target  == 'callback') {
  $content['Subject'] = $user_subject;
  $content['Skype ID'] = $user_skype;
}

else if ($target  == 'job') {
  $content['Language pairs'] = $user_language;
}

SetMessage($content);
SendMessage($text);

function SetMessage($content)
{
  global  $text;
  foreach ($content as $key => $value) {
    if (is_array($value)) $text .= "<b>" . $key . ":</b> " . $value[0] . "%0A";
    else $text .= "<b>" . $key . ":</b> " . $value . "%0A";
  };
}

function SendMessage($text)
{
  $token = "";
  $chat_id = "";

  fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$text}", "r");
  echo json_encode("Успешно отправлено!");
}
