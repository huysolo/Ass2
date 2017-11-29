<?php
/**
 * Created by PhpStorm.
 * User: Solo
 * Date: 22/11/2017
 * Time: 8:21 CH
 */
include "../layout/adminHeader.php";
include "../../connect.php";
$stmt = $conn->prepare("SELECT * FROM BLOG WHERE BlogID = ?");
$stmt->bind_param('s', $_POST['blogId']);
$stmt->execute();
$result = $stmt->get_result();
if($result->num_rows<=0){
    header("location: listBlog.php?err=1");
}
$row = mysqli_fetch_array($result);
?>

    <div class="container">
        <form class="form-group" action="../../core/editBlog.php" method="POST" enctype="multipart/form-data">
            <input value="<?php echo $_POST['blogId']?>" name="blogId" style="visibility: hidden">
            <div class="form-group">
                <label for="title">Tittle:</label>
                <input type="text" class="form-control" id="title" placeholder="" name="title" value="<?php echo $row['Title']?>">
                <span style="color: red">
                <?php
                if(isset($_GET['titleErr'])&&$_GET['titleErr']==1){
                    echo '* Your title is too short';
                }
                ?>
        </span>
                <p class="help-block">Insert your post title. At least 10 characters</p>

            </div>
            <div class="form-group">
                <label for="summary">Summary:</label>
                <textarea class="form-control" id="summary" placeholder="" name="summary" rows="5"><?php echo $row['Summary']?></textarea>
                <span style="color: red">
              <?php
              if(isset($_GET['summaryErr'])&&$_GET['summaryErr']==1){
                  echo '* Your summary is too short';
              }
              ?>
        </span>
                <p class="help-block">Insert your post summary. At least 10 characters</p>
            </div>
            <div class="form-group">
                <label for="photos">Upload Image: </label>
                <div class="input-group image-preview">
                    <input type="text" class="form-control image-preview-filename" disabled="disabled" value="<?php echo $row['Photos'] ?>"> <!-- don't give a name === doesn't send on POST/GET -->
                    <span class="input-group-btn">
                    <!-- image-preview-clear button -->
                    <button type="button" class="btn btn-default image-preview-clear" style="display:none;">
                        <span class="glyphicon glyphicon-remove"></span> Clear
                    </button>
                        <!-- image-preview-input -->
                    <div class="btn btn-default image-preview-input">
                        <span class="glyphicon glyphicon-folder-open"></span>
                        <span class="image-preview-input-title">Browse</span>
                        <input value="../../assert/images/<?php echo $row['Photos']?>" type="file" accept="image/png, image/jpeg, image/gif" name="photos"/> <!-- rename it -->
                    </div>
                </span>
                </div>
                <span style="color: red">
              <?php
              if(isset($_GET['imgDataErr'])){
                  if($_GET['imgDataErr']==1){
                      echo '* Please upload an image';
                  }
                  else if($_GET['imgDataErr']==2){
                      echo '* Wrong image type';
                  }
              }
              ?>
           </span>
                <span class="help-block">Only .jpg .png</span>
            </div>

            <div class="form-group">
                <label for="content">Your Content:</label>
                <textarea class="form-control" id="summary" placeholder="" name="content" rows="30"><?php echo $row['Content']?></textarea>
                <span style="color: red">
              <?php
              if(isset($_GET['contentErr'])&&$_GET['contentErr']==1){
                  echo '* Your content is too short';
              }
              ?>
           </span>
                <p class="help-block">Insert your post content. At least 100 characters</p>
            </div>
            <div class="checkbox checkbox-info">
                <input id="checkbox4" type="checkbox" name="ontop" value="">
                <label for="checkbox4" style="font-weight: bold">
                    Make this post on top
                </label>
            </div>
            <button type="submit" name="button" class="btn btn-primary">Update</button>
            <button type="reset" name="button" class="btn btn-danger">Reset</button>
        </form>
    </div>
    <script src="../../assert/js/fileupload.js">
    </script>
<?php
include "../layout/footer.php";?>