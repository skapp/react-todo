import { createStyles, Grid, makeStyles, Paper, Theme } from "@material-ui/core";
import { useEffect, useState } from "react";
import ToDoItem from "../../Models/ToDoItem";
import MainLayout from "../Shared/MainLayout";
import PagedResponse from './../../Models/PagedResponse';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),
);
const ToDo = () => {
    const [todoItems, setToDoItems] = useState<ToDoItem[]>([] as ToDoItem[])
    useEffect(() => {
        fetch("http://localhost:5000/api/todo")
            .then((resp: Response) => {
                resp.json().then((result: PagedResponse<ToDoItem[]>) => {
                    setToDoItems(result.data);
                })
            });
    }, []);
    const classes = useStyles();
    return (
        <MainLayout title="ToDo">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>xs=12</Paper>
                </Grid>
            </Grid>
        </MainLayout>
    );
}

export default ToDo;