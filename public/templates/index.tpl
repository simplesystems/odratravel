{include file="header.tpl"}


        <div class="banner-container">
        <ul class="bxslider" id="bxslider">
                <li>
                     <a href="#">
                    <img src="/pictures/banner_1.jpg" alt="" />
                   </a>
                </li>
                <li>
                    <a href="#">
                    <img src="/pictures/banner_2.jpg" alt="" />
                    </a>
                </li>
                <li>
                    <a href="#">
                    <img src="/pictures/banner_1.jpg" alt="" />
                    </a>
                </li>

        </ul>
         </div>
        <div class="main-container">
            <div class="main wrapper clearfix">
                <div id="right">
                <div id="main_search">
                    <ul>
                        <li class="active">1. Szukaj</li>
                        <li>2. Miejsce</li>
                        <li>3. Hotel</li>
                        <li>4. Termin</li>
                        <li>5. Alternatywy</li>
                        <li>6. Rezerwacja</li>
                    </ul>   

                    <form action="search.php" method="post">
                        <p>
                            <label class="radio">
                              <input type="radio" name="optionsRadios" value="option1" checked>
                              Podróż kompletna
                            </label>
                            <label class="radio">
                              <input type="radio" name="optionsRadios" value="option2">
                              Przelot/Przejazd 
                            </label>
                              <label class="radio">
                              <input type="radio" name="optionsRadios" value="option3">
                              Dojazd własny
                            </label>
                          <label class="radio">
                              <input type="radio" name="optionsRadios" value="option4">
                              Objazdówka 
                            </label>
                              <label class="radio">
                              <input type="radio" name="optionsRadios" value="option5">
                              Rejs 
                            </label>
                              <label class="radio">
                              <input type="radio" name="optionsRadios" value="option6">
                              7+7 
                            </label>
                              <label class="radio">
                              <input type="radio" name="optionsRadios" value="option7">
                              Kolonie i Obozy
                            </label>
                        </p>


                        <div class="main_search_left">  
                            <div>
                                <div class="input"> 
                                     <label>Cel podróży</label>
                                     <select name="destination">
                                      <option>dowolny</option>
                                      <option>dowolny</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                    </select>
                                </div> 
                                <div class="input autocomplete"> 
                                     <label>Wyjazd / Wylot z</label>
                                     <input type="text" name="destynation" /><i></i>
                                </div> 
                             </div>

                            <div>
                                <div class="calendar input_small"> 
                                     <label>Podróż od</label>
                                     <input type="text" value="01.06.2013" /><i></i>
                                </div> 
                                 <div class="calendar input_small"> 
                                     <label>Powrót od</label>
                                     <input type="text" value="01.06.2013" /><i></i>
                                </div> 

                                 <div class="input_small"> 
                                     <label>Okres</label>
                                     <select name="destination">
                                      <option>6 dni</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                    </select>
                                     -  
                                    <select name="destination">
                                      <option>6 dni</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                    </select>

                                </div> 
                             </div>
                         </div>

                        <div class="main_search_right">   
                        <p>
                             <label>liczba dorosłych</label>
                             <select name="destination">
                              <option>2 os</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                        </p>
                         <p>
                             <label>1 Dziecko</label>
                             <select name="destination">
                              <option>--</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                        </p>

                         <p>    
                             <label>2 Dziecko</label>
                             <select name="destination">
                              <option>--</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                        </p>
                         <p>
                             <label>3 Dziecko</label>
                             <select name="destination">
                              <option>--</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                        </p>
                         </div> 
                         <div class="buttons">
                            <a href="#" class="button_link icon_lupa">Dodatkowe kryteria wyboru</a>
                            <a href="#" class="button_link icon_plus">Udogodnienia</a>
                            <a href="#" class="button_link icon_mapa">Mapa</a>
                            <button class="btn">Szukaj</button>
                         </div>
                    </form>

                </div>

                <div id="quick_search">
                    <form action="search.php">
                         <input type="text" name="destynation" placeholder="wpisz poszukiwaną frazę" />
                    </form>    
                </div>


                <ul class="offer">
                    <li>
                        <a class="icon" href="#">
                            <img src="/pictures/offer1.png" alt="Nasze wycieczki" />
                            <span>Nasze wycieczki</span>
                        </a>
                        <div class="offer_item">
                            <div class="price">od <b>499</b> PLN</div>
                            <span>Morfeas</span>
                            <div class="stars">
                                <i>*</i><i>*</i><i>*</i><i>*</i><i>*</i><i>*</i>
                            </div>
                               
                        </div>
                        <div class="offer_item">
                            <div class="price">od <b>499</b> PLN</div>
                            <span>Morfeas</span>
                            <div class="stars">
                                <i>*</i><i>*</i><i>*</i><i>*</i><i>*</i><i>*</i>
                            </div>
                               
                        </div>
                        <div class="offer_item">
                            <div class="price">od <b>499</b> PLN</div>
                            <span>Morfeas</span>
                            <div class="stars">
                                <i>*</i><i>*</i><i>*</i><i>*</i><i>*</i><i>*</i>
                            </div>
                               
                        </div>
                        <div class="offer_item">
                            <div class="price">od <b>499</b> PLN</div>
                            <span>Morfeas</span>
                            <div class="stars">
                                <i>*</i><i>*</i><i>*</i><i>*</i><i>*</i><i>*</i>
                            </div>
                               
                        </div>
                        <a href="#" class="btn btn_small">sprawdź więcej ofert</a>
                    </li>
                     <li>
                        <a class="icon" href="#">
                            <img src="/pictures/offer2.png" alt="Last minute" />
                            <span>Last minute</span>
                        </a>
                        <div class="offer_item">
                            <div class="price">od <b>499</b> PLN</div>
                            <span>Morfeas</span>
                            <div class="stars">
                                <i>*</i><i>*</i><i>*</i><i>*</i><i>*</i><i>*</i>
                            </div>
                               
                        </div>
                        <div class="offer_item">
                            <div class="price">od <b>499</b> PLN</div>
                            <span>Morfeas</span>
                            <div class="stars">
                                <i>*</i><i>*</i><i>*</i><i>*</i><i>*</i><i>*</i>
                            </div>
                               
                        </div>
                        <div class="offer_item">
                            <div class="price">od <b>499</b> PLN</div>
                            <span>Morfeas</span>
                            <div class="stars">
                                <i>*</i><i>*</i><i>*</i><i>*</i><i>*</i><i>*</i>
                            </div>
                               
                        </div>
                        <div class="offer_item">
                            <div class="price">od <b>499</b> PLN</div>
                            <span>Morfeas</span>
                            <div class="stars">
                                <i>*</i><i>*</i><i>*</i><i>*</i><i>*</i><i>*</i>
                            </div>
                               
                        </div>
                        <a href="#" class="btn btn_small">sprawdź więcej ofert</a>
                    </li>
                     <li>
                        <a class="icon" href="#">
                            <img src="/pictures/offer3.png" alt="All inclusive" />
                            <span>All inclusive</span>
                        </a>
                        <div class="offer_item">
                            <div class="price">od <b>499</b> PLN</div>
                            <span>Morfeas</span>
                            <div class="stars">
                                <i>*</i><i>*</i><i>*</i><i>*</i><i>*</i><i>*</i>
                            </div>
                               
                        </div>
                        <div class="offer_item">
                            <div class="price">od <b>499</b> PLN</div>
                            <span>Morfeas</span>
                            <div class="stars">
                                <i>*</i><i>*</i><i>*</i><i>*</i><i>*</i><i>*</i>
                            </div>
                               
                        </div>
                        <div class="offer_item">
                            <div class="price">od <b>499</b> PLN</div>
                            <span>Morfeas</span>
                            <div class="stars">
                                <i>*</i><i>*</i><i>*</i><i>*</i><i>*</i><i>*</i>
                            </div>
                               
                        </div>
                        <div class="offer_item">
                            <div class="price">od <b>499</b> PLN</div>
                            <span>Morfeas</span>
                            <div class="stars">
                                <i>*</i><i>*</i><i>*</i><i>*</i><i>*</i><i>*</i>
                            </div>
                               
                        </div>
                        <a href="#" class="btn btn_small">sprawdź więcej ofert</a>
                    </li>

                    <li class="clearfix"></li>

                    <li>
                        <a class="icon" href="#">
                            <img src="/pictures/offer4.png" alt="Autokarem" />
                            <span>Autokarem</span>
                        </a>
                        <div class="offer_item">
                            <div class="price">od <b>499</b> PLN</div>
                            <span>Morfeas</span>
                            <div class="stars">
                                <i>*</i><i>*</i><i>*</i><i>*</i><i>*</i><i>*</i>
                            </div>
                               
                        </div>
                        <div class="offer_item">
                            <div class="price">od <b>499</b> PLN</div>
                            <span>Morfeas</span>
                            <div class="stars">
                                <i>*</i><i>*</i><i>*</i><i>*</i><i>*</i><i>*</i>
                            </div>
                               
                        </div>
                        <div class="offer_item">
                            <div class="price">od <b>499</b> PLN</div>
                            <span>Morfeas</span>
                            <div class="stars">
                                <i>*</i><i>*</i><i>*</i><i>*</i><i>*</i><i>*</i>
                            </div>
                               
                        </div>
                        <div class="offer_item">
                            <div class="price">od <b>499</b> PLN</div>
                            <span>Morfeas</span>
                            <div class="stars">
                                <i>*</i><i>*</i><i>*</i><i>*</i><i>*</i><i>*</i>
                            </div>
                               
                        </div>
                        <a href="#" class="btn btn_small">sprawdź więcej ofert</a>
                    </li>
                     <li>
                        <a class="icon" href="#">
                            <img src="/pictures/offer5.png" alt="Objazdówki" />
                            <span>Objazdówki</span>
                        </a>
                        <div class="offer_item">
                            <div class="price">od <b>499</b> PLN</div>
                            <span>Morfeas</span>
                            <div class="stars">
                                <i>*</i><i>*</i><i>*</i><i>*</i><i>*</i><i>*</i>
                            </div>
                               
                        </div>
                        <div class="offer_item">
                            <div class="price">od <b>499</b> PLN</div>
                            <span>Morfeas</span>
                            <div class="stars">
                                <i>*</i><i>*</i><i>*</i><i>*</i><i>*</i><i>*</i>
                            </div>
                               
                        </div>
                        <div class="offer_item">
                            <div class="price">od <b>499</b> PLN</div>
                            <span>Morfeas</span>
                            <div class="stars">
                                <i>*</i><i>*</i><i>*</i><i>*</i><i>*</i><i>*</i>
                            </div>
                               
                        </div>
                        <div class="offer_item">
                            <div class="price">od <b>499</b> PLN</div>
                            <span>Morfeas</span>
                            <div class="stars">
                                <i>*</i><i>*</i><i>*</i><i>*</i><i>*</i><i>*</i>
                            </div>
                               
                        </div>
                        <a href="#" class="btn btn_small">sprawdź więcej ofert</a>
                    </li>
                     <li>
                        <a class="icon" href="#">
                            <img src="/pictures/offer6.png" alt="Dla aktywnych" />
                            <span>Dla aktywnych</span>
                        </a>
                        <div class="offer_item">
                            <div class="price">od <b>499</b> PLN</div>
                            <span>Morfeas</span>
                            <div class="stars">
                                <i>*</i><i>*</i><i>*</i><i>*</i><i>*</i><i>*</i>
                            </div>
                               
                        </div>
                        <div class="offer_item">
                            <div class="price">od <b>499</b> PLN</div>
                            <span>Morfeas</span>
                            <div class="stars">
                                <i>*</i><i>*</i><i>*</i><i>*</i><i>*</i><i>*</i>
                            </div>
                               
                        </div>
                        <div class="offer_item">
                            <div class="price">od <b>499</b> PLN</div>
                            <span>Morfeas</span>
                            <div class="stars">
                                <i>*</i><i>*</i><i>*</i><i>*</i><i>*</i><i>*</i>
                            </div>
                               
                        </div>
                        <div class="offer_item">
                            <div class="price">od <b>499</b> PLN</div>
                            <span>Morfeas</span>
                            <div class="stars">
                                <i>*</i><i>*</i><i>*</i><i>*</i><i>*</i><i>*</i>
                            </div>
                               
                        </div>
                        <a href="#" class="btn btn_small">sprawdź więcej ofert</a>
                    </li>
                </ul>    

                <div class="main_banner">
                    <a class="icon" href="#">
                            <img src="/pictures/banner.jpg" alt="banner" />
                    </a>
                </div>    
            </div>
                <aside id="left">
                    
                <ul id="sidemenu">
                    <li class="active"><a href="##"><span><img src="img/a_menu1.png" alt="Pielgrzymki"/></span><b>Pielgrzymki</b></a>

                    <ul>
                            <li><a href="##">Chorwacja</a></li>
                            <li><a href="##">Francja</a></li>
                            <li><a href="##">Grecja</a></li>
                            <li><a href="##">Izrael</a></li>
                            <li><a href="##">Meksyk</a></li>
                            <li><a href="##">Portugalia</a></li>
                            <li><a href="##">Włochy</a></li>
                    </ul>        
                    </li>
                    <li><a href="##"><span><img src="img/menu2.png" alt="Wczasy lotnicze"/></span><b>Wczasy lotnicze</b></a>
                         <ul>
                            <li><a href="##">Chorwacja</a></li>
                            <li><a href="##">Francja</a></li>
                            <li><a href="##">Grecja</a></li>
                            <li><a href="##">Izrael</a></li>
                            <li><a href="##">Meksyk</a></li>
                            <li><a href="##">Portugalia</a></li>
                            <li><a href="##">Włochy</a></li>
                    </ul>


                    </li>
                    <li><a href="##"><span><img src="img/menu3.png" alt="Weekendy lotnicze"/></span><b>Weekendy lotnicze</b></a></li>
                    <li><a href="##"><span><img src="img/menu4.png" alt="Wycieczki szkolne"/></span><b>Wycieczki szkolne</b></a></li>
                    <li><a href="##"><span><img src="img/menu5.png" alt="Oferty dla grup"/></span><b>Oferty dla grup</b></a></li>
                    <li><a href="##"><span><img src="img/menu6.png" alt="Oferta dla singlii"/></span><b>Oferta dla singlii</b></a></li>
                    <li><a href="##"><span><img src="img/menu7.png" alt="Dojazd własny"/></span><b>Dojazd własny</b></a></li>
                    <li><a href="##"><span><img src="img/menu8.png" alt="Bony upominkowe"/></span><b>Bony upominkowe</b></a></li>
                    <li><a href="##"><span><img src="img/menu9.png" alt="Bilety autobusowe"/></span><b>Bilety autobusowe</b></a></li>
                    <li><a href="##"><span><img src="img/menu10.png" alt="Wczasy z Niemiec"/></span><b>Wczasy z Niemiec</b></a></li>
                    <li><a href="##"><span><img src="img/menu11.png" alt="Eurotier"/></span><b>Eurotier</b></a></li>
                    <li><a href="##"><span><img src="img/menu12.png" alt="Wynajem autokarów"/></span><b>Wynajem autokarów</b></a></li>
                    <li><a href="##"><span><img src="img/menu13.png" alt="Ubezpieczenia"/></span><b>Ubezpieczenia</b></a></li>
                 </ul>   

               
                <address>
                    <h2>Kontakt</h2>
                    <div>   
                    <p class="tel">+48 <b>91 421 05 30</b></p>
                    <a class="email" href="mailto:odratravel@odratravel.pl">odratravel@odratravel.pl</a>
                    <p class="info"> od 9 do 16:00</p>   
                    </div> 
                    <a class="btn">Napisz do nas</a>
                       
                </address>

                <div class="map">
                    <h2>Jak do nas dojechać?</h2>
                    <img src="img/map.png" alt="mapa">
                </div>


                 <div class="newsletter">
                    <h2>Newsletter</h2>
                    <form action="newsletter.php" action="get"> 
                        <div>
                            <p>Wpisz swój e-mail aby otrzymywać informacje o promocjach</p>
                            <input type="text" name="email" placeholder="Podaj adres e-mail"/>
                        </div>
                        <button class="add btn" type="submit" value="1">Zapisz się</button> lub   
                        <button class="remove btn_link" type="submit" value="2">wypisz się</button>
                    </form>    
                </div>   
                 </aside>   
            </div> <!-- #main -->
        </div> <!-- #main-container -->

{include file="footer.tpl"}
