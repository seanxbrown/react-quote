import CloseButton from "react-bootstrap/CloseButton";
import Carousel from "react-bootstrap/Carousel";

export const SavedQuotes = ({listOfSavedQuotes, removeQuote}) => {
    console.log(listOfSavedQuotes)

    return (
        <Carousel className="mt-4">
            {listOfSavedQuotes.map(quote => {
                return <Carousel.Item key={quote._id} id={quote._id} className="text-center p-5">
                    <p>{quote.content}</p>
                    <p>{quote.author}</p>
                    {quote.tags.map(tag => {return <p>{tag}</p>})}
                    <CloseButton className="bg-danger float-center" onClick={removeQuote}></CloseButton>
                </Carousel.Item>
            })}
        </Carousel>
    )

    

}

SavedQuotes.defaultProps = {
    listOfSavedQuotes: [{author: "No saved author", content:"No content", tags:["No tags"]}]
}
