#                                                ASSIGNMENT 4

## So here the project is based on a login page, first of all you have to create a database on postgre and use the Schemma and seeds sql file to create the table. Do not forget to change the database name and user in the folder database. Here is how the pages are constructed when you run npm start :

### When you go to http://localhost:3000, you are redirected to a login page, once you enter you can login if you already have an account or you can create an account. 
### If you go click on Sign Up Now, you will be redirected to a create account page, you can now enter your new profile. If your mail already exists in the database it will show you a json response saying that you can't create an account with this mail. Once you created your account you can log in.

### Once you log in you are redirected to a home page, here you can click on the account image on the top right corner. You can now update or delete your account. In order to update your profile, you will have to fill all the textfield. 

### If you want the response of the pages in response of json rather than a redirection of page, you can go to the client.js file, uncomment the "res.send(user.data)" and put the res.sendFile in comment.

### Now you are all set ! 