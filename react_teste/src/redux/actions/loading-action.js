import { LOADED, LOADING } from "./action-type"

const loading = () => {
    return {
        type: LOADING
    }
}


const loaded = () => {
    return {
        type: LOADED
    }
}


export default {
    loading,
    loaded
}