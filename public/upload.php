<?php
include '../configs/config.php';
// HTTP headers for no cache etc
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
header("Cache-Control: no-store, no-cache, must-revalidate");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
header('Content-type: application/json');
// Settings

$jsonPath = 'img/' . date('Y') . '/' . date('m') . '/' . date('d');
$returnPath = 'img/' . date('Y') . '/' . date('m') . '/' . date('d');
$path = $jsonPath;
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
        print json_encode(array('jsonrpc' => '2.0',
            'error' => array('code' => 100,
                'message' => 'Failed to open temp directory.')
            , 'id' => 'id'));
        die();
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
            } else {
                print json_encode(array('jsonrpc' => '2.0',
                    'error' => array('code' => 100,
                        'message' => 'Failed to open input stream.')
                    , 'id' => 'id'));
                die();
            }
            @fclose($in);
            @fclose($out);
            @unlink($_FILES['file']['tmp_name']);
        } else {
            print json_encode(array('jsonrpc' => '2.0',
                'error' => array('code' => 102,
                    'message' => 'Failed to open input stream.')
                , 'id' => 'id'));
            die();
        }
    } else {
        print json_encode(array('jsonrpc' => '2.0',
            'error' => array('code' => 103,
                'message' => 'Failed to move file.')
            , 'id' => 'id'));
        die();
    }
} else {
    // Open temp file
    $out = @fopen("{$filePath}.part", $chunk == 0 ? "wb" : "ab");
    if ($out) {
        // Read binary input stream and append it to temp file
        $in = @fopen("php://input", "rb");

        if ($in) {
            while ($buff = fread($in, 4096))
                fwrite($out, $buff);
        } else {
            print json_encode(array('jsonrpc' => '2.0',
                'error' => array('code' => 101,
                    'message' => 'Failed to open input stream.')
                , 'id' => 'id'));
            die();
        }

        @fclose($in);
        @fclose($out);
    } else {
        print json_encode(array('jsonrpc' => '2.0',
            'error' => array('code' => 102,
                'message' => 'Failed to open input stream.')
            , 'id' => 'id'));
        die();
    }
}

// Check if file has been uploaded
if (!$chunks || $chunk == $chunks - 1) {
    // Strip the temp .part suffix off 
    rename("{$filePath}.part", $filePath);
}
$image = new ImageMagick;
$size = $image->getSize($path . '/' . $fileName);
//$cadmin = $this->getCadminModule();
//$cadmin->addUploadedFile($returnPath . '/' . $fileName, md5_file($path . '/' . $fileName), $size);
$retrunName = $fileName;

$fileName = explode('.', $fileName);

print json_encode(array(
            'jsonrpc' => '2.0',
            'filename' => $fileName[0],
            'id' => 'id',
            'extension' => $fileName[1],
            'path' => $returnPath,
            'x' => $size['x'],
            'y' => $size['y'],
            'md5' => md5_file($path . '/' . $retrunName)));
die();
?>
