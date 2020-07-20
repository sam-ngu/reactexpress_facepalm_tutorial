import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import isEmpty from "lodash/isEmpty";
import Typography from "@material-ui/core/Typography";
import axios from 'axios'

const useStyles = makeStyles({
    root: {
        maxWidth: "100%",
    },
    media: {
        height: 140,
    },
    error: {
        color: "#EF5350",
    },
});

function SignupForm() {
    const history = useHistory();

    const classes = useStyles();

    const [errors, setErrors] = useState([]);

    const [payload, setPayload] = useState({});

    const handleChange = async (event) => {
        const type = event.target.name;

        // payload looks like: {
        //     email: '',
        //     password: '',
        //     password_again: ''
        // }
        setPayload({
            ...payload,
            [type]: event.target.value  // dynamically set the type of payload
        })
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        // check if password submitted are the same 
        if(payload.password !== payload.password_again){
            return setErrors([
                'Passwords do not match!'
            ])
        }

        // call api to login
        const response = axios
            .post("http://localhost:3001/api/register", payload, {
                withCredentials: true
            })
            .then((res) => {
                history.push("/wall");
            })
            .catch((err) => {
                console.log(err.response);
                const errorMsg = err.response.data.errors.map(err => err.msg)
                // failed to register
                setErrors([...errorMsg]);
            });
    };

    return (
        <Box>
            <Container maxWidth="xs">
                <Card style={{ marginTop: 50 }} className={classes.root}>
                    <Grid container justify="center">
                        <h1>Register</h1>
                    </Grid>
                    <CardContent>
                        <form onSubmit={onSubmit}>
                            <Grid
                                container
                                spacing={1}
                                justify="center"
                                alignItems="center"
                            >
                                <Grid item>
                                    <AccountCircle />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        onChange={handleChange}
                                        id="input-with-icon-grid"
                                        type="email"
                                        name="email"
                                        label="Email"
                                    />
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                spacing={1}
                                justify="center"
                                alignItems="center"
                            >
                                <Grid item>
                                    <LockIcon />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        onChange={handleChange}
                                        id="input-with-icon-grid"
                                        name="password"
                                        type="password"
                                        label="Password"
                                    />
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                spacing={1}
                                justify="center"
                                alignItems="center"
                            >
                                <Grid item>
                                    <LockIcon />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        onChange={handleChange}
                                        id="input-with-icon-grid"
                                        name="password_again"
                                        type="password"
                                        label="Password Again"
                                    />
                                </Grid>
                            </Grid>
                        </form>
                        <article>
                            {errors.map((error) => (
                                <Typography
                                    className={classes.error}
                                    key={error}
                                    variant="overline"
                                    display="block"
                                    gutterBottom
                                >
                                    {error}
                                </Typography>
                            ))}
                        </article>
                    </CardContent>
                    <CardActions>
                        <Grid
                            container
                            justify="flex-end"
                            alignItems="flex-end"
                        >
                            <Button
                                onClick={onSubmit}
                                size="small"
                                color="primary"
                            >
                                Submit
                            </Button>
                        </Grid>
                    </CardActions>
                </Card>
            </Container>
        </Box>
    );


}

export default SignupForm;
