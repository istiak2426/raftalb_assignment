import axios from "axios"


const API = "http://localhost:3001"

export const addPeople = async (token, values, userId) => {

    const res = await axios.post(`${API}/api/people/add`,
        {

            userId: userId,
            people: values.people,
            relation: values.relation,
            relationshipPerson: values.relationshipPerson
        },

        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }
    )

    return res
}

export const getPeople = (token, userId) => {

    const res = axios.get(`${API}/api/people/${userId}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }
    )

    return res
}


export const deletePeopleApi = async (token, id) => {

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

