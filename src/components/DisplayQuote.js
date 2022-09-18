import Button from "react-bootstrap/Button";

const DisplayQuote = ( { author, quote, tags, onSave } ) => {
    return (
        <section id="displayQuote" className="text-center mt-5 p-5 shadow mx-5">
            <h2 id="QuoteInDisplayQuote" className="fst-italic" data-testid="displayQuote-quote">"{quote}"</h2>
            <p id="authorInDisplayQuote" className="text-center fs-4" data-testid="displayQuote-author">{author}</p>
            {tags.map(tag => {
                return <p data-testid="displayQuote-tag" className="tagFromDisplayQuote text-muted text-end"key={Date.now * Math.random()}>{tag}</p>
            })}
            <Button type="button" onClick={onSave}>Save</Button>
        </section>
    )
}

DisplayQuote.defaultProps = {
    author: "No author found",
    quote: "No quote found",
    id: "No ID found",
    tags: ["No categories found"]
    
}

export default DisplayQuote