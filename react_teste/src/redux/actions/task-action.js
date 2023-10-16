import api from '../../api';
import { TASK_CREATE, TASK_ERROR, TASK_LIST, TASK_REMOVE, TASK_UPDATE } from './action-type';

export const createTask = (taskData) => {
  return async (dispatch) => {
    try {
      const response = await api.post('task', taskData);
      const newTask = response.data;

      dispatch({
        type: TASK_CREATE,
        payload: newTask,
      });
    } catch (error) {
        dispatch({
            type: TASK_ERROR,
            payload: error,
        })
    }
  };
};


export const listTasks = () => {
  return async (dispatch) => {
    try {
      const response = await api.get('task');
      const tasks = response.data;

      dispatch({
        type: TASK_LIST,
        payload: tasks,
      });
    } catch (error) {
        console.log(error);
        dispatch({
            type: TASK_ERROR,
            payload: error,
        })
    }
  };
};


export const deleteTask = (taskId) => {
    return async (dispatch) => {
      try {
        await api.delete(`task/${taskId}`);

        dispatch({
          type: TASK_REMOVE,
          payload: taskId,
        });
      } catch (error) {
        dispatch({
            type: TASK_ERROR,
            payload: error,
        })
      }
    };
  };


  export const updateTask = (taskId, updatedTaskData) => {
    return async (dispatch) => {
      try {
        const response = await api.put(`task/${taskId}`, updatedTaskData);
        const updatedTask = response.data;

        dispatch({
          type: TASK_UPDATE,
          payload: updatedTask,
        });
      } catch (error) {
        dispatch({
            type: TASK_ERROR,
            payload: error,
        })
      }
    };
  };
