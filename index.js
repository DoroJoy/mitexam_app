import express from "express";
import bodyParser from 'body-parser';
import router from './routes/students.js';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use('/api/students', router);

//database connection
mongoose.connect("mongodb+srv://dnansubuga:JesusSaved2022@merns.u1rdpwr.mongodb.net/merns?retryWrites=true&w=majority",

{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }

).then(() => console.log('MongoDB connected!'))
.catch((err) => console.log(err))


app.listen(PORT, () => console.log("Server started"));
