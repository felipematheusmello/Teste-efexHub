import { TASK_CREATE, TASK_ERROR, TASK_LIST, TASK_REMOVE, TASK_UPDATE } from "../actions/action-type"

const initialState = {tasks : [], error: null}


const tasksReducer = (state = initialState, action) => {
    switch(action.type) {
        case TASK_CREATE:
            state.tasks.push(action.payload)
            return {...state}

        case TASK_UPDATE:
            const updatedTask = action.payload
            const updatedTasks = state.tasks.map((task) => {
                if(updatedTask.id === task.id) {
                    return {...task, updatedTask}
                }
                return task
            })
            return updatedTasks;

        case TASK_REMOVE:
            const id = action.payload
            if (state.tasks.length) {
                return {
                   tasks: state.tasks.filter(task => task.id !== id)
                }
            }
            return state

        case TASK_LIST:
            return {
                ...state,
                tasks: action.payload,
            };

        case TASK_ERROR:
            return {
                ...state,
                error: action.payload,
            };

        default:
            return state;
    }
}


export default tasksReducer