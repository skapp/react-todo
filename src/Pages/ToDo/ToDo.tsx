import { createStyles, Divider, FormControlLabel, FormGroup, Grid, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, makeStyles, Switch, Theme, Typography } from "@material-ui/core";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import DeleteIcon from '@material-ui/icons/Delete';
import Alert from '@material-ui/lab/Alert';
import { useEffect, useState } from "react";
import ToDoForm from "../../Components/ToDo/ToDoForm";
import ToDoItem from "../../Models/ToDoItem";
import MainLayout from "../Shared/MainLayout";
import ApiResponse from './../../Models/ApiResponse';
import PagedResponse from './../../Models/PagedResponse';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        demo: {
            backgroundColor: theme.palette.background.paper,
        },
        title: {
            margin: theme.spacing(2, 0, 2),
        },
        form: {

        },
        secondaryText: {
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
        }
    }),
);

const ToDo = () => {
    const [todoItems, setToDoItems] = useState<ToDoItem[]>([] as ToDoItem[]);
    const [dense, setDense] = useState(false);
    useEffect(() => {
        fetch("http://localhost:5000/api/todo")
            .then((resp: Response) => {
                resp.json().then((result: PagedResponse<ToDoItem[]>) => {
                    setToDoItems(result.data);
                })
            });
    }, []);

    const deleteTodo = (id: number) => {
        fetch(`http://localhost:5000/api/todo/${id}`,
            {
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                }
            })
            .then((resp: Response) => {
                resp.json().then((result: ApiResponse<ToDoItem>) => {
                    if (result.succeeded) {
                        setToDoItems(todoItems.filter(_ => _.id !== id))
                    }
                })
            });
    };
    const classes = useStyles();
    return (
        <MainLayout>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h6" className={classes.title}>
                        Todo list items
                    </Typography>
                    <ToDoForm todos={todoItems} setToDoItems={setToDoItems} />
                    {todoItems.length ?
                        <>
                            <FormGroup row>
                                <FormControlLabel control={<Switch
                                    edge="end"
                                    onChange={() => { setDense((prevDense) => !prevDense) }}
                                    checked={dense}
                                    inputProps={{ 'aria-labelledby': dense ? "un-squeeze" : "squeeze" }}
                                />} label={dense ? "un-squeeze" : "squeeze"} />
                            </FormGroup>
                            <List dense={dense}>
                                {todoItems.map((todo) =>

                                    <>
                                        <Divider />
                                        <ListItem key={todo.id}>
                                            <ListItemText
                                                primary={<Typography variant="h5">{todo.task}</Typography>}
                                                secondary={<p className={classes.secondaryText}>
                                                    <AccessTimeIcon fontSize="small" />&nbsp; <Typography>{todo.createdDate}</Typography>
                                                </p>}
                                            />
                                            <ListItemSecondaryAction>
                                                <IconButton edge="end" aria-label="delete" onClick={() => { deleteTodo(todo.id) }}>
                                                    <DeleteIcon />
                                                </IconButton>
                                            </ListItemSecondaryAction>
                                        </ListItem></>
                                )}
                            </List>
                        </>
                        : <Alert severity="error" variant="outlined">
                            There are no items in your To do list.
                        </Alert>}
                </Grid>
            </Grid>
        </MainLayout >
    );
}

export default ToDo;