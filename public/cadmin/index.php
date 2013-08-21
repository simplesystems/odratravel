<?php

include_once $_SERVER['DOCUMENT_ROOT'] . '/../libs/Cadmin/database.php';
//login here
session_start();
//$_SESSION['cadmin'] = 1;

if (!(isset($_GET['cadmin']))) {
    $_GET['cadmin'] = ''; /// REDIRECT HERE 
}
$request = $_GET['cadmin'] ? $_GET["cadmin"] : '';
$cadmin = new cadminMain();
$cadmin->{$request}();

class cadminMain {

    protected $_database;

    public function getDatabase() {
        if (null === $this->_database) {
            $this->_database = new Database();
        }
        return $this->_database;
    }

    public function __call($name, $arguments) {
        if (empty($name)) {
            header('Location: login.html');
        } else {
            header("HTTP/1.0 404 Not Found");
            die("Function {$name} doesn't exists");
        }
    }

    public function dologin() {
        $credentials = include '../../configs/credentials.php';

        if (isset($credentials[$_POST['username']]) && $credentials[$_POST['username']] == md5($_POST['password'])) {

            if (!headers_sent()) {
                session_start();
            }
            $_SESSION['cadmin'] = 1;
            $_SESSION['username'] = $_POST['username'];
            header('Location: /');
        } else {
            header('Location: login.html');
        }
    }

    public function logout() {
        unset($_SESSION['cadmin']);
        session_destroy();
        header('Location: ' . $_SERVER['HTTP_REFERER']);
    }

    public function check() {
        if ($_SESSION['cadmin'] === 1) {
            //success for normal login
            print json_encode('success');
            //print json_encode('demo');
        } else {
            print json_encode('fail');
        }
    }

    /**
     * Saves posted data to session
     */
    public function save() {

        if (empty($_POST)) {
            print json_encode('No data!');
            die();
        }
        $post = $_POST;
        if (!(isset($_SESSION[$post['type']]))) {
            $_SESSION[$post['type']] = array();
        }

        $_SESSION[$post['type']][$post['key']] = array('value' => $post['data'],
            'data' => $post['data'],
            'type' => $post['type'],
            'key' => $post['key'],
            'md5' => md5(serialize($post['data'])));
        print json_encode('success');
        die();
    }

    /**
     * destroys session container
     */
    public function destroy() {

        if (empty($_POST)) {
            print json_encode('No data!');
            die();
        }
        $post = $_POST;
        unset($_SESSION[$post['type']][$post['key']]);
        print json_encode('success');
        die();
    }

