import React, {FC, ChangeEvent, useState} from 'react';
import MyInput from "./UI/MyInput";
import {createTodo} from "../types/todo";

const CreateTodo:FC<createTodo> = ({addTodo}) => {
    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');

    const onChangeInput = (event:ChangeEvent<HTMLInputElement>):void => {
      if (event.target.name === 'title') {
          setTitle(event.target.value)
      } else {
          setBody(event.target.value)
      }
    }


    const createTodo = (): void => {
        const newTodo = {
            title, body
        }
        if (title != '' && body != '') {
            addTodo(newTodo)
            setTitle('');
            setBody('');
        }

    }

    return (
        <div className="create">
            <input
                placeholder="Название задачи"
                value={title}
                name="title"
                onChange={onChangeInput}
            />
            <input
                placeholder="Описание"
                value={body}
                name="body"
                onChange={onChangeInput}
            />
            <button onClick={createTodo} className="btn" type="button">Создать</button>
        </div>
    );
};

export default CreateTodo;
