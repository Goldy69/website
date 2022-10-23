
<div class="home">
    <h1>Kategorijos</h1>
    <div class="kategorijos-container">
        <?php
            for ($i = 0; $i < sizeof($GLOBALS["kategorijos"]); $i++) {
                $kategorijos_name = $GLOBALS["kategorijos"][$i]["name"];
                $kategorijos_bg = $GLOBALS["kategorijos"][$i]["bg"];
                echo "<a style='background-image: url('$kategorijos_bg')' href='gallery?kategorija=$kategorijos_name'> <p>$kategorijos_name</p> <img src='$kategorijos_bg'> </a>";
            }
        ?>
    </div>

</div>