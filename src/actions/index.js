import axios from 'axios'; 
export const setData_Image = (data) => 
    ({type: 'SET_DATA_IMG', data})

export const getData_Image = (url) => {
    return (dispatch) => {
        axios.get(url)
        .then((res) => { dispatch(setData_Image(res.data))})
        .catch ((error) => {
            console.log(error)
            })
        }
}

export const setData_New = (data) => 
    ({type: 'SET_DATA_NEW', data})

export const getData_New = (url) => {
    return (dispatch) => {
        axios.get(url)
        .then((res) => { dispatch(setData_New(res.data))})
        .catch ((error) => {
            console.log(error)
            })
        }
}