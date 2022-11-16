# book-haven


#### Github link:  https://github.com/mitchellygonzalez/book-haven

## Table of Contents
* [Description](#description)
* [Link](#link)
* [Screenshots](#screenshots)
* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [Technology Used](#technology-used)
* [Questions](#questions)
 
## Description
The application book-haven is a fully functioning Google Books Search Engine. It was manipulated to be converted into a MERN application from what once was a RESTful API application. It was refactored to be a Graph API running application built with Apollo Server. It consists of a MERN stack with a React front end, MongoDB database, and Node.js/Express.js server and API. 

## Link
- Link to deployed heroku application:
  - https://serene-peak-20734.herokuapp.com/

## Screenshots
Here are some screenshots of the deployed application link above

<img width="497" alt="Screen Shot 2022-11-15 at 9 50 22 PM" src="https://user-images.githubusercontent.com/107009737/202071783-6ca5ab55-ad5b-4f82-a9ef-4fd2618d1cc0.png">

<img width="496" alt="Screen Shot 2022-11-15 at 9 44 34 PM" src="https://user-images.githubusercontent.com/107009737/202071778-48f58ccc-9a54-426a-805b-5a435f1f332c.png">


## User Story
    AS AN avid reader
    I WANT to search for new books to read
    SO THAT I can keep a list of books to purchase


## Acceptance Criteria
    GIVEN a book search engine
    WHEN I load the search engine
    THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
    WHEN I click on the Search for Books menu option
    THEN I am presented with an input field to search for books and a submit button
    WHEN I am not logged in and enter a search term in the input field and click the submit button
    THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
    WHEN I click on the Login/Signup menu option
    THEN a modal appears on the screen with a toggle between the option to log in or sign up
    WHEN the toggle is set to Signup
    THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
    WHEN the toggle is set to Login
    THEN I am presented with two inputs for an email address and a password and login button
    WHEN I enter a valid email address and create a password and click on the signup button
    THEN my user account is created and I am logged in to the site
    WHEN I enter my account’s email address and password and click on the login button
    THEN I the modal closes and I am logged in to the site
    WHEN I am logged in to the site
    THEN the menu options change to Search for Books, an option to see my saved books, and Logout
    WHEN I am logged in and enter a search term in the input field and click the submit button
    THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
    WHEN I click on the Save button on a book
    THEN that book’s information is saved to my account
    WHEN I click on the option to see my saved books
    THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
    WHEN I click on the Remove button on a book
    THEN that book is deleted from my saved books list
    WHEN I click on the Logout button
    THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button

## Installation
1. Clone this code onto a local repository
2. In your terminal hit node run develop
3. Ensure you have all of the technology/packages listed below installed
  


## Usage
1. You may go onto the website, using the link provided above
2. Navigate to "search books"
3. Search whatever book title, author, genre of your preference
4. In order to gain access to saving books, on the top right corner of the page you may sign up or login if you have an account
5. Once logged in, you can hit "save book" under the book of your preference
6. Your books(s) will now be saved in the "saved books" section
7. You also have the option to delete a book from your collection of books you have saved.


## Contributors
To contribute, you may clone this repo, and create a new branch to add your code. 

## Technology Used
- React
- MongoDB
- Mongoose
- Apollo Server
- GraphQL
- API
- Node.js
- Express.js
- Heroku
- JS
- JSON

## Questions
Any questions, contact me via email: mitchellygonzalez@gmail.com
