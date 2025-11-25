<!DOCTYPE html>
<html lang="en-US" dir="ltr">
  <head>
    <title>Contact</title>
      <meta charset="utf-8">
      <meta name="author" content="Warren Dolben">
      <meta name="description" content="A form to get into contact with me.">
      <meta name="keywords" content="online, blog, web development, web developer, website, internet, learning, writing, blogging, programming">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="shortcut icon" href="favicon.ico" type="icon">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
        <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div class="wrapper">
  <header>

<img id="logo" src="WDWD.png" alt="logo for WDWD">

<div id="social">
  <a href="https://www.facebook.com/warrendolben/" class="social__link"><i class="fab fa-facebook-f fa-3x"></i></a>
  <a href="https://www.twitter.com/dolben/" class="social__link"><i class="fab fa-x-twitter fa-3x"></i></a>
  <a href="https://www.instagram.com/warrendolben/" class="social__link"><i class="fab fa-instagram fa-3x"></i></a>
  <a href="https://www.linkedin.com/in/warren-dolben/" class="social__link"><i class="fab fa-linkedin fa-3x"></i></a>
  <a href="https://www.github.com/WarrenDolben" class="social__link"><i class="fab fa-github fa-3x"></i></a>
  <a href="https://www.codepen.io/Warren_Dolben" class="social__link"><i class="fab fa-codepen fa-3x"></i></a>
  <a href="https://www.upwork.com/freelancers/~01132e874c96ef661a?s=1110580755057594368" class="social__link"><i class="fab fa-upwork fa-3x"></i></a>
</div>

<nav>
  <button id="hamburger" data-mdb-toggle="sidenav" data-mdb-target="#hamburger" class="btn btn-dark" aria-controls="#sidenav-1" aria-haspopup="true">
    <i class="fas fa-bars"></i>
  </button>
 <div id="top-nav">
  <a href="index.html" class="top-nav__link" title="Home"><i class="fas fa-home"></i></a>
  <a href="aboutme.html" class="top-nav__link" title="About Me">About Me</a>
  <a href="portfolio.html" class="top-nav__link" title="Portfolio">Portfolio</a>
  <a href="blog.html" class="top-nav__link" title="Blog">Blog</a>
  <a href="photogallery.html" class="top-nav__link" title="Photo Gallery">Photo Gallery</a>
  <a href="contact.html" class="top-nav__link">Contact</a>
  <a href="rates.html" class="top-nav__link" title="Rates">Rates</a>
</div>
</nav>

<div id="side-menu">
  <a id="side-menu__close" href="#">&times;</a>
  <a href="index.html" class="side-menu__link" title="Home">Home</a>
  <a href="aboutme.html" class="side-menu__link" title="About Me">About Me</a>
  <a href="portfolio.html" class="side-menu__link" title="Portfolio">Portfolio</a>
  <a href="blog.html" class="side-menu__link" title="Blog">Blog</a>
  <a href="photogallery.html" class="side-menu__link" title="Photo Gallery">Photo Gallery</a>
  <a href="rates.html" class="side-menu__link" title="Rates">Rates</a>
</div>

    </header>

    <main class="row" id="main">

    <section id="container" class="center-block">
        <h1 class="form__header">Contact</h1>
        <p id="contact-text">Hey there, feel free to contact me here about potential collaboration opportunities, give me some constructive criticism, or propose a job.
        <form action="send_email.php" method="post">
          <div class="form-group">
            <label class="form__label" for="name">Name</label>
            <input class="form-control" type="name" id="name" placeholder="name" name="name" required>
          </div>
          <div class="form-group">
          <label class="form__label" for="cell">Cell</label>
          <input class="form-control" id="cell" name="cell" placeholder="(xxx) xxx-xxxx" required>
          <label class="form__label" for="email">Email</label>
          <input class="form-control" id="email" name="email" placeholder="email" type="email" required>
          </div>
          <div class="form-group">
          <label class="form__label" for="message">Leave me a brief message...</label>
          <textarea id="message" class="form-control" name="message" placeholder="Start typing here..." id="messageText" required></textarea>
          </div>
          <input id="submit" type="submit" name="submit" value="Submit">
        </form>

      </section>

    </main>
    <footer id="footer">
      <p class="toenail">Warren Dolben - Front-End Web Developer</p>
      <p class="toenail">warrendolben@gmail.com</p>
      <p class="toenail">X: @dolben</p>
      <p class="copyright">&copy; 2018-2025 Warren Dolben Web Development. All rights reserved.</p>
    </footer>
  </div>
</body>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <script src="main.js"></script>
</html>
