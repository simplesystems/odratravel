<?php /* Smarty version Smarty-3.1.14, created on 2013-08-09 12:27:05
         compiled from "./templates/footer.tpl" */ ?>
<?php /*%%SmartyHeaderCode:2206111105204c3f9ad6867-94047917%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '3a4f6f0d327fc7bc3ea86f63906a1bf934ca50c7' => 
    array (
      0 => './templates/footer.tpl',
      1 => 1375949653,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '2206111105204c3f9ad6867-94047917',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    '__jsDir' => 0,
    'cadminJs' => 0,
    'js' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.14',
  'unifunc' => 'content_5204c3f9af5901_54354427',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5204c3f9af5901_54354427')) {function content_5204c3f9af5901_54354427($_smarty_tpl) {?>
<div class="footer-container">
    <footer class="wrapper">
        <ul class="footer1">
            <li>
                <h2>O nas</h2>
            </li>
            <li>
                <a href="/link">O firmie</a>
            </li>
            <li>
                <a href="/link">Partnerzy</a>
            </li>
            <li>
                <a href="/link">Kontakt</a>
            </li>    
        </ul>    

        <ul class="footer2">
            <li>
                <h2>Pomoc</h2>
            </li>
            <li>
                <a href="/link">Jak dokonać rezerwacji?</a>
            </li>
            <li>
                <a href="/link">Dokumenty do pobrania</a>
            </li>
            <li>
                <a href="/link">Regulamin</a>
            </li>    
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
<script>window.jQuery || document.write('<script src="<?php echo $_smarty_tpl->tpl_vars['__jsDir']->value;?>
vendor/jquery-1.9.1.min.js"><\/script>')</script>


<?php  $_smarty_tpl->tpl_vars['js'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['js']->_loop = false;
 $_from = $_smarty_tpl->tpl_vars['cadminJs']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['js']->key => $_smarty_tpl->tpl_vars['js']->value){
$_smarty_tpl->tpl_vars['js']->_loop = true;
?>
    <script src="<?php echo $_smarty_tpl->tpl_vars['__jsDir']->value;?>
<?php echo $_smarty_tpl->tpl_vars['js']->value;?>
"></script>
<?php } ?>
<script src="<?php echo $_smarty_tpl->tpl_vars['__jsDir']->value;?>
jquery.bxslider.min.js"></script>
<script src="<?php echo $_smarty_tpl->tpl_vars['__jsDir']->value;?>
jquery.fitvids.js"></script>
<script src="<?php echo $_smarty_tpl->tpl_vars['__jsDir']->value;?>
jquery.easing.1.3.js"></script>
<script src="<?php echo $_smarty_tpl->tpl_vars['__jsDir']->value;?>
fancybox/jquery.fancybox-1.3.1.js"></script>
<script src="<?php echo $_smarty_tpl->tpl_vars['__jsDir']->value;?>
main.js"></script>



</body>
</html>
<?php }} ?>