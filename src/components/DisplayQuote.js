import Button from "react-bootstrap/Button"

export const DisplayQuote = ({author, quote, tags, id, onSave}) => {
    return (
        <div>
            <h2>{author}</h2>
            <p>{quote}</p>
            <p>{id}</p>
            {tags.map(tag => {
                return <p key={Date.now() * Math.random()}> {tag} </p>
            })}
            <Button type="button" onClick={onSave}>Save</Button>

        </div>
    )
}

DisplayQuote.defaultProps = {
    author: "No author found",
    quote: "No quote found",
    id: "No ID found",
    tags: ["No categories found"]
    
}