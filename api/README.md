# JISETI API
This API provides powers our application, [Jiseti API](https://task-train.netlify.app/). The API is built using Ruby on Rails.

## Technologies Used
This application has been built with the following tools:

![ruby ](https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white)
![sqlite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-5.2.1-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![ActiveRecord](https://img.shields.io/badge/ActiveRecord-7.0.4-2d2d2d?style=for-the-badge&logo=ruby&logoColor=white)
![Bcrypt](https://img.shields.io/badge/Bcrypt-3.1.16-green?style=for-the-badge&logo=ruby&logoColor=white)
![Rerun](https://img.shields.io/badge/Rerun-0.14-orange?style=for-the-badge)
![Rake](https://img.shields.io/badge/Rake-13.0.6-red?style=for-the-badge&logo=ruby&logoColor=white)


## Project Setup
You can set up this repository by following this manual

1. Clone the repository
    ```{shell}
   git clone https://github.com/OyakiMasu/Jiseti.git
   ```
2. Ensure the ruby gems are set up in your machine
    ```{shell}
   bundle install
   ```
3. Perform any pending database migrations
   ```{shell}
   rails db:migrate
   ```
4. Run the application
    ```{shell}
    rails server
    ```
5. Open the application from your browser
    ```
   http://localhost:3000
   ```

## Application

### Folder Structure


    .
    ├── ...
    ├── api                   
    │   ├── app              
    │   ├── config            
    │   ├── db            
    │   ├── spec          
    │   └── ...                 
    └── ...

### ASSOCIATIONS
* A `user` has many `red flag records`
* A `user` has many `intervention records`
* A `red flag` record belongs to a `user` 
* An `intervention` record belongs to a `user`

### MODELS
This section will describe the schema definitions for our database.

#### 1. RED FLAG RECORDS
- All the tasks that have been added.

| COLUMN           | DATA TYPE                                         | DESCRIPTION                                      | 
|------------------|---------------------------------------------------|--------------------------------------------------|
| id               | Integer                                           | Unique identifier.                               |
| user_id               | Integer                                           |   Foreign Key             |
| title            | Text                                            | The title of the redflag record                            |
| description      | Text                                            | A short description about the record        | 
| longitude     | Decimal                                            | A The longitude of the report        | 
| latitude     | Decimal                                            | A The latitude of the report.        | 
| status           | ENUM `[UNDER INVESTIGATION, REJECTED, RESOLVED]`| The status of the record                          |

#### 2. INTERVENTION RECORDS
- All the tasks that have been added.

| COLUMN           | DATA TYPE                                         | DESCRIPTION                                      | 
|------------------|---------------------------------------------------|--------------------------------------------------|
| id               | Integer                                           | Unique identifier.                               |
| user_id               | Integer                                           |   Foreign Key             |
| title            | Text                                            | The title of the redflag record                            |
| description      | Text                                            | A short description about the record       | 
| longitude     | Decimal                                            | A The longitude of the report        | 
| latitude     | Decimal                                            | A The latitude of the report.        | 
| status           | ENUM `[UNDER INVESTIGATION, REJECTED, RESOLVED]`| The status of the record                          |


#### 3. USERS

- All the registered user accounts

| COLUMN          | DATA TYPE | DESCRIPTION                           | 
|-----------------|-----------|---------------------------------------|
| id              | Integer   | Unique identifier.                    |
| email           | String    | User's email addrress.                |
| password_digest | String    | User's password hashed with `BCrypt`. |
| username           | String    | User's nickname              |
| user_type           | ENUM `[USER, ADMIN]`    | User's role |
| updated_at      | Date      | The date the user was updated.        |
| createdAt       | Date      | The date the user was created.        |



### CONTROLLERS
This section will describe the routes

#### Users

  * Sign-up
  
            POST /signup


<p align="center">
  <img src="Screenshot from 2023-05-01 22-55-10.png" width="350" title="hover text">
</p>

  * Login


            POST /login
  
<p align="center">
 <img src="Screenshot from 2023-05-01 23-00-05.png" width="350" alt="accessibility text">
  <img src="Screenshot from 2023-05-01 23-00-27.png" width="350" title="hover text">
</p>

  * Logout
  
            POST /logout

<p align="center">
  <img src="Screenshot from 2023-05-01 22-59-42.png" width="350" title="hover text">
</p>

#### Red_Flag_Records

    *  To view red flag records 

             GET /red_flag_records

<p align="center">
  <img src="Screenshot from 2023-05-01 23-10-35.png" width="350" title="hover text">
</p>


    
    *  To view red flag records 

    
            GET /red_flag_records/:id 


<p align="center">
  <img src="Screenshot from 2023-05-01 23-10-48.png" width="350" title="hover text">
</p>

    *  To post a red flag record

            POST /red_flag_records

<p align="center">
  <img src="Screenshot from 2023-05-01 23-10-48.png" width="350" title="hover text">
</p>

    *  To update a red flag record
            
            PATCH /red_flag_records/:id

<p align="center">
  <img src="Screenshot from 2023-05-01 23-17-45.png" width="350" title="hover text">
</p>

    *  To delete a red flag record

            DELETE /red_flag_records/:id

<p align="center">
  <img src="Screenshot from 2023-05-01 23-17-59.png" width="350" title="hover text">
</p>


#### Intervention_Records

    *  To view intervention records 

            GET /intervention_records


<p align="center">
  <img src="Screenshot from 2023-05-01 23-18-29.png" width="350" title="hover text">
</p>
    
    *  To view intervention records 
    
            GET /intervention_records/:id
<p align="center">
  <img src="Screenshot from 2023-05-01 23-18-42.png" width="350" title="hover text">
</p>

    *  To post an intervention record

            POST /intervention_records

<p align="center">
  <img src="Screenshot from 2023-05-01 23-19-52.png" width="350" title="hover text">
</p>

    *  To update an intervention record
            
            PATCH /intervention_records/:id

<p align="center">
  <img src="Screenshot from 2023-05-01 23-20-12.png" width="350" title="hover text">
</p>

    *  To delete an intervention record

            DELETE /intervention_records/:id

<p align="center">
  <img src="Screenshot from 2023-05-01 23-17-59.png" width="350" title="hover text">
</p>

## Authors
This project was contributed to by:
- [Zaki Mathu](https://github.com/OyakiMasu/)









