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
                {nocache}{$ep3gateMenu}
                {/nocache}
                {*  zawartosc wyszukiwarki             *}
            {nocache}{$ep3gateContent}{/nocache}
            {*  stopka (musi byc na koncu bo zawiera skrypty)*}
        {nocache}{$ep3gateFooter}{/nocache}
    </div>

    <div id="quick_search">
        <form action="search.php">
            {* wyszukiwarka AutoPoszukiwacz  *}
        {nocache}{$ep3gateAutoSuggest}{/nocache}
    </form>    
</div>


<ul class="offer">
    {* Boxy z promocjami *}
{nocache}{$ep3gatePromoBox}{/nocache}
</ul>    

<div class="main_banner">
    <a class="icon" href="{$index_banner.link}">
        <img class="editable left" data-imagex="710" data-imagey="137" data-type='image' data-optional="yes" data-md5='' data-key='index_banner' src="{$index_banner.src}"></img>
    </a>
</div>    
</div>
{include file="menu.tpl"} 
</div> <!-- #main -->
</div> <!-- #main-container -->
{include file="footer.tpl"}
