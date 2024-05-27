import axios from "axios"

export const fetchAllNotes = async function () {
    try {
        const { data } = await axios.get(`/api/note/action`)
        return data
    } catch (error) {
        return {
            status: false,
            message: error.message,
            data: null
        }
    }
}