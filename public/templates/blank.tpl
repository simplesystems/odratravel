{include file="header.tpl"}
<div class="banner-container">
    <div class="bxslider" id="bxslider_static">
        <img class="editable" data-imagey="311" data-imagex="1400" data-type='image' data-md5='{$templatebackground.md5}' data-key='{$templatebackground.key}' src="{$templatebackground.src}"></img>
    </div>
</div>
<div class="main-container">
    <div class="main wrapper clearfix">
        <div id="right">
            <h3><div class="editable"  data-textarea='yes' data-type='text' data-md5='{$templatetitle.md5}' data-key='{$templatetitle.key}'>{$templatetitle.value}</div>
            </h3>
            <div class="description clearfix cms">
                <p>
                <div class="editable"  data-type='text' data-md5='{$templatetext0.md5}' data-key='{$templatetext0.key}'>{$templatetext0.value}</div>
                </p>
            </div>
        </div>
        {include file="menu.tpl"} 
    </div> <!-- #main -->
</div> <!-- #main-container -->
{include file="footer.tpl"}