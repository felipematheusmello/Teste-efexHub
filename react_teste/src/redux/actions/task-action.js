import api from '../../api';
import { TASK_CREATE, TASK_ERROR, TASK_LIST, TASK_REMOVE, TASK_UPDATE } from './action-type';
import { refreshAndCheckAuthToken } from './auth-action';

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

        if (error.response.status === 401) {
          dispatch(refreshAndCheckAuthToken())
        }

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
        if (error.response.status === 401) {
          dispatch(refreshAndCheckAuthToken())
        }
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
        await api.delete(`task`, {params: { id:taskId }}) ;

        dispatch({
          type: TASK_REMOVE,
          payload: taskId,
        });
      } catch (error) {
        if (error.response.status === 401) {
          dispatch(refreshAndCheckAuthToken())
        }
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
        const response = await api.put(`task`, { ...updatedTaskData, id: taskId });
        const updatedTask = response.data;

        dispatch({
          type: TASK_UPDATE,
          payload: updatedTask,
        });
      } catch (error) {
        if (error.response.status === 401) {
          dispatch(refreshAndCheckAuthToken())
        }
        dispatch({
            type: TASK_ERROR,
            payload: error,
        })
      }
    };
  };
