export interface Todo {
    placeholder: string,
    value: string,
    name: string,
    onChange:() => void
}
export interface TodoObject {
    title: string,
    body: string
}

export interface createTodo {
    addTodo: (todo:TodoObject) => void
}