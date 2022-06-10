<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $target     = $_POST['target'];
  $subject 		= $_POST['subject'];
  // $additional = $_POST['additional'];

  $user_name     = (!empty($_POST['user_name']))    ? $_POST['user_name'] : 'Не указано';
  $user_phone    = (!empty($_POST['user_phone']))   ? $_POST['user_phone'] : 'Не указан';
  $user_email    = (!empty($_POST['user_email']))   ? $_POST['user_email'] : 'Не указана';
  $user_subject  = (!empty($_POST['user_subject'])) ? $_POST['user_subject'] : 'Не указана';
  $user_language = (!empty($_POST['user_language'])) ? $_POST['user_language'] : 'Не указано';
  $user_skype    = (!empty($_POST['user_skype']))   ? $_POST['user_skype'] : 'Не указан';
  $user_message  = (!empty($_POST['user_message'])) ? $_POST['user_message'] : 'Не указано';

  include_once('include/telegram.php');
}