# Aloha project

This is the first Ecommerce website project for the web dev programme at RED Academy, showcasing responsive web development using HTML, CSS and Javascript.

### Desktop Preview
![Desktop Preview](images/kanika-desktop-aloha-project.png)

### Tablet Preview
![Tablet Preview](images/kanika-tablet-aloha-project.png)

### Mobile Preview
![Mobile Preview](images/kanika-mobile-aloha-project.png)

# Technologies Used

* HTML
* CSS (Flexbox)
* JavaScript
* Jquery (Flickity Plugin)
* Git & Github

# Learnings

 ### Developer Tools

 The developer tools look a bit daunting at first, but it’s worth getting to know a few tricks, as they will massively improve your efficiency, and your understanding of website content or coding issues.

- Test Your Responsive Design
- Become An HTML & CSS Jedi
- Rapid Debugging 
- Easy to Use 

### Responsive web design

Responsive web design (RWD) is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes.Content, design and performance are necessary across all devices to ensure usability and satisfaction.Responsive layouts automatically adjust and adapt to any device screen size, whether it is a desktop, a laptop, a tablet, or a mobile phone.

##### The code you stick inside your media query 
```
@media screen and (max-width: 960px) {
  body {
    color: red;
  }
}
```

### Mobile first approach

The mobile-first approach is a tenet of progressive enhancement. It is the ideology that mobile design, as the hardest, should be done first. Once the mobile design questions are answered, designing for other devices will be easier. What it boils down to is that, the smallest of the designs will have only the essential features, so right away you have designed the heart of your UX.

##### Mobile First Breakpoints-

```
@media screen and (min-width: 600px) {
}
@media screen and (min-width: 1240px) {
}

```

### Flickity Slider

Flickity is a JavaScript slider library, built by David DeSandro of Metafizzy fame. It’s optimized for touch gestures, performance, and includes things like physics-based animation.Flicity is a tool that I came across while working on this site. It is a vanilla javascript (so not dependent on something like jQuery) that provides you with robust API’s to implement the most complex of touch enabled carousels.If you’re building a photo slide show, or you have an e-commerce store to feature products, or you want to provide a multi-step on boarding experience then a responsive touch carousel is a great fit.

##### Flickity Guide

- Step 1: Add Flickity’s CSS and JS files, the easiest way to do this is to use the provided CDN.

Add the following to the <head> of your html file. Make sure to add this CSS/JS links above your own CSS and JS files.
```
<!-- Flickity CSS -->
<link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css">
<!-- Flickity JavaScript -->
<script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>
```
- Step 2:Where your “Most-Loved Products” section is add the following html.
```
<div class="main-carousel">
  <div class="carousel-cell">
    <!-- product html here e.g. image, category, title & price  -->
  </div>
  <div class="carousel-cell">
    <!-- product html here e.g. image, category, title & price  -->
  </div>
  <div class="carousel-cell">
    <!-- product html here e.g. image, category, title & price  -->
  </div>
</div>
```
- Step 3: If you don’t have a JavaScript file setup, add one now and link to it in the <head> of your html file.
```
const elem = document.querySelector('.main-carousel');
const flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  wrapAround: true,
  freeScroll: true
});
```
- Add some CSS to style the Flickity carousel at different breakpoints. Once you have your html inside of each carousel-cell you can adjust the widths and do some other styling like centering the content.
```
/* mobile style */
.carousel-cell {
  width: 100%;
  text-align: center;
}

/* media query example */
@media screen and (min-width: 600px) {
  .carousel-cell {
    width: 25%;
  }
}
```

### Email Validation

mail Validation is a procedure that verifies if an email address is deliverable and valid. It runs a swift process that catches typos, whether they are honest mistakes or purposeful misdirects. It also confirms if a particular email address exists with a reliable domain such as Gmail or Yahoo. This not only helps in organizing and cleaning your list of email addresses but also helps in protecting your email sender score, maximizing the efficiency of your email program.
checks to determine whether the email addresses are valid, risky or invalid.

- Valid: This means that the email address exists, and it is error free. This verification will be complete to the mailbox level.

- Risky: This means the recipient exists but there are other factors that indicate that this address could still result in a bounce.

- Invalid: If an email address is marked as invalid, it contains syntax errors, DNS errors and/or mailbox errors.

##### HTML Code for Email Validation
```
                <input id="input" type="email" name="email" placeholder="Your Email">
                <input id="subscribe" type="submit" value="Subscribe">
```


##### JS Code for Email Validation
```

  let inputEmail = document.getElementById('signup-form');

  inputEmail.addEventListener("submit", function (e) {
    e.preventDefault();

    const text = document.getElementById("input");
    const trimVal = text.value.trim();
    if (trimVal == "") {
      alert("Please submit a valid email address.");
    }

    else if (trimVal.length >= 0) {
      alert("Thanks for subscribing!");
    }

    text.value = "";
```

### GitHub Repository 
GitHub, can be divided into the Git, and the Hub. The service includes access controls as well as a number of collaboration features like tools for basic task management and for all projects you handle. GitHub hosts your source code projects in a variety of different programming languages and keeps track of the various changes made to every iteration. 

##### Benefits of using GitHub

- It makes it easy to contribute to your open source projects
- Showcase your work
- Track changes in your code across versions
- Integration options

##### Steps to follow to commit all the changes to your Github Repository

``` git status
    git add -A
    git commit -m " "
    git push
```    