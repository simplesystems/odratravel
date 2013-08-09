<?php /* Smarty version Smarty-3.1.14, created on 2013-08-09 12:27:53
         compiled from "./templates/podstrona.tpl" */ ?>
<?php /*%%SmartyHeaderCode:2067863595204c429ee0c42-20546256%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'ff24e97c7eeb5fd940a9fd7a4521758f109fc851' => 
    array (
      0 => './templates/podstrona.tpl',
      1 => 1376034972,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '2067863595204c429ee0c42-20546256',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'templatetitle' => 0,
    'templatestars' => 0,
    'templatecode' => 0,
    'templatemenu0' => 0,
    'templatemenu1' => 0,
    'templatemenu2' => 0,
    'templatemenu3' => 0,
    'templatemenu4' => 0,
    'templatemenu5' => 0,
    'templatepricedel' => 0,
    'templateprice' => 0,
    'templategallery' => 0,
    'imgsrc' => 0,
    'templatetext0' => 0,
    'templateimage' => 0,
    'templatetext1' => 0,
    'templatetext2' => 0,
    'templatetext3' => 0,
    'templateimage2' => 0,
    'templatetext4' => 0,
    'templatetext5' => 0,
    'templatetext6' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.14',
  'unifunc' => 'content_5204c42a0884a9_66636542',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5204c42a0884a9_66636542')) {function content_5204c42a0884a9_66636542($_smarty_tpl) {?><?php echo $_smarty_tpl->getSubTemplate ("header.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>

<div class="banner-container">
    <div class="bxslider" id="bxslider_static">
        <img src="/pictures/banner_1.jpg" alt="alt" />
    </div>
</div>
<div class="main-container">
    <div class="main wrapper clearfix">
        <div id="right">

            <form class="product_wrapper">
                <div class="product_info">
                    <h1> <div class="editable"  data-textarea='yes' data-type='text' data-md5='<?php echo $_smarty_tpl->tpl_vars['templatetitle']->value['md5'];?>
' data-key='<?php echo $_smarty_tpl->tpl_vars['templatetitle']->value['key'];?>
'><?php echo $_smarty_tpl->tpl_vars['templatetitle']->value['value'];?>
</div></h1>

                    <div class="stars">
                        <div class="editable"  data-textarea='yes' data-type='text' data-md5='<?php echo $_smarty_tpl->tpl_vars['templatestars']->value['md5'];?>
' data-key='<?php echo $_smarty_tpl->tpl_vars['templatestars']->value['key'];?>
'><?php echo $_smarty_tpl->tpl_vars['templatestars']->value['value'];?>
</div>
                    </div>

                    <a  href="javascript:window.print();" class="print"></a>

                    <span class="code">kod oferty: <div class="editable"  data-textarea='yes' data-type='text' data-md5='<?php echo $_smarty_tpl->tpl_vars['templatecode']->value['md5'];?>
' data-key='<?php echo $_smarty_tpl->tpl_vars['templatecode']->value['key'];?>
'><?php echo $_smarty_tpl->tpl_vars['templatecode']->value['value'];?>
</div></span>

                    <ul class="dictionary ">
                        <li><b>miejsce:</b><div class="editable" data-textarea='yes'  data-type='text' data-md5='<?php echo $_smarty_tpl->tpl_vars['templatemenu0']->value['md5'];?>
' data-key='<?php echo $_smarty_tpl->tpl_vars['templatemenu0']->value['key'];?>
'><?php echo $_smarty_tpl->tpl_vars['templatemenu0']->value['value'];?>
</div></li>
                        <li><b>długość pobytu:</b><div class="editable"  data-textarea='yes' data-type='text' data-md5='<?php echo $_smarty_tpl->tpl_vars['templatemenu1']->value['md5'];?>
' data-key='<?php echo $_smarty_tpl->tpl_vars['templatemenu1']->value['key'];?>
'><?php echo $_smarty_tpl->tpl_vars['templatemenu1']->value['value'];?>
</div></li>
                        <li><b>typ dojazdu:</b><div class="editable" data-textarea='yes' data-type='text' data-md5='<?php echo $_smarty_tpl->tpl_vars['templatemenu2']->value['md5'];?>
' data-key='<?php echo $_smarty_tpl->tpl_vars['templatemenu2']->value['key'];?>
'><?php echo $_smarty_tpl->tpl_vars['templatemenu2']->value['value'];?>
</div></li>
                        <li><b>data wyjazdu:</b><div class="editable" data-textarea='yes'  data-type='text' data-md5='<?php echo $_smarty_tpl->tpl_vars['templatemenu3']->value['md5'];?>
' data-key='<?php echo $_smarty_tpl->tpl_vars['templatemenu3']->value['key'];?>
'><?php echo $_smarty_tpl->tpl_vars['templatemenu3']->value['value'];?>
</div></li>
                        <li><b>data powrotu:</b><div class="editable" data-textarea='yes'  data-type='text' data-md5='<?php echo $_smarty_tpl->tpl_vars['templatemenu4']->value['md5'];?>
' data-key='<?php echo $_smarty_tpl->tpl_vars['templatemenu4']->value['key'];?>
'><?php echo $_smarty_tpl->tpl_vars['templatemenu4']->value['value'];?>
</div></li>
                        <li><b>wyżywienie:</b><div class="editable" data-textarea='yes'  data-type='text' data-md5='<?php echo $_smarty_tpl->tpl_vars['templatemenu5']->value['md5'];?>
' data-key='<?php echo $_smarty_tpl->tpl_vars['templatemenu5']->value['key'];?>
'><?php echo $_smarty_tpl->tpl_vars['templatemenu5']->value['value'];?>
</div></li>
                    </ul>  

                    <div class="price">
                        <del><div class="editable"  data-type='text'data-textarea='yes'  data-md5='<?php echo $_smarty_tpl->tpl_vars['templatepricedel']->value['md5'];?>
' data-key='<?php echo $_smarty_tpl->tpl_vars['templatepricedel']->value['key'];?>
'><?php echo $_smarty_tpl->tpl_vars['templatepricedel']->value['value'];?>
</div></del>
                        <div class="value"><small>cena:</small><div class="editable" data-textarea='yes'  data-type='text' data-md5='<?php echo $_smarty_tpl->tpl_vars['templateprice']->value['md5'];?>
' data-key='<?php echo $_smarty_tpl->tpl_vars['templateprice']->value['key'];?>
'><?php echo $_smarty_tpl->tpl_vars['templateprice']->value['value'];?>
</div></div>
                    </div> 
                    <button class="btn" type="submit">zarezerwuj</button>
                </div>
                <div class="product_galery">
                    <div class="medium_photo_wrapper">
                        <a href="/pictures/gallery/gallery_l_1.jpg" class="gallery">
                            <img src="/pictures/gallery/gallery_m_1.jpg" alt="alt" /> 
                        </a>
                    </div>

                    <div class="editable galleryslider"  data-tag="galeria" data-imagex="200" data-max="10" data-imagey="100" data-type='gallery' data-md5='<?php echo $_smarty_tpl->tpl_vars['templategallery']->value['md5'];?>
' data-key='<?php echo $_smarty_tpl->tpl_vars['templategallery']->value['key'];?>
'>
                        <div class="bxslider">
                            <ul class="bxslider" id="bxslider_p">
                                <?php  $_smarty_tpl->tpl_vars['imgsrc'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['imgsrc']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['templategallery']->value['value']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['imgsrc']->key => $_smarty_tpl->tpl_vars['imgsrc']->value){
$_smarty_tpl->tpl_vars['imgsrc']->_loop = true;
?>
                                    <li>
                                        <a href="<?php echo $_smarty_tpl->tpl_vars['imgsrc']->value['src3'];?>
" data-medium-image="<?php echo $_smarty_tpl->tpl_vars['imgsrc']->value['src2'];?>
">
                                            <img src="<?php echo $_smarty_tpl->tpl_vars['imgsrc']->value['src'];?>
" alt="alt" />
                                        </a>
                                    </li>
                                <?php } ?>
                            </ul>
                        </div>
                    </div>
                </div>
            </form> 
            <div class="description clearfix">
                <p>
                <div class="editable"  data-type='text' data-md5='<?php echo $_smarty_tpl->tpl_vars['templatetext0']->value['md5'];?>
' data-key='<?php echo $_smarty_tpl->tpl_vars['templatetext0']->value['key'];?>
'><?php echo $_smarty_tpl->tpl_vars['templatetext0']->value['value'];?>
</div>

                </p>

                <p>
                    <img class="editable left" data-imagey="220" data-imagex="180" data-type='image' data-md5='<?php echo $_smarty_tpl->tpl_vars['templateimage']->value['md5'];?>
' data-key='<?php echo $_smarty_tpl->tpl_vars['templateimage']->value['key'];?>
' src="<?php echo $_smarty_tpl->tpl_vars['templateimage']->value['src'];?>
"></img>
                <div class="editable"  data-type='text' data-md5='<?php echo $_smarty_tpl->tpl_vars['templatetext1']->value['md5'];?>
' data-key='<?php echo $_smarty_tpl->tpl_vars['templatetext1']->value['key'];?>
'><?php echo $_smarty_tpl->tpl_vars['templatetext1']->value['value'];?>
</div>

                </p>


                <p>
                <div class="editable"  data-type='text' data-md5='<?php echo $_smarty_tpl->tpl_vars['templatetext2']->value['md5'];?>
' data-key='<?php echo $_smarty_tpl->tpl_vars['templatetext2']->value['key'];?>
'><?php echo $_smarty_tpl->tpl_vars['templatetext2']->value['value'];?>
</div>

                </p>

                <p>
                <div class="editable"  data-type='text' data-md5='<?php echo $_smarty_tpl->tpl_vars['templatetext3']->value['md5'];?>
' data-key='<?php echo $_smarty_tpl->tpl_vars['templatetext3']->value['key'];?>
'><?php echo $_smarty_tpl->tpl_vars['templatetext3']->value['value'];?>
</div>

                </p>

                <p>

                    <img class="editable left" data-imagey="220" data-imagex="180" data-type='image' data-md5='<?php echo $_smarty_tpl->tpl_vars['templateimage2']->value['md5'];?>
' data-key='<?php echo $_smarty_tpl->tpl_vars['templateimage2']->value['key'];?>
' src="<?php echo $_smarty_tpl->tpl_vars['templateimage2']->value['src'];?>
"></img>
                <div class="editable"  data-type='text' data-md5='<?php echo $_smarty_tpl->tpl_vars['templatetext4']->value['md5'];?>
' data-key='<?php echo $_smarty_tpl->tpl_vars['templatetext4']->value['key'];?>
'><?php echo $_smarty_tpl->tpl_vars['templatetext4']->value['value'];?>
</div>

                </p>


                <p>
                <div class="editable"  data-type='text' data-md5='<?php echo $_smarty_tpl->tpl_vars['templatetext5']->value['md5'];?>
' data-key='<?php echo $_smarty_tpl->tpl_vars['templatetext5']->value['key'];?>
'><?php echo $_smarty_tpl->tpl_vars['templatetext5']->value['value'];?>
</div>

                </p>


                <p>
                <div class="editable"  data-type='text' data-md5='<?php echo $_smarty_tpl->tpl_vars['templatetext6']->value['md5'];?>
' data-key='<?php echo $_smarty_tpl->tpl_vars['templatetext6']->value['key'];?>
'><?php echo $_smarty_tpl->tpl_vars['templatetext6']->value['value'];?>
</div>

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
<?php echo $_smarty_tpl->getSubTemplate ("footer.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, null, null, array(), 0);?>
<?php }} ?>