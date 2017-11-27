<?php
/**
 * Created by PhpStorm.
 * User: bangvancong
 * Date: 27/11/17
 * Time: 11:44
 */
include "layout/adminHeader.php";
include "../core/login.php";
?>

<form class="form-signin" method="post">
      <h2 class="form-signin-heading">Login Form</h2>
      <input type="text" class="form-control" name="username" placeholder="congbang10h" required="" autofocus="" />
      <input type="password" class="form-control" name="password" placeholder="123456" required=""/>
      <button class="btn btn-lg btn-primary btn-block" name="submit" type="submit">Login</button>
      <p style="font-size:25px;"><?php if (isset($error)) echo $error; ?></p>
</form>