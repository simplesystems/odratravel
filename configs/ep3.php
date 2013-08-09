
<?php

if (!(isset($_GET['ep3']))) {
    $_GET['ep3'] = array();
}

$ep3gate = new ep3gate('4880', 'OdraTravel', 'ep3');
$ep3gate->fetch(array('menu', 'searchform', 'configcss', 'headercss', 'configcss', 'headerjs', 'footer', 'content', 'main_gate', 'autosuggest', 'promobox','newsletter'));

$smarty->assign('headercss', $ep3gate->getPart('headercss'));
$smarty->assign('configcss', $ep3gate->getPart('configcss'));
$smarty->assign('headerjs', $ep3gate->getPart('headerjs'));
$smarty->assign('ep3gateMenu', $ep3gate->getPart('menu'));
$smarty->assign('ep3gateContent', $ep3gate->getPart('content'));
$smarty->assign('ep3gateSearchForm', $ep3gate->getPart('searchform'));
$smarty->assign('ep3gateFooter', $ep3gate->getPart('footer'));
$smarty->assign('ep3gateAutoSuggest', $ep3gate->getPart('autosuggest'));
$smarty->assign('ep3gatePromoBox', $ep3gate->getPart('promobox'));
$smarty->assign('ep3gateNewsletter', $ep3gate->getPart('newsletter'));
?>
