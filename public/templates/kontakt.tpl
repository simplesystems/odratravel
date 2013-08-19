{include file="header.tpl"}
<div class="banner-container">
    <div class="bxslider" id="bxslider_static">
        <img src="/pictures/banner_1.jpg" alt="alt" />
    </div>
</div>
<div class="main-container">
    <div class="main wrapper clearfix">
        <div id="right">

            <h3>{$LANG_CONTACT}</h3>

            <div class="description2 clearfix cms editable"  data-type='text' data-md5='{$kontaktdata.md5}' data-key='{$kontaktdata.key}'>{$kontaktdata.value}</div>


            <h3>{$LANG_FORM_CONTACT}</h3>

            <div class="description clearfix cms">

                <form name="htmlform" method="post" action="#">

                    <div class="form_line">
                        <div class="form_col1">
                            <label for="name">{$LANG_NAME}<span class="red">*</span></label>
                        </div>
                        <div class="form_col2">
                            <input  type="text" name="name" maxlength="50" size="30">
                        </div>
                    </div>

                    <div class="form_line">
                        <div class="form_col1">
                            <label for="email">{$LANG_EMAIL}<span class="red">*</span></label>
                        </div>
                        <div class="form_col2">
                            <input  type="text" name="email" maxlength="80" size="30">
                        </div>
                    </div>

                    <div class="form_line">
                        <div class="form_col1">
                            <label for="telephone">{$LANG_TEL}</label>
                        </div>
                        <div class="form_col2">
                            <input  type="text" name="telephone" maxlength="30" size="30">
                        </div>
                    </div>

                    <div class="form_line">
                        <div class="form_col1">
                            <label for="comments">{$LANG_CONTENT}<span class="red">*</span></label>
                        </div>
                        <div class="form_col2">
                            <textarea  name="comments" maxlength="1000" rows="6"></textarea>
                        </div>
                    </div>

                    <div class="form_line2">
                        <div>
                            <input type="submit" value="{$LANG_SEND}" class="btn">   
                        </div>
                    </div>
                    {if isset($sent)}
                        {if $sent === 'yes'}
                            {$LANG_SENT}
                        {/if}
                        {if $sent === 'no'}
                            {$LANG_FORM_ERROR}
                        {/if}

                    {/if}


                </form>

            </div>

            <h3>{$LANG_HOW}</h3>
            <div class="description clearfix cms">
                <iframe width="710" height="370" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://mapy.google.pl/maps?f=q&amp;source=s_q&amp;hl=pl&amp;geocode=&amp;q=Biuro+Podr%C3%B3%C5%BCy+Odra+Travel,+Marsza%C5%82ka+J%C3%B3zefa+Pi%C5%82sudskiego+34,+Szczecin&amp;aq=0&amp;oq=odra+tr&amp;sll=53.429696,14.624624&amp;sspn=0.327696,1.056747&amp;ie=UTF8&amp;hq=Biuro+Podr%C3%B3%C5%BCy+Odra+Travel,&amp;hnear=Marsza%C5%82ka+J%C3%B3zefa+Pi%C5%82sudskiego+34,+Szczecin,+Wojew%C3%B3dztwo+zachodniopomorskie&amp;t=m&amp;ll=53.434172,14.55137&amp;spn=0.00473,0.015213&amp;z=16&amp;iwloc=A&amp;output=embed"></iframe>
            </div>

        </div>
        {include file="menu.tpl"} 
    </div> <!-- #main -->
</div> <!-- #main-container -->
{include file="footer.tpl"}