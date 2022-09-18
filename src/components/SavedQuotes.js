import CloseButton from "react-bootstrap/CloseButton";
import Carousel from "react-bootstrap/Carousel";

const SavedQuotes = ({listOfSavedQuotes, removeQuote}) => {
    return (
        <Carousel className="mt-5 mx-5">
            {listOfSavedQuotes.map(quote => {
                return <Carousel.Item key={quote._id} id={quote._id} className="text-center p-5">
                    <h2 data-testid="saved-quote">{quote.content}</h2>
                    <p data-testid="saved-quote-author" className="text-center fs-4">{quote.author}</p>
                    {quote.tags.map(tag => {
                        return <p data-testid="saved-quote-tag" key={Date.Now * Math.random() * 1000}>{tag}</p>
                        })}
                    <CloseButton className="bg-danger float-center" onClick={removeQuote}></CloseButton>
                </Carousel.Item>
            })}
        </Carousel>
    )   

}

export default SavedQuotes

SavedQuotes.defaultProps = {
    listOfSavedQuotes: [{author: "No saved author", content:"No content", tags:["No tags"]}]
}
