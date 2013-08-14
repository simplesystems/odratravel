<?php

include '../configs/config.php';
include '../libs/Cadmin/database.php';
require_once '../libs/Gate/ep3gate.class.php';
include '../configs/ep3.php';



if (isset($_GET['lang'])) {
    switch ($_GET['lang']) {
        case('pl'):
            $_SESSION['lang'] = 1;
            break;
    }
}
if (isset($_GET['lang'])) {
    switch ($_GET['lang']) {
        case('eng'):
            $_SESSION['lang'] = 2;
            break;
    }
}
if (isset($_GET['lang'])) {
    switch ($_GET['lang']) {
        case('de'):
            $_SESSION['lang'] = 3;
            break;
    }
}
if (isset($_SESSION['lang'])) {
    $lang = $_SESSION['lang'];
} else {
    $lang = 1;
    $_SESSION['lang'] = 1;
}
include '../configs/lang.php';
$pageView = $cadmin->getSettings();
$menu = $cadmin->getMenu();
$smarty->assign('pageView', unserialize($pageView));
$smarty->assign('menuItems', $menu);
$smarty->assign('lang', $lang);


$pages = $cadmin->getPages();
//echo '<pre>';
//var_dump($pages);
$smarty->assign('menu_left', $pages);


$imageView = $cadmin->getViewImage();

//if (isset($imageView['menu'])) {
//    
//}
//var_dump($imageView['index_banner']);
//die();
if (isset($imageView['index_banner'])) {

    $banner = array(
        'key' => $imageView['index_banner'][0]['key'],
        'md5' => $imageView['index_banner'][0]['md5'],
        'src' => '/files/image/resized/'. $imageView['index_banner'][0]['src'][0]. '/710/137/image.png',
        'link' => $imageView['index_banner'][0]['src'][1]);
} else {
    $banner = array(
        'key' => 'index_banner',
        'md5' => '',
        'src' => '/files/image/resized/46/710/137/image.png',
        'link' => '###');
}

if (isset($imageView['main_gallery'])) {
    $gallery = array(
        'key' => $imageView['main_gallery'][0]['key'],
        'md5' => $imageView['main_gallery'][0]['md5']);
    foreach ($imageView['main_gallery'] as $ig) {
        $gallery['value'][] = array(
            'key' => 'main_gallery',
            'src' => $ig['src'],
            'link' => '',
            'desc' => '',
            'text' => '',
            'md5' => $ig['md5'],
            'pos' => '1');
    }
} else {
    $gallery = array(
        'key' => 'main_gallery',
        'md5' => '',
    );
    $gallery['value'][0] = array(
        'key' => 'main_gallery',
        'src' => '/files/image/resized/42/1400/411/image.jpg',
        'link' => '',
        'desc' => '',
        'text' => '',
        'md5' => '',
        'pos' => '1');
    $gallery['value'][1] = array(
        'key' => 'main_gallery',
        'src' => '/files/image/resized/43/1400/411/image.jpg',
        'link' => '',
        'desc' => '',
        'text' => '',
        'md5' => '',
        'pos' => '2');
    $gallery['value'][3] = array(
        'key' => 'main_gallery',
        'src' => '/files/image/resized/42/1400/411/image.jpg',
        'link' => '',
        'desc' => '',
        'text' => '',
        'md5' => '',
        'pos' => '1');
}
$smarty->assign('main_gallery', $gallery);
$smarty->assign('index_banner', $banner);
$smarty->display('index.tpl');