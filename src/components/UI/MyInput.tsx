import React, {FC} from 'react';
import { Todo } from '../../types/todo';

const MyInput:FC = (props) => {
    return (
        <input {...props}/>
    );
};

export default MyInput;
