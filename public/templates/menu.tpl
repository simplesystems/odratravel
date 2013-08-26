<aside id="left">
    <ul id="sidemenu">
        {foreach from=$menu_left item=menu}
            <li><a href="{$menu.route}"><span><img src="/files/image/resized/{$menu.img}/40/28/image.png" data-hover="/files/image/resized/{$menu.imghover}/40/28/image.png"  data-route="{$menu.route}"/></span><b>{$menu.lang}</b></a>
                        {if isset($menu.elem)}
                    <ul>
                        {foreach from=$menu.elem item=m}
                            <li><a href="{$m.route}">{$m.disp}</a></li>
                            {/foreach}
                    </ul>
                {/if}
            </li>
        {/foreach}
    </ul>   


    <address>
        <h2>{$LANG_CONTACT}</h2>

        <div class="editable"  data-type='text' data-md5='{$menuphone.md5}' data-key='{$menuphone.key}'>{$menuphone.value}
        </div>

        <a class="btn" href="/strona/kontakt">{$LANG_WRITE}</a>

    </address>

    <div class="map">
        <h2>{$LANG_HOW}</h2>
        <iframe width="225" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://mapy.google.pl/maps?f=q&amp;source=s_q&amp;hl=pl&amp;geocode=&amp;q=Biuro+Podr%C3%B3%C5%BCy+Odra+Travel,+Marsza%C5%82ka+J%C3%B3zefa+Pi%C5%82sudskiego+34,+Szczecin&amp;aq=0&amp;oq=odra&amp;sll=53.429696,14.624624&amp;sspn=0.453295,1.327286&amp;ie=UTF8&amp;hq=Biuro+Podr%C3%B3%C5%BCy+Odra+Travel,&amp;hnear=Marsza%C5%82ka+J%C3%B3zefa+Pi%C5%82sudskiego+34,+Szczecin,+Wojew%C3%B3dztwo+zachodniopomorskie&amp;t=m&amp;ll=53.432753,14.548688&amp;spn=0.00767,0.009613&amp;z=15&amp;output=embed"></iframe>
    </div>


    <div class="newsletter">
        <h2>Newsletter</h2>
        <form action="newsletter.php" action="get"> 
            <div>
                <p>{$LANG_NEWS}</p>
                {$ep3gateNewsletter}
                {*                        <input type="text" name="email" placeholder="Podaj adres e-mail"/>*}
            </div>
            {*                    <button class="add btn" type="submit" value="1">{$LANG_SIGNIN}</button> {$LANG_OR}   
            <button class="remove btn_link" type="submit" value="2">{$LANG_SIGNOUT}</button>*}
        </form>    
    </div>   
</aside>  