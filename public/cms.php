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
$cms = new CMS($smarty, $cadmin, $lang);
$cms->init();
$temp = $cms->getSettings();
if ($_POST) {
    $cms->send($_POST);
}
$cms->display($temp);

class CMS {

    protected $_cadmin;
    protected $_smarty;
    protected $_db;
    protected $_lang;

    public function __construct($smarty, $cadmin, $lang) {
        $this->_cadmin = $cadmin;
        $this->_smarty = $smarty;
        $this->_lang = $lang;
    }

    public function init() {


        $pageView = $this->_cadmin->getSettings();
        $menu = $this->_cadmin->getMenu();
        $this->_smarty->assign('pageView', unserialize($pageView));
        $this->_smarty->assign('menuItems', $menu);
        $this->_smarty->assign('lang', $_SESSION['lang']);
        $this->_db = $this->_cadmin->getDatabase();
    }

    public function getSettings() {

        $site = isset($_GET["site"]) ? $_GET["site"] : '';

        $s = $this->_db->findPageByRoute('/strona/' . $site);
        if (!($s)) {
            $s = $this->_db->findPageByRoute('/menu/' . $site);
        }
        if (!($s)) {
            $this->_smarty->display('error.tpl');
            die();
        }
        $lang = $this->_lang;
        $id = $s['id'];
        $template = $s['template'];
        if ($template == '') {
            $template = 'default';
        }
        if ($site === 'kontakt') {
            $template = 'kontakt';
        }
        $this->_smarty->assign('id', $id);

        $imageView = $this->_cadmin->getViewImage();
        $videoView = $this->_cadmin->getViewVideo();
        $textView = $this->_cadmin->getViewTexts();
        $listView = $this->_cadmin->getViewLists();


        if (!(isset($textView['headerphone_' . $lang]))) {
            $headerphone = array(
                'key' => 'headerphone_' . $lang,
                'md5' => '',
                'value' => '<p><strong>+48 91 421 05 30</strong></p><p><a href="mailto:odratravel@odratravel.pl">odratravel@odratravel.pl</a></p>'
            );
        } else {
            $headerphone = $textView['headerphone_' . $lang];
        }
        if (!(isset($textView['kontaktdata_' . $lang]))) {
            $kontaktdata = array(
                'key' => 'kontaktdata_' . $lang,
                'md5' => '',
                'value' => '<p><b>B.T. Odra Travel</b></p><p>ul. Piłsudskiego 34</p><p>70-423 Szczecin</p><br /><p>Tel.: +48 91 421 05 30</p><p>Fax: +48 91 421 13 55</p><p>E-Mail: <a href="mailto:odratravel@odratravel.pl">odratravel@odratravel.pl</a></p>'
            );
        } else {
            $kontaktdata = $textView['kontaktdata_' . $lang];
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





        if (!(isset($listView['templatelist_' . $id . '_' . $lang]))) {
            $templatelist = array(
                'key' => 'templatelist_' . $id . '_' . $lang,
                'md5' => '',
                'table' => array(
                    0 => array(0 => 'miejsce',
                        1 => 'szczecin'),
                    1 => array(0 => 'dlugość pobytu',
                        1 => '3 dni'),
                    2 => array(0 => 'typ dojazdu',
                        1 => 'samolot'),
                    3 => array(0 => 'data wyjazdu',
                        1 => 'jutro'),
                    4 => array(0 => 'data powrotu',
                        1 => '2050'),
                    5 => array(0 => 'wyżywienie',
                        1 => 'All inclusive')
                )
            );
        } else {
            if (is_array($listView['templatelist_' . $id . '_' . $lang]['value'])) {
                $table = $listView['templatelist_' . $id . '_' . $lang]['value'];
            } else {
                $table = unserialize($listView['templatelist_' . $id . '_' . $lang]['value']);
            }

            $templatelist = array(
                'key' => 'templatelist_' . $id . '_' . $lang,
                'md5' => $listView['templatelist_' . $id . '_' . $lang]['md5'],
                'table' => $table['table']
            );
            if (isset($table['thead'])) {
                $templatelist['thead'] = $table['thead'];
            }
        }
//        echo '<pre>';
//        var_dump($templatelist);
//        die();
        if (!(isset($imageView['templateimage_' . $id . '_' . $lang]))) {
            $templateimage = array(
                'key' => 'templateimage_' . $id . '_' . $lang,
                'md5' => '',
                'src' => '/files/image/resized/1/220/148/image.jpg'
            );
        } else {
            $expl = explode('/', $imageView['templateimage_' . $id . '_' . $lang][0]['src']);
            $expl[5] = '220';
            $expl[6] = '148';
            $expl = implode('/', $expl);
            $imageView['templateimage_' . $id . '_' . $lang][0]['src'] = $expl;
            $templateimage = $imageView['templateimage_' . $id . '_' . $lang][0];
        }
        if (!(isset($imageView['templatebackground_' . $id . '_' . $lang]))) {
            $templatebackground = array(
                'key' => 'templatebackground_' . $id . '_' . $lang,
                'md5' => '',
                'src' => '/files/image/resized/42/1400/411/image.jpg'
            );
        } else {
            $expl = explode('/', $imageView['templatebackground_' . $id . '_' . $lang][0]['src']);
            $expl[5] = '1400';
            $expl[6] = '411';
            $expl = implode('/', $expl);
            $imageView['templatebackground_' . $id . '_' . $lang][0]['src'] = $expl;
            $templatebackground = $imageView['templatebackground_' . $id . '_' . $lang][0];
        }
        if (!(isset($imageView['templateimage2_' . $id . '_' . $lang]))) {
            $templateimage2 = array(
                'key' => 'templateimage2_' . $id . '_' . $lang,
                'md5' => '',
                'src' => '/files/image/resized/2/220/148/image.jpg'
            );
        } else {
            $expl = explode('/', $imageView['templateimage2_' . $id . '_' . $lang][0]['src']);
            $expl[5] = '220';
            $expl[6] = '148';
            $expl = implode('/', $expl);
            $imageView['templateimage_' . $id . '_' . $lang][0]['src'] = $expl;
            $templateimage2 = $imageView['templateimage2_' . $id . '_' . $lang][0];
        }
        if (!(isset($textView['templatetitle_' . $id . '_' . $lang]))) {
            $templatetitle = array(
                'key' => 'templatetitle_' . $id . '_' . $lang,
                'md5' => '',
                'value' => 'Tytuł'
            );
        } else {
            $templatetitle = $textView['templatetitle_' . $id . '_' . $lang];
        }

        for ($i = 0; $i <= 6; $i++) {
            if (!(isset($textView['templatetext' . $i . '_' . $id . '_' . $lang]))) {
                $templatetext[$i] = array(
                    'key' => 'templatetext' . $i . '_' . $id . '_' . $lang,
                    'md5' => '',
                    'value' => '<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p> '
                );
            } else {
                $templatetext[$i] = $textView['templatetext' . $i . '_' . $id . '_' . $lang];
            }
        }
        for ($i = 0; $i <= 5; $i++) {
            if (!(isset($textView['templatemenu' . $i . '_' . $id . '_' . $lang]))) {
                $templatemenu[$i] = array(
                    'key' => 'templatemenu' . $i . '_' . $id . '_' . $lang,
                    'md5' => '',
                    'value' => 'wpis'
                );
            } else {
                $templatemenu[$i] = $textView['templatemenu' . $i . '_' . $id . '_' . $lang];
            }
        }

        if (!(isset($textView['templateprice_' . $id . '_' . $lang]))) {
            $templateprice = array(
                'key' => 'templateprice_' . $id . '_' . $lang,
                'md5' => '',
                'value' => '1000zł /os'
            );
        } else {
            $templateprice = $textView['templateprice_' . $id . '_' . $lang];
        }
        if (!(isset($textView['templatepricedel_' . $id . '_' . $lang]))) {
            $templatepricedel = array(
                'key' => 'templatepricedel_' . $id . '_' . $lang,
                'md5' => '',
                'value' => '1999zł'
            );
        } else {
            $templatepricedel = $textView['templatepricedel_' . $id . '_' . $lang];
        }
        if (!(isset($textView['templatecode_' . $id . '_' . $lang]))) {
            $templatecode = array(
                'key' => 'templatecode_' . $id . '_' . $lang,
                'md5' => '',
                'value' => '1231231231'
            );
        } else {
            $templatecode = $textView['templatecode_' . $id . '_' . $lang];
        }
        if (!(isset($textView['templatestars_' . $id . '_' . $lang]))) {
            $templatestars = array(
                'key' => 'templatestars_' . $id . '_' . $lang,
                'md5' => '',
                'value' => '******'
            );
        } else {
            $templatestars = $textView['templatestars_' . $id . '_' . $lang];
        }
//echo'<pre>';
//var_dump($imageView['templategallery_' . $id]);
//die();
        if (isset($imageView['templategallery_' . $id . '_' . $lang])) {
            $templategallery = array(
                'key' => $imageView['templategallery_' . $id . '_' . $lang][0]['key'],
                'md5' => $imageView['templategallery_' . $id . '_' . $lang][0]['md5']);


            foreach ($imageView['templategallery_' . $id . '_' . $lang] as $ig) {
                $expl = explode('/', $ig['src']);
                $expl[5] = '326';
                $expl[6] = '217';
                $expl = implode('/', $expl);

                $expl2 = explode('/', $ig['src']);
                $expl2[5] = '640';
                $expl2[6] = '480';
                $expl2 = implode('/', $expl2);

                $templategallery['value'][] = array(
                    'key' => 'templategallery_' . $id . '_' . $lang,
                    'src' => $ig['src'],
                    'src2' => $expl,
                    'src3' => $expl2,
                    'link' => '',
                    'desc' => '',
                    'text' => '',
                    'md5' => $ig['md5'],
                    'pos' => '1');
            }
        } else {
            $templategallery = array(
                'key' => 'templategallery_' . $id . '_' . $lang,
                'md5' => '',
            );
            $templategallery['value'][0] = array(
                'key' => 'templategallery_' . $id . '_' . $lang,
                'src' => '/files/image/resized/37/327/217/image.jpg',
                'src2' => '/files/image/resized/37/327/217/image.jpg',
                'src3' => '/files/image/resized/37/640/480/image.jpg',
                'link' => '',
                'desc' => '',
                'text' => '',
                'md5' => '',
                'pos' => '1');
            $templategallery['value'][1] = array(
                'key' => 'templategallery_' . $id . '_' . $lang,
                'src' => '/files/image/resized/41/327/217/image.jpg',
                'src2' => '/files/image/resized/41/327/217/image.jpg',
                'src3' => '/files/image/resized/41/640/480/image.jpg',
                'link' => '',
                'desc' => '',
                'text' => '',
                'md5' => '',
                'pos' => '2');
            $templategallery['value'][3] = array(
                'key' => 'templategallery_' . $id . '_' . $lang,
                'src' => '/files/image/resized/37/327/217/image.jpg',
                'src2' => '/files/image/resized/37/327/217/image.jpg',
                'src3' => '/files/image/resized/37/640/480/image.jpg',
                'link' => '',
                'desc' => '',
                'text' => '',
                'md5' => '',
                'pos' => '1');
            $templategallery['value'][4] = array(
                'key' => 'templategallery_' . $id . '_' . $lang,
                'src' => '/files/image/resized/41/327/217/image.jpg',
                'src2' => '/files/image/resized/41/327/217/image.jpg',
                'src3' => '/files/image/resized/41/640/480/image.jpg',
                'link' => '',
                'desc' => '',
                'text' => '',
                'md5' => '',
                'pos' => '2');
        }
        $pages = $this->_cadmin->getPages();
//echo '<pre>';
//var_dump($pages);
        $this->_smarty->assign('menu_left', $pages);
        $this->_smarty->assign('templateimage', $templateimage);
        $this->_smarty->assign('templatebackground', $templatebackground);
        $this->_smarty->assign('templateimage2', $templateimage2);
        $this->_smarty->assign('templatetitle', $templatetitle);
        $this->_smarty->assign('templateprice', $templateprice);
        $this->_smarty->assign('templatepricedel', $templatepricedel);
        $this->_smarty->assign('templatecode', $templatecode);
        $this->_smarty->assign('templategallery', $templategallery);
        $this->_smarty->assign('templatestars', $templatestars);
        $this->_smarty->assign('templatelist', $templatelist);
        $this->_smarty->assign('headerphone', $headerphone);
        $this->_smarty->assign('menuphone', $menuphone);
        $this->_smarty->assign('footermenu', $footermenu);
        $this->_smarty->assign('kontaktdata', $kontaktdata);

        for ($i = 0; $i <= 6; $i++) {
            $this->_smarty->assign('templatetext' . $i, $templatetext[$i]);
        }
        for ($i = 0; $i <= 5; $i++) {
            $this->_smarty->assign('templatemenu' . $i, $templatemenu[$i]);
        }
        return $template;
    }

    public function display($template) {
        $this->_smarty->display($template . '.tpl');
    }

    public function send($post) {

        if ($post['name'] === '' || $post['email'] === '' || $post['comments'] === '') {
            $this->_smarty->assign('sent', 'no');
        } else {
            $this->_smarty->assign('sent', 'yes');
            $message = 'Wiadomość od:' . $post['email'] . '. <br /> ' . $post['comments'] . '.<br /> . Od:' . $post['name'] . '<br />' . 'telefon:' . $post['telephone'];
            mail(email, 'Wiadomośc z serwisu OdraTravel', $message);
        }
    }

}

?>
