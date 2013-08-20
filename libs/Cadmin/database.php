<?php

include_once $_SERVER['DOCUMENT_ROOT'] . '/../configs/db.php';

class Database {

    private static $instance = FALSE;

    private function getInstance() {
        if (!self::$instance) {
            self::$instance = self::connect();
        }
        return self::$instance;
    }

    /**
     *
     * @return PDO
     */
    private static function connect() {
        self::$instance = new PDO('mysql:host=' . DB_HOST . ';dbname=' . DB_NAME, DB_USER, DB_PASS, array(PDO::MYSQL_ATTR_USE_BUFFERED_QUERY => true));
        self::$instance->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        self::$instance->query('SET NAMES "utf8" COLLATE "utf8_bin"');
        self::$instance->query('SET wait_timeout=240');
        return self::$instance;
    }

    public function insert($DbTableName, $values = array()) {
        try {
            $pdo = $this->getInstance();
            $columns = array_keys($values);
            $sql = 'INSERT INTO ' . $DbTableName;
            $sql .= '(' . implode(',', $columns) . ') ';
            $sql .= 'VALUES (' . implode(',', array_fill(0, count($values), '?')) . ')';
            $sth = $pdo->prepare($sql);
            $sth->execute(array_values($values));
        } catch (PDOException $e) {
            $this->ResponseMessage(true, 'Database access FAILED!');
        } catch (Exception $e) {
            $this->ResponseMessage(true, $e->getMessage());
        }
        return $pdo->lastInsertId();
    }

    public function getMenu() {

        $menu = array();
        $pdo = $this->getInstance();

        try {
            $sql = "SELECT * FROM cadmin_pages WHERE cadmin_pages.menu='top' ORDER BY cadmin_pages.pos";
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
        $sth = $pdo->prepare($sql);
        $sth->execute();
        $top = $sth->fetchAll();
        try {
            $sql = "SELECT * FROM cadmin_pages WHERE cadmin_pages.menu='info' ORDER BY cadmin_pages.pos";
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
        $sth = $pdo->prepare($sql);
        $sth->execute();
        $info = $sth->fetchAll();
        try {
            $sql = "SELECT * FROM cadmin_pages WHERE cadmin_pages.menu='help' ORDER BY cadmin_pages.pos";
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
        $sth = $pdo->prepare($sql);
        $sth->execute();
        $help = $sth->fetchAll();

        foreach ($top as $t) {
            $menu['top'][] = $t;
        }
        foreach ($info as $t) {
            $menu['info'][] = $t;
        }
        foreach ($help as $t) {
            $menu['help'][] = $t;
        }
        return $menu;
    }

    public function menuList($post) {
        $pdo = $this->getInstance();
        switch ($post['menu']) {
            case 'top':
                $i = 1;
                foreach ($post['data'] as $m) {
                    try {
                        $sql = "SELECT * FROM cadmin_pages WHERE route='$m' AND menu='top' ORDER BY cadmin_pages.pos";
                    } catch (PDOException $e) {
                        echo $e->getMessage();
                    }
                    $sth = $pdo->prepare($sql);
                    $sth->execute();
                    $menu = $sth->fetchAll();

                    if (!empty($menu)) {
                        $this->updateById('cadmin_pages', array(
                            'pos' => $i), $menu[0]['id']);
                        $i++;
                    }
                }
                break;
            case 'help':
                $i = 1;
                foreach ($post['data'] as $m) {
                    try {
                        $sql = "SELECT * FROM cadmin_pages WHERE route='$m' AND menu='help' ORDER BY cadmin_pages.pos";
                    } catch (PDOException $e) {
                        echo $e->getMessage();
                    }
                    $sth = $pdo->prepare($sql);
                    $sth->execute();
                    $menu = $sth->fetchAll();

                    if (!empty($menu)) {
                        $this->updateById('cadmin_pages', array(
                            'pos' => $i), $menu[0]['id']);
                        $i++;
                    }
                    unset($menu);
                }
            case 'info':
                $i = 1;
                foreach ($post['data'] as $m) {
                    try {
                        $sql = "SELECT * FROM cadmin_pages WHERE route='$m' AND menu='info' ORDER BY cadmin_pages.pos";
                    } catch (PDOException $e) {
                        echo $e->getMessage();
                    }
                    $sth = $pdo->prepare($sql);
                    $sth->execute();
                    $menu = $sth->fetchAll();

                    if (!empty($menu)) {
                        $this->updateById('cadmin_pages', array(
                            'pos' => $i), $menu[0]['id']);
                        $i++;
                    }
                    unset($menu);
                }
        }
    }

    public function fetchAll($DbTableName) {
        $pdo = $this->getInstance();
        try {
            $sql = 'SELECT * FROM ' . $DbTableName;
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
        $sth = $pdo->prepare($sql);
        $sth->execute();
        return $sth->fetchAll();
    }

    public function findByKey($DbTableName, $key) {
        $pdo = $this->getInstance();
        try {
            $sql = 'SELECT * FROM ' . $DbTableName . ' WHERE `cadmin_key` = "' . $key . '"';
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
        $sth = $pdo->prepare($sql);
        $sth->execute();
        return $sth->fetchAll();
    }

    public function getHistory($key = null) {
        $pdo = $this->getInstance();
        try {
            if ($key) {
                $sql = 'SELECT * FROM `cadmin_history` WHERE `cadmin_key` = "' . $key . '" ORDER BY cadmin_date DESC';
            } else {
                $sql = 'SELECT * FROM `cadmin_history` ORDER BY cadmin_date DESC';
            }
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
        $sth = $pdo->prepare($sql);
        $sth->execute();
        return $sth->fetchAll();
    }

    public function getText($post) {
        $pdo = $this->getInstance();
        try {
            $sql = 'SELECT * FROM `cadmin_text` WHERE `cadmin_key` = "' . $post['key'] . '"';
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
        $sth = $pdo->prepare($sql);
        $sth->execute();
         return $sth->fetchAll();
    }

    public function findById($DbTableName, $key) {
        $pdo = $this->getInstance();
        try {
            $sql = 'SELECT * FROM ' . $DbTableName . ' WHERE `id` = "' . $key . '"';
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
        $sth = $pdo->prepare($sql);
        $sth->execute();
        return $sth->fetch();
    }

    public function updateByKey($DbTableName, $values = array(), $key) {
        $pdo = $this->getInstance();
        $columns = array_keys($values);
        $val = array_values($values);
        $data = '';
        $i = 0;
        foreach ($columns as $col) {
            $data .= '' . $col . "='" . $val[$i] . "',";
            $i++;
        }
        $data = substr_replace($data, "", -1);
        try {
            $sql = 'UPDATE ' . $DbTableName . ' SET ' . $data . ' WHERE cadmin_key = "' . $key . '"';
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
        $sth = $pdo->prepare($sql);
        $sth->execute();
    }

    public function updateById($DbTableName, $values = array(), $id) {
        $pdo = $this->getInstance();
        $columns = array_keys($values);
        $val = array_values($values);
        $data = '';
        $i = 0;
        foreach ($columns as $col) {
            $data .= '' . $col . '="' . $val[$i] . '",';
            $i++;
        }
        $data = substr_replace($data, "", -1);
        try {
            $sql = 'UPDATE ' . $DbTableName . ' SET ' . $data . ' WHERE id = "' . $id . '"';
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
        $sth = $pdo->prepare($sql);
        $sth->execute();
    }

    public function updateSettings($value, $setting) {
        $pdo = $this->getInstance();

        try {
            $sql = "UPDATE `cadmin_settings` SET `cadmin_value`='" . $value . "' WHERE `cadmin_setting` = '" . $setting . "'";
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
        $sth = $pdo->prepare($sql);
        $sth->execute();
    }

    public function deleteByKey($DbTableName, $key) {
        $pdo = $this->getInstance();
        try {
            $sql = 'DELETE FROM ' . $DbTableName . ' WHERE `cadmin_key` = "' . $key . '"';
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
        $sth = $pdo->prepare($sql);
        $sth->execute();
    }

    public function removeTag($imageId, $tagId) {
        $pdo = $this->getInstance();
        try {
            $sql = 'DELETE FROM cadmin_image_tags WHERE `cadmin_image_id` = "' . $imageId . '" AND `cadmin_tag`= "' . $tagId . '"';
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
        $sth = $pdo->prepare($sql);
        $sth->execute();
    }

    public function removePageByRoute($route) {
        $pdo = $this->getInstance();
        try {
            $sql = 'SELECT * FROM cadmin_pages WHERE `route` = "' . $route . '"';
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
        $sth = $pdo->prepare($sql);
        $sth->execute();
        $id = $sth->fetch();

        try {
            $sql = 'DELETE FROM cadmin_pages WHERE `id` = "' . $id['id'] . '"';
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
        $sth = $pdo->prepare($sql);
        $sth->execute();
    }

    public function findPageByRoute($route) {
        $pdo = $this->getInstance();
        try {
            $sql = 'SELECT * FROM cadmin_pages WHERE `route` = "' . $route . '"';
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
        $sth = $pdo->prepare($sql);
        $sth->execute();
        return $sth->fetch();
    }

    public function getFile($id) {
        $pdo = $this->getInstance();
        try {
            $sql = 'SELECT * FROM cadmin_files WHERE `id` = ' . $id;
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
        $sth = $pdo->prepare($sql);
        $sth->execute();
        $data = $sth->fetch();
        return $data['content'];
    }

    public function updateFile($id, $file) {

        $pdo = $this->getInstance();
        $data = $this->getFileContent($file);
        try {
            $sql = 'UPDATE cadmin_files SET content="' . $data . '" FROM cadmin_files WHERE id = ' . $id;
            $sth = $pdo->prepare($sql);
            $sth->execute();
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    }

    public function addFile($file) {

        $pdo = $this->getInstance();
        $data = $this->getFileContent($file);

        try {
            $sql = 'INSERT INTO cadmin_files VALUES ("" , "' . md5($data) . '","' . time() . '", :file)';
            $sth = $pdo->prepare($sql);
            $sth->bindValue(':file', $data, PDO::PARAM_LOB);
            $sth->execute();
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
        return $pdo->lastInsertId();
    }

    public function getFileContent($file) {
        $data = null;
        if (file_exists($file)) {
            $data = file_get_contents($file);
        } else if (filter_var($file, FILTER_VALIDATE_URL)) {
            $data = file_get_contents($file);
        } else {
            $data = $file;
        }
        return $data;
    }

    public function fileManagerPaginator($values) {
        $pdo = $this->getInstance();
        $columns = array_keys($values);
        $val = array_values($values);
        $i = 0;
        foreach ($columns as $col) {
            if ($col === 'cadmin_tag') {
                if (!($val[$i] == 'all')) {
                    $tag = $val[$i];
                }
            }
            if ($col === 'cadmin_width') {
                $width = 'cadmin_uploaded_image.' . $col . '>=' . (int) $val[$i];
            }
            if ($col === 'cadmin_height') {
                $height = ' AND cadmin_uploaded_image.' . $col . '>=' . (int) $val[$i];
            }
            if ($col === 'page') {
                $page = $val[$i];
            }
            if ($col === 'pagemax') {
                $pagemax = $val[$i];
            }
            $i++;
        }
        if ($page == 1) {
            $page = $page - 1;
            $pagemax = $pagemax;
        } else {
            $page = $page - 1 + $pagemax;
            $pagemax = $page + $pagemax - 1;
        }

        try {
            if (!(isset($tag))) {

                $sql = 'SELECT DISTINCT cadmin_uploaded_image.id,cadmin_uploaded_image.cadmin_value,cadmin_uploaded_image.cadmin_md5,cadmin_uploaded_image.cadmin_width,
                    cadmin_uploaded_image.cadmin_height,cadmin_uploaded_image.cadmin_date FROM `cadmin_uploaded_image` 
                    LEFT JOIN cadmin_image_tags 
                    ON cadmin_uploaded_image.id = cadmin_image_tags.cadmin_image_id 
                    LEFT JOIN cadmin_tags 
                    ON cadmin_image_tags.cadmin_tag = cadmin_tags.id
                    WHERE ' . $width . $height . '  ORDER BY cadmin_uploaded_image.cadmin_date ASC LIMIT ' . $page . ',' . $pagemax . '';
            } else {
                $sql = 'SELECT DISTINCT cadmin_uploaded_image.id,cadmin_uploaded_image.cadmin_value,cadmin_uploaded_image.cadmin_md5,cadmin_uploaded_image.cadmin_width,
                    cadmin_uploaded_image.cadmin_height,cadmin_uploaded_image.cadmin_date FROM `cadmin_uploaded_image` 
                    LEFT JOIN cadmin_image_tags 
                    ON cadmin_uploaded_image.id = cadmin_image_tags.cadmin_image_id 
                    LEFT JOIN cadmin_tags 
                    ON cadmin_image_tags.cadmin_tag = cadmin_tags.id
                    WHERE cadmin_tags.cadmin_tag = "' . $tag . '" AND ' . $width . $height . '  ORDER BY cadmin_uploaded_image.cadmin_date ASC LIMIT ' . $page . ',' . $pagemax . '';
            }
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
        $sth = $pdo->prepare($sql);
        $sth->execute();
        return $sth->fetchAll();
    }

    public function getImageTags($id) {
        $pdo = $this->getInstance();
        try {
            $sql = 'SELECT cadmin_tag FROM cadmin_image_tags WHERE `cadmin_image_id` = ' . $id;
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
        $sth = $pdo->prepare($sql);
        $sth->execute();
        $data = $sth->fetchAll();
        $result = array();
        foreach ($data as $d) {
            try {
                $sql = 'SELECT cadmin_tag FROM cadmin_tags WHERE `id` = ' . $d['cadmin_tag'];
            } catch (PDOException $e) {
                echo $e->getMessage();
            }
            $sth = $pdo->prepare($sql);
            $sth->execute();
            $data = $sth->fetchAll();
            $result[] = $data;
        }
        return $result;
    }

}

?>
