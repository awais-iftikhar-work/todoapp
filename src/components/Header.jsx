import { useItem } from "../useItem"

export const Header = () => {
    const {data} = useItem()
    return (
        <div>
            <h1>TodoApp {'>'} {data ? data.title :'List'}</h1>
        </div>
    )
}