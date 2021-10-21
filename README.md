###ENDPOINTS
https://rjo-back-end.herokuapp.com/api/users

[GET] - '/'

WHAT TO SEND - nothing

WHAT YOU RECEIVE - array of all users
{ "user_id", "username", "password" }

[POST] - '/register'

WHAT TO SEND - "username": "string", "password": "string"

WHAT YOU RECEIVE - { "user_id", "username" }

[POST] - '/login'

WHAT TO SEND - "username": "string", "password": "string"

WHAT YOU RECEIVE - { "user_id", "token" }

https://rjo-back-end.herokuapp.com/api/potlucks

[GET] - '/'

WHAT TO SEND - nothing

WHAT YOU RECEIVE - array of all potlucks
{ "potluck_id", "potluck_name", "potluck_location", "potluck_date", "potluck_time", "user_id" }

[GET] - '/:user-id/potlucks'

WHAT TO SEND - nothing

WHAT YOU RECEIVE - array of all potlucks user_id is the organizer of
{ "potluck_id", "potluck_name", "potluck_location", "potluck_date", "potluck_time", "user_id" }

[GET] - '/:user-id/potlucks/:potluck_id'

WHAT TO SEND - nothing

WHAT YOU RECEIVE - array of single potluck
{ "potluck_id", "potluck_name", "potluck_location", "potluck_date", "potluck_time", "user_id" }

[POST] - '/:user_id/newPotluck'

WHAT TO SEND - "potluck_name", "potluck_location", "potluck_date", "potluck_time" (all string)

WHAT YOU RECEIVE - array containing single object of newly created potluck
{potluck_id, potluck_name, potluck_location, potluck_date, potluck_time, user_id}

[PUT] - '/:user-id/updatePotluck/:potluck_id'

WHAT TO SEND - any change to "potluck_name", "potluck_location", "potluck_date", "potluck_time"

WHAT YOU RECEIVE - array containing single object of newly updated potluck
{potluck_id, potluck_name, potluck_location, potluck_date, potluck_time, user_id}

https://rjo-back-end.herokuapp.com/api/guests

[POST] - '/:potluck_id/invite'

WHAT TO SEND - "username": "string"

WHAT YOU RECEIVE - if username does not exist, 'invalid credentials'. If username exists, success message

https://rjo-back-end.herokuapp.com/api/foods

[GET] - '/:potluck_id/foods'

WHAT TO SEND - nothing

WHAT YOU RECEIVE - array containing all food items associated with that potluck
{ "food_id", "food_name", "potluck_id" }

[POST] - '/:potluck_id/addFoods'

WHAT TO SEND - "food_name": "string"

WHAT YOU RECEIVE - success message

# Lambda School Build Week:
The purpose of Build Week is to empower students to demonstrate mastery of your learning objectives. The Build Weeks experience helps prepare students for the job market.

## Potluck Planner🐝🌾🐓🦀


### Pitch🦾

If you have ever tried to organize a potluck through text messages, online to-do lists or spreadsheets, you'll understand why this app is essential. 

In the world of social gatherings and potlucks the "Potluck Planner" is king. This is your place for all things pot luck.

### MVP🎯
1. As an `organizer` I can create an upcoming `potluck` and invite my friends to attend

2. As an `organizer` I can adjust `date`s, `time`s and `location`s of the potluck

3. As an `organizer` I can use the list feature in my app to add food `items` that we'd like to see at the potluck

4. As a `guest` to a potluck I want to be able to confirm that I'm going to the upcoming `event`

5. As a `guest` I'd like to be able to select which `item`s I'd like to be responsible for bringing

### OUR TEAM



## *`What is Build Weeks?`*
Lambda School Build Weeks is a cross-collaborative project that takes place at the end of each unit of instruction. Learners are tasked with building out a product based on a product canvas detailing the pitch, scope and MVP of the project. These projects vary widely in their stated application but all demonstrate full CRUD-functionality in a form of a *full-stack* developed web application.

Team members will work across all units of instruction- spanning from React Engineers to backend architects- to successfully build and deploy a fully-functioning, React-based web application that supports persistent data storage via a SQL database.

Build Weeks is an exercise not just in technical chops, but too of a team's ability to realistically plan the development, via an Agile workflow, of a staged production application, all while maintaining a healthy workflow of a collaborative Github organization. The end product is the sum of a week's worth of development and is often debuted as a proof-of-concept, though front end design is taken into consideration through use of design systems and / or CSS frameworks. All of this planning takes into the account the time restrictions of delivering said product within the time frame of one week.

The tech stack used in these project is subject to the team's choice and is a big part of the planning process in the Product Vision Document, a brief meeting prior to the initial development, to discuss the nature of which technologies will be leveraged to build the product. These are "green field projects" and there is no prior codebase inherited at the time of Build Weeks beginning. The primary tech stack we use for Lambda School's web development curriculum includes:

- **React** and **NodeJS** / **Express** for the front end

- **SQLite3** / **PostgreSQL** for a database

- **Jest** / **Mocha** for testing
