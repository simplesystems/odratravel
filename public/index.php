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
        case('eng'):
            $_SESSION['lang'] = 2;
            break;
        case('de'):
            $_SESSION['lang'] = 3;
            break;
    }
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
$textView = $cadmin->getViewTexts();
//if (isset($imageView['menu'])) {
//    
//}
//var_dump($imageView['index_banner']);
//die();
if (isset($imageView['index_banner'])) {
    $banner = array(
        'key' => $imageView['index_banner'][0]['key'],
        'md5' => $imageView['index_banner'][0]['md5'],
        'src' => '/files/image/resized/' . $imageView['index_banner'][0]['src'][0] . '/710/137/image.png',
        'link' => $imageView['index_banner'][0]['src'][1]);
} else {
    $banner = array(
        'key' => 'index_banner',
        'md5' => '',
        'src' => '/files/image/resized/46/710/137/image.png',
        'link' => '###');
}
if (isset($imageView['menu_map'])) {
    $expl = explode('/', $imageView['menu_map'][0]['src']);
    $expl[5] = '224';
    $expl[6] = '185';
    $expl = implode('/', $expl);
    $imageView['menu_map'][0]['src'] = $expl;
    $menu_map = $imageView['menu_map'][0];
} else {
    $menu_map = array(
        'key' => 'menu_map',
        'md5' => '',
        'src' => '/files/image/resized/52/224/185/image.png');
}
for ($i = 0; $i <= 7; $i++) {
    if (!(isset($textView['footermenu_' . $i . '_' . $lang]))) {

        switch ($i) {
            case 0:
                $footermenu[$i] = array(
                    'key' => 'footermenu_' . $i . '_' . $lang,
                    'md5' => '',
                    'value' => '<p>Odra Travel sp. z o.o.</p> '
                );
                break;
            case 1:
                $footermenu[$i] = array(
                    'key' => 'footermenu_' . $i . '_' . $lang,
                    'md5' => '',
                    'value' => '<p>ul Piłsudskiego 34</p> '
                );
                break;
            case 2:
                $footermenu[$i] = array(
                    'key' => 'footermenu_' . $i . '_' . $lang,
                    'md5' => '',
                    'value' => '<p>70-423 Szczecin</p> '
                );
                break;
            case 3:
                $footermenu[$i] = array(
                    'key' => 'footermenu_' . $i . '_' . $lang,
                    'md5' => '',
                    'value' => '<p>tel.: +48 91 421 05 30</p> '
                );
                break;
            case 4:
                $footermenu[$i] = array(
                    'key' => 'footermenu_' . $i . '_' . $lang,
                    'md5' => '',
                    'value' => '<p>fax: +48 91 421 13 55</p> '
                );
                break;
            case 5:
                $footermenu[$i] = array(
                    'key' => 'footermenu_' . $i . '_' . $lang,
                    'md5' => '',
                    'value' => '<p><a href="mailto:odratravel@odratravel.pl">odratravel@odratravel.pl</a></p> '
                );
                break;
            case 6:
                $footermenu[$i] = array(
                    'key' => 'footermenu_' . $i . '_' . $lang,
                    'md5' => '',
                    'value' => '<p>NIP: 8522152351</p> '
                );
                break;
            case 7:
                $footermenu[$i] = array(
                    'key' => 'footermenu_' . $i . '_' . $lang,
                    'md5' => '',
                    'value' => '<p>pn.-pt. w godz. 9-17:00</p> '
                );
                break;
        }
    } else {
        $footermenu[$i] = $textView['footermenu_' . $i . '_' . $lang];
    }
}

if (!(isset($textView['headerphone_' . $lang]))) {
    $headerphone = array(
        'key' => 'headerphone_' . $lang,
        'md5' => '',
        'value' => '<p><strong>+48 91 421 05 30</strong></p><p><a href="mailto:odratravel@odratravel.pl">odratravel@odratravel.pl</a></p>'
    );
} else {
    $headerphone = $textView['headerphone_' . $lang];
}
if (!(isset($textView['menuphone_' . $lang]))) {
    $menuphone = array(
        'key' => 'menuphone_' . $lang,
        'md5' => '',
        'value' => '<p>+48 <b>91 421 05 30</b></p><p><a href="mailto:odratravel@odratravel.pl">odratravel@odratravel.pl</a></p><p class="info"> od 9 do 16:00</p>   '
    );
} else {
    $menuphone = $textView['menuphone_' . $lang];
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
$smarty->assign('headerphone', $headerphone);
$smarty->assign('menuphone', $menuphone);
$smarty->assign('footermenu', $footermenu);
$smarty->assign('menu_map', $menu_map);
$smarty->display('index.tpl');