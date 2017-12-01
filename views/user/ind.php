<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title> DC Comics</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css\base.css">
    <link rel="stylesheet" href="css\index.css">
  </head>
  <body>
    <nav class="navbar navbar-default navbar-static-top" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <div class="nav-center">
            <a class="navbar-brand" href="index.html"><img src="img\logo.png" alt="" class="img-responsive" id="img-logo"></a>
          </div>
        </div>
        <div class="collapse navbar-collapse" id="navbar">
          <ul class="nav navbar-nav">
            <li class="nav-li"><a href="character.html">CHARACTER</a></li>
            <li class="nav-li"><a href="comics.html">COMIC</a></li>
            <li class="nav-li"><a href="video.html">VIDEO</a></li>
            <li class="nav-li"><a href="shop.html">SHOP</a></li>
            <li class="nav-li"><a href="fan.html">FANS</a></li>
                      
          </ul>
          <form class="navbar-form navbar-right" role="search">
            <div class="form-group">
              <input type="text" class="form-control nav-input" placeholder="" value="Search">
            </div>
          </form>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
      
      
      
    <div class="container">
      <div id="carousel-main" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators">
          <li data-target="#carousel-main" data-slide-to="0" class="active"></li>
          <li data-target="#carousel-main" data-slide-to="1"></li>
          <li data-target="#carousel-main" data-slide-to="2"></li>
        </ol>       
        
        <!-- Wrapper for slides -->
        <div class="carousel-inner">                
                    
           <?php           
            include 'connect.php';
            $count = 1;
            $query = "SELECT Photos FROM `blog` WHERE OnTop = 1 ORDER BY ReleaseDate DESC";
            $result = mysqli_query($dbhandle,$query);

            $row = mysqli_fetch_array($result);
            $row1 = mysqli_fetch_array($result);
            $row2 = mysqli_fetch_array($result);
            
            //OnTop = 2 
            $query2 = "SELECT Photos FROM `blog` WHERE OnTop = 2 ORDER BY ReleaseDate DESC";
            $result2 = mysqli_query($dbhandle,$query2);

            $OnTop2 = mysqli_fetch_array($result2);
            $OnTop2_1 = mysqli_fetch_array($result2);
            $OnTop2_2 = mysqli_fetch_array($result2);
            
             //OnTop = 2 
            $query3 = "SELECT Photos FROM `blog` WHERE OnTop = 3 ORDER BY ReleaseDate DESC";
            $result3 = mysqli_query($dbhandle,$query3);

            $OnTop3 = mysqli_fetch_array($result3);
            $OnTop3_1 = mysqli_fetch_array($result3);
            $OnTop3_2 = mysqli_fetch_array($result3);
            ?>
 
            
            
                
                
              
          <div class="item active">
            <img src="img\<?php echo $row[0]; ?> " > 
            <div class="carousel-caption">
              <div class="hero-title">Light Out</div>
              <p>The Penguin is put on ice in this shocking first look at Batman: The Dawnbreaker.</p>
            </div>
          </div>

          <div class="item">
            <img src="img\carou2.jpg" alt="Second">
            <div class="carousel-caption">
              <div class="hero-title">Light Out</div>
              <p>The Penguin is put on ice in this shocking first look at Batman: The Dawnbreaker.</p>
            </div>
          </div>

          <div class="item">
            <img src="img\carou3.jpg" alt="Third">
            <div class="carousel-caption">
              <div class="hero-title">Light Out</div>
              <p>The Penguin is put on ice in this shocking first look at Batman: The Dawnbreaker.</p>
            </div>
          </div>                    
                                      
        </div>

        <!-- Left and right controls -->
        <a class="left carousel-control" href="#carousel-main" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#carousel-main" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

      <div class="row" id="div-main">
        <div class="col-md-8">
          <a href="#" class="thumbnail img-responsive img-main">
            <img src="img\<?php echo $row[0]; ?> " alt="" class="img-responsive overlay">
            <div class="title">
              <div class="hero-title">Light Out</div>
              <p>The Penguin is put on ice in this shocking first look at Batman: The Dawnbreaker.</p>
            </div>
          </a>

        </div>
        <div class="col-md-4">
          <a href="#" class="thumbnail img-responsive img-main img-side">
            <img src="img\<?php echo $row1[0]; ?> " alt="" class="img-responsive overlay">
            <div class="title subtitle">
              <div class="hero-title">Light Out</div>
              <p>The Penguin is put on ice in this shocking first look at Batman: The Dawnbreaker.</p>
            </div>

          </a>
          <a href="#" class="thumbnail img-responsive img-main img-side">
            <img src="img\<?php echo $row2[0]; ?> " alt="" class="img-responsive overlay">
            <div class="title subtitle">
              <div class="hero-title">Light Out</div>
              <p>The Penguin is put on ice in this shocking first look at Batman: The Dawnbreaker.</p>
            </div>
          </a>
        </div>
      </div>

      <div class="row" id="content-featured">
          <h1>FEATURED</h1>

            <div class="col-md-3 col-sm-12">
              <a href="#" class="thumbnail img-featured">
                <div class="">
                  <img src="img\<?php echo $OnTop2[0]; ?> " alt="" >
                  <p>DC Rebirth</p>
                </div>
              </a>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-6">
              <a href="#" class="thumbnail img-featured">
                <div class="img-small">
                  <img src="img\<?php echo $OnTop2_1[0]; ?> " alt="">
                  <p>DC All Access</p>
                </div>
              </a>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-6">
              <a href="#" class="thumbnail img-featured">
                <div class="img-small">
                  <img src="img\<?php echo $OnTop2_2[0]; ?> " alt="">
                  <p>Dark Nights: Metal</p>
                </div>
              </a>
            </div>

      </div>
        <div class="row" id="comic">
          <div class="col-md-6">
            <div class="row">
              <div class="col-md-4 col-sm-4 col-xs-4">
                <a href="#" class="thumbnail">
                  <img src="img\<?php echo $OnTop3[0]; ?> " alt="" class="overlay">
                  <div class="book-type">Comic Book </div>
                  <div class="book-name">
                    BATMAN: THE DAWNBREAKER #1
                  </div>
                  <div class="book-day">
                    On Sale 10/4
                  </div>

                </a>
              </div>
              <div class="col-md-4">
                <a href="#" class="thumbnail">
                  <img src="img\<?php echo $OnTop3_1[0]; ?> " alt="" class="overlay">
                  <div class="book-type">Novel </div>
                  <div class="book-name">
                    BATMAN: THE DAWNBREAKER #2
                  </div>
                  <div class="book-day">
                    On Sale 10/4
                  </div>
                </a>
              </div>
              <div class="col-md-4">
                <a href="#" class="thumbnail" class="overlay">
                  <img src="img\<?php echo $OnTop3_2[0]; ?> " alt=""  class="overlay">
                  <div class="book-type">Comic Book </div>
                  <div class="book-name">
                    BATMAN #32
                  </div>
                  <div class="book-day">
                    On Sale 10/4
                  </div>
                </a>
              </div>
            </div>
            <div class="text-right img-hero">
              <img src="img\superman.png" alt="" style="width: 100%">
            </div>
          </div>

          <div class="col-md-4">
            <a href="#" class="thumbnail">
              <img src="img\bigcomic.jpg" alt="" style="height: 200%;"  class="overlay">
              <div class="book-type">Comic Book </div>
              <div class="book-name">
                THE FLINTSTONES VOL. 2
              </div>
              <div class="book-day">
                On Sale 10/4
              </div>
            </a>
          </div>
          <div class="col-md-2 img-hero">
            <img src="img\wonderwoman.png" alt="">

          </div>
        </div>
        <div class="row" id="comic-small">
          <div class="col-md-3 col-sm-6 col-xs-12">
            <a href="#" class="thumbnail">
              <div class="">
                <img src="img\comic.jpg" alt="">
                <div class="book-type">Comic Book </div>
                <div class="book-name">
                  BATMAN: WHITE KNIGHT #1
                </div>
                <div class="book-day">
                  On Sale 10/4
                </div>
              </div>
            </a>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12">
            <a href="#" class="thumbnail">
              <div class="">
                <img src="img\comic2.jpg" alt="">
                <div class="book-type">Novel </div>
                <div class="book-name">
                  BATMAN: THE DAWNBREAKER #1
                </div>
                <div class="book-day">
                  On Sale 10/4
                </div>
              </div>
            </a>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12">
            <a href="#" class="thumbnail">
              <div class="">
                <img src="img\comic3.jpg" alt="">
                <div class="book-type">Comic Book </div>
                <div class="book-name">
                  BATMAN: THE DAWNBREAKER #1
                </div>
                <div class="book-day">
                  On Sale 10/4
                </div>
              </div>
            </a>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12">
            <a href="#" class="thumbnail">
              <div class="">
                <img src="img\bigcomic.jpg" alt="">
                <div class="book-type">Comic Book </div>
                <div class="book-name">
                  BATMAN: THE DAWNBREAKER #1
                </div>
                <div class="book-day">
                  On Sale 10/4
                </div>
              </div>
            </a>
          </div>
        </div>

    </div>
    <footer>
      <div class="row" id="footer-link">
        <div class="col-md-6 col-sm-12">
            <div class="row">
              <div class="col-md-4 col-sm-4 col-xs-6">
                <section class="ul-footer">
                  <h3>DC COMICS</h3>
                  <ul>
                    <li><a href="#">Character</a></li>
                    <li><a href="#">Movies</a></li>
                    <li><a href="#">Comics</a></li>
                    <li><a href="#">TV</a></li>
                    <li><a href="#">Videos</a></li>
                  </ul>
                </section>
                <section class="ul-footer">
                  <h3>NEWS</h3>
                  <ul>
                    <li><a href="#">For Fans</a></li>
                    <li><a href="#">For Family</a></li>
                    <li><a href="#">For Press</a></li>
                  </ul>
                </section>
                <section class="ul-footer">
                  <h3>SHOP</h3>
                  <ul>
                    <li><a href="#">Shop DC</a></li>
                    <li><a href="#">Shop DC Collectibles</a></li>
                  </ul>
                </section>
              </div>
              <div class="col-md-4 col-sm-4 col-xs-6">
                <section class="ul-footer">
                  <h3>DC Entertainment</h3>
                  <ul>
                    <li><a href="#">About DC Entertainment</a> </li>
                    <li><a href="#">Jobs</a> </li>
                    <li><a href="#">Contact Us</a> </li>
                    <li><a href="#">Subscriptions</a> </li>
                    <li><a href="#">Advertising</a> </li>
                    <li><a href="#">Privacy Policy</a> </li>
                    <li><a href="#">Terms of Use</a> </li>
                    <li><a href="#">CPSC Certificates</a> </li>
                    <li><a href="#">Ratings</a> </li>
                    <li><a href="#">Site Map</a> </li>
                    <li><a href="#">Shop Help</a> </li>
                  </ul>
                </section>
              </div>
              <div class="col-md-4 col-sm-4 col-xs-12">
                <section class="ul-footer">
                  <h3>Sites</h3>
                  <ul>
                    <li><a href="#">DC</a> </li>
                    <li><a href="#">Vertigo</a> </li>
                    <li><a href="#">MAD Magazine</a> </li>
                    <li><a href="#">DC Kids</a> </li>
                    <li><a href="#">DC Entertainment</a> </li>
                  </ul>
                </section>
              </div>
            </div>
            <br>
            <p style="color: lightgrey"> All Site Content and © 2017 DC Entertainment, unless otherwise <a href="#">noted here</a>. All rights reserved.</p>
        </div>
        <div class="col-md-6">
        </div>
      </div>
      <div class="row" id="footer-signup">
        <div class="col-md-2 col-sm-3 col-xs-12 text-center">
          <button type="button" class="btn btn-default">
            Sign-Up Now!
          </button>
        </div>
        <div class="col-md-6 col-sm-3 col-xs-12">
          <br>
          <br>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12 text-center" id="block-follow">
          <span>Follow Us</span>
          <a href="https://www.facebook.com/bootsnipp"><i class="fa fa-facebook-square" style="font-size:45px"></i></a>
          <a href="https://twitter.com/bootsnipp"><i class="fa fa-twitter-square" style="font-size:45px"></i></a>
          <a href="https://plus.google.com/+Bootsnipp-page"><i class="fa fa-google-plus-square" style="font-size:45px"></i></a>
          <a href="mailto:bootsnipp@gmail.com"><i class="fa fa-envelope-square" style="font-size:45px"></i></a>

        </div>


      </div>
    </footer>



    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
  </body>
</html>
