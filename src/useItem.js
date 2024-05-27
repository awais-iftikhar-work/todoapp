import { useParams } from "react-router-dom"
import { itemsList } from "./components/todolist"

export const useItem = () => {
    const {id} = useParams()
    const data = itemsList.find((res)=>res.id == id)
    return {
        data
    }
}