const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
const cors = require("cors");

const passport = require("./config/passport");

const MongoStore = require("connect-mongo")(session);
const routes = require("./routes");
dotenv.config({ path: ".env" });

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
 
app.use(cors());
const connectDb = require('./config/database');
const PORT = process.env.PORT || 3001;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

connectDb()

app.use(passport.initialize());
app.use(passport.session());
app.use(
    session({
        resave: true,
        saveUninitialized: true,
        secret: process.env.SESSION_SECRET,
        cookie: { maxAge: 1209600000 }, // two weeks in milliseconds
        store: new MongoStore({
            url: process.env.MONGODB_URI,
            autoReconnect: true,
        }),
    })
);





// Add routes, both API and view

// app.use("/api", passportConfig.authenticate('local'));


app.use('/api',  routes);



// Start the API server
app.listen(PORT, () =>
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
