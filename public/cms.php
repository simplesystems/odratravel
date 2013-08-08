<?php

include '../configs/config.php';
include '../libs/Cadmin/database.php';
$site = isset($_GET["site"]) ? $_GET["site"] : '';

$db = $cadmin->getDatabase();
//$db->addFile($_SERVER['DOCUMENT_ROOT']. '/pictures/gallery/gallery_m_1.jpg');

$s = $db->findPageByRoute('/strona/' . $site);
if (!($s)) {
    $smarty->display('error.tpl');
    die();
}
$id = $s['id'];
$template = $s['template'];
if ($template == '') {
    $template = 'default';
}
$smarty->assign('id', $id);

$imageView = $cadmin->getViewImage();
$videoView = $cadmin->getViewVideo();
$textView = $cadmin->getViewTexts();

if (!(isset($imageView['templateimage_' . $id]))) {
    $templateimage = array(
        'key' => 'templateimage_' . $id,
        'md5' => '',
        'src' => '/files/image/resized/1/220/148/image.jpg'
    );
} else {
    $expl = explode('/', $imageView['templateimage_' . $id][0]['src']);
    $expl[5] = '220';
    $expl[6] = '148';
    $expl = implode('/', $expl);
    $imageView['templateimage_' . $id][0]['src'] = $expl;
    $templateimage = $imageView['templateimage_' . $id][0];
}
if (!(isset($imageView['templateimage2_' . $id]))) {
    $templateimage2 = array(
        'key' => 'templateimage2_' . $id,
        'md5' => '',
        'src' => '/files/image/resized/2/220/148/image.jpg'
    );
} else {
    $expl = explode('/', $imageView['templateimage2_' . $id][0]['src']);
    $expl[5] = '220';
    $expl[6] = '148';
    $expl = implode('/', $expl);
    $imageView['templateimage_' . $id][0]['src'] = $expl;
    $templateimage2 = $imageView['templateimage2_' . $id][0];
}
if (!(isset($textView['templatetitle_' . $id]))) {
    $templatetitle = array(
        'key' => 'templatetitle_' . $id,
        'md5' => '',
        'value' => '<p>Tytuł</p>'
    );
} else {
    $templatetitle = $textView['templatetitle_' . $id];
}

for ($i = 0; $i <= 6; $i++) {
    if (!(isset($textView['templatetext' . $i . '_' . $id]))) {
        $templatetext[$i] = array(
            'key' => 'templatetext' . $i . '_' . $id,
            'md5' => '',
            'value' => '<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p> '
        );
    } else {
        $templatetext[$i] = $textView['templatetext' . $i . '_' . $id];
    }
}
for ($i = 0; $i <= 5; $i++) {
    if (!(isset($textView['templatemenu' . $i . '_' . $id]))) {
        $templatemenu[$i] = array(
            'key' => 'templatemenu' . $i . '_' . $id,
            'md5' => '',
            'value' => '<p>wpis</p>'
        );
    } else {
        $templatemenu[$i] = $textView['templatemenu' . $i . '_' . $id];
    }
}

