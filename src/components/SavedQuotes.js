export const SavedQuotes = ({listOfSavedQuotes}) => {
    console.log(listOfSavedQuotes)

    return (
        <div>
            {listOfSavedQuotes.map(quote => {
                return <div>
                    <p>{quote.content}</p>
                    <p>{quote.author}</p>
                    {quote.tags.map(tag => {
                        return <p>{tag}</p>
                    })}

                </div>
            })}
        </div>
    )

    

}

SavedQuotes.defaultProps = {
    listOfSavedQuotes: [{author: "No saved author", content:"No content", tags:["No tags"]}]
}
