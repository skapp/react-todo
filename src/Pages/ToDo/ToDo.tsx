import { useState } from "react";
import ToDoItem from "../../Models/ToDoItem";
import MainLayout from "../Shared/MainLayout";

const ToDo = () => {
    const [todoItems, setToDoItems] = useState<ToDoItem[]>([] as ToDoItem[])
    return (
        <MainLayout title="ToDo">
            <>
            </>
        </MainLayout>
    );
}

export default ToDo;