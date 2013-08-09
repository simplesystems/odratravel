<?php
/**
 * UWAGA: 
 * Należy podać poniżej właściwą ścieżke do pliku ep3gate.class.php
 * Plik ten jest dostarczany razem z dokumentacją i znajduje sie w katalogu
 * 
 * Biblioteka_ep3gate/
 * 
 * Należy wybrać wersje właciwą dla wersji PHP zainstalowanej na serwerze.
 * 
 * POZOSTAŁE UWAGI:
 * - w tym pliku NIE należy podawać parametrów dotyczących kodowania przy wywołaniu biblioteki ep3gate. Zwracana zawartość powinna być w kodowaniu UTF-8 (domyślne).
 * - nie należy dodawać żadnej innej zawartości do tego pliku, dodanie takowej spowoduje brak możliwości sprawdzenia dostępności w step 4.
 */

require_once('../../libs/Gate/ep3gate.class.php');

$ep3gate=new ep3gate(
  '4880',  //nr klienta
  'OdraTravel' // nazwa afiliate
  );

$ep3gate->printContents();

?>
