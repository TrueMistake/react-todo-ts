import React, {FC} from 'react';
import {TodoObject} from "../types/todo";

interface UserListProps {
    todo: TodoObject[]
}

const TodoList:FC<UserListProps> = ({todo}) => {
    return (
        <div className="list">
            {todo.length
                ? todo.map((item, index) =>
                    <div className="item" key={index}>
                        <div className="item-title">{item.title}</div>
                        <div className="item-body">{item.body}</div>
                    </div>
                    )
                : <div>Нет задач</div>
            }
        </div>
    );
};

export default TodoList;