    public function publish() {
      //  $_SESSION['username'] = 'admin';
        if (empty($_POST)) {
            print json_encode('No data!');
            die();
        }
        $status = 'success';
        $post = $_POST;
        $database = $this->getDatabase();
        if ($post['type'] === 'text') {

            $database->insert('cadmin_history', array(
                'cadmin_key' => $post['key'],
                'cadmin_value' => $post['data'],
                'cadmin_md5' => md5($post['data']),
                'cadmin_date' => time(),
                'cadmin_author' => $_SESSION['username'])); // USER HERE ****************************************  

            $text = $database->findByKey('cadmin_text', $post['key']);
            if (empty($text)) {
                $database->insert('cadmin_text', array(
                    'cadmin_key' => $post['key'],
                    'cadmin_value' => $post['data'],
                    'cadmin_md5' => md5($post['data'])));
            } else {
                $database->updateByKey('cadmin_text', array('cadmin_key' => $post['key'], 'cadmin_value' => $post['data'], 'cadmin_md5' => md5($post['data'])), $post['key']);
            }
        }
        if ($post['type'] === 'list') {

            $database->insert('cadmin_history', array(
                'cadmin_key' => $post['key'],
                'cadmin_value' => serialize($post['data']),
                'cadmin_md5' => md5(serialize($post['data'])),
                'cadmin_date' => time(),
                'cadmin_author' => $_SESSION['username']));

            $text = $database->findByKey('cadmin_list', $post['key']);
            if (empty($text)) {
                $database->insert('cadmin_list', array(
                    'cadmin_key' => $post['key'],
                    'cadmin_value' => serialize($post['data']),
                    'cadmin_md5' => md5(serialize($post['data']))));
            } else {
                $database->updateByKey('cadmin_list', array('cadmin_key' => $post['key'], 'cadmin_value' => serialize($post['data']), 'cadmin_md5' => md5(serialize($post['data']))), $post['key']);
            }
        }
        if ($post['type'] === 'gallery') {

            $database->insert('cadmin_history', array(
                'cadmin_key' => $post['key'],
                'cadmin_value' => serialize($post['data']),
                'cadmin_md5' => md5(serialize($post['data'])),
                'cadmin_date' => time(),
                'cadmin_author' => $_SESSION['username']));

            $gallery = $database->findByKey('cadmin_image', $post['key']);
            $database->deleteByKey('cadmin_image', $post['key']);
            $i = 1;
            foreach ($post['data'] as $data) {

                $image = $data['image'];
                unset($data['image']);
                if (empty($data)) {
                    $opt = null;
                } else {
                    $opt = serialize($data);
                }
                $database->insert('cadmin_image', array(
                    'cadmin_key' => $post['key'],
                    'cadmin_value' => $image,
                    'cadmin_md5' => md5(serialize($post['data'])),
                    'cadmin_pos' => $i,
                    'cadmin_optional' => $opt
                ));
                $i++;
            }
        }
        if ($post['type'] === 'image') {
            if(is_array($post['data'])){
                $post['data'] = serialize($post['data']);
            }
            $database->insert('cadmin_history', array(
                'cadmin_key' => $post['key'],
                'cadmin_value' => $post['data'],
                'cadmin_md5' => md5($post['data']),
                'cadmin_date' => time(),
                'cadmin_author' => $_SESSION['username']));

            $image = $database->findByKey('cadmin_image', $post['key']);
            if (empty($image)) {
                $database->insert('cadmin_image', array(
                    'cadmin_key' => $post['key'],
                    'cadmin_value' => $post['data'],
                    'cadmin_md5' => md5($post['data']),
                    'cadmin_pos' => '1',
                    'cadmin_optional' => null
                ));
            } else {
                $database->updateByKey('cadmin_image', array('cadmin_key' => $post['key'],
                    'cadmin_value' => $post['data'],
                    'cadmin_md5' => md5($post['data'])), $post['key']);
            }
        }
        if ($post['type'] == 'video') {

            $database->insert('cadmin_history', array(
                'cadmin_key' => $post['key'],
                'cadmin_value' => serialize($post['data']),
                'cadmin_md5' => md5($post['data']),
                'cadmin_date' => time(),
                'cadmin_author' => $_SESSION['username']));

            $video = $database->findByKey('cadmin_video', $post['key']);
            $database->deleteByKey('cadmin_video', $post['key']);
            foreach ($post['data'] as $data) {


                $database->insert('cadmin_video', array(
                    'cadmin_key' => $post['key'],
                    'cadmin_value' => $data['link'],
                    'cadmin_desc' => $data['desc'],
                    'cadmin_md5' => md5($post['data'])));
            }
        }
        if (isset($_SESSION[$post['type']][$post['key']])) {
            unset($_SESSION[$post['type']][$post['key']]);
        }

        print json_encode($status);
        die();
    }

    public function getHistory() {
        $database = $this->getDatabase();
        if (isset($_GET)) {
            $key = $_GET['key'];
        } else {
            $key = null;
        }
        $history = $database->getHistory($key);

        $data = '';
        foreach ($history as $fact) {
            $test = @unserialize($fact['cadmin_value']);
            if ($test !== false) {
                $value = unserialize($fact['cadmin_value']);
            } else {
                $value = $fact['cadmin_value'];
            }
            $data['history'][] = array('id' => $fact['id'],
                'cadmin_key' => $fact['cadmin_key'],
                'cadmin_value' => $value,
                'cadmin_md5' => $fact['cadmin_md5'],
                'cadmin_date' => $fact['cadmin_date'],
                'cadmin_author' => $fact['cadmin_author']);
        }
        print json_encode($data);
        die();
    }

