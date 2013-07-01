<?php

include '../configs/config.php';

$image = new Image;
$image->ImagesAction($_GET['path']);

class Image {

    public function ImagesAction($link) {


        $link = explode('/', $link);

        if (count($link) === 5) {
            $link = implode('/', $link);
            $this->_render_image($link);
        }
        if (count($link) === 7) {
            $width = $link[5];
            $height = $link[4];
            $file = $link[6];
            unset($link[4]);
            unset($link[5]);
            $cache = __DIR__ . '/../cache/' . $link[0] . '/' . $link[1]. '/' . $link[2]. '/' . $width .  '/'. $height;
            $path = implode('/', $link);
        }

        if (!(file_exists($cache. '/'. $file))) {
            mkdir($cache, 0755, true);
            copy(__DIR__ . '/' . $path,$cache . '/' . $file);
            $im = new ImageMagick;
            $im->resize($cache . '/'. $file, $width, $height);
            $im->crop($cache . '/'. $file, $width, $height);
            //$im->convertToPng($cache . '/' . $file, $cache . '/' . $file);
        }
        $this->_render_image($cache . '/'. $file);
    }

    protected function _render_image($file) {
        $handle = fopen($file, "rb");

        header("Content-type: image/jpeg");
        header('Content-Disposition: filename="image.jpg"');
        while (!feof($handle)) {
            $contents = fread($handle, 8192);
//$response->setContent($contents);
            echo $contents;
        }
        fclose($handle);
        exit;
    }

}

