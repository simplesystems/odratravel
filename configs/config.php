<?php

@session_start();
define('SMARTY_DIR', '../libs/Smarty/');
define('tplDir', '../public/templates/');
define('jsDir', '/js/');
define('cssDir', '/css/');
define('imgDir', '/img/');
define('cfgDir', '../config/');
define('email', 'mmagdziak@simple-systems.pl');

require(SMARTY_DIR . 'Smarty.class.php');
include '../libs/Cadmin/cadmin.php';

$smarty = new Smarty;
$smarty->setConfigDir(cfgDir);
$smarty->setTemplateDir(tplDir);
$smarty->setCompileDir('../cache/templates_c');
$smarty->setCacheDir('../cache');
$smarty->debugging = false;
if (substr_count(filter_input(INPUT_SERVER, 'HTTP_HOST'), 'local') || (isset($_SESSION['cadmin']) && $_SESSION['cadmin'])) {
    $smarty->caching = false;
} else {
    $smarty->caching = true;
}
$smarty->cache_lifetime = 120;

$smarty->assign('__imgDir', imgDir);
$smarty->assign('__cssDir', cssDir);
$smarty->assign('__jsDir', jsDir);
$cadmin = new Cadmin();
if (isset($_SESSION['cadmin']) && $_SESSION['cadmin']) {
    $smarty->assign('cadminCss', $cadmin->loadCss());
    $smarty->assign('cadminJs', $cadmin->loadJs());
}
