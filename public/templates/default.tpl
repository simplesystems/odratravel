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
        {include file="menu.tpl"} 
    </div> <!-- #main -->
</div> <!-- #main-container -->
{include file="footer.tpl"}