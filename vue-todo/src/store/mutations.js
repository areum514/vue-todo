const addTodoItem= (state, todoItem)=> {
    const obj = { completed: false, item: todoItem }
    localStorage.setItem(todoItem, JSON.stringify(obj));
    console.log(obj);
    state.todoItems.push(obj)
}
const clearAllItems=(state) => {
    localStorage.clear()
    state.todoItems = [];
}
const removeOneItem=(state, payload) => {
    localStorage.removeItem(payload.todoItem.item)
    state.todoItems.splice(payload.index, 1)
}
const togleOneItem=(state, payload) => {


    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}

export { addTodoItem, clearAllItems, removeOneItem, togleOneItem}