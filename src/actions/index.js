import axios from 'axios'; 
export const setData = (data) => 
    ({type: 'SET_DATA', data})

export const getData = (url) => {
    return (dispatch) => {
        axios.get(url)
        .then((res) => { console.log(res.data) })
        .catch ((error) => {
            console.log(error)
            })
        }
}