    /**
     * fetch all uploaded files by user
     */
    public function getUserImagesAction() {
        $database = $this->getDatabase();
        $images = $database->fetchAll('cadmin_uploaded_image');
        print json_encode($images);
    }

    /**
     * upload function for plupload script
     */
    public function upload() {
        include_once './image.php';
// HTTP headers for no cache etc
        header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
        header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
        header("Cache-Control: no-store, no-cache, must-revalidate");
        header("Cache-Control: post-check=0, pre-check=0", false);
        header("Pragma: no-cache");
        header('Content-type: application/json');
// Settings

        $path = getcwd() . '/../tmp';
        @mkdir($path, 0755, true);

        $targetDir = $path;

        $cleanupTargetDir = false; // Remove old files
        $maxFileAge = 5 * 3600; // Temp file age in seconds
// 5 minutes execution time
        @set_time_limit(5 * 60);

// Uncomment this one to fake upload time
// usleep(5000);
// Get parameters
//$chunk = isset($_REQUEST["chunk"]) ? intval($_REQUEST["chunk"]) : 0;
//$chunks = isset($_REQUEST["chunks"]) ? intval($_REQUEST["chunks"]) : 0;
// $fileName = isset($_REQUEST["name"]) ? $_REQUEST["name"] : '';

        $chunk = isset($_REQUEST["chunk"]) ? intval($_REQUEST["chunk"]) : 0;
        $chunks = isset($_REQUEST["chunks"]) ? intval($_REQUEST["chunks"]) : 0;
        $fileName = isset($_REQUEST["name"]) ? $_REQUEST["name"] : '';

        $chunk = isset($tempChunk) ? intval($tempChunk) : 0;
        $chunks = isset($tempChunks) ? intval($tempChunks) : 0;
        $fileName = isset($tempName) ? $tempName : '';

//var_dump($this->getRequest());
//$this->params()->fromPost('chunk')
// Clean the fileName for security reasons
//$oldFileName = hash('sha1', (microtime(true)));
        $oldFileName = $fileName;

        $fileName = preg_replace('/[^\w\._]+/', '_', $fileName);

// Make sure the fileName is unique but only if chunking is disabled
        if ($chunks < 2 && file_exists($targetDir . DIRECTORY_SEPARATOR . $fileName)) {
            $ext = strrpos($fileName, '.');
            $fileName_a = substr($fileName, 0, $ext);
            $fileName_b = substr($fileName, $ext);

            $count = 1;
            while (file_exists($targetDir . DIRECTORY_SEPARATOR . $fileName_a . '_' . $count . $fileName_b))
                $count++;

            $fileName = $fileName_a . '_' . $count . $fileName_b;
        }

        $filePath = $targetDir . DIRECTORY_SEPARATOR . $fileName;



// Create target dir
        if (!file_exists($targetDir))
            @mkdir($targetDir);

// Remove old temp files	
        if ($cleanupTargetDir) {
            if (is_dir($targetDir) && ($dir = opendir($targetDir))) {
                while (($file = readdir($dir)) !== false) {
                    $tmpfilePath = $targetDir . DIRECTORY_SEPARATOR . $file;

// Remove temp file if it is older than the max age and is not the current file
                    if (preg_match('/\.part$/', $file) && (filemtime($tmpfilePath) < time() - $maxFileAge) && ($tmpfilePath != "{$filePath}.part")) {
                        @unlink($tmpfilePath);
                    }
                }
                closedir($dir);
            } else {
                die('{"jsonrpc" : "2.0", "error" : {"code": 100, "message": "Failed to open temp directory."}, "id" : "id"}');
            }
        }

// Look for the content type header
        if (isset($_SERVER["HTTP_CONTENT_TYPE"]))
            $contentType = $_SERVER["HTTP_CONTENT_TYPE"];

        if (isset($_SERVER["CONTENT_TYPE"]))
            $contentType = $_SERVER["CONTENT_TYPE"];

// Handle non multipart uploads older WebKit versions didn't support multipart in HTML5
        if (strpos($contentType, "multipart") !== false) {
            if (isset($_FILES['file']['tmp_name']) && is_uploaded_file($_FILES['file']['tmp_name'])) {
// Open temp file
                $out = @fopen("{$filePath}.part", $chunk == 0 ? "wb" : "ab");
                if ($out) {
// Read binary input stream and append it to temp file
                    $in = @fopen($_FILES['file']['tmp_name'], "rb");

                    if ($in) {
                        while ($buff = fread($in, 4096))
                            fwrite($out, $buff);
                    }
                    else
                        die('{"jsonrpc" : "2.0", "error" : {"code": 101, "message": "Failed to open input stream."}, "id" : "id"}');
                    @fclose($in);
                    @fclose($out);
                    @unlink($_FILES['file']['tmp_name']);
                }
                else
                    die('{"jsonrpc" : "2.0", "error" : {"code": 102, "message": "Failed to open output stream."}, "id" : "id"}');
            }
            else
                die('{"jsonrpc" : "2.0", "error" : {"code": 103, "message": "Failed to move uploaded file."}, "id" : "id"}');
        } else {
// Open temp file
            $out = @fopen("{$filePath}.part", $chunk == 0 ? "wb" : "ab");
            if ($out) {
// Read binary input stream and append it to temp file
                $in = @fopen("php://input", "rb");

                if ($in) {
                    while ($buff = fread($in, 4096))
                        fwrite($out, $buff);
                }
                else
                    die('{"jsonrpc" : "2.0", "error" : {"code": 101, "message": "Failed to open input stream."}, "id" : "id"}');

                @fclose($in);
                @fclose($out);
            }
            else
                die('{"jsonrpc" : "2.0", "error" : {"code": 102, "message": "Failed to open output stream."}, "id" : "id"}');
        }

// Check if file has been uploaded
        if (!$chunks || $chunk == $chunks - 1) {
// Strip the temp .part suffix off 
            rename("{$filePath}.part", $filePath);



            $image = new ImageMagick;
            $size = $image->getSize($path . '/' . $fileName);
            $database = $this->getDatabase();
            $fileId = $database->addFile($path . '/' . $fileName);
            $retrunName = $fileName;
/// FILE ADD TO DATABASE
            $database->insert('cadmin_uploaded_image', array(
                'cadmin_value' => $fileId,
                'cadmin_md5' => md5_file($path . '/' . $retrunName),
                'cadmin_width' => $size['x'],
                'cadmin_height' => $size['y'],
                'cadmin_date' => time()
            ));
        }


        print json_encode(array(
            'jsonrpc' => '2.0',
            'filename' => 'image',
            'id' => $fileId,
            'extension' => 'jpg',
            'x' => $size['x'],
            'y' => $size['y'],
            'md5' => md5_file($path . '/' . $retrunName)));
        die();
    }

