import {v4 as uuidv4} from 'uuid';
import {UserSchema  } from '../models/studentmodel.js';

let students = [];


//function to view registered students
export const registeredstudents = async (req, res) => {
   const stud = await UserSchema.find();
    res.send(stud);
 };

//function to register student
export const registerStudent =  (req, res) => {
    const {fullname, emailaddress, contact, emergencycontact, shirtsize, address, comment} = req.body;
    UserSchema.create({fullname, emailaddress, contact, emergencycontact, shirtsize, address, comment})
    .then((data) => {
        console.log("Registered successfully!");
        res.status(201).send(data)
    }).catch((err) => {
        console.log(err);
        res.send({error: err, msg: "Something went wrong"})
    });
    
};


//function to review student details
export const studentDetail = (req, res) => {
    const {id} = req.params;
    const {fullname, emailaddress, contact, emergencycontact, shirtsize, address, comment} = req.body;
   const foundStudent = UserSchema.find(id, {fullname, emailaddress, contact, emergencycontact, shirtsize, address, comment});

res.send(foundStudent);
}


//function to edit a student
export const editStudent = (req, res) => {
    const {id} = req.params;
    const {fullname, emailaddress, contact, emergencycontact, shirtsize, address, comment} = req.body;

    UserSchema.findByIdAndUpdate(id, {fullname, emailaddress, contact, emergencycontact, shirtsize, address, comment})


    .then(() => {
        res.send("Updated successfully!");
    }).catch((err) => {
        console.log(err);
        res.send({error: err, msg: "Something went wrong"})
    });

   };

