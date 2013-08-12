<?php

class Cadmin {

    private static $instance = FALSE;

    public function getDatabase() {
        if (!self::$instance) {
            self::$instance = new Database();
        }
        return self::$instance;
    }

    public function loadJs() {
        $js = array();
        $js[] = 'vendor/jquery-ui-1.10.3.min.js';
        $js[] = 'vendor/plupload/plupload.full.js';
        $js[] = 'vendor/plupload/jquery.plupload.queue/jquery.plupload.queue.js';
        $js[] = 'vendor/tinymce/tinymce.min.js';
        $js[] = 'vendor/modernizr-2.6.2.min.js';
        $js[] = 'vendor/jsTree/jquery.cookie.js';
        $js[] = 'vendor/jsTree/jquery.jstree.js';
        $js[] = 'vendor/jsTree/jquery.hotkeys.js';
        $js[] = 'cadmin/cadmin-lang-pl.js';
        $js[] = 'cadmin/cadmin-tinymce.js';
        $js[] = 'cadmin/cadmin-history.js';
        $js[] = 'cadmin/cadmin-settings.js';
        $js[] = 'cadmin/cadmin-fileManager.js';
        $js[] = 'cadmin/cadmin-save.js';
        $js[] = 'cadmin/cadmin-session.js';
        $js[] = 'cadmin/cadmin-input.js';
        $js[] = 'cadmin/cadmin-draw.js';
        $js[] = 'cadmin/cadmin.js';
        $js[] = 'cadmin/cadmin-login.js';
        $js[] = 'cadmin/cadmin-editor.js';
        $js[] = 'cadmin/cadmin-url.js';
        $js[] = 'cadmin/cadmin-replace.js';
        $js[] = 'cadmin/cadmin-scale.js';
        $js[] = 'cadmin/cadmin-reload.js';
        $js[] = 'cadmin/cadmin-jstree.js';
        $js[] = 'cadmin/cadmin-menu-sort.js';
        $js[] = 'cadmin/cadmin-config.js';
        $js[] = 'cadmin/cadmin-plupload.js';
        $js[] = 'cadmin/cadmin-list.js';

        return $js;
    }

    public function loadCss() {
        $css = array();
        $css[] = 'cadmin/jquery.ui.plupload.css';
        $css[] = 'cadmin/jquery.plupload.queue.css';
        $css[] = 'cadmin/cadmin.css';
        $css[] = 'cadmin/jquery.ui.all.css';
        $css[] = 'cadmin/jquery.ui.autocomplete.css';

        return $css;
    }

    public function getSettings() {
        $database = $this->getDatabase();
        $settings = $database->fetchAll('cadmin_settings');
        $basePath = $_SERVER['REQUEST_URI'];
        $pageView = null;
        foreach ($settings as $set) {
            if ($set['cadmin_setting'] == $basePath) {
                $pageView = $set['cadmin_value'];
            }
            if ($pageView == null && $set['cadmin_setting'] == 'main_page') {
                $pageView = $set['cadmin_value'];
            }
        }
        return $pageView;
    }

    public function getMenu() {
        $database = $this->getDatabase();
        return $database->getMenu();
    }

    public function getViewImage() {
        $imageView = array();
        $database = $this->getDatabase();
        $images = $database->fetchAll('cadmin_image');
        foreach ($images as $image) {
            if ($image['cadmin_key'] == 'main_gallery') {
                $size = '/1400/411/';
            } elseif ($image['cadmin_key'] == 'hfghfg') {
                $size = '/255/255/';
            } else {
                $size = '/200/100/';
            }

            if (isset($_SESSION['gallery'][$image['cadmin_key']]['key'])) {
                if (!(isset($imageView[$image['cadmin_key']]))) {
                    $pos = 1;
                    foreach ($_SESSION['gallery'][$image['cadmin_key']]['data'] as $src) {
                        $path = '/files/image/resized/' . $src['image'] . $size . 'image.png';
                        if (isset($image['optional'])) {
                            $imageView[$image['cadmin_key']][] = array(
                                'key' => $_SESSION['gallery'][$image['cadmin_key']]['key'],
                                'src' => $path,
                                'link' => $src['link'],
                                'desc' => $src['desc'],
                                'text' => $src['text'],
                                'md5' => $_SESSION['gallery'][$image['cadmin_key']]['md5'],
                                'pos' => $pos);
                        } else {
                            $imageView[$image['cadmin_key']][] = array(
                                'key' => $_SESSION['gallery'][$image['cadmin_key']]['key'],
                                'src' => $path,
                                'link' => '',
                                'desc' => '',
                                'text' => '',
                                'md5' => $_SESSION['gallery'][$image['cadmin_key']]['md5'],
                                'pos' => $pos);
                        }
                    } $pos++;
                }
            } elseif (isset($_SESSION['image'][$image['cadmin_key']]['key'])) {
                if (!(isset($imageView[$image['cadmin_key']]))) {

                    $path = '/files/image/resized/' . $_SESSION['image'][$image['cadmin_key']]['data'] . $size . 'image.png';
                    $imageView[$image['cadmin_key']][] = array(
                        'key' => $_SESSION['image'][$image['cadmin_key']]['key'],
                        'src' => $path,
                        'md5' => $_SESSION['image'][$image['cadmin_key']]['md5'],
                        'pos' => 1);
                }
            } else {
                $path = '/files/image/resized/' . $image['cadmin_value'] . $size . 'image.jpg';
                $link = '';
                $desc = '';
                $text = '';
                if ($image['cadmin_optional']) {
                    $slidelink = unserialize($image['cadmin_optional']);
                    $link = $slidelink['link'];
                    $desc = $slidelink['desc'];
                    $text = $slidelink['text'];
                }
                $imageView[$image['cadmin_key']][] = array(
                    'key' => $image['cadmin_key'],
                    'src' => $path,
                    'md5' => $image['cadmin_md5'],
                    'pos' => $image['cadmin_pos'],
                    'link' => $link,
                    'desc' => $desc,
                    'text' => $text);
            }
        }
        
        if (isset($_SESSION['image'])) {
            foreach ($_SESSION['image'] as $img) {
                if (!(array_key_exists($img['key'], $imageView))) {
                    $path = '/files/image/resized/' . $img['value'] . $size . 'image.jpg';
                    $imageView[$img['key']][] = array(
                        'key' => $img['key'],
                        'src' => $path,
                        'md5' => $img['md5'],
                        'pos' => '',
                        'link' => '',
                        'desc' => '',
                        'text' => '');
                }
            }
        }
        if (isset($_SESSION['gallery'])) {
            foreach ($_SESSION['gallery'] as $img) {
                if (!(array_key_exists($img['key'], $imageView))) {
                    $pos = 0;
                    foreach ($_SESSION['gallery'][$img['key']]['value'] as $src) {

                        if ($img['key'] === 'main_gallery') {
                            $size = '/1400/411/';
                        }
                        $path = '/files/image/resized/' . $src['image'] . $size . 'image.jpg';
                        if (isset($image['optional'])) {
                            $imageView[$img['key']][] = array(
                                'key' => $_SESSION['gallery'][$img['key']]['key'],
                                'src' => $path,
                                'link' => $src['link'],
                                'desc' => $src['desc'],
                                'text' => $src['text'],
                                'md5' => $_SESSION['gallery'][$img['key']]['md5'],
                                'pos' => $pos);
                        } else {
                            $imageView[$img['key']][] = array(
                                'key' => $_SESSION['gallery'][$img['key']]['key'],
                                'src' => $path,
                                'link' => '',
                                'desc' => '',
                                'text' => '',
                                'md5' => $_SESSION['gallery'][$img['key']]['md5'],
                                'pos' => $pos);
                        }
                    } $pos++;
                }
            }
        }



        return $imageView;
    }

    public function getViewVideo() {

        $videoView = array();
        $database = $this->getDatabase();
        $videos = $database->fetchAll('cadmin_video');
        foreach ($videos as $vid) {
            if (isset($_SESSION[$vid['cadmin_key']]['key'])) {
                if (!(isset($videoView[$vid['cadmin_key']]))) {
                    foreach ($_SESSION[$vid['cadmin_key']]['data'] as $src) {
                        $videoView[$vid['cadmin_key']][] = array(
                            'key' => $_SESSION['video'][$vid['cadmin_key']]['key'],
                            'src' => $src['link'],
                            'desc' => $src['desc'],
                            'md5' => $_SESSION[$vid['cadmin_key']]['md5'],);
                    }
                }
            } else {
                $videoView[$vid['cadmin_key']][] = array(
                    'key' => $vid['cadmin_key'],
                    'src' => $vid['cadmin_value'],
                    'md5' => $vid['cadmin_md5'],
                    'desc' => $vid['cadmin_desc']);
            }
        };
        if (isset($_SESSION['video'])) {
            foreach ($_SESSION['video'] as $img) {

                if (!(array_key_exists($img['key'], $videoView))) {
                    $videoView[$img['key']] = $img;
                }
            }
        }

        return $videoView;
    }

    public function getViewTexts() {


        $textView = array();
        $database = $this->getDatabase();
        $texts = $database->fetchAll('cadmin_text');
        foreach ($texts as $text) {
            if (isset($_SESSION['text'][$text['cadmin_key']])) {
                $textView[$text['cadmin_key']] = array(
                    'key' => $_SESSION['text'][$text['cadmin_key']]['key'],
                    'value' => $_SESSION['text'][$text['cadmin_key']]['data'],
                    'md5' => $_SESSION['text'][$text['cadmin_key']]['md5']);
            } else {
                $textView[$text['cadmin_key']] = array(
                    'key' => $text['cadmin_key'],
                    'value' => $text['cadmin_value'],
                    'md5' => $text['cadmin_md5']);
            }
        }
        if (isset($_SESSION['text'])) {
            foreach ($_SESSION['text'] as $img) {
                if (!(array_key_exists($img['key'], $textView))) {
                    $textView[$img['key']] = $img;
                }
            }
        }


        return $textView;
    }
    public function getViewLists() {


        $listView = array();
        $database = $this->getDatabase();
        $lists = $database->fetchAll('cadmin_list');
        foreach ($lists as $list) {
            if (isset($_SESSION['list'][$list['cadmin_key']])) {
                $listView[$list['cadmin_key']] = array(
                    'key' => $_SESSION['list'][$list['cadmin_key']]['key'],
                    'value' => $_SESSION['list'][$list['cadmin_key']]['data'],
                    'md5' => $_SESSION['list'][$list['cadmin_key']]['md5']);
            } else {
                $listView[$list['cadmin_key']] = array(
                    'key' => $list['cadmin_key'],
                    'value' => $list['cadmin_value'],
                    'md5' => $list['cadmin_md5']);
            }
        }
        if (isset($_SESSION['list'])) {
            foreach ($_SESSION['list'] as $img) {
                if (!(array_key_exists($img['key'], $listView))) {
                    $listView[$img['key']] = $img;
                }
            }
        }


        return $listView;
    }

}