if (!(isset($textView['templateprice_' . $id]))) {
    $templateprice = array(
        'key' => 'templateprice_' . $id,
        'md5' => '',
        'value' => '<p>1000zł /os</p>'
    );
} else {
    $templateprice = $textView['templateprice_' . $id];
}
if (!(isset($textView['templatepricedel_' . $id]))) {
    $templatepricedel = array(
        'key' => 'templatepricedel_' . $id,
        'md5' => '',
        'value' => '<p>1999zł</p>'
    );
} else {
    $templatepricedel = $textView['templatepricedel_' . $id];
}
if (!(isset($textView['templatecode_' . $id]))) {
    $templatecode = array(
        'key' => 'templatecode_' . $id,
        'md5' => '',
        'value' => '<p>1231231231</p>'
    );
} else {
    $templatecode = $textView['templatecode_' . $id];
}
//echo'<pre>';
//var_dump($imageView['templategallery_' . $id]);
//die();
if (isset($imageView['templategallery_' . $id])) {
    $templategallery = array(
        'key' => $imageView['templategallery_' . $id][0]['key'],
        'md5' => $imageView['templategallery_' . $id][0]['md5']);
    foreach ($imageView['templategallery_' . $id] as $ig) {
        $templategallery['value'][] = array(
        'key' => 'templategallery_' . $id,
        'src' => $ig['src'],
        'link' => '',
        'desc' => '',
        'text' => '',
        'md5' => $ig['md5'] ,
        'pos' => '1');
    }
} else {
    $templategallery = array(
        'key' => 'templategallery_' . $id,
        'md5' => '',
    );
    $templategallery['value'][0] = array(
        'key' => 'templategallery_' . $id,
        'src' => '/files/image/resized/37/327/217/image.jpg',
        'link' => '',
        'desc' => '',
        'text' => '',
        'md5' => '',
        'pos' => '1');
    $templategallery['value'][1] = array(
        'key' => 'templategallery_' . $id,
        'src' => '/files/image/resized/41/327/217/image.jpg',
        'link' => '',
        'desc' => '',
        'text' => '',
        'md5' => '',
        'pos' => '2');
    $templategallery['value'][3] = array(
        'key' => 'templategallery_' . $id,
        'src' => '/files/image/resized/37/327/217/image.jpg',
        'link' => '',
        'desc' => '',
        'text' => '',
        'md5' => '',
        'pos' => '1');
    $templategallery['value'][4] = array(
        'key' => 'templategallery_' . $id,
        'src' => '/files/image/resized/41/327/217/image.jpg',
        'link' => '',
        'desc' => '',
        'text' => '',
        'md5' => '',
        'pos' => '2');
}
$smarty->assign('templateimage', $templateimage);
$smarty->assign('templateimage2', $templateimage2);
$smarty->assign('templatetitle', $templatetitle);
$smarty->assign('templateprice', $templateprice);
$smarty->assign('templatepricedel', $templatepricedel);
$smarty->assign('templatecode', $templatecode);
$smarty->assign('templategallery', $templategallery);

for ($i = 0; $i <= 6; $i++) {
    $smarty->assign('templatetext' . $i, $templatetext[$i]);
}
for ($i = 0; $i <= 5; $i++) {
    $smarty->assign('templatemenu' . $i, $templatemenu[$i]);
}









$smarty->display($template . '.tpl');


//        $em = $this->getServiceLocator()->get('doctrine.entitymanager.orm_default');
//        $s = $em->getRepository(\Cadmin\Entity\CadminPages::ENTITY_NAME)->findOneBy(array('route' => $route));
//        if (!($s)) {
//            $view = new ViewModel();
//            $view->setTemplate('error/index');
//            $view->setTerminal(true);
//            return $view;
//        }
//
//        $cadmin = $this->getServiceLocator()->get('CadminService');
//        $textView = $cadmin->getTextsView();
//        $imageView = $cadmin->getImageView();
//
//        $pages = $cadmin->getPages();
//        $recipes = array();
//        $recipe = array();
//        foreach ($pages as $page) {
//            if (0 === strpos($page['route'], '/Recipes/')) {
//                $recipes[] = $page;
//            }
//        };
//        if (count($recipes) > 4) {
//            $numbers = range(0, count($recipes) - 1);
//            shuffle($numbers);
//            $numbers = array_slice($numbers, 0, 4);
//            foreach ($numbers as $num) {
//                $recipe[] = $recipes[$num];
//            }
//        } else {
//            $recipe = $recipes;
//        }
//        return new ViewModel(array(
//            'texts' => $textView,
//            'images' => $imageView,
//            'id' => $s->id,
//            'recipes' => $recipe
//        ));
?>
