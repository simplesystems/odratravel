<?php

define('DB_HOST', 'localhost');
define('DB_USER', 'wlf');
define('DB_PWD', 'wlf');
define('DB', 'odratravel');


define('SMARTY_DIR', '../libs/smarty/');
define('tplDir', '../public/templates/');
define('jsDir', 'js/');
define('cssDir', 'css/');
define('imgDir', '/img/');
define('cfgDir', '../config/');

require(SMARTY_DIR . 'Smarty.class.php');
include '../libs/Cadmin/Cadmin.php';
include '../libs/Cadmin/Image.php';

$smarty = new Smarty;
$smarty->setConfigDir(cfgDir);
$smarty->setTemplateDir(tplDir);
$smarty->setCompileDir('../cache/templates_c');
$smarty->setCacheDir('../cache');
//$smarty->force_compile = true;
$smarty->debugging = true;
$smarty->caching = true;
$smarty->cache_lifetime = 120;

$smarty->assign('__imgDir', imgDir);
$smarty->assign('__cssDir', cssDir);
$smarty->assign('__jsDir', jsDir);

$cadmin = new Cadmin;
$smarty->assign('cadminCss', $cadmin->loadCss());
$smarty->assign('cadminJs', $cadmin->loadJs());
