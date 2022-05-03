import axios from 'axios'; 
export const setData = (data) => 
    ({type: 'SET_DATA', data})

export const getData = (url) => {
    return (dispatch) => {
        axios.get(url)
        .then((res) => { dispatch(setData(res.data))})
        .catch ((error) => {
            console.log(error)
            })
        }
}