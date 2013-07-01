<?php

include '../libs/Cadmin/Cadmin.php';
include '../libs/Smarty/Smarty.class.php';

$cadmin = new Cadmin;
$smarty = new Smarty;

//switch ($_GET) {
//    case 'check':
//        echo 'sd';
//        $cadmin->check;
//        break;
//}
if ($_GET['check'] != null) {
    $smarty->configLoad('../configs/config.conf', 'Database');
    echo $smarty->getVariable('host');
    
    //echo DB;
    $cadmin->check();
}
?>
