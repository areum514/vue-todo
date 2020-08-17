
const storage = {
    fatch() {
        const arr = []
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
                }
            }
        }
        return arr;
    }
}


const state={
    todoItems: storage.fatch()
}


const getters={
    storedTodoItems (state){
        return state.todoItems;
    }
}
const mutations={
     addTodoItem (state, todoItem){
        const obj = { completed: false, item: todoItem }
        localStorage.setItem(todoItem, JSON.stringify(obj));
        console.log(obj);
        state.todoItems.push(obj)
    },
 clearAllItems (state){
        localStorage.clear()
        state.todoItems = [];
    },
 removeOneItem (state, payload){
        localStorage.removeItem(payload.todoItem.item)
        state.todoItems.splice(payload.index, 1)
    },
 togleOneItem (state, payload){


        state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed
        localStorage.removeItem(payload.todoItem.item);
        localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    }

}

export default{
    storage,
    state,
    getters,
    mutations
}