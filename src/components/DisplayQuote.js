export const DisplayQuote = ({author, quote, tags, id}) => {
    console.log("from DQ:", tags)
    return (
        <div>
            <h2>{author}</h2>
            <p>{quote}</p>
            <p>{id}</p>
            {tags.map(tag => {
                return <p key={Date.now() * Math.random()}> {tag} </p>
            })}

        </div>
    )
}

DisplayQuote.defaultProps = {
    author: "Author",
    quote: "Quote",
    id: 1234,
    tags: ["Category"]
    
}