{include file="header.tpl"}


<div class="banner-container">

    <div class="editable"  data-tag="galeria" data-imagex="1400" data-max="10" data-imagey="311" data-type='gallery' data-md5='{$main_gallery.md5}' data-key='{$main_gallery.key}'>
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
            {nocache}{$ep3gateMenu}{/nocache}
            {*  zawartosc wyszukiwarki             *}
        {nocache}{$ep3gateContent}{/nocache}
        {*  stopka (musi byc na koncu bo zawiera skrypty)*}
    {nocache}{$ep3gateFooter}{/nocache}
</div>
<div id="quick_search">
    {* wyszukiwarka AutoPoszukiwacz  *}
{nocache}{$ep3gateAutoSuggest}{/nocache}
</div>


<ul class="offer">
    {* Boxy z promocjami *}
    <div style="width:200px;font-size:12px;display: none;" class="ep3promobox ep3pb17636" id="custom_promobox">
        <div style="border:1px solid #568194;">
            <div style=" background-color:#568194;" class="ep3boxvertical">
                <div style="padding:4px; font-weight:bold; text-align:center;word-wrap:break-word; color:#ffffff; font-size:14px;background-color:#568194;">Nasze wycieczki</div>
                <img alt="" style="width:100%; border-top:1px solid #568194; border-bottom:1px solid #568194;" src="pictures/offer1.png"><table width="100%" cellspacing="0" cellpadding="0">
                    <tbody>
                        {section name=offers loop=$front_page_offers}
                            <tr onmouseout="this.className = 'ep3boxoffeven1'" onmouseover="this.className = 'ep3boxover1'" class="ep3boxoffeven1" style="clear:both;">
                                <td style="padding:4px;"><span style="color:#657f00;">{$front_page_offers[offers].name}</span></td>
                                <td style="padding:4px; text-align:right;"><a href="{$front_page_offers[offers].route}" style="color:#fe6918;">od&nbsp;<b style="font-size:16px;">{$front_page_offers[offers].price}</b>&nbsp;PLN</a></td>
                            </tr>
                        {/section}
                    </tbody>
                </table>
                <div style="" class="placeholderDiv">&nbsp;</div>
                <div style="width:100%; padding:4px 0; position:absolute; bottom:0;">&nbsp;</div>
            </div>
        </div>
    </div>
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
