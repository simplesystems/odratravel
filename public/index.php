<?php

include '../configs/config.php';

$site = isset($_GET["site"]) ? $_GET["site"] : '';
switch ($site) {
    case'kontakt.html':
        include './kontakt.php';
        break;
    default:
        $smarty->display('index.tpl');
        break;
}
?>
