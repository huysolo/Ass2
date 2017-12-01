
<?php
include '../layout/header.php';
?>

<link rel="stylesheet" href="../../assert/css/comics1.css">


      
      <?php

            include 'connect.php';
            $count = 1;
            $query4 = "SELECT Photos FROM `blog` WHERE OnTop = 4 ORDER BY ReleaseDate DESC";
            $result4 = mysqli_query($dbhandle,$query4);

            $OnTop4 = mysqli_fetch_array($result4);
            $OnTop4_1 = mysqli_fetch_array($result4);
            $OnTop4_2 = mysqli_fetch_array($result4);
            $OnTop4_3 = mysqli_fetch_array($result4);
            
            //OnTop = 2 
            $query5 = "SELECT Photos FROM `blog` WHERE OnTop = 5 ORDER BY ReleaseDate DESC";
            $result5 = mysqli_query($dbhandle,$query5);

            $OnTop5 = mysqli_fetch_array($result5);
            $OnTop5_1 = mysqli_fetch_array($result5);
            $OnTop5_2 = mysqli_fetch_array($result5);
            
             //OnTop = 2 
            $query6 = "SELECT Photos FROM `blog` WHERE OnTop = 6 ORDER BY ReleaseDate DESC"; 
            $result6 = mysqli_query($dbhandle,$query6);
            $OnTop6 = mysqli_fetch_array($result6);
            $OnTop6_1 = mysqli_fetch_array($result6);
            $OnTop6_2 = mysqli_fetch_array($result6);
            $OnTop6_3 = mysqli_fetch_array($result6);
            $OnTop6_4 = mysqli_fetch_array($result6);
            
           
            ?>
      
      
    <div class="container" onload="a()">
        <div id="m-grap">
            
            <div id="m-grap-content">

                <div id="m-grap-content-list" class="row" >                   
                    
                    <div class="col-md-4 col-sm-12 col-xs-12">
                        <div  id="m-grap-content-list-block">
                            <p>
                                COMICS & GRAPHIC NOVELS
                            </p>
                        </div>
                    </div>
                    
                    <div class="col-md-4 col-sm-0 col-xs-0">

                    </div>
                    <div class="scrollmenu col-md-4 col-sm-12 col-xs-12" id="m-grap-content-list-ul">
                        <a href="#home" class="active" id="m-grap-content-list-ul" style="color:#0282f9">THIS WEEK</a>
                        <a href="#news" id="m-grap-content-list-ul">LAST WEEK</a>
                        <a href="#contact" id="m-grap-content-list-ul">NEXT WEEK</a>
                        <a href="#about" id="m-grap-content-list-ul">UPCOMING</a>
                        <a href="#about" id="m-grap-content-list-ul">SEE ALL</a>
                    </div>                                      
                </div>
                
                
                <div id="m-grap-content-main" class="row">
                    <div class="col-md-3 col-sm-6 col-xs-12" id="m-grap-content-main-div">
                        <a class="thumbnail text-center" id="m-grap-content-main-div-link">
                            <img alt="" src="../assert/images/<?php echo $OnTop4[0]; ?> "/>
                            <div class="caption">
                                <h4 id="m-grap-content-main-div-link-cap" class="text-center">
                                 WONDER WOMAN #32
                                    
                                </h4>
                            </div>
                            <p id="m-grap-content-main-div-link-date">
                                WEDNESDAY, OCTOBOR 11TH, 2017  
                            </p>
                        </a>
                    </div>
                    
                    <div class="col-md-3 col-sm-6 col-xs-12" id="m-grap-content-main-div">
                        <a class="thumbnail text-center" id="m-grap-content-main-div-link">
                            <img src="../assert/images/<?php echo $OnTop4_1[0]; ?>"/>
                            <div class="caption">
                                <h4 id="m-grap-content-main-div-link-cap" class="text-center">
                                 WONDER WOMAN #32
                                    
                                </h4>
                            </div>
                            <p id="m-grap-content-main-div-link-date">
                                WEDNESDAY, OCTOBOR 11TH, 2017  
                            </p>
                        </a>
                    </div>
                    
                    <div class="col-md-3 col-sm-6 col-xs-12" id="m-grap-content-main-div">
                        <a class="thumbnail text-center" id="m-grap-content-main-div-link">
                            <img src="../assert/images/<?php echo $OnTop4_2[0]; ?>"/>
                            <div class="caption">
                                <h4 id="m-grap-content-main-div-link-cap" class="text-center">
                                 WONDER WOMAN #32
                                    
                                </h4>
                            </div>
                            <p id="m-grap-content-main-div-link-date">
                                WEDNESDAY, OCTOBOR 11TH, 2017  
                            </p>
                        </a>
                    </div>
                    
                    <div class="col-md-3 col-sm-6 col-xs-12" id="m-grap-content-main-div">
                        <a class="thumbnail text-center" id="m-grap-content-main-div-link">
                            <img src="../assert/images/<?php echo $OnTop4_3[0]; ?>"/>
                            <div class="caption">
                                <h4 id="m-grap-content-main-div-link-cap" class="text-center">
                                 WONDER WOMAN #32
                                    
                                </h4>
                            </div>
                            <p id="m-grap-content-main-div-link-date">
                                WEDNESDAY, OCTOBOR 11TH, 2017  
                            </p>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
        
        <div id="m-read">
            <div id="m-read-title">
                <p>
                    MUST READ
                </p>
            </div>
            <div id="m-read-content">
                <div id="m-read-content-main" class="row">
                    <div class="col-md-3 col-sm-6 col-xs-12" id="m-read-content-main-div">
                        <a class="thumbnail text-center" id="m-read-content-main-div-link">
                            <img src="../assert/images/<?php echo $OnTop5[0]; ?>"/>
                            <div class="caption" id="m-read-content-main-div-link-cap">
                                <p id="m-read-content-main-div-link-cap1" class="text-left">
                                 THE NEXT EPIC STARTS HERE!                                    
                                </p>
                                <p id="m-read-content-main-div-link-cap2" class="text-left">
                                DC UNIVERSE: REBIRTH 
                                </p>
                                <p id="m-read-content-main-div-link-decs" class="text-left">
                                    The next chapter in the ongoing saga of the DC Universe  
                                </p>
                            </div>
                            
                        </a>
                    </div>
                    
                    <div class="col-md-3 col-sm-6 col-xs-12" id="m-read-content-main-div">
                        <a class="thumbnail text-center" id="m-read-content-main-div-link">
                            <img src="../assert/images/<?php echo $OnTop5_1[0]; ?>"/>
                            <div class="caption" id="m-read-content-main-div-link-cap">
                                <p id="m-read-content-main-div-link-cap1" class="text-left">
                                 THE NEXT EPIC STARTS HERE!                                    
                                </p>
                                <p id="m-read-content-main-div-link-cap2" class="text-left">
                                DC UNIVERSE: REBIRTH 
                                </p>
                                <p id="m-read-content-main-div-link-decs" class="text-left">
                                    The next chapter in the ongoing saga of the DC Universe  
                                </p>
                            </div>
                            
                        </a>
                    </div>
                    
                    <div class="col-md-3 col-sm-6 col-xs-12" id="m-read-content-main-div">
                        <a class="thumbnail text-center" id="m-read-content-main-div-link">
                            <img src="../assert/images/<?php echo $OnTop5_2[0]; ?>"/>
                            <div class="caption" id="m-read-content-main-div-link-cap">
                                <p id="m-read-content-main-div-link-cap1" class="text-left">
                                 THE NEXT EPIC STARTS HERE!                                    
                                </p>
                                <p id="m-read-content-main-div-link-cap2" class="text-left">
                                DC UNIVERSE: REBIRTH 
                                </p>
                                <p id="m-read-content-main-div-link-decs" class="text-left">
                                    The next chapter in the ongoing saga of the DC Universe  
                                </p>
                            </div>
                            
                        </a>
                    </div>
                </div>

            </div>
        </div>
        
        
        <div class="Container" id="m-sneak">
            <div id="m-sneak-title">
                <p>
                    SNEAK PEEK
                </p>
            </div>
            
            
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
              <!-- Indicators -->
              <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>
                <li data-target="#myCarousel" data-slide-to="4"></li>
              </ol>

              <!-- Wrapper for slides -->
              <div class="carousel-inner">
                <div class="item active" id="m-head-main-block">
                  <img src="../assert/images/<?php echo $OnTop6[0]; ?>" >                  
                </div> 
                  
                  <div class="item" id="m-head-main-block">
                  <img src="../assert/images/<?php echo $OnTop6_1[0]; ?>" >                  
                </div>
                  
                  <div class="item " id="m-head-main-block">
                  <img src="../assert/images/<?php echo $OnTop6_2[0]; ?>" >                  
                </div>
                  
                  <div class="item " id="m-head-main-block">
                  <img src="../assert/images/<?php echo $OnTop6_3[0]; ?>" >                  
                </div>
                  
                  <div class="item " id="m-head-main-block">
                  <img src="../assert/images/<?php echo $OnTop6_4[0]; ?>" >                  
                </div>
              </div>

              <!-- Left and right controls -->
              <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="right carousel-control" href="#myCarousel" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
                                                     
           
            
            
            <div id="m-sneak-content">
                <ul class="Carousel">
                    <li class="Items Front">
                        <div>
                              <a class="thumbnail" id="m-sneak-content-link">
                                  <img src="../assert/images/<?php echo $OnTop6[0]; ?> " id="m-who-img"/>                           
                              </a>
                          </div>
                    </li>

                    <li class="Items Left">
                        <div>
                              <a class="thumbnail" id="m-sneak-content-link">
                                  <img src="../assert/images/<?php echo $OnTop6_1[0]; ?>" id="m-who-img"/>                           
                              </a>
                          </div>
                    </li>

                    <li class="Items Left2">
                        <div>
                              <a class="thumbnail" id="m-sneak-content-link">
                                  <img src="../assert/images/<?php echo $OnTop6_2[0]; ?>" id="m-who-img"/>                           
                              </a>
                          </div>
                    </li>

                    <li class="Items Right">
                        <div>
                              <a class="thumbnail" id="m-sneak-content-link">
                                  <img src="../assert/images/<?php echo $OnTop6_3[0]; ?>" id="m-who-img"/>                           
                              </a>
                          </div>
                    </li>

                    <li class="Items Right2">
                        <div>
                              <a class="thumbnail" id="m-sneak-content-link">
                                  <img src="../assert/images/<?php echo $OnTop6_4[0]; ?>" id="m-who-img"/>                           
                              </a>
                          </div>
                    </li>

                </ul>
            </div>
        </div> 
        
        <div id="m-serie">
            <div id="m-serie-title">
                
            </div>
            <div id="m-serie-content">
                <div id="m-serie-content-main" class="row">
                    <div class="col-md-0 col-sm-12 col-xs-12">
                        <div  id="m-serie-content-main-block">
                            <p>
                                CURRENT SERIES
                            </p>
                        </div>
                    </div>
                    
                    <div class="col-md-2 col-sm-3 col-xs-6" id="m-serie-content-main-div">
                        <a class="thumbnail text-center" id="m-serie-content-main-div-link">
                            <img src="../../assert/images/serie1.jpg"/>
                            <div class="caption" id="m-serie-content-main-div-link-cap">
                                <h4 id="m-serie-content-main-div-link-cap1" class="text-center">
                                 WONDER WOMAN                                 
                                </h4>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-2 col-sm-3 col-xs-6" id="m-serie-content-main-div">
                        <a class="thumbnail text-center" id="m-serie-content-main-div-link">
                            <img src="../../assert/images/serie2.jpg"/>
                            <div class="caption" id="m-serie-content-main-div-link-cap">
                                <h4 id="m-serie-content-main-div-link-cap1" class="text-center">
                                 WONDER WOMAN                                 
                                </h4>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-2 col-sm-3 col-xs-6" id="m-serie-content-main-div">
                        <a class="thumbnail text-center" id="m-serie-content-main-div-link">
                            <img src="../../assert/images/serie3.jpg"/>
                            <div class="caption" id="m-serie-content-main-div-link-cap">
                                <h4 id="m-serie-content-main-div-link-cap1" class="text-center">
                                 WONDER WOMAN                                 
                                </h4>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-2 col-sm-3 col-xs-6" id="m-serie-content-main-div">
                        <a class="thumbnail text-center" id="m-serie-content-main-div-link">
                            <img src="../../assert/images/serie4.jpg"/>
                            <div class="caption" id="m-serie-content-main-div-link-cap">
                                <h4 id="m-serie-content-main-div-link-cap1" class="text-center">
                                 WONDER WOMAN                                 
                                </h4>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-2 col-sm-3 col-xs-6" id="m-serie-content-main-div">
                        <a class="thumbnail text-center" id="m-serie-content-main-div-link">
                            <img src="../../assert/images/serie5.jpg"/>
                            <div class="caption" id="m-serie-content-main-div-link-cap">
                                <h4 id="m-serie-content-main-div-link-cap1" class="text-center">
                                 WONDER WOMAN                                 
                                </h4>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-2 col-sm-3 col-xs-6" id="m-serie-content-main-div">
                        <a class="thumbnail text-center" id="m-serie-content-main-div-link">
                            <img src="../../assert/images/serie6.jpg"/>
                            <div class="caption" id="m-serie-content-main-div-link-cap">
                                <h4 id="m-serie-content-main-div-link-cap1" class="text-center">
                                 WONDER WOMAN                                 
                                </h4>
                            </div>
                        </a>
                    </div>
                    
                    <div class="col-md-2 col-sm-3 col-xs-6" id="m-serie-content-main-div">
                        <a class="thumbnail text-center" id="m-serie-content-main-div-link">
                            <img src="../../assert/images/serie7.jpg"/>
                            <div class="caption" id="m-serie-content-main-div-link-cap">
                                <h4 id="m-serie-content-main-div-link-cap1" class="text-center">
                                 WONDER WOMAN                                 
                                </h4>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-2 col-sm-3 col-xs-6" id="m-serie-content-main-div">
                        <a class="thumbnail text-center" id="m-serie-content-main-div-link">
                            <img src="../../assert/images/serie8.jpg"/>
                            <div class="caption" id="m-serie-content-main-div-link-cap">
                                <h4 id="m-serie-content-main-div-link-cap1" class="text-center">
                                 WONDER WOMAN                                 
                                </h4>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-2 col-sm-3 col-xs-6" id="m-serie-content-main-div">
                        <a class="thumbnail text-center" id="m-serie-content-main-div-link">
                            <img src="../../assert/images/serie9.jpg"/>
                            <div class="caption" id="m-serie-content-main-div-link-cap">
                                <h4 id="m-serie-content-main-div-link-cap1" class="text-center">
                                 WONDER WOMAN                                 
                                </h4>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-2 col-sm-3 col-xs-6" id="m-serie-content-main-div">
                        <a class="thumbnail text-center" id="m-serie-content-main-div-link">
                            <img src="../../assert/images/serie10.jpg"/>
                            <div class="caption" id="m-serie-content-main-div-link-cap">
                                <h4 id="m-serie-content-main-div-link-cap1" class="text-center">
                                 WONDER WOMAN                                 
                                </h4>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-2 col-sm-3 col-xs-6" id="m-serie-content-main-div">
                        <a class="thumbnail text-center" id="m-serie-content-main-div-link">
                            <img src="../../assert/images/serie5.jpg"/>
                            <div class="caption" id="m-serie-content-main-div-link-cap">
                                <h4 id="m-serie-content-main-div-link-cap1" class="text-center">
                                 WONDER WOMAN                                 
                                </h4>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-2 col-sm-3 col-xs-6" id="m-serie-content-main-div">
                        <a class="thumbnail text-center" id="m-serie-content-main-div-link">
                            <img src="../../assert/images/serie6.jpg"/>
                            <div class="caption" id="m-serie-content-main-div-link-cap">
                                <h4 id="m-serie-content-main-div-link-cap1" class="text-center">
                                 WONDER WOMAN                                 
                                </h4>
                            </div>
                        </a>
                    </div>
                </div>
                
                <div id="m-serie-content-footer">
                   <a href="" class="icon-button twitter"><i class="icon-twitter"></i><span></span></a>
                   <a href="" class="icon-button facebook"><i class="icon-facebook"></i><span></span></a>
                   <a href="" class="icon-button google-plus"><i class="icon-google-plus"></i><span></span></a>
                </div>
            </div>
        </div>

    </div>
      <?php
                  include '../layout/footer.php';
      ?>

    <script>
        function a(){
            var front = $('.Front'),
                others = ['Left2', 'Left', 'Right', 'Right2'];

            $('.Carousel').on('click', '.Items', function() {
              var $this = $(this);

              $.each(others, function(i, cl) {
                if ($this.hasClass(cl)) {
                  front.removeClass('Front').addClass(cl);
                  front = $this;
                  front.addClass('Front').removeClass(cl);
                }
              });
            });
          }
    </script>


