//hamburger menu

$(document).ready(function() {
	$('#hamburger').on('click', function() {
		$('#side-menu').css({width: '250px'});
	});

	$('#side-menu__close').on('click', function() {
		$('#side-menu').css({width: '0px'});
	});

	//blog functions

	$('#1').on('click', function() {
		$('#text').html('&emsp;Hey, just finished doing a bunch of work on the site. I have everything working pretty well now, so I decided to get over to my main.js file and do a little writing. For now, this is how I will be getting my blogging done. I\'ve flirted with the idea of adding a comment section, and actually attempted to do so, but is something I haven\'t been able to get working yet. I\'m not too concerned about it, though. With these j.query functions it\'s surprisingly easy to update code. I now have a revolving door of sorts, popping a blog article off the end when I\'ve written my next.<br>&emsp;With my other accomplishments this evening, mainly updating and correcting a few styling issues, I found it only right to get back down to the basics and start punching the keys. I know from my time studying web development that text-driven content is essential to drive traffic to a site and make it relevant. All I need right now to get around the shortcomings of this method of communication is the occasional escape character to keep my text green and flowing. I\'ve started a coding journey over these past forty-seven days; making it a point to practice javascript during the day and do exercises on freecodecamp at night. It\'s led to me interacting more with my website and improving it to the best of my abilities at the current time of writing. This journey has been slow, but definitely worthwhile. I\'d recommend coding to anyone. The problem solving involved is invaluable experience and transfers over into real life as well.<br>&emsp;I\'m excited to see where this journey will take me and eager to start coding professionally. I\'ll definitely be looking to take on projects via UpWork since my skills have been increasing steadily with practice. I asked my Alexa the other day how long it took to form a habit and the answer was two months. I\'m hopeful that as I reach this milestone of two months of consecutive practice that I\'ll be able to keep my momentum going.<br>&emsp;As for the work that I\'ve completed today on the site; styling, mainly the footer, and the x overflow that was occurring. I found fixes for both, and trimmed down my blog to seven articles as a temporary fix for the mobile version. I feel like I\'ve reached a sort of milestone by coming back and getting another blog post in; a milestone that\'s worthy of a github commit.');
		$('#post-title').html('Revamped Site & Motivation Going Forward');
		$('#post-time').html('12/10/22');
		$('#post-time').attr('datetime', '2022-12-10 18:30');
	});

	$('#2').on('click', function() {
		$('#text').html('&emsp;Hey everyone, I have my blog working pretty well, now. The only bummer is that I have to update a decent amount of code each time I want to update my blog, but that is no matter. I am still experimenting, after all, so I am excited that it is working at least. I have been on UpWork looking for potential opportunities for myself. I thought I had one, but unfortunately it was just someone trying to get around the UpWork policies; to work for them vicariously through my own profile, and using a remote desktop connection service. Anyway, I am still looking for my first opportunity on there. I eagerly await the day when I have a few projects lined up. I will continue to try to set them up. I might also give setting up local projects another try.<br>&emsp;I did that website for Pizza by Michael a few weeks ago. I am considering creating a new page for Bella\'s a convenience store and pizzeria down the road from us in Old Orchard. Either way, I am going to be working on some projects soon. Like I said in my previous post, I am all finished on Coursera. I do have a few courses yet to complete on Udemy, however. I may do some work on <i>The Complete Front-End Web Development</i> course. After I finish it, I still have a course to prepare me for the CompTIA A+ exam, and another course that will bring me through the JavaScript full-stack development process.<br>&emsp;Thanks for stopping by! Check back here often for updates on my journey! Have yourself a wonderful day or night.');
		$('#post-title').html('UpWork, Projects, Courses');
		$('#post-time').html('2/28/21');
		$('#post-time').attr('datetime', '2021-02-28 23:00');
	});

	$('#3').on('click', function() {
		$('#text').html('&emsp;So I just finished tuning up Nick\'s site the other night. I was able to finally implement a pagination effect with some basic jQuery JavaScript. I basically went through the articles, removed the spacing, and added a bunch of \\ to escape apostrophes mostly.<br>&emsp;By doing this I was then able to manipulate the DOM(Document Object Model) to change the inner HTML of the main content window on the page. It was a simple matter of matching up ID\'s and going through and putting a bunch of \\ in, like I was saying. I am now consciously avoiding contractions, so that I will not have to go through and do as many because they are a pain. Sorry if my writing seems a little more drawn out now, but this will save me a lot of time. I am sure there is an easier way to do this that I will find in time. For now, I am excited because it still seems like progress to me.<br>&emsp;You may have noticed I added another button, too. I am quite fond of fontawesome at this point, which is responsible for the icons you see in my little contact bar at the top-left of the page. I am going to try to add a few of my older articles in this manner, and see if I cannot get it up and running. Thanks for stopping by. By the time you are reading this, I will hopefully have a fully operational pagination function for this blog page.');
		$('#post-title').html('Blogs & Old Projects');
		$('#post-time').html('2/25/21');
		$('#post-time').attr('datetime', '2021-02-25 23:45');
	});

	$('#4').on('click', function() {
		$('#text').html('&emsp;Thanks for stopping by! I finished up my course on Coursera last night. I have a certificate to prove, which I think I\'ll post on here as well. I may put it on the portfolio page and change the page to portfolio/certificates. I can go to freecodecamp.org and get my responsive web design certification and put it on there as well. So far, my layout for my blog is very basic. I haven\'t gotten into designing the interactive interface just yet.<br>&emsp;I\'ve had a lot of fun renovating the site in the past few days as well. I now have everything pretty much the way I want it. I\'m trying to learn about Node.js and about the Express framework specifically. I want to know this, so I can handle form submissions; read the data, manipulate it etc.. For the moment, I\'ll be going through this YouTube video, I think. I have <i>The Complete Front-End Web Development</i> course on Udemy still to complete. It has been the source of a lot of inspiration. It\'s been a good refresher for a lot of material, and I\'ve managed to convert my first bit of vanilla JS into jQuery. I\'ve had a lot of fun experimenting with my own projects, on my own time. I\'m in the process of developing a portfolio, and going through these courses at the same time. Honestly, the courses have really complemented the project building, and provided inspiration for them. It\'s much easier to delve into a project when you\'re reviewing the same material needed to create various aspects of your own personal projects!<br>&emsp;I will have to make sure my online presence is satisfactory. I restarted my Linkedin account a few months ago, so I don\'t have any connections on it; I had over 500 before. I\'m not too worried about that, though, so long as I can get my Twitter account operational again; then I will have the unholy trinity working for me again; facebook, twitter, and instagram. It\'s fine to use them, so long as they are serving you, I think. But as soon as they start using you, look out!<br>&emsp;Thanks for stopping by! I\'ll be hopefully migrating all of my material from past blog posts here in the near future. I have a good amount of things to do before then, though, so I\'m not sure when that\'ll be done. The only thing left to do is to get to it! Have a wondeful day or night!');
		$('#post-title').html('All Finished on Coursera');
		$('#post-time').html('2/22/21');
		$('#post-time').attr('datetime', '2021-02-22 20:00');
	});

	$('#5').on('click', function() {
		$('#text').html('&emsp;This is the first post I will be writing on my new website. I\'ve been working excitedly all day to complete it. I had multiple style sheets, which I\'ve consolidated into one, and I\'m nearly done styling everything.<br>&emsp;I\'m typing this post into my text editor right now. I\'m going to be building a blog on this website here; complete with a comment system. I\'m hoping to have something up soon in that regard. For now, my only goal is to get this post up, and start to look at how I can migrate my other posts to my site; something that I\'m hoping to do particularly for the SEO benefit. There really is no substitute to text when it comes to ranking higher on search engines. I\'m anxious to see how a handcrafted site performs in this area.<br>&emsp;Come by here again frequently, as I\'ll have new posts each day about what I\'m working on!');
		$('#post-title').html('New Beginnings');
		$('#post-time').html('2/20/21');
		$('#post-time').attr('datetime', '2021-02-20 20:00');
	});

	$('#6').on('click', function() {
		$('#text').html('&emsp;I\’ve just started to get into jQuery today. I learned that before any jQuery you need to write an asynchronous function that assures all of the page info has been parsed; $(document).ready(function() {});. All the jQuery code goes in between the curly brackets {}.<br>&emsp;To me, jQuery seems like an odd hybrid of PHP, JavaScript, and CSS. I have only just begun the modules, and we’ve already learned about event handling in jQuery as well. Here\’s an example of the code needed to trigger an alert from clicking a button in jQuery (what the Udemy course with Nick Germaine uses as an example); $(document).ready(function() {$(‘#go-button’.on(‘click’, function() { alert(\‘Fantastic job clicking that button!\’);});});<br>&emsp;It doesn\’t really look as good when it isn’t in a code editor/IDE. This will give you an idea of what we’re doing, though. I’m going through the course with the video playing at 1.25x because most of the information has been review; except for this, which is a good reason to write about it. I’m hoping I can use jQuery, along with BootStrap, to speed up my development process, so I can be a more prolific coder.<br>&emsp;That is one of the keys it seems. Productivity. It\’s essential if you\’re trying to be a professional web developer it seems. It’s a double edged sword because it’s extremely exciting to take on a variety of projects, but difficult to finish them. Hopefully, in the next few weeks I can work through a few projects, and gain some confidence in that regard. For now, I’m trying to get through these courses, as I have still a couple more in-front of me.<br>&emsp;Thanks for stopping by. If you enjoyed this post, I’d love to hear from you. If you’re also learning about web development, share what you’re up to!<br>&emsp;See you tomorrow!');
		$('#post-title').html('Learning about jQuery');
		$('#post-time').html('2/6/21');
		$('#post-time').attr('datetime', '2021-02-06 20:00');
	});

	$('#7').on('click', function() {
		$('#text').html('&emsp;Hey, so I figured I would start writing around this time (4PM EST). The popular hour for the blog is 5PM, so this will give me just enough time to rattle off a high quality article. Man, after that JS module from Udemy the other day my head felt like it was going to explode! So much information. Most of it was review, but still. Learning is exhausting. The rewards are huge, though. <br>&emsp;I feel like I\’m finally getting a better understanding of JS. What it takes is consistency, it seems. I say this over and over, so I won’t say too much on it, but sleep and consistent toiling have been keys for me. <br>&emsp;In the last post, I detailed some of the things we went over for JS; Objects, Object Classes, Functions, if/else statements, for loops etc. Go check it out if you want a more direct reaction to it. Today, I\’m getting back into the Coursera course, and we\’re going over the concept of the Internet of Things. Just now, I\’m reading about the topic via <a href="https://www.wired.co.uk/article/internet-of-things-what-is-explained-iot"> this article on wired.</a> The essential premise of the concept is that the internet is extending into our everyday, more commonplace items. Things that aren\’t usually thought of as computers, are now.<br>&emsp;This topic is particularly scary for me. Based on what I\’ve learned so far, I\’m definitely suspicious of AI. I\’m mainly worried that because of an AI device that I have, someone could steal my information, defraud me, or worse yet, do me immediate harm. This is why I don\’t really use a digital assistant even. It\’s too scary for me!<br>&emsp;We\’re basically living in a science-fiction horror movie right now. What, with the pandemic, going on and all. And now I hear that there are different \“strains\” of this virus that are resistant to the vaccines? Hold on to your hats folks, we\’re in for a wild one.<br>&emsp;Thanks for stopping by to read my post today! The popular hour will hopefully yield me more readers, and the potential for more interactions. I\’d love to hear from you if you\’ve enjoyed my post, or if you\’re going through a similar educational journey.<br>&emsp;Until tomorrow!');
		$('#post-title').html('The Popular Hour');
		$('#post-time').html('2/5/21');
		$('#post-time').attr('datetime', '2021-02-05 17:00');
	});

	//Blank Contact Form Inputs on click

	$('#name').on('click', function() {
	  $('#name').val('');
	});

	$('#phone').on('click', function() {
		$('#phone').val('');
	});

	$('#email-address').on('click', function() {
		$('#email-address').val('');
	});

	$('#social-handle').on('click', function() {
		$('#social-handle').val('');
	});

});
