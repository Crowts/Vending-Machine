# Vending-Machine

A HTML and JavaScript web application hosting a vending machine that dispenses coldrinks. Launching `vending.html` in a server allows you to view and interact with it. 
If you're lanching through your browser, the XMLHttPRequest will not work due to **CORS** errors. Please start a server either by using **python's SimpleHTTPServer** or download the Chrome extension listed first in the required dependancies below.

The python server can be launched by executing
```sh
python -m SimpleHTTPServer port
```
The default port is 8000. You can add your own if you want to.

# Requirements
A number of tools and frameworks are required for the operation of the app. It's importat to install the following:
<br/>
[Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb/related?hl=en)
<br/>
[Node.js](https://nodejs.org/en/download/)
<br/>
[express](https://www.npmjs.com/package/express)
<br/>
[npm](https://docs.npmjs.com/cli/v6/commands/npm-install)
<br/>
[mongoose](https://mongoosejs.com/docs/)
<br/>
[Body-parser](http://expressjs.com/en/resources/middleware/body-parser.html)
<br/>
[Mongo Atlas](https://account.mongodb.com/account/login?n=%2Fv2%2F5faaf5879f62284b8b619cba&nextHash=%23clusters)
<br/>
[Postman](https://www.postman.com/downloads/)
<br/>

# Objectives
The vending machine is supposed to satisfy the objectives as described below.

Design and develop a vending machine which vends products based upon four (4) denominations of coins and returns coins if there is no item.
We require you to develop a single page application that does the following:
<br/>
• When the application loads, it loads data about all the instances from the products and Coins and visualizes this data in some way. (e.g. A table with all the data)
<br/>
• The application must have some mechanism for refreshing all the data from the API without having to reload the entire application (e.g. A refresh data button)
• The application must have some mechanism for refreshing the data of only a section (products or coins)
<br/>
• The application should show the user some indication that it is refreshing/loading new data Objectives


The app sastifies most of these **requirements** through simple HTML and JavaScript.


# Useful Notes
Unfortunately, our REST API and MongoDB database came across some errors during development and as a result, our app only reads data from other HTML files instead of a database using `XMLHttpRequest()`.


# References
1. https://www.youtube.com/watch?v=WDrU305J1yw
