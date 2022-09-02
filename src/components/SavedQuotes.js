import CloseButton from "react-bootstrap/CloseButton"
export const SavedQuotes = ({listOfSavedQuotes, removeQuote}) => {
    console.log(listOfSavedQuotes)

    return (
        <div>
            {listOfSavedQuotes.map(quote => {
                return <div key={quote._id} id={quote._id}>
                    <p>{quote.content}</p>
                    <p>{quote.author}</p>
                    {quote.tags.map(tag => {
                        return <p>{tag}</p>
                    })}
                    <CloseButton onClick={removeQuote}></CloseButton>

                </div>
            })}
        </div>
    )

    

}

SavedQuotes.defaultProps = {
    listOfSavedQuotes: [{author: "No saved author", content:"No content", tags:["No tags"]}]
}