    /**
     * Paginator for cadmin files manager
     */
    public function fileManager() {

        $exploded = explode('/', $_GET['page']);

        $database = $this->getDatabase();
        $paginator = $database->fileManagerPaginator(array(
            'cadmin_width' => $exploded[2],
            'cadmin_height' => $exploded[3],
            'cadmin_tag' => $exploded[1],
            'page' => $exploded[0],
            'pagemax' => $exploded[4]));
        $pageCount = $database->fileManagerPaginator(array(
            'cadmin_width' => $exploded[2],
            'cadmin_height' => $exploded[3],
            'cadmin_tag' => $exploded[1],
            'page' => 1,
            'pagemax' => 1000000000));
        $data['pages'] = array('number' => ceil((count($pageCount) - 1) / $exploded[4]));
        foreach ($paginator as $pagi) {

            if (!(isset($tags))) {
                $tag = $database->getImageTags($pagi['id']);
                if (empty($tag)) {
                    $tags = array();
                } else {
                    foreach ($tag as $t) {
                        $tags[] = $t[0]['cadmin_tag'];
                    }
                }
            }
            $data['data'][] = array('id' => $pagi['id'],
                'value' => $pagi['cadmin_value'],
                'md5' => $pagi['cadmin_md5'],
                'x' => $pagi['cadmin_width'],
                'y' => $pagi['cadmin_height'],
                'date' => $pagi['cadmin_date'],
                'tags' => $tags,
                'link' => 'link');
            unset($tags);
        }
        if (isset($data)) {
            print json_encode($data);
        } else {
            print json_encode('no files');
        }
        die();
    }

