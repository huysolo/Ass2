<?php
/**
 * Created by PhpStorm.
 * User: Solo
 * Date: 22/11/2017
 * Time: 8:21 CH
 */
include "../layout/adminHeader.php";
include "../../connect.php";
$stmt = $conn->prepare("SELECT * FROM comic WHERE ComicID = ?");
$stmt->bind_param('s', $_POST['comicId']);
$stmt->execute();
$result = $stmt->get_result();
if($result->num_rows<=0){
    header("location: listComic.php?err=1");
}
$row = mysqli_fetch_array($result);
?>
<div class="container">
    <form class="form-group" action="../../core/editComic.php" method="POST" enctype="multipart/form-data">
        <input value="<?php echo $_POST['comicId']?>" name="comicId" style="visibility: hidden">
        <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" class="form-control" id="name" placeholder="" name="name" value="<?php echo $row['Name']?>">
            <span style="color: red">
            <?php
            if(isset($_GET['nameErr'])&&$_GET['nameErr']==1){
                echo '* Comic\'s name cannot be empty';
            }
            ?>
        </span>
            <p class="help-block">Insert the name of the comic. The name cannot be empty</p>

        </div>
        <div class="form-group">
            <label for="quantity">Quantity:</label>
            <input class="form-control" id="quantity"  name="quantity" onkeypress='return !(event.charCode > 31 && (event.charCode < 48 || event.charCode > 57))' value="<?php echo $row['Quantity']?>">
            <span style="color: red">
            </span>
            <p class="help-block">Only accept number</p>
        </div>
        <div class="form-group">
            <label for="numOfChap">Number Of Chapters:</label>
            <input class="form-control" id="numOfChap"  onkeypress='return !(event.charCode > 31 && (event.charCode < 48 || event.charCode > 57)); ' name="numOfChap" value="<?php echo $row['NumOfChap']?>">
            <span style="color: red">
            </span>
            <p class="help-block">Only accept number</p>
        </div>
        <div class="form-group">
            <label for="summary">Summary:</label>
            <textarea class="form-control" id="summary" placeholder="" name="summary" rows="5" ><?php echo $row['Summary']?></textarea>
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
            <label for="banner">Upload Banner: </label>
            <div class="input-group image-preview">
                <input type="text" class="form-control image-preview-filename" disabled="disabled" value="<?php echo $row['BannerImage']?>"> <!-- don't give a name === doesn't send on POST/GET -->
                <span class="input-group-btn">
                    <!-- image-preview-clear button -->
                    <button type="button" class="btn btn-default image-preview-clear" style="display:none;">
                        <span class="glyphicon glyphicon-remove"></span> Clear
                    </button>
                    <!-- image-preview-input -->
                    <div class="btn btn-default image-preview-input">
                        <span class="glyphicon glyphicon-folder-open"></span>
                        <span class="image-preview-input-title">Browse</span>
                        <input type="file" accept="image/png, image/jpeg, image/gif" name="banner" value="../../assert/images/<?echo $row['BannerImage']?>"/> <!-- rename it -->
                    </div>
                </span>
            </div>
            <span style="color: red">
              <?php
              if(isset($_GET['bannerErr'])){
                  if($_GET['bannerErr']==1){
                      echo '* Please upload an image';
                  }
                  else if($_GET['bannerErr']==2){
                      echo '* Wrong image type';
                  }
              }
              ?>
           </span>
            <span class="help-block">Only .jpg .png</span>
        </div>
        <div class="form-group">
            <label for="card">Upload Card: </label>
            <div class="input-group img-preview">
                <input type="text" class="form-control img-preview-filename" disabled="disabled" value="<?php echo $row['CardImage']?>"> <!-- don't give a name === doesn't send on POST/GET -->
                <span class="input-group-btn">
                    <!-- image-preview-clear button -->
                    <button type="button" class="btn btn-default img-preview-clear" style="display:none;">
                        <span class="glyphicon glyphicon-remove"></span> Clear
                    </button>
                    <!-- image-preview-input -->
                    <div class="btn btn-default img-preview-input">
                        <span class="glyphicon glyphicon-folder-open"></span>
                        <span class="img-preview-input-title">Browse</span>
                        <input type="file" accept="image/png, image/jpeg, image/gif" name="card" value="../../assert/images/<?php echo $row['CardImage']?>"/> <!-- rename it -->
                    </div>
                </span>
            </div>
            <span style="color: red">
              <?php
              if(isset($_GET['cardErr'])){
                  if($_GET['cardErr']==1){
                      echo '* Please upload an image';
                  }
                  else if($_GET['cardErr']==2){
                      echo '* Wrong image type';
                  }
              }
              ?>
           </span>
            <span class="help-block">Only .jpg .png</span>
        </div>

        <button type="submit" name="button" class="btn btn-primary">Update</button>
        <button type="reset" name="button" class="btn btn-danger">Reset</button>
    </form>
</div>
<script src="../../assert/js/fileupload.js">
</script>
<?php
include "../layout/footer.php";?>
