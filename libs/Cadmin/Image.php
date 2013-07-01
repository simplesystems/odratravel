<?php

class ImageMagick {

    public function convertToPng($file = null, $path = null) {

        $image = new \Imagick($file);
        $image->setImageFormat('png');
        $image->writeimage($path);
    }

    public function convertTojpg($file = null, $path = null) {

        $image = new \Imagick($file);
        $image->setImageFormat('jpg');
        $image->writeimage($path);
    }

    /**
     * Resize image by smaller size to given params
     * 
     * @param type $file
     * @param type $height
     * @param type $width
     */
    public function resize($file = null, $height = 160, $width = 160) {

        $image = new \Imagick();
        $image->readimage($file);
//        $iheight = $image->getimageheight();
//        $iwidth = $image->getimagewidth();
//        if ($iheight > $iwidth) {
//            $image->thumbnailimage($width, 0 , false);
//        }
//        if ($iwidth > $iheight) {
//            $image->thumbnailimage($width, 0, false);
//        }
//        if ($iheight === $iwidth) {
//            $image->thumbnailimage($width, $height, false);
//        }


        $w = $image->getimagewidth();
        $h = $image->getimageheight();
        $gcd = $this->_getGCD($w, $h, $height, $width);
        $tw = ceil($w / $gcd);
        $th = ceil($h / $gcd);
        if ($tw < $width) {
            $gcd = $this->_getGCD($w, 0, $height, $width);
            $tw = ceil($w / $gcd);
            $th = ceil($h / $gcd);
        } else if ($th < $height) {
            $gcd = $this->_getGCD(0, $h, $height, $width);
            $tw = ceil($w / $gcd);
            $th = ceil($h / $gcd);
        }
        $image->resizeimage($tw, $th, Imagick::FILTER_LANCZOS, 1);
        $image->writeimage($file);
    }

    private function _getGCD($a, $b, $h, $w) {
        $source = max(array($a, $b));
        $x = $source / $w;
        $y = $source / $h;
        return min(array($x, $y));
    }

    /**
     * Crop image by given params starting from left top corner
     * 
     * @param type $file
     * @param type $width
     * @param type $height
     */
    public function crop($file = null, $height = 160, $width = 160) {

        $image = new \Imagick();
        $image->readimage($file);

        $image->cropimage($width, $height, 0, 0);
        $image->writeimage($file);
    }

    /**
     * returm image size
     * 
     * @param type $file
     * @return type
     */
    public function getSize($file = null) {

        $image = new \Imagick();
        $image->readimage($file);

        $iheight = $image->getimageheight();
        $iwidth = $image->getimagewidth();
        return(array('x' => $iwidth, 'y' => $iheight));
    }

}
