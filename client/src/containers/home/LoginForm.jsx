import React from "react";
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

const useStyles = makeStyles({
    root: {
        maxWidth: "100%",
    },
    media: {
        height: 140,
    },
});

function LoginForm() {
    const history = useHistory();

    const classes = useStyles();

    const onSubmit = async (data) => {
        // call api to login
        const response = await fetch("http://localhost:3001/api/login", {
            mode: "cors",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password,
            }),
        })
            .then((res) => {
                history.push("/wall");
            })
            .catch(() => {
                // not authenticated
            });

        console.log({ response });

        // localhost/login
        // localhost/api/v1/login
        // localhost/api/users
        // localhost/api/posts
    };

    return (
        <Box>
            <Container maxWidth="xs">
                <Card style={{marginTop: 50}} className={classes.root}>
                    <Grid container justify="center">
                        <h1>Welcome</h1>
                    </Grid>
                    {/* <CardMedia
                        className={classes.media}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                    >
                    </CardMedia> */}
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
                                        id="input-with-icon-grid"
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
                                        id="input-with-icon-grid"
                                        name="password"
                                        type="password"
                                        label="Password"
                                    />
                                </Grid>
                            </Grid>
                        </form>
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
                                Login
                            </Button>

                            <Button
                                onClick={() => history.push("/register")}
                                size="small"
                                color="primary"
                            >
                                Register
                            </Button>
                        </Grid>
                    </CardActions>
                </Card>
            </Container>
        </Box>
    );
}

export default LoginForm;
