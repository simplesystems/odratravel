<?php

include '../libs/Cadmin/Cadmin.php';
include '../libs/Smarty/Smarty.class.php';

$cadmin = new Cadmin;
$smarty = new Smarty;

if ($_GET['check'] != null) {
    $smarty->configLoad('../configs/config.conf', 'Database');
    echo $smarty->getVariable('host');
    $cadmin->check();
}
?>
