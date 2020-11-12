# Vending-Machine

A HTML and JavaScript web application hosting a vending machine that dispenses coldrinks. Launching vending.html in a server allows you to view and interact with it. If you're lanching through your browser, the HTTP requests and AJAX will not work.

# Requirements
A number of tools and frameworks are required for the operation of the app. It's importat to install the following:
Web Server for Chrome (extension)
<br/>
Node.js
<br/>
express
<br/>
npm
<br/>
mongoose
<br/>
[[Body-parser]()
<br/>
[Mongo Atlas]()
<br/>
[Postman]()
<br/>


# Objectives
The vending machine is supposed to satisfy the objectives as described below.

Design and develop a vending machine which vends products based upon four (4) denominations of coins and returns coins if there is no item.
We require you to develop a single page application that does the following:
<br/>
• When the application loads, it loads data about all the instances from the products and Coins and visualizes this data in some way. (e.g. A table with all the data)
<br/>
• The application must have some mechanism for refreshing all the data from the API without having to reload the entire application (e.g. A refresh data button)               
<br/>               
• The application must have some mechanism for refreshing the data of only a section (products or coins)
<br/>
• The application should show the user some indication that it is refreshing/loading new data Objectives
<br/>

The app sastifies most of these **requirements** through simple HTML and JavaScript.


# Useful Notes
Unfortunately, our REST API and MongoDB database came across some errors during development and as a result, our app only reads data from other HTML files instead of a database using `XMLHttpRequest()`.


# References
1. https://www.youtube.com/watch?v=WDrU305J1yw
