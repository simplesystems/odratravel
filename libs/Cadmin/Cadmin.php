<?php

class Cadmin {

    private static $_db;

    private function getDBO() {
        if (!self::$_db)
            self::$_db = new PDO('mysql:host=' . DB_HOST . ';dbname=' . DB, DB_USER, DB_PWD);
        return self::$_db;
    }

    public function loadJs() {
        $js = array();;
        $js[] = 'vendor/jquery-ui-1.10.3.min.js';
        $js[] = 'vendor/plupload/plupload.full.js';
        $js[] = 'vendor/plupload/jquery.plupload.queue/jquery.plupload.queue.js';
        $js[] = 'vendor/tinymce/tinymce.min.js';
        $js[] = 'vendor/modernizr-2.6.2.min.js';
        $js[] = 'cadmin/cadmin-plupload.js';
        $js[] = 'cadmin/cadmin-tinymce.js';
        $js[] = 'cadmin/cadmin-history.js';
        $js[] = 'cadmin/cadmin.js';
        $js[] = 'cadmin/cadmin-fileManager.js';
        $js[] = 'cadmin/cadmin-save.js';
        $js[] = 'cadmin/cadmin-draw.js';
        $js[] = 'cadmin/cadmin-session.js';
        $js[] = 'cadmin/cadmin-input.js';
        $js[] = 'cadmin/cadmin-login.js';
        $js[] = 'cadmin/cadmin-editor.js';
        $js[] = 'cadmin/cadmin-url.js';
        $js[] = 'cadmin/cadmin-replace.js';
        $js[] = 'cadmin/cadmin-scale.js';

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

    public function check() {

        print json_encode('success');
        die();
    }

}
