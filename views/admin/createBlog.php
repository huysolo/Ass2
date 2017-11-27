<?php
/**
 * Created by PhpStorm.
 * User: Solo
 * Date: 22/11/2017
 * Time: 8:21 CH
 */
include "../layout/adminHeader.php";

?>
<?php
    $titleErr = $summaryErr = $photosErr =$contentErr = "";


?>
<div class="container">
    <form class="form-group" action="../../core/createBlog.php" method="POST" enctype="multipart/form-data">
        <div class="form-group">
        <label for="title">Tittle:</label>
        <input type="text" class="form-control" id="title" placeholder="" name="title">
        <p class="help-block">Insert your post title. At least 10 characters</p>
      </div>
      <div class="form-group">
        <label for="summary">Summary:</label>
        <textarea class="form-control" id="summary" placeholder="" name="summary" rows="5"></textarea>
        <p class="help-block">Insert your post summary. At least 10 characters</p>
      </div>
      <div class="form-group">
        <label for="photos">Upload Image</label>
        <input type="file" id="file" placeholder="" name="photos" class="custom-file-input">
        <span class="help-block">Only .jpg .png</span>
      </div>
      <div class="checkbox">
        <label><input type="checkbox" name="ontop"> On Top: </label>
      </div>
      <div class="form-group">
          <label for="content">Your Content:</label>
          <textarea class="form-control" id="summary" placeholder="" name="content" rows="30"></textarea>
          <p class="help-block">Insert your post content</p>
      </div>
      <div class="form-group">
          <input type="text" name="userID" value="0">
      </div>
      <button type="submit" name="button" class="btn btn-primary">Submit</button>
      <button type="reset" name="button" class="btn btn-danger">Reset</button>
    </form>
</div>
<?php
include "../layout/footer.php";?>
