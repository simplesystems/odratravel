<?php /* Smarty version Smarty-3.1.14, created on 2013-08-09 12:27:05
         compiled from "./templates/header.tpl" */ ?>
<?php /*%%SmartyHeaderCode:18166479675204c3f9a6d383-21601609%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '97c13ae6868bbc459509c9f1b968154acd23eecc' => 
    array (
      0 => './templates/header.tpl',
      1 => 1376043423,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '18166479675204c3f9a6d383-21601609',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    '__cssDir' => 0,
    'headercss' => 0,
    'configcss' => 0,
    'headerjs' => 0,
    'cadminCss' => 0,
    'css' => 0,
    '__jsDir' => 0,
    'pageView' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.14',
  'unifunc' => 'content_5204c3f9aaba95_62900629',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5204c3f9aaba95_62900629')) {function content_5204c3f9aaba95_62900629($_smarty_tpl) {?><!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title></title>
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" href="<?php echo $_smarty_tpl->tpl_vars['__cssDir']->value;?>
main.css">
        <link rel="stylesheet" href="<?php echo $_smarty_tpl->tpl_vars['__cssDir']->value;?>
normalize.min.css">
        <link rel="stylesheet" href="<?php echo $_smarty_tpl->tpl_vars['__cssDir']->value;?>
jquery.bxslider.css">
        <?php echo $_smarty_tpl->tpl_vars['headercss']->value;?>

        <?php echo $_smarty_tpl->tpl_vars['configcss']->value;?>

        <?php echo $_smarty_tpl->tpl_vars['headerjs']->value;?>

        <link rel="stylesheet" href="<?php echo $_smarty_tpl->tpl_vars['__cssDir']->value;?>
jquery.bxslider.css">
        <?php  $_smarty_tpl->tpl_vars['css'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['css']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['cadminCss']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['css']->key => $_smarty_tpl->tpl_vars['css']->value){
$_smarty_tpl->tpl_vars['css']->_loop = true;
?>
            <link rel="stylesheet" href="<?php echo $_smarty_tpl->tpl_vars['__cssDir']->value;?>
<?php echo $_smarty_tpl->tpl_vars['css']->value;?>
">
        <?php } ?>
        <link rel="stylesheet" href="<?php echo $_smarty_tpl->tpl_vars['__jsDir']->value;?>
fancybox/jquery.fancybox-1.3.1.css">
        <link href='http://fonts.googleapis.com/css?family=Roboto:400,500&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
        <script src="<?php echo $_smarty_tpl->tpl_vars['__jsDir']->value;?>
vendor/modernizr-2.6.2.min.js"></script>
        <meta name="description" content="<?php echo $_smarty_tpl->tpl_vars['pageView']->value['desc'];?>
" />
        <meta name="keywords" content="<?php echo $_smarty_tpl->tpl_vars['pageView']->value['keywords'];?>
" />
        <title><?php echo $_smarty_tpl->tpl_vars['pageView']->value['title'];?>
</title>
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->

        <div class="header-container">
            <header class="wrapper clearfix">
                <h1 class="title"><a href="/"><img src="/img/logo.png" alt="logo"></a></h1>
                <div id="language">
                    <a href="/pol"><img src="/img/pol.png" alt="polski"></a>
                    <a href="/eng"><img src="/img/eng.png" alt="angielski"></a>
                    <a href="/de"><img src="/img/de.png" alt="niemiecki"></a>
                </div>    
                <div id="top_contact">

                    <span>+48 91 421 05 30</span>
                    <a href="mailto:odratravel@odratravel.pl">odratravel@odratravel.pl</a>
                </div>
                <nav>
                    <ul>
                        <li><a href="/strona/o_firmie">O firmie</a></li>
                        <li><a href="/strona/wycieczki_autokarowe">Wycieczki <br/>autokarowe</a></li>
                        <li><a href="/strona/wycieczki_lotnicze">Wycieczki <br/>lotnicze</a></li>
                        <li><a href="/strona/wynamem_autokarow">Wynajem <br/>autokarów</a></li>
                        <li><a href="/kontakt.html">Kontakt</a></li>                        
                    </ul>
                </nav>
            </header>
        </div>
<?php }} ?>