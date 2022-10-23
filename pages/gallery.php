<?php

$kategorija_name = $_GET["kategorija"];

$kategorija = null;
for ($i = 0; $i < sizeof($GLOBALS["kategorijos"]); $i++) {
    $kat = $GLOBALS["kategorijos"][$i];
    if($kat["name"] == $kategorija_name) {
        $kategorija = $kat;
    }
}

$path = $kategorija["path"];
$images = scandir("./images/$path");
?>

<div class="gallery">
    <h1><?php echo $kategorija["name"] ?></h1>
    <div class="gallery-container">
        <?php
        for ($i = 2; $i < sizeof($images); $i++) {
            $url = "images/$path/".$images[$i];
            echo "<img class='gallery-img' src='$url' alt='$images[$i]'/>";
        }
        ?>
    </div>
</div>