<!DOCTYPE html>
<?php
$host = "http://localhost";
$GLOBALS["kategorijos"] = [
    [
        "name" => "Gamta",
        "path" => "gamta",
        "bg" => "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6e3f5106-385c-417b-b022-347bbf9fb6d7/dfg5b9g-239f4162-32a3-4ecf-8607-792dcb110f7a.png/v1/fill/w_1280,h_720,q_80,strp/_5_by_tamakiart_dfg5b9g-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvNmUzZjUxMDYtMzg1Yy00MTdiLWIwMjItMzQ3YmJmOWZiNmQ3XC9kZmc1YjlnLTIzOWY0MTYyLTMyYTMtNGVjZi04NjA3LTc5MmRjYjExMGY3YS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.oOjmQ_yZDyKgpTTrWr_l8LSGGnY1jFz5uOKYcwMBPNM"
    ],
    [
        "name" => "Gyvunai",
        "path" => "gyvunai",
        "bg" => "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a3b47a44-0673-4eb9-a6c9-529383c6b37b/dfg5u3m-054ae08c-6f29-4a71-a6a1-f821687f08c7.png/v1/fill/w_1280,h_1075,q_80,strp/christmas_tember_by_drinksalottatea_dfg5u3m-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA3NSIsInBhdGgiOiJcL2ZcL2EzYjQ3YTQ0LTA2NzMtNGViOS1hNmM5LTUyOTM4M2M2YjM3YlwvZGZnNXUzbS0wNTRhZTA4Yy02ZjI5LTRhNzEtYTZhMS1mODIxNjg3ZjA4YzcucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.LdxVerk6y9rodk5uGOeMQNkg2DAT7FDdtyiESyUifwM"
    ],
    [
        "name" => "Arhitektūra",
        "path" => "architektura",
        "bg" => "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/df7cb8a9-0bde-45c5-a8ac-aefefc4f77e8/dfg5ahf-a6f18148-27ae-464d-ad47-b4b31abfe50c.jpg/v1/fill/w_1280,h_721,q_75,strp/kingdom_of_heaven_by_floodingthesystem_dfg5ahf-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIxIiwicGF0aCI6IlwvZlwvZGY3Y2I4YTktMGJkZS00NWM1LWE4YWMtYWVmZWZjNGY3N2U4XC9kZmc1YWhmLWE2ZjE4MTQ4LTI3YWUtNDY0ZC1hZDQ3LWI0YjMxYWJmZTUwYy5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.csTFC4_XS9m4wmDHHHYjqAk5InDssU5yaH4BtX1nAR8"
    ],
    [
        "name" => "Portretai",
        "path" => "portretai",
        "bg" => "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/997277d4-f973-48f9-bdf1-2c4978531656/dfg5g3b-217e3079-42c9-4d35-b6cd-3ecf8600d304.jpg/v1/fill/w_1280,h_1574,q_75,strp/kitty_wizard_by_tindyan_dfg5g3b-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTU3NCIsInBhdGgiOiJcL2ZcLzk5NzI3N2Q0LWY5NzMtNDhmOS1iZGYxLTJjNDk3ODUzMTY1NlwvZGZnNWczYi0yMTdlMzA3OS00MmM5LTRkMzUtYjZjZC0zZWNmODYwMGQzMDQuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.196uMUBUcFntvh-pnGNRGsC7UZMbV50sYTsQg7VXZc0"
    ],
    [
        "name" => "Cyber",
        "path" => "cyber",
        "bg" => "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b40af2ae-df74-4b44-a4b2-6cd6efaf10c6/dfg55js-b8b149d4-6641-4dcd-a210-dccf566d599e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I0MGFmMmFlLWRmNzQtNGI0NC1hNGIyLTZjZDZlZmFmMTBjNlwvZGZnNTVqcy1iOGIxNDlkNC02NjQxLTRkY2QtYTIxMC1kY2NmNTY2ZDU5OWUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.SaA9VpC1cOq2HHv7whUFDRLF0kdffa2BjOIdkhBJM6Q"
    ]
]
?>
<html>
<head>
    <title>Page Title</title>
    <link rel="stylesheet" href="<?php echo $host ?>/styles/style.css">
    <link rel="stylesheet" href="<?php echo $host ?>/styles/nav.css">
    <link rel="stylesheet" href="<?php echo $host ?>/styles/gallery.css">
    <link rel="stylesheet" href="<?php echo $host ?>/styles/home.css">
    <link rel="stylesheet" href="<?php echo $host ?>/styles/paskyra.css">
</head>
<body>
<header>

    <div class="navbar">
        <a href="home">big boi place</a>
        <a href="kontaktai">Kontaktai</a>
        <a href="paskyra">Paskyra</a>
        <div class="dropdown">
            <button class="dropbtn">Kategorijos
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <?php

                for ($i = 0; $i < sizeof($GLOBALS["kategorijos"]); $i++) {
                    $kategorijos_name = $GLOBALS["kategorijos"][$i]["name"];
                    echo "<a href='gallery?kategorija=$i'>$kategorijos_name</a>";
                }
                ?>
            </div>
        </div>
    </div>
    <main>
        <?php

        $page = $_GET["request"];
        switch ($page) {
            case "gallery":
                include "./pages/gallery.php";
                break;
            case "kontaktai":
                include "./pages/kontaktai.php";
                break;
            case "paskyra":
                include "./pages/paskyra.php";
                break;
            case "home":
            default:
                include "./pages/home.php";
        }
        ?>
    </main>
</header>
</body>
</html>