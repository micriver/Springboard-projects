# How Web Works
# What is HTTP?
# HTTP stands for hyper text transfer protocol and it is the standard protocol used to communicate between two computers over an internet connection

# What is a URL?
# URL stands for uniform resource locator. It is made up of different blocks of text (eg, the protocol in use, the server's ip address, the search query, etc...), each with different purposes, that, when combined together, form a long line of text. 

# What is DNS?
# DNS stands for Domain Name Service. It is how humans are able to read IP addresses by keeping a log of domain names and their tied IP addresses.

# What is a query string?
# A query string is the string sent by a user in a site's input box

# What are two HTTP verbs and how are they different?
# 1. GET - to submit information without making any changes to a database on the server side
# 2. POST - to submit information that creates changes on the server side
# One request recieves changes without any after affects while the other sends information to the site with after affects

# What is an HTTP request?
# An http request is when you put in a URL and make a request to a website's server for their webpage and its contents to display on your browser. Your computer and the server use the HTTP protocol to make the request.

# What is an HTTP response?
# The response has information like the headers, the status code, and a body with other data dependent on the request that was made

# What is an HTTP header? Give a couple examples of request and response headers you have seen.
# An HTTP header is a piece of a request that contains information about the request such as the request type, whether GET or POST, or other, the status code of the request, the date and time.

# What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser?
# Your computer sends a DNS request to your router that sends out your request to the internet and its final address. The server at the site on the other end returns the requested information to your computer and your browser unpacks the information, displaying it on your computer screen

# Part Two: Practice Tools
# Using curl, make a GET request to the icanhazdadjoke.com API to find all jokes involving the word “pirate”
# curl https://icanhazdadjoke.com/search?term=pirate

# Use dig to find what the IP address is for icanhazdadjoke.com
# dig https://icanhazdadjoke.com

# Make a simple web page and serve it using python3 -m http.server. Visit the page in a browser.
# python3 -m http.server
# This next line needs to be pasted manually...
# localhost:8000


# Part Three: Explore Dev Tools
# Build a very simple HTML form that uses the GET method (it can use the same page URL for the action) when the form is submitted.
# Check index.html page!

# Add a field or two to the form and, after submitting it, explore in Chrome Developer tools how you can view the request and response headers.
# done

# Edit the page to change the form type to POST, refresh in the browser and re-submit. Do you still see the field in the query string? Explore in Chrome how you can view the request and response headers, as well as the form data.
# done
