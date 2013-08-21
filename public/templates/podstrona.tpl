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
                        {if isset($templatelist.thead)}
                            <thead>
                                {foreach from=$templatelist.thead item=table}
                                    <tr>
                                        {foreach from=$table item=td}
                                            <td>{$td}</td>
                                        {/foreach}
                                    </tr>
                                {/foreach}

                            </thead>
                        {/if}                            
                        <tbody>
                            {foreach from=$templatelist.table item=table}
                                <tr>
                                    {foreach from=$table item=td}
                                        <td>{$td}</td>
                                    {/foreach}
                                </tr>
                            {/foreach}
                        </tbody>
                    </table>
                    <br />
                    <br />

                    <div class="price">
                        <del><div class="editable" id="old_price" data-type='text'data-textarea='yes'  data-md5='{$templatepricedel.md5}' data-key='{$templatepricedel.key}'>{$templatepricedel.value}</div></del>
                    {if $smarty.session.cadmin}<a id="old_price_trigger" href="#">zmień starą cenę</a>{/if}
                    <div class="value"><small>cena:</small><span class="editable" style="clear: both;" data-textarea='yes'  data-type='text' data-md5='{$templateprice.md5}' data-key='{$templateprice.key}'>{$templateprice.value}</span></div>
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

    </div>  {include file="menu.tpl"} 
</div> <!-- #main -->
</div> <!-- #main-container -->
{include file="footer.tpl"}