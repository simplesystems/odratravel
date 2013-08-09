<?php

include '../configs/config.php';
include '../libs/Cadmin/database.php';
require_once '../libs/Gate/ep3gate.class.php';
include '../configs/ep3.php';

$pageView = $cadmin->getSettings();
$menu = $cadmin->getMenu();
$smarty->assign('pageView', unserialize($pageView));
$smarty->assign('menuItems', $menu);

$site = isset($_GET["site"]) ? $_GET["site"] : '';
switch ($site) {
    case'Kontakt.html':
        include './kontakt.php';
        break;
    default:
        
        $imageView = $cadmin->getViewImage();
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
        $smarty->display('index.tpl');
        break;
}
?>
