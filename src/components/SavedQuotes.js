import CloseButton from "react-bootstrap/CloseButton";
import Carousel from "react-bootstrap/Carousel";

export const SavedQuotes = ({listOfSavedQuotes, removeQuote}) => {
    return (
        <Carousel className="mt-5 mx-5">
            {listOfSavedQuotes.map(quote => {
                return <Carousel.Item key={quote._id} id={quote._id} className="text-center p-5">
                    <h2>{quote.content}</h2>
                    <p className="text-center fs-4">{quote.author}</p>
                    {quote.tags.map(tag => {
                        return <p key={Date.Now * Math.random() * 1000}>{tag}</p>
                        })}
                    <CloseButton className="bg-danger float-center" onClick={removeQuote}></CloseButton>
                </Carousel.Item>
            })}
        </Carousel>
    )

    

}

SavedQuotes.defaultProps = {
    listOfSavedQuotes: [{author: "No saved author", content:"No content", tags:["No tags"]}]
}
