<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title> DC Comics</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.css">
    <link rel="stylesheet" href="../../assert/css/base.css">
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
                <a class="navbar-brand" href="#"><img src="../../assert/img/logo.png" alt="" class="img-responsive" id="img-logo"></a>
            </div>
        </div>
        <div class="collapse navbar-collapse" id="navbar">
            <ul class="nav navbar-nav">
                <li class="nav-li"><a href="../character.php">CHARACTER</a></li>
                <li class="nav-li"><a href="../comic.php">COMIC</a></li>
                <li class="dropdown nav-li">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">ADMIN <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="#">Manage User</a></li>
                        <li role="separator" class="divider"></li>
                        <li><a href="../admin/createBlog.php">Create New Post</a></li>
                        <li><a href="../admin/listBlog.php">Manage Post</a></li>
                        <li role="separator" class="divider"></li>
                        <li><a href="../admin/listOrder.php">Manage Post</a></li>

                    </ul>
                </li>
                <?php
                session_start();
                if($_SESSION['login_user'] == null)
                    echo "<li class=\"nav-li\"><a href=\"../login.php\">LOGIN</a></li>";
                else
                    echo "<li class=\"nav-li\"><a href=\"#\">Welcome ";
                    echo $_SESSION['login_user'];
                    echo "</a></li>";
                    echo "<li class=\"nav-li\"><a href=\"../../core/logout.php\">LOGOUT</a></li>";
                ?>

            </ul>
            <form class="navbar-form navbar-right" role="search">
                <div class="form-group">
                    <input type="text" class="form-control nav-input" placeholder="Search">
                </div>
            </form>
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
</nav>

</body>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>

</html>
