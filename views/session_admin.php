<?php
    if ($_SESSION['role'] == 'admin'){
                  
    }
    else if ($_SESSION['role'] == 'user') {
        header("location: ../ind.php");    
    }    
?>

