
<div class="footer-container">
    <footer class="wrapper">
        <ul class="footer1" id="menu-info">
            <li>
                <h2>O nas</h2>
            </li>
            {if isset($menuItems.info)}
                {foreach from=$menuItems.info item=foo}
                    <li><a href="{$foo.route}">{$foo.title}</a></li>
                    {/foreach}

            {else}
                <li>
                    <a href="/link">O firmie</a>
                </li>
                <li>
                    <a href="/link">Partnerzy</a>
                </li>
                <li>
                    <a href="/link">Kontakt</a>
                </li>  
            {/if}
        </ul>
        <ul class="footer2" id="menu-help">
            <li>
                <h2>Pomoc</h2>
            </li>
            {if isset($menuItems.help)}
                {foreach from=$menuItems.help item=foo}
                    <li><a href="{$foo.route}">{$foo.title}</a></li>
                    {/foreach}

            {else}
            <li>
                <a href="/link">Jak dokonać rezerwacji?</a>
            </li>
            <li>
                <a href="/link">Dokumenty do pobrania</a>
            </li>
            <li>
                <a href="/link">Regulamin</a>
            </li>   
            {/if}
        </ul>
        <ul class="footer3">
            <li>
                <h2>Dane naszej firmy</h2>
            </li>
            <li>
                <a href="/link">Odra Travel sp. z o.o.</a>
            </li>
            <li>
                <a href="/link">ul Piłsudskiego 34</a>
            </li>
            <li>
                <a href="/link">70-423 Szczecin</a>
            </li>    
        </ul>  

        <ul class="footer4">
            <li>
                <span>tel.: +48 91 421 05 30</span>
            </li>
            <li>
                <span>fax: +48 91 421 13 55</span>
            </li>
            <li>
                <a href="mailto:odratravel@odratravel.pl">odratravel@odratravel.pl</a>
            </li>   

        </ul>  

        <ul class="footer5">

            <li>
                <span>NIP: 8522152351</span>
            </li>
            <li>
                <span>pn.-pt. w godz. 9-17:00</span>
            </li>

        </ul> 

        <img src="/img/payment.png" alt="płatności">

        <p>
            Strona korzysta z plików cookie w celu realizacji usług zgodnie z polityką prywatności. Możesz określić warunki przechowywania lub dostępu do cookie w Twojej przeglądarce.
            Oferta zamieszczona na stronie nie stanowi oferty handlowej w rozumieniu art. 66 Kodeksu Cywilnego oraz innych właściwych przepisów prawnych.
        </p>
    </footer>
</div>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="{$__jsDir}vendor/jquery-1.9.1.min.js"><\/script>')</script>


{foreach from=$cadminJs item=js}
    <script src="{$__jsDir}{$js}"></script>
{/foreach}
<script src="{$__jsDir}jquery.bxslider.min.js"></script>
<script src="{$__jsDir}jquery.fitvids.js"></script>
<script src="{$__jsDir}jquery.easing.1.3.js"></script>
<script src="{$__jsDir}fancybox/jquery.fancybox-1.3.1.js"></script>
<script src="{$__jsDir}main.js"></script>


{*        <script>
var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
s.parentNode.insertBefore(g,s)}(document,'script'));
</script>*}
</body>
</html>
