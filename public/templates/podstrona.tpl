{include file="header.tpl"}
<div class="banner-container">
    <div class="bxslider" id="bxslider_static">
        <img class="editable" data-imagey="411" data-imagex="1400" data-type='image' data-md5='{$templatebackground.md5}' data-key='{$templatebackground.key}' src="{$templatebackground.src}"></img>
    </div>
</div>
<div class="main-container">
    <div class="main wrapper clearfix">
        <div id="right">

            <form class="product_wrapper">
                <div class="product_info">
                    <h1> <div class="editable"  data-textarea='yes' data-type='text' data-md5='{$templatetitle.md5}' data-key='{$templatetitle.key}'>{$templatetitle.value}</div></h1>

                    <div class="stars">
                        <div class="editable" data-reload="yes"  data-textarea='yes' data-type='text' data-md5='{$templatestars.md5}' data-key='{$templatestars.key}'>{$templatestars.value}</div>
                    </div>

                    <a  href="javascript:window.print();" class="print"></a>

                    <span class="code">kod oferty: <div class="editable"  data-textarea='yes' data-type='text' data-md5='{$templatecode.md5}' data-key='{$templatecode.key}'>{$templatecode.value}</div></span>
                    <br />
                    <table class="editable dictionary "  data-type='list' data-cell="2" data-rows="6" data-md5='{$templatelist.md5}' data-key='{$templatelist.key}'>
                        {foreach from=$templatelist.table item=table}
                            <tr>
                                {foreach from=$table item=td}
                                    <td>{$td}</td>
                                {/foreach}
                            </tr>
                        {/foreach}
                    </table>
                    <br />
                    <br />

                    {*                    <ul class="dictionary ">
                    <li><b>miejsce:</b><div class="editable" data-textarea='yes'  data-type='text' data-md5='{$templatemenu0.md5}' data-key='{$templatemenu0.key}'>{$templatemenu0.value}</div></li>
                    <li><b>długość pobytu:</b><div class="editable"  data-textarea='yes' data-type='text' data-md5='{$templatemenu1.md5}' data-key='{$templatemenu1.key}'>{$templatemenu1.value}</div></li>
                    <li><b>typ dojazdu:</b><div class="editable" data-textarea='yes' data-type='text' data-md5='{$templatemenu2.md5}' data-key='{$templatemenu2.key}'>{$templatemenu2.value}</div></li>
                    <li><b>data wyjazdu:</b><div class="editable" data-textarea='yes'  data-type='text' data-md5='{$templatemenu3.md5}' data-key='{$templatemenu3.key}'>{$templatemenu3.value}</div></li>
                    <li><b>data powrotu:</b><div class="editable" data-textarea='yes'  data-type='text' data-md5='{$templatemenu4.md5}' data-key='{$templatemenu4.key}'>{$templatemenu4.value}</div></li>
                    <li><b>wyżywienie:</b><div class="editable" data-textarea='yes'  data-type='text' data-md5='{$templatemenu5.md5}' data-key='{$templatemenu5.key}'>{$templatemenu5.value}</div></li>
                    </ul>  *}

                    <div class="price">
                        <del><div class="editable"  data-type='text'data-textarea='yes'  data-md5='{$templatepricedel.md5}' data-key='{$templatepricedel.key}'>{$templatepricedel.value}</div></del>
                        <div class="value"><small>cena:</small><div class="editable" data-textarea='yes'  data-type='text' data-md5='{$templateprice.md5}' data-key='{$templateprice.key}'>{$templateprice.value}</div></div>
                    </div> 
                    <button class="btn" type="submit">zarezerwuj</button>
                </div>
                <div class="product_galery">
                    <div class="medium_photo_wrapper">
                        <a href="/pictures/gallery/gallery_l_1.jpg" class="gallery">
                            <img src="/pictures/gallery/gallery_m_1.jpg" alt="alt" /> 
                        </a>
                    </div>

                    <div class="editable galleryslider"  data-tag="galeria" data-imagex="200" data-max="10" data-imagey="100" data-type='gallery' data-md5='{$templategallery.md5}' data-key='{$templategallery.key}'>
                        <div class="bxslider">
                            <ul class="bxslider" id="bxslider_p">
                                {foreach from=$templategallery.value item=imgsrc}
                                    <li>
                                        <a href="{$imgsrc.src3}" data-medium-image="{$imgsrc.src2}">
                                            <img src="{$imgsrc.src}" alt="alt" />
                                        </a>
                                    </li>
                                {/foreach}
                            </ul>
                        </div>
                    </div>
                </div>
            </form> 
            <div class="description clearfix">
                <p>
                <div class="editable"  data-type='text' data-md5='{$templatetext0.md5}' data-key='{$templatetext0.key}'>{$templatetext0.value}</div>

                </p>

                <p>
                    <img class="editable left" data-imagex="220" data-imagey="148" data-type='image' data-md5='{$templateimage.md5}' data-key='{$templateimage.key}' src="{$templateimage.src}"></img>
                <div class="editable"  data-type='text' data-md5='{$templatetext1.md5}' data-key='{$templatetext1.key}'>{$templatetext1.value}</div>

                </p>


                <p>
                <div class="editable"  data-type='text' data-md5='{$templatetext2.md5}' data-key='{$templatetext2.key}'>{$templatetext2.value}</div>

                </p>

                <p>
                <div class="editable"  data-type='text' data-md5='{$templatetext3.md5}' data-key='{$templatetext3.key}'>{$templatetext3.value}</div>

                </p>

                <p>

                    <img class="editable left" data-imagex="220" data-imagey="148" data-type='image' data-md5='{$templateimage2.md5}' data-key='{$templateimage2.key}' src="{$templateimage2.src}"></img>
                <div class="editable"  data-type='text' data-md5='{$templatetext4.md5}' data-key='{$templatetext4.key}'>{$templatetext4.value}</div>

                </p>


                <p>
                <div class="editable"  data-type='text' data-md5='{$templatetext5.md5}' data-key='{$templatetext5.key}'>{$templatetext5.value}</div>

                </p>


                <p>
                <div class="editable"  data-type='text' data-md5='{$templatetext6.md5}' data-key='{$templatetext6.key}'>{$templatetext6.value}</div>

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
{include file="footer.tpl"}