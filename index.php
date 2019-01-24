<!DOCTYPE html>
<html lang="pl" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Wisielec</title>

    <link rel="stylesheet" href="style.css">


  </head>
  <body>

    <header>

      <div class="welcome">
        <h2>Witaj graczu. Twoje zadanie to odgadnięcie hasła. Powodzenia!</h2>
      </div>

    </header>

    <main>

      <div id="passwordForm">
        <form class="formPassword" action="#" method="post">
          <input type="password" name="start" id="start" placeholder="Podaj hasło">
          <input id="btnPlay" type="button" value="Zagraj" onclick="getPassword()">
        </form>
      </div>

      <div class="main">

        <div class="gameContainer">
          <h4 id="password"></h4>
          <div id="picture">
            <figure id="img">
              <img src="img/s0.png" alt="Picture">
            </figure>
          </div>
          <div id="keyboard"></div>
          <div class="clear"></div>
        </div>

      </div>

    </main>
    <script type="text/javascript" src="game.js"></script>
  </body>
</html>
