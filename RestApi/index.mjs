import express from "express"
import { config } from "dotenv";
import morgan from "morgan";
import userRequestDataValidation from "./middleware/userRequestDataValidation.mjs";


const app = express();
config();

const PORT = process.env.PORT || 3000


app.use(morgan("tiny")) //log each request information
app.use(express.json()) //pars body data into json


// create A memory to store user list
let userData = []

// Counter to assign incremental IDs
let userIdCounter = 1;

// return all user list
app.get('/users', (req, res) => {
    try {
        return res.status(200).json(userData); //send all user with 200 status code

    } catch (error) {

        //send error message
        return res.status(500).json({
            message: "Internal server error"
        })
    }
})



//return selected user from entire user's list
app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    try {

        //filter selected user
        const selectedUser = userData.filter((user) => user.id == id)

        //if user does'nt exist
        if (!selectedUser[0]) {
            return res.status(404).json({ message: "User not found" }) //send message user not found with status code 404
        }
        return res.status(200).json(selectedUser[0]) //send selected user 
    } catch (error) {

        //send error message
        return res.status(500).json({
            message: "Internal server error"
        })
    }
})


//create a new user
app.post('/user', userRequestDataValidation, (req, res) => {
    const { firstName, lastName, hobby } = req.body;
    try {

        //store new user inside object
        const newUser = {
            "id": userIdCounter++, // Assign unique incremental ID 
            "firstName": firstName,
            "lastName": lastName,
            "hobby": hobby
        }

        userData.push(newUser); //push new user in array
        return res.status(201).json(userData)  //send new data with status code
    } catch (error) {

        //send error message
        return res.status(500).json({
            message: "Internal server error"
        })
    }
})


//update user
app.put('/user/:id', userRequestDataValidation, (req, res) => {
    const { id } = req.params; //get id from request parameter
    const { firstName, lastName, hobby } = req.body; //get all updated data
    try {
        //if user is not exist send Not found message with 404 status code
        const user = userData.find(user => user.id == id);
        console.log("Requested ID:", id);
console.log("All users:", userData);
        console.log(user + "from the server")
        if (!user) {
            return res.status(404).json({
                message: "Not Found"
            })
        }

        //update user  in list and store new list in updateUser constant
        const updateUser = userData.map((user) => {
            if (user.id == id) {
                user.firstName = firstName;
                user.lastName = lastName;
                user.hobby = hobby;
            }
            return user;
        })
        userData = [...updateUser];//store updated list
        res.status(200).json(userData)
    } catch (error) {
        //send error message
        return res.status(500).json({
            message: "Internal server error"
        })
    }

})


//delete user
app.delete('/user/:id', (req, res) => {
    const { id } = req.params; //get id which user will remove
    try {
        //if user is not exist send Not found message with 404 status code
        const user = userData.find(user => user.id == id);
        if (!user) {
            return res.status(404).json({
                message: "Not Found"
            })
        }

        //delete user with id  and store updated list in deleteUser constant
        const deleteUser = userData.filter((user) => user.id != id)
        userData = deleteUser; //update final list
        return res.status(200).json(userData)  //send updated list
    } catch (error) {

        //send error message 
        return res.status(500).json({
            message: "Internal server error"
        })
    }
})


app.listen(PORT, () => {
    console.log(`Server listen at ${PORT}`)
})