    /**
     * search function for jquery autocomplete
     */
    public function search() {

        $database = $this->getDatabase();
        $term = trim(strip_tags($_GET['term']));

        $matches = array();
        $tags = $database->fetchAll('cadmin_tags');
        foreach ($tags as $tag) {

            if (stripos($tag['cadmin_tag'], $term) !== false) {
// Add the necessary "value" and "label" fields and append to result set
                $matches[] = $tag['cadmin_tag'];
            }
        }            // Truncate, encode and return the results
        $matches = array_slice($matches, 0, 8);
        print json_encode($matches);
        die();
    }

    /**
     * adding tag to database
     */
    public function addTag() {

        $post = $_POST;
        if (!($post)) {
            print json_encode('fail');
            die();
        }
        $database = $this->getDatabase();
        $tags = $database->fetchAll('cadmin_tags');
        foreach ($tags as $tag) {
            if ($tag['cadmin_tag'] == $post['tag']) {
                $found = $tag;
            }
        }
        if (isset($found)) {
            $id = $found['id'];
        } else {
            $id = $database->insert('cadmin_tags', array(
                'cadmin_tag' => $post['tag']));
        }
        $database->insert('cadmin_image_tags', array(
            'cadmin_image_id' => $post['id'],
            'cadmin_tag' => $id));
        print json_encode('success');
        die();
    }

    /**
     * removig tag from file
     */
    public function removeTag() {
        $post = $_POST;
        if (!($post)) {
            print json_encode('fail');
            die();
        }
        $database = $this->getDatabase();

        $tags = $database->fetchAll('cadmin_tags');
        foreach ($tags as $tag) {
            if ($tag['cadmin_tag'] == $post['tag']) {
                $found = $tag;
            }
        }
        if (!($found)) {
            print json_encode('No tag!');
            die();
        }
        $database->removeTag($post['id'], $found['id']);
        print json_encode('success');
        die();
    }

    /**
     * fetch all pages settings for cadmin
     */
    public function getSettings() {

        $database = $this->getDatabase();
        $settings = $database->fetchAll('cadmin_settings');

        if (empty($settings)) {
            $data = array();
        }
        foreach ($settings as $set) {

            $test = @unserialize($set['cadmin_value']);
            if ($set !== false) {
                $value = unserialize($set['cadmin_value']);
            } else {
                $value = $set['cadmin_value'];
            }


            $data[] = array('id' => $set['id'],
                'cadmin_setting' => $set['cadmin_setting'],
                'cadmin_value' => $value);
        }

        print json_encode($data);
        die();
    }

    /**
     * Saving general settings
     */
    public function saveGeneral() {

        $post = $_POST;
        if (!($post)) {
            print json_encode('fail');
            die();
        }
        $database = $this->getDatabase();
        $settings = $database->fetchAll('cadmin_settings');
        $value = array('title' => $post['title'],
            'desc' => $post['desc'],
            'keywords' => $post['keywords']);
        foreach ($settings as $set) {
            if ($set['cadmin_setting'] === 'main_page') {
                $database->updateSettings(serialize($value), 'main_page');
                $found = 'exist';
            }
        }
        if (!(isset($found))) {
            $database->insert('cadmin_settings', array(
                'cadmin_setting' => 'main_page',
                'cadmin_value' => serialize($value)
            ));
        }
        print json_encode('success');
        die();
    }

