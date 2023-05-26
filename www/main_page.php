<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/main_page.css">
    <title>Main Page</title>
</head>
<body>
    <header>
        <section id="headerWrap">
            <div class="logo">Game Hub</div>
            <nav>
                <div id="nav_btn" class="main Page" style="margin-left: 0; background-color: #1adb34;">Main Page</div>
                <div id="nav_btn" class="profile">Profile</div>
                <div id="nav_btn" class="contact">Contact</div>
                <div id="nav_btn" class="info">Info</div>
            </nav>
        </section>
    </header>

    <main>
        <section id="mainWrap">
        <?php 
            $conn = new Mysqli('localhost', 'root', '', 'gamehub');

            $sql0 = "SELECT gameID, title, description, link FROM game";

            $result = $conn->query($sql0);
            
            foreach($result as $row){
                echo "
                <section id='gameTile'> 
                    <section id='gameTileWrap'>
                        <div class='title'>
                            ".$row['title']."
                        </div>

                        <div class='description'>
                            ".$row['description']."
                        </div>

                        <div class='link'> 
                            <a href='".$row['link']."'>START</a>
                    </section>
                </section>";
            }
        ?>
        </section>
    </main>

    <footer>

    </footer>
</body>
</html>