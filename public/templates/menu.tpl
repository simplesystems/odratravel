<aside id="left">
    <ul id="sidemenu">
        {foreach from=$menu_left item=menu}
            <li><a href="##"><span><img src="/files/image/resized/{$menu.img}/40/28/image.png" data-hover="/files/image/resized/{$menu.imghover}/40/28/image.png"  data-route="{$menu.route}"/></span><b>{$menu.lang}</b></a>
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
        <div>   
            <p class="tel">+48 <b>91 421 05 30</b></p>
            <a class="email" href="mailto:odratravel@odratravel.pl">odratravel@odratravel.pl</a>
            <p class="info"> od 9 do 16:00</p>   
        </div> 
        <a class="btn">{$LANG_WRITE}</a>

    </address>

    <div class="map">
        <h2>{$LANG_HOW}</h2>
        <img src="/img/map.png" alt="mapa">
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