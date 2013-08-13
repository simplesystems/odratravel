<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="description" content="{$pageView.desc}" />
        <meta name="keywords" content="{$pageView.keywords}" />
        <title>{$pageView.title}</title>
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" href="{$__cssDir}main.css">
        <link rel="stylesheet" href="{$__cssDir}normalize.min.css">
        <link rel="stylesheet" href="{$__cssDir}jquery.bxslider.css">
        {$headercss}
        {$configcss}
        {$headerjs}
        <link rel="stylesheet" href="{$__cssDir}jquery.bxslider.css">
        {if isset($cadminCss)}
            {foreach from=$cadminCss item=css}
                <link rel="stylesheet" href="{$__cssDir}{$css}">
            {/foreach}
        {/if}
        <link rel="stylesheet" href="{$__jsDir}fancybox/jquery.fancybox-1.3.1.css">
        <link href='http://fonts.googleapis.com/css?family=Roboto:400,500&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="http://cichowicz.home.pl/odratravel/odra.css">
        <script src="{$__jsDir}vendor/modernizr-2.6.2.min.js"></script>

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
                    <ul id="menu-top">
                        {if isset($menuItems.top)}
                            {foreach from=$menuItems.top item=foo}
                                <li><a href="{$foo.route}">{$foo.title}</a></li>
                                {/foreach}
                            {else}
                            <li><a href="/strona/o_firmie">O firmie</a></li>
                            <li><a href="/strona/wycieczki_autokarowe">Wycieczki <br/>autokarowe</a></li>
                            <li><a href="/strona/wycieczki_lotnicze">Wycieczki <br/>lotnicze</a></li>
                            <li><a href="/strona/wynamem_autokarow">Wynajem <br/>autokarów</a></li>
                            <li><a href="/kontakt.html">Kontakt</a></li> 
                            {/if}
                    </ul>
                </nav>
            </header>
        </div>
