<?php /* Smarty version Smarty-3.1.14, created on 2013-08-09 12:27:05
         compiled from "./templates/error.tpl" */ ?>
<?php /*%%SmartyHeaderCode:1630546015204c3f99dcfa5-97044900%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'c85a4816056c868d0c9a13b024bfd4b4a27cf0dd' => 
    array (
      0 => './templates/error.tpl',
      1 => 1375952931,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '1630546015204c3f99dcfa5-97044900',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.14',
  'unifunc' => 'content_5204c3f9a2c1b0_31351584',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5204c3f9a2c1b0_31351584')) {function content_5204c3f9a2c1b0_31351584($_smarty_tpl) {?><?php echo $_smarty_tpl->getSubTemplate ("header.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>

<div class="banner-container">
    <ul class="bxslider" id="bxslider">
        <li>
            <a href="#">
                <img src="/pictures/banner_1.jpg" alt="" />
            </a>
        </li>
        <li>
            <a href="#">
                <img src="/pictures/banner_2.jpg" alt="" />
            </a>
        </li>
        <li>
            <a href="#">
                <img src="/pictures/banner_1.jpg" alt="" />
            </a>
        </li>

    </ul>
</div> <div class="main-container">
    <div class="main wrapper clearfix">
        <div id="right">

            <h3>Błąd!</h3>
            <div class="description clearfix cms">


                <p>
                    Podana strona nie istnieje!
                </p>

            </div>
        </div>

        <aside id="left">

            <ul id="sidemenu">
                <li class="active"><a href="##"><span><img src="/img/a_menu1.png" alt="Pielgrzymki"/></span><b>Pielgrzymki</b></a>

                    <ul>
                        <li><a href="##">Chorwacja</a></li>
                        <li><a href="##">Francja</a></li>
                        <li><a href="##">Grecja</a></li>
                        <li><a href="##">Izrael</a></li>
                        <li><a href="##">Meksyk</a></li>
                        <li><a href="##">Portugalia</a></li>
                        <li><a href="##">Włochy</a></li>
                    </ul>        
                </li>
                <li><a href="##"><span><img src="/img/menu2.png" alt="Wczasy lotnicze"/></span><b>Wczasy lotnicze</b></a>
                    <ul>
                        <li><a href="##">Chorwacja</a></li>
                        <li><a href="##">Francja</a></li>
                        <li><a href="##">Grecja</a></li>
                        <li><a href="##">Izrael</a></li>
                        <li><a href="##">Meksyk</a></li>
                        <li><a href="##">Portugalia</a></li>
                        <li><a href="##">Włochy</a></li>
                    </ul>


                </li>
                <li><a href="##"><span><img src="/img/menu3.png" alt="Weekendy lotnicze"/></span><b>Weekendy lotnicze</b></a></li>
                <li><a href="##"><span><img src="/img/menu4.png" alt="Wycieczki szkolne"/></span><b>Wycieczki szkolne</b></a></li>
                <li><a href="##"><span><img src="/img/menu5.png" alt="Oferty dla grup"/></span><b>Oferty dla grup</b></a></li>
                <li><a href="##"><span><img src="/img/menu6.png" alt="Oferta dla singlii"/></span><b>Oferta dla singlii</b></a></li>
                <li><a href="##"><span><img src="/img/menu7.png" alt="Dojazd własny"/></span><b>Dojazd własny</b></a></li>
                <li><a href="##"><span><img src="/img/menu8.png" alt="Bony upominkowe"/></span><b>Bony upominkowe</b></a></li>
                <li><a href="##"><span><img src="/img/menu9.png" alt="Bilety autobusowe"/></span><b>Bilety autobusowe</b></a></li>
                <li><a href="##"><span><img src="/img/menu10.png" alt="Wczasy z Niemiec"/></span><b>Wczasy z Niemiec</b></a></li>
                <li><a href="##"><span><img src="/img/menu11.png" alt="Eurotier"/></span><b>Eurotier</b></a></li>
                <li><a href="##"><span><img src="/img/menu12.png" alt="Wynajem autokarów"/></span><b>Wynajem autokarów</b></a></li>
                <li><a href="##"><span><img src="/img/menu13.png" alt="Ubezpieczenia"/></span><b>Ubezpieczenia</b></a></li>
            </ul>   


            <address>
                <h2>Kontakt</h2>
                <div>   
                    <p class="tel">+48 <b>91 421 05 30</b></p>
                    <a class="email" href="mailto:odratravel@odratravel.pl">odratravel@odratravel.pl</a>
                    <p class="info"> od 9 do 16:00</p>   
                </div> 
                <a class="btn">Napisz do nas</a>

            </address>

            <div class="map">
                <h2>Jak do nas dojechać?</h2>
                <img src="/img/map.png" alt="mapa">
            </div>


            <div class="newsletter">
                <h2>Newsletter</h2>
                <form action="newsletter.php" action="get"> 
                    <div>
                        <p>Wpisz swój e-mail aby otrzymywać informacje o promocjach</p>
                        <input type="text" name="email" placeholder="Podaj adres e-mail"/>
                    </div>
                    <button class="add btn" type="submit" value="1">Zapisz się</button> lub   
                    <button class="remove btn_link" type="submit" value="2">wypisz się</button>
                </form>    
            </div>   
        </aside>   
    </div> <!-- #main -->
</div> <!-- #main-container -->
</div>


<?php echo $_smarty_tpl->getSubTemplate ("footer.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>
<?php }} ?>