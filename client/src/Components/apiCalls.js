import axios from "axios"


const API = "http://localhost:3001"

export const addPeople = async (token, values) => {

    const res = await axios.post(`${API}/api/people/add`, values,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }
    )

    return res
}

export const getPeople =  () => {

    const res =  axios.get(`${API}/api/people/`)

    return res
}


export const deletePeopleApi = async (token, id ) => {

    const res = await axios.delete(`${API}/api/people/${id}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }
    )

    return res;
}

