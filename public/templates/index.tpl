{include file="header.tpl"}


<div class="banner-container">

    <div class="editable"  data-tag="galeria" data-imagex="1400" data-max="10" data-imagey="411" data-type='gallery' data-md5='{$main_gallery.md5}' data-key='{$main_gallery.key}'>
        <div class="bxslider">
            <ul class="bxslider" id="bxslider">
                {foreach from=$main_gallery.value item=imgsrc}
                    <li>
                        <img src="{$imgsrc.src}" alt="alt" />
                    </li>
                {/foreach}
            </ul>
        </div>
    </div>

</div>
<div class="main-container">
    <div class="main wrapper clearfix">
        <div id="right">

            <div id="main_search">

                {*  menu wyszukiwania              *}
                {$ep3gateMenu}
                {*  zawartosc wyszukiwarki             *}
                {$ep3gateContent}
                {*  stopka (musi byc na koncu bo zawiera skrypty)*}
                {$ep3gateFooter}
            </div>

            <div id="quick_search">
                <form action="search.php">
                    {* wyszukiwarka AutoPoszukiwacz  *}
                    {$ep3gateAutoSuggest}
                </form>    
            </div>


            <ul class="offer">
                {* Boxy z promocjami *}
                {$ep3gatePromoBox}
            </ul>    

            <div class="main_banner">
                <a class="icon" href="#">
                    <img src="/pictures/banner.jpg" alt="banner" />
                </a>
            </div>    
        </div>
        <aside id="left">

            <ul id="sidemenu">
                <li class="active"><a href="##"><span><img src="img/a_menu1.png" alt="Pielgrzymki"/></span><b>Pielgrzymki</b></a>

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
                <li><a href="##"><span><img src="img/menu2.png" alt="Wczasy lotnicze"/></span><b>Wczasy lotnicze</b></a>
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
                <li><a href="##"><span><img src="img/menu3.png" alt="Weekendy lotnicze"/></span><b>Weekendy lotnicze</b></a></li>
                <li><a href="##"><span><img src="img/menu4.png" alt="Wycieczki szkolne"/></span><b>Wycieczki szkolne</b></a></li>
                <li><a href="##"><span><img src="img/menu5.png" alt="Oferty dla grup"/></span><b>Oferty dla grup</b></a></li>
                <li><a href="##"><span><img src="img/menu6.png" alt="Oferta dla singlii"/></span><b>Oferta dla singlii</b></a></li>
                <li><a href="##"><span><img src="img/menu7.png" alt="Dojazd własny"/></span><b>Dojazd własny</b></a></li>
                <li><a href="##"><span><img src="img/menu8.png" alt="Bony upominkowe"/></span><b>Bony upominkowe</b></a></li>
                <li><a href="##"><span><img src="img/menu9.png" alt="Bilety autobusowe"/></span><b>Bilety autobusowe</b></a></li>
                <li><a href="##"><span><img src="img/menu10.png" alt="Wczasy z Niemiec"/></span><b>Wczasy z Niemiec</b></a></li>
                <li><a href="##"><span><img src="img/menu11.png" alt="Eurotier"/></span><b>Eurotier</b></a></li>
                <li><a href="##"><span><img src="img/menu12.png" alt="Wynajem autokarów"/></span><b>Wynajem autokarów</b></a></li>
                <li><a href="##"><span><img src="img/menu13.png" alt="Ubezpieczenia"/></span><b>Ubezpieczenia</b></a></li>
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
                <img src="img/map.png" alt="mapa">
            </div>


            <div class="newsletter">
                <h2>Newsletter</h2>
                <form action="newsletter.php" action="get"> 
                    <div>
                        <p>Wpisz swój e-mail aby otrzymywać informacje o promocjach</p>
                        {$ep3gateNewsletter}
                        {*<input type="text" name="email" placeholder="Podaj adres e-mail"/>*}
                    </div>
               {*     <button class="add btn" type="submit" value="1">Zapisz się</button> lub   
                    <button class="remove btn_link" type="submit" value="2">wypisz się</button>*}
                </form>    
            </div>   
        </aside>   
    </div> <!-- #main -->
</div> <!-- #main-container -->

{include file="footer.tpl"}