    /**
     * Saving current page settings
     */
    public function saveCurrent() {
        $post = $_POST;
        if (!($post)) {
            print json_encode('fail');
            die();
        }
        $database = $this->getDatabase();
        $settings = $database->fetchAll('cadmin_settings');
        $value = array('title' => $post['title'],
            'desc' => $post['desc'],
            'keywords' => $post['keywords']);
        foreach ($settings as $set) {
            if ($set['cadmin_setting'] === $post['page']) {
                $database->updateSettings($value, $post['page']);
                $found = 'exist';
            }
        }
        if (!(isset($found))) {
            $database->insert('cadmin_settings', array(
                'cadmin_setting' => $post['page'],
                'cadmin_value' => serialize($value)
            ));
        }
        print json_encode('success');
        die();
    }

    /**
     * Get all session that contains changes
     */
    public function getSession($xhtml = null) {
        $data = array();
        if (isset($_SESSION['image'])) {
            $session = $_SESSION['image'];
            foreach ($session as $e) {
                if ($e) {
                    $data['image'][] = $e;
                }
            }
        }
        if (isset($_SESSION['text'])) {
            $session = $_SESSION['text'];
            foreach ($session as $e) {
                if ($e) {
                    $data['text'][] = $e;
                }
            }
        }
        if (isset($_SESSION['gallery'])) {
            $session = $_SESSION['gallery'];
            foreach ($session as $e) {
                if ($e) {
                    $data['gallery'][] = $e;
                }
            }
        }
        if (isset($_SESSION['video'])) {
            $session = $_SESSION['video'];
            foreach ($session as $e) {
                if ($e) {
                    $data['video'][] = $e;
                }
            }
        }



        if ($xhtml) {
            return $data;
        }
        print json_encode($data);
        die();
    }

    /**
     * Saves changes from session to database
     */
    public function publishAllAction() {



        $sess = $this->getSession('no');
        $database = $this->getDatabase();
        foreach ($sess as $ses) {
            unset($_SESSION[$ses[0]['type']]);
            $this->save($ses['0']);
            $this->publish($ses['0']);
        }

        print json_encode('success');
        die();
    }

    public function getPages() {


        $database = $this->getDatabase();
        $result = $database->fetchAll('cadmin_pages');
        foreach ($result as $res) {
            if ($res['title'] != 'ROOT' && $res['title'] != '/Page') {

                $data[] = array('title' => $res['title'] . ' [' . $res['route'] . ']',
                    'value' => $res['route']);
            }
        }
        print json_encode($data);
        die();
    }

    public function jsTreeSession() {
        if (isset($_SESSION['pages'])) {
            return $_SESSION;
        } else {
            $database = $this->getDatabase();
            $pages = $database->fetchAll('cadmin_pages');
            $data = array();
            foreach ($pages as $page) {
                $data[$page['id']] = array('id' => (int) $page['id'],
                    'parent_id' => (int) $page['parent_id'],
                    'title' => $page['title'],
                    'type' => $page['type'],
                    'template' => $page['template'],
                    'route' => $page['route'],
                    'menu' => $page['menu'],
                    'pos' => $page['pos'],
                    'lang_1' => $page['lang_1'],
                    'lang_2' => $page['lang_2'],
                    'lang_3' => $page['lang_3'],
                    'img' => $page['img'],
                    'imghover' => $page['imghover']);
            }
            $_SESSION['pages'] = $data;
        }
    }

    /**
     * JsTree function for redirecting all operation
     */
    public function jsTree() {

        $id = (isset($_GET['id'])) ? $_GET['id'] : $_POST['id'];
        $operation = (isset($_GET['operation'])) ? $_GET['operation'] : $_POST['operation'];

        switch ($operation) {
            case 'get_children':
                $result = $this->jsTreeGetChildren($id);
                $data = array();
                foreach ($result as $res) {
                    $hasChild = $this->jsTreeGetChildren($res['id']);
                    if ($hasChild) {
                        $state = 'closed';
                    } else {
                        $state = '';
                    }
                    $data[] = array("attr" => array("id" => "node_" . $res['id'], "rel" => $res['type']),
                        "data" => $res['title'],
                        "state" => $state
                    );
                }
                print json_encode($data);
                die();
                break;
            case 'create_node':
                $result = $this->jsTreeCreate($_POST);
                print json_encode(array('status' => 1,
                    'id' => (int) $result));
                die();
                break;
            case 'remove_node':
                $result = $this->jsTreeRemove($_POST);
                print json_encode(array('status' => (int) $result));
                die();
                break;
            case 'rename_node':
                $result = $this->jsTreeRename($_POST);
                print json_encode(array('status' => (int) $result));
                die();
                break;
            case 'move_node';
                $result = $this->jsTreeMove($_POST);
                print json_encode(array('status' => (int) $result));
                die();
            case 'get_pages';
                $result = $this->jsTreeGetPage($id);
                $data = array();
                if ($result['id']) {
                    $data = array('id' => $result['id'],
                        'title' => $result['title'],
                        'template' => $result['template'],
                        'type' => $result['type'],
                        'menu' => $result['menu'],
                        'lang_1' => $result['lang_1'],
                        'lang_2' => $result['lang_2'],
                        'lang_3' => $result['lang_3'],
                        'img' => $result['img'],
                        'imghover' => $result['imghover']);
                }
                print json_encode($data);
                die();
            case 'page_template';
                $result = $this->jsTreeSetPageTemplate($_POST);
                print json_encode('success');
                die();
            case 'page_menu';
                $result = $this->jsTreeSetPageMenu($_POST);
                print json_encode('success');
                die();
            case 'page_lang';
                $result = $this->jsTreeSetPageMenu($_POST);
                print json_encode('success');
                die();
            case 'page_img';
                $result = $this->jsTreeSetPageImg($_POST);
                print json_encode('success');
                die();
            case 'page_imghover';
                $result = $this->jsTreeSetPageImgHover($_POST);
                print json_encode('success');
                die();
        }
        die();
    }

    public function jsTreeRoute($parent) {

        $this->jsTreeSession();
        $result = $_SESSION['pages'][$parent]['route'];
        return $result;
    }

    private function jsTreeGetChildren($id) {
        $this->jsTreeSession();
        $data = array();
        foreach ($_SESSION['pages'] as $node) {
            if (!(isset($node['removed']))) {
                if ($node['parent_id'] == $id) {
                    $data[] = $node;
                }
            }
        }
        return $data;
    }

    public function jsTreeCreate($post) {

        $session = $this->jsTreeSession();
        $id = 1;
        $route = $this->jsTreeRoute($post['id']);
        foreach ($session['pages'] as $page) {
            if ($page['id'] >= $id) {
                $id = $page['id'] + 1;
            }
        }
        $_SESSION['pages'][$id] = array('id' => $id,
            'parent_id' => (int) $post['id'],
            'title' => $post['title'],
            'type' => $post['type'],
            'template' => null,
            'route' => $route . '/' . str_replace(" ", "_", strtolower($post['title'])),
            'menu' => 'none',
            'pos' => null,
            'new' => true,
            'lang_1' => null,
            'lang_2' => null,
            'lang_3' => null,
            'img' => 44,
            'imghover' => 45
        );


        return $id;
    }

    public function jsTreeMove($post) {

        $this->jsTreeSession();

        $_SESSION['pages'][$post['id']]['parent_id'] = $post['ref'];
        $route = $this->jsTreeRoute($post['ref']);
        $_SESSION['pages'][$post['id']]['route'] = $route . '/' . str_replace(" ", "_", strtolower($_SESSION['pages'][$post['id']]['title']));

        return 1;
    }

    public function jsTreeRemove($post) {
        $this->jsTreeSession();
        $_SESSION['pages'][$post['id']]['removed'] = true;
        foreach ($_SESSION['pages'] as $p) {
            if ($p['parent_id'] == $post['id']) {
                $_SESSION['pages'][$p['id']]['removed'] = true;
                foreach ($_SESSION['pages'] as $s) {
                    if ($s['parent_id'] == $p['id']) {
                        $_SESSION['pages'][$s['id']]['removed'] = true;
                    }
                }
            }
        }
        return 1;
    }

    public function jsTreeRename($post) {

        $this->jsTreeSession();
        $_SESSION['pages'][$post['id']]['title'] = $post['title'];
        $route = $this->jsTreeRoute($_SESSION['pages'][$post['id']]['parent_id']);
        $_SESSION['pages'][$post['id']]['route'] = $route . '/' . str_replace(" ", "_", strtolower($_SESSION['pages'][$post['id']]['title']));
        return 1;
    }

    public function jsTreeGetPage($id) {

        $this->jsTreeSession();
        return $_SESSION['pages'][$id];
    }

    public function jsTreeSetPageTemplate($post) {

        $this->jsTreeSession();
        $_SESSION['pages'][$post['id']]['template'] = $post['template'];
    }

    public function jsTreeSetPageMenu($post) {
        $this->jsTreeSession();
        $_SESSION['pages'][$post['id']]['menu'] = $post['template'];
    }

    public function jsTreeSetPageImg($post) {

        $this->jsTreeSession();
        $_SESSION['pages'][$post['id']]['img'] = $post['template'];
    }

    public function jsTreeSetPageImgHover($post) {

        $this->jsTreeSession();
        $_SESSION['pages'][$post['id']]['imghover'] = $post['template'];
    }

    public function jsTreeCancel() {
        unset($_SESSION['pages']);
        print json_encode('success');
        die();
    }

    public function jsTreeSave() {
        $this->jsTreeSession();
        $database = $this->getDatabase();
        $changes = array();
        foreach ($_SESSION['pages'] as $page) {
            if (isset($page['removed'])) {
                $database->removePageByRoute($page['route']);
                unset($_SESSION['pages'][$page['id']]);
            }
        }
        foreach ($_SESSION['pages'] as $page) {
            if (isset($page['new'])) {
                $lastId = $database->insert('cadmin_pages', array(
                    'parent_id' => $page['parent_id'],
                    'title' => $page['title'],
                    'type' => $page['type'],
                    'route' => $page['route'],
                    'menu' => $page['menu'],
                    'pos' => $page['pos'],
                    'lang_1' => $page['lang_1'],
                    'lang_2' => $page['lang_2'],
                    'lang_3' => $page['lang_3'],
                    'img' => $page['img'],
                    'imghover' => $page['imghover']
                ));
                $changes[] = array('id' => $lastId,
                    'parent_id' => $page['id']);
                unset($_SESSION['pages'][$page['id']]);
            }
        }
        foreach ($_SESSION['pages'] as $page) {
            $database->updateById('cadmin_pages', array(
                'parent_id' => $page['parent_id'],
                'title' => $page['title'],
                'route' => $page['route'],
                'template' => $page['template'],
                'type' => $page['type'],
                'menu' => $page['menu'],
                'pos' => $page['pos'],
                'lang_1' => $page['lang_1'],
                'lang_2' => $page['lang_2'],
                'lang_3' => $page['lang_3'],
                'img' => $page['img'],
                'imghover' => $page['imghover']), $page['id']);
            unset($_SESSION['pages'][$page['id']]);
        }

        $newpage2 = $database->fetchAll('cadmin_pages');
        foreach ($newpage2 as $newp) {
            foreach ($changes as $change) {
                if ($newp['parent_id'] == $change['parent_id']) {
                    $database->updateById('cadmin_pages', array(
                        'parent_id' => $change['id']), $newp['id']);
                }
            }
        }
        unset($_SESSION['pages']);
        print json_encode($database->getMenu());
        die();
    }

    public function menuList() {
        $database = $this->getDatabase();
        $database->menuList($_POST);
        print json_encode($database->getMenu());
        die();
    }

    public function getText() {
        $database = $this->getDatabase();
        $answer = $database->getText($_POST);
        if (isset($answer[0]['cadmin_key'])) {
            $answer = $answer[0]['cadmin_value'];
            if (isset($_SESSION['text'][$_POST['key']])) {
                $answer = $_SESSION['text'][$_POST['key']]['value'];
            }
        } else {
            if (isset($_SESSION['text'][$_POST['key']])) {
                $answer = $_SESSION['text'][$_POST['key']]['value'];
            }
        }

        print $answer;
        die();
    }

}

?>
