
import { useItem } from "../useItem"
import { Header } from "./Header"

export const Item = () => {
    const {data} = useItem()
    return (
        <>
            <Header/>
            <h3>Title:{data.title}</h3>
            <p>Status:{data.status}</p>
        </>
    )
}