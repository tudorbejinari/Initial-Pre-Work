# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.
When you hit "https://www.techtonic.com/ in your favorite browser , browser start looking for the Ip adress for the domain name via Domain Server Server. then browser sends a HTTPS request to the server and the servers responds back an HTTPS response. After that Browser begins rendering Html following by CSS and JavaScript and start loading them and finnaly the browser sends further async requesta as neeeded.



## From start to finish, how does data reach you to be rendered in the browser?

A browser is a software application used to locate, retrieve and display data on the World Wide Web, including Web pages, images, video and other files. ... The Web server sends the information back to the Web browser which displays the results on your computer.

## What code is rendered in the browser?

When you tell the browser to load the code, first receives the HTML document and starts reading from the top and creates DOM then looks for links elements of CSS files and stops rending until the CSS files are fully loaded. If the browser encounters the JavaScript files which should be on the bottom starts loading them . When everything is loaded then browser starts paint the page and get the output on the screen.

## What is the server-side code’s main function?

Server-side is when most things that can be accomplished using languages like Ruby or PHP can be done only having access to a server that knows these languages . Server side is more secure and only can be accessed by user login. Even if you have these language installed on your computer you wont be able to access the data.

## What is the client-side code’s main function?

Client-side is when all the action and operations can be done on the user(client) computer. For example all tasks  Using languages like HTML CSS or JavaScript can be done on the client-side via browser and all data can be seen by all users.

## What is runtime?

In general terms runtime can be any framework or library or platform that execute the code.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?
This Question seems nontransparent. Based on source https://docs.microsoft.com/en-us/dotnet/standard/modern-web-apps-azure-architecture/common-client-side-web-technologies 
"ASP.NET Core applications are web applications and they typically rely on client-side web technologies like HTML, CSS, and JavaScript. By separating the content of the page (the HTML) from its layout and styling (the CSS), and its behavior (via JavaScript), complex web apps can leverage the Separation of Concerns principle. Future changes to the structure, design, or behavior of the application can be made more easily when these concerns are not intertwined.

While HTML and CSS are relatively stable, JavaScript, by means of the application frameworks and utilities developers work with to build web-based applications, is evolving at breakneck speed."

## How many instances of the server-side code are available at any given time?
This Question seems nontransparent.
I guess this my be an answer to this question : Languages/frameworks include but are not limited to Ruby (Rails), Javascript (Node.js), Python (Django), PHP, C#, and Java; but the list of possibilities is infinite. Any code that can run on a computer and respond to HTTP requests can run a server.


## How many instances of the databases connected to the server application are created?
This Question seems nontransparent.
This is what I think may be the answer:  Any data that a user requests in the browser (e.g., the fields in drop-down menus, photos, or user profiles) is delivered via server-side scripts, which create a channel between server and end user that requests, edits, and deletes things in the database.



