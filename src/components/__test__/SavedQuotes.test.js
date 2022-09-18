import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SavedQuotes from "../SavedQuotes";

test("No error generated when rendered with no saved quotes", () => {
    const {getByTestId} = render(<SavedQuotes/>)
    const savedQuote = getByTestId("saved-quote");
    const savedAuthor = getByTestId("saved-quote-author")
    const savedTag = getByTestId("saved-quote-tag")

    expect(savedQuote.textContent).toBe("No content")
    expect(savedAuthor.textContent).toBe("No saved author")
    expect(savedTag.textContent).toBe("No tags")

})

test("Saved quotes rendered correctly", () => {
    const {getByTestId} = render(<SavedQuotes listOfSavedQuotes={[{author: "test-author", content:"test-content", tags:["test-tag"]}]}/>)
    const savedQuote = getByTestId("saved-quote");
    const savedAuthor = getByTestId("saved-quote-author")
    const savedTag = getByTestId("saved-quote-tag")

    expect(savedQuote.textContent).toBe("test-content")
    expect(savedAuthor.textContent).toBe("test-author")
    expect(savedTag.textContent).toBe("test-tag")

})