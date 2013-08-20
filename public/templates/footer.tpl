
<div class="footer-container">
    <footer class="wrapper">
        <ul class="footer1" id="menu-info">
            <li class='h2'>
                <h2>{$LANG_ABOUT}</h2>
            </li>
            {if isset($menuItems.info)}
                {foreach from=$menuItems.info item=foo}
                    {if $lang === 1}
                        <li><a href="{$foo.route}">{$foo.lang_1}</a></li>
                        {/if}
                        {if $lang === 2}
                        <li><a href="{$foo.route}">{$foo.lang_2}</a></li>
                        {/if}
                        {if $lang === 3}
                        <li><a href="{$foo.route}">{$foo.lang_3}</a></li>
                        {/if}
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
            <li class='h2'>
                <h2>{$LANG_HELP}</h2>
            </li>
            {if isset($menuItems.help)}
                {foreach from=$menuItems.help item=foo}
                    {if $lang === 1}
                        <li><a href="{$foo.route}">{$foo.lang_1}</a></li>
                        {/if}
                        {if $lang === 2}
                        <li><a href="{$foo.route}">{$foo.lang_2}</a></li>
                        {/if}
                        {if $lang === 3}
                        <li><a href="{$foo.route}">{$foo.lang_3}</a></li>
                        {/if}
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
            <li class='h2'>
                <h2>{$LANG_INFO}</h2>
            </li>
            <li>
                <div class="editable"  data-type='text' data-md5='{$footermenu.{0}.md5}' data-key='{$footermenu.{0}.key}'>{$footermenu.{0}.value}
            </li>
            <li>
                <div class="editable"  data-type='text' data-md5='{$footermenu.{1}.md5}' data-key='{$footermenu.{1}.key}'>{$footermenu.{1}.value}
            </li>
            <li>
                <div class="editable"  data-type='text' data-md5='{$footermenu.{2}.md5}' data-key='{$footermenu.{2}.key}'>{$footermenu.{2}.value}
        </ul>  

        <ul class="footer4">
            <li>
                <div class="editable"  data-type='text' data-md5='{$footermenu.{3}.md5}' data-key='{$footermenu.{3}.key}'>{$footermenu.{3}.value}
            </li>
            <li>
                <div class="editable"  data-type='text' data-md5='{$footermenu.{4}.md5}' data-key='{$footermenu.{4}.key}'>{$footermenu.{4}.value}
            </li>
            <li>
                <div class="editable"  data-type='text' data-md5='{$footermenu.{5}.md5}' data-key='{$footermenu.{5}.key}'>{$footermenu.{5}.value}
            </li>   

        </ul>  

        <ul class="footer5">
            <li>
                <div class="editable"  data-type='text' data-md5='{$footermenu.{6}.md5}' data-key='{$footermenu.{6}.key}'>{$footermenu.{6}.value}
            </li>
            <li>
                <div class="editable"  data-type='text' data-md5='{$footermenu.{7}.md5}' data-key='{$footermenu.{7}.key}'>{$footermenu.{7}.value}
            </li>

        </ul> 

        <img src="/img/payment.png" alt="płatności">

        <p>
            {$LANG_COOKIES}
        </p>
    </footer>
</div>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="{$__jsDir}vendor/jquery-1.9.1.min.js"><\/script>')</script>

{if isset($cadminJs)}
    {foreach from=$cadminJs item=js}
        <script src="{$__jsDir}{$js}"></script>
    {/foreach}
{/if}
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
