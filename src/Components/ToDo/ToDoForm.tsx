import { Button, createStyles, Grid, makeStyles, MenuItem, TextField, Theme } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { Dispatch, SetStateAction, useState } from 'react';
import ApiResponse from '../../Models/ApiResponse';
import ToDoItem, { ToDoPriorities } from '../../Models/ToDoItem';

export interface ToDoFormProp {
    todos: ToDoItem[],
    setToDoItems: Dispatch<SetStateAction<ToDoItem[]>>
};
interface TodoPriorityListItem { title: string; value: number }
const convertToListItem = (): TodoPriorityListItem[] => {
    let priorities = [] as TodoPriorityListItem[];
    for (const priority in ToDoPriorities) {
        if (isNaN(Number(priority))) {
            priorities.push(
                {
                    title: priority,
                    value: Number(ToDoPriorities[priority])
                }
            );
        }
    }
    return priorities;
}
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            marginBottom: theme.spacing(1)
        }
    })
);
const ToDoForm = (props: ToDoFormProp) => {
    const priorityListItem = convertToListItem();
    const [newTodoItem, setNewToDoItem] = useState<ToDoItem>({} as ToDoItem);
    const classes = useStyles();
    const addTodo = () => {
        fetch(`http://localhost:5000/api/todo`,
            {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newTodoItem)
            })
            .then((resp: Response) => {
                resp.json().then((result: ApiResponse<ToDoItem>) => {
                    if (result.succeeded) {
                        props.setToDoItems(props.todos.concat(result.data as ToDoItem));
                    }
                })
            });
    }
    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={(e) => {
            e.preventDefault();
            addTodo();
        }}>
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <TextField fullWidth variant="outlined" size="small" required id="todo-task" label="Task"
                        helperText="e.g. Buy groceries, book appointment, etc"
                        onChange={(e => {
                            setNewToDoItem({ ...newTodoItem, task: e.target.value });
                        })}
                    />
                </Grid>
                <Grid item xs>
                    <TextField fullWidth id="standard-select-currency" variant="outlined" size="small" select
                        label="Priority"
                        value={newTodoItem.priority}
                        onChange={(e) => {
                            setNewToDoItem({ ...newTodoItem, priority: Number(e.target.value) as ToDoPriorities });
                        }}
                    >
                        {priorityListItem.map((priority) => (
                            <MenuItem key={priority.value} value={priority.value}>
                                {priority.title}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs>
                    <Button fullWidth type="submit" variant="outlined" color="primary" startIcon={<SaveIcon />}>
                        Add
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}
export default ToDoForm;