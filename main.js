$(document).ready(function() {
	
	//hamburger menu

	$('#hamburger').on('click', function() {
		$('#side-menu').css({width: '250px'});
	});

	$('#side-menu__close').on('click', function() {
		$('#side-menu').css({width: '0px'});
	});

	//blog functions

	$('#1').on('click', function() {
		$('#text').html('&emsp;Good day and welcome, today I figured I\'d go back to learning some PHP, and I\'m starting to get more comfortable with it and see how it can be utilized. I\'ve been working through a tutorial on youtube from Traversy Media, an instructor who I\'ve learned from in the past. We just got through get and post methods, and soon I\'ll be learning how to set up a database with mySQL and store my contact form data in there, hopefully.<br>&emsp;Other than that I\'ve been updating my keywords meta tag today in hopes of even better SEO. I\'ve had pretty good luck with my SEO, and attribute that partly to my blog, and the text driven relevant data that I\'ve been producing to keep my page relevant and \'on task\'. I\'m excited to take my website to the next level with this added functionality I\'m hoping to provide through learning this PHP. I still have some Express JS written that I have no idea what it does to try to handle my form, which reminds me the necessity of staying with any given technology I attempt to implement.<br>&emsp;On UpWork I have yet to have success. I\'ve applied to over 30 jobs since I\'ve been on the platform, and I nearly have half of those proposals submitted in the last month. I\'m definitely putting myself out there with the hopes of building professional experience and connections. I\'ve reduced my rate to next to nothing, and I feel like it\'s just a matter of time, and a matter of getting myself infront of the right people, before I have some success. I\'m excited to keep progressing and devoted to keep plugging away, attempting to improve myself a small amount each day.<br>&emsp;I have a number of tasks piling up in my head, and ideas of where to go next. For now, I\'d like to finish off this PHP tutorial and work on implementing some backend structure into my site. Once this is achieved, I supposed I should go back to my JS learning/building, as I still have much to do, and a lot of potential, in this regard. A few more projects, along with a couple certifications, should do my portfolio, and ultimately my prospects of landing a job, a whole lot of good. Thanks for stopping by -- I\'ll be back, regularly making site updates, and periodically posting.');
		$('#post-title').html('Site Updates & Learning Journey');
		$('#post-time').html('1/22/24');
		$('#post-time').attr('datetime', '2024-1-22 14:00');
	});

	$('#2').on('click', function() {
		$('#text').html('&emsp;Hi! Welcome to my site! I\'ve been working diligently on it and my skills since the last time I posted. I\'m excited to show off some new changes to the website, and I feel like it\'s looking better than ever.<br>&emsp;I\'ve been working on projects, and finetuning my portfolio for showcasing on the upwork platform. I\'ve been very close to landing a job on there, though I haven\'t yet. I am determined to eventually succeed, and will continue building myself up in order to achieve this. I\'m still going through a PHP tutorial with the hopes of eventually adding some more functionality to my website -- potentially items such as; backend structure for processing my contact form as well as storing my blog posts, and a working search bar (something bootstrap includes in their navbar).<br>&emsp;I set regular hours about two weeks ago, and I\'ve been sticking to them, working consistently within these hours, so if an opportunity were to arise I\'d be readily available. It\'s added a bit more necessary structure. I have managed to be relatively productive during these times, and I am optimistic about my future. I have measures in place to succeed, and I\'m excited to learn each day, improving myself incrementally, but steadily, which I will do until I eventually tip the scales in my favor.<br>&emsp;I\'ve foregone the IT route for now in favor of a part-time developer role. I\'m actually trying to limit the amount of time I spend learning, building, and improving -- hopefully not too much to my detriment. However, I believe shorter bursts of inspired productivity and engagement might produce better results, and be a better use of time -- more time presents more opportunities to waste time. My goal is to be productive for about five hours each day during the week. I\'ve also been putting some time in on weekends, which I haven\'t accounted for in my hours. I\'ll consider this to be bonus time, though, similar to what I do with my core workouts -- not counting them towards the total amount of training I do per week. It\'s a little psychological game I like to play. But yeah, I want to be able to be extremely productive from a working web developer standpoint, and be able to do this physically as well. Training body and mind in tandem is a necessity. To maintain a high standard of health is to give myself the most opportunities, and the most time, to succeed.<br>&emsp;I\'m eager to get to the next checkpoint in this journey.');
		$('#post-title').html('Site Updates & Learning Journey');
		$('#post-time').html('1/16/24');
		$('#post-time').attr('datetime', '2024-1-16 14:00');
	});

	$('#3').on('click', function() {
		$('#text').html('&emsp;Hey, so it has been a few days, and I figured I would come back here and detail a little bit of what I am up to. Happy 2024! As of today, I am establishing consistent business hours, which I hope to uphold. From this starting point, I hope to create a good habit for myself.<br>&emsp;My current focus is on freelancing opportunities -- specifically UpWork. I figure that I can get my foot in the door doing some basic projects, and begin to build a reputable profile for myself there. There are plenty of jobs available, but it is tough to find the ones I am qualified for, and also difficult to determine, which of those to apply to. Freelancers using UpWork free-of-charge have considerably less perks, mainly support services, and actual connects that you need to make proposals for jobs. I am finding jobs typically take about eight connects per proposal, and this could be for a job with a budget of less than ten dollars. There are some opportunities that seem like very easy tasks, but it is also difficult to determine the authenticity of the client. Luckily, there are a few visible metrics for the freelancer when seeking out a new client. You can see whether their payment is verified, how they are rated, and also how much money they have spent and their location.<br>&emsp;It is actually a decent amount of information and I am hoping by paying close attention to these and inserting a litle bit of effort and personal touch I will be successful at landing jobs. If you just want connects, and want to skip all the support offered, like me, you can pay $.15 for additional connects. I might be doing this, but I would like to have some kind of success to warrant paying any money first. I will be back soon to let you know how it is going.');
		$('#post-title').html('Back on UpWork');
		$('#post-time').html('1/3/24');
		$('#post-time').attr('datetime', '2024-1-3 14:30');
	});

	$('#4').on('click', function() {
		$('#text').html('&emsp;Hello again, very excited to be back typing yet again so recently after posting. Anyway, my SSL certificate expired due to the lifetime SSL limit that I wrote about in the last post. I was well informed of this event, and thought I had taken the necessary steps to maintain my secure connection through this time. Howevever, last night came and my site was connection was not secure! Alas, I had neglected one last step. It was an important one -- installing the certificate on the server via cPanel.<br>&emsp;I managed to do this without contacting support. Not that that would have been a bad thing -- namecheap support has been extremely helpful in the past, doing what I have just done for me last year. This time I got the nearly instant gratification of seeing the lock closed up again on my browser search bar, indicating a secure connection. I did use a namecheap tutorial to go about doing this correctly, which I found necessary considering my obvious incompetence. The process consisted of getting several keys.<br>&emsp;I retrieved the last input, the ca bundle, first. I downloaded the certificate from my namecheap account -- the ca bundle file was enclosed. Next, I retrieved the actual .crt file. The raw file data was available via email from the issuing authority. With that in place, I only needed the private key info before I had all info needed to install the certificate on the server. The private key could be found via cPanel as well. In the Security section go to SSL/TLS -- from there you can view the private keys on the server. For me, it was simply a matter of plugging in a few different keys to determine which was the correct one. After this, I was able to install the certificate on the server. With this done my site connection was once again secure, and everything was right in the world.');
		$('#post-title').html('SSL Server Installation');
		$('#post-time').html('12/28/23');
		$('#post-time').attr('datetime', '2023-12-28 13:30');
	});

	$('#5').on('click', function() {
		$('#text').html('&emsp;Hey, very excited to be back here writing. It has taken me a while to return, but I feel I am returning with ample motivation and the necessary measures in place to succeed. Lots has changed in the way of my life since last posting; my residence, employment, and mode of transportation. I am in good spirits though, as of late, and looking to take my web development journey to the next step. I\'ve implemented incremental progress in my life as a means of fulfillment and satisfaction, through the honing of my body -- now finding it appropriate to once again return to the task of sharpening my mind. It\'s been a struggle for me to stay on the path on this learning journey, which requires such consistency, discipline, and diligence. I am enthusiastic about my chances of eventually getting the groove, however. Just this past year I was attempting #100daysofcode, which I got at least as far as day 73 -- going off a tweet. My next move could very well be to complete this streak. It does, afterall, tick several boxes on my checklist for becoming a full-blown, full-time developer.<br>&emsp;The main thing that has grabbed my attention and brought me back the site here is the need to refresh my SSL certificate. I had already purchased the SSL for 6 years, but it pauses each year because of something called the SSL lifetime limit. I needed to reissue it and reinstall it, which I have done without the aid of namecheap support this time. We\'ll see in a few days if I was truly successful or not. But yeah, I generated a CSR using cPanel, went throught the steps for creating a CNAME record, then created that record in the zone editor of cPanel -- adding the host and target values in the appropiate places (host value goes to name field, target goes to record field), and changed TTL value to 60.<br>&emsp;As for changing the twitter birdy logo to the x logo, it wasn\'t too big of a deal. It was just a matter of finding the right link to the latest version of fontawesome, which I located via stackoverflow, updating the link to that resource on each html page and updating the actual code for the logo. Now my logos are up to date! Everything has been updated live and committed to github.');
		$('#post-title').html('SSL & X logo');
		$('#post-time').html('12/22/23');
		$('#post-time').attr('datetime', '2023-12-22 15:00');
	});

	$('#6').on('click', function() {
		$('#text').html('&emsp;Hey, just finished doing a bunch of work on the site. I have everything working pretty well now, so I decided to get over to my main.js file and do a little writing. For now, this is how I will be getting my blogging done. I\'ve flirted with the idea of adding a comment section, and actually attempted to do so, but is something I haven\'t been able to get working yet. I\'m not too concerned about it, though. With these j.query functions it\'s surprisingly easy to update code. I now have a revolving door of sorts, popping a blog article off the end when I\'ve written my next.<br>&emsp;With my other accomplishments this evening, mainly updating and correcting a few styling issues, I found it only right to get back down to the basics and start punching the keys. I know from my time studying web development that text-driven content is essential to drive traffic to a site and make it relevant. All I need right now to get around the shortcomings of this method of communication is the occasional escape character to keep my text green and flowing. I\'ve started a coding journey over these past forty-seven days; making it a point to practice javascript during the day and do exercises on freecodecamp at night. It\'s led to me interacting more with my website and improving it to the best of my abilities at the current time of writing. This journey has been slow, but definitely worthwhile. I\'d recommend coding to anyone. The problem solving involved is invaluable experience and transfers over into real life as well.<br>&emsp;I\'m excited to see where this journey will take me and eager to start coding professionally. I\'ll definitely be looking to take on projects via UpWork since my skills have been increasing steadily with practice. I asked my Alexa the other day how long it took to form a habit and the answer was two months. I\'m hopeful that as I reach this milestone of two months of consecutive practice that I\'ll be able to keep my momentum going.<br>&emsp;As for the work that I\'ve completed today on the site; styling, mainly the footer, and the x overflow that was occurring. I found fixes for both, and trimmed down my blog to seven articles as a temporary fix for the mobile version. I feel like I\'ve reached a sort of milestone by coming back and getting another blog post in; a milestone that\'s worthy of a github commit.');
		$('#post-title').html('Revamped Site & Motivation Going Forward');
		$('#post-time').html('12/10/22');
		$('#post-time').attr('datetime', '2022-12-10 18:30');
	});

	$('#7').on('click', function() {
		$('#text').html('&emsp;Hey everyone, I have my blog working pretty well, now. The only bummer is that I have to update a decent amount of code each time I want to update my blog, but that is no matter. I am still experimenting, after all, so I am excited that it is working at least. I have been on UpWork looking for potential opportunities for myself. I thought I had one, but unfortunately it was just someone trying to get around the UpWork policies; to work for them vicariously through my own profile, and using a remote desktop connection service. Anyway, I am still looking for my first opportunity on there. I eagerly await the day when I have a few projects lined up. I will continue to try to set them up. I might also give setting up local projects another try.<br>&emsp;I did that website for Pizza by Michael a few weeks ago. I am considering creating a new page for Bella\'s a convenience store and pizzeria down the road from us in Old Orchard. Either way, I am going to be working on some projects soon. Like I said in my previous post, I am all finished on Coursera. I do have a few courses yet to complete on Udemy, however. I may do some work on <i>The Complete Front-End Web Development</i> course. After I finish it, I still have a course to prepare me for the CompTIA A+ exam, and another course that will bring me through the JavaScript full-stack development process.<br>&emsp;Thanks for stopping by! Check back here often for updates on my journey! Have yourself a wonderful day or night.');
		$('#post-title').html('UpWork, Projects, Courses');
		$('#post-time').html('2/28/21');
		$('#post-time').attr('datetime', '2021-02-28 23:00');
	});

	//Blank Contact Form Inputs on click

	$('#name').on('click', function() {
	  $('#name').val(' ');
	});

	$('#cell').on('click', function() {
		$('#cell').val(' ');
	});

	$('#email').on('click', function() {
		$('#email').val(' ');
	});

	$('#social-handle').on('click', function() {
		$('#social-handle').val(' ');
	});

	$('#textblock').on('click', function(){
		$('#textblock').val(' ');
	});

});
