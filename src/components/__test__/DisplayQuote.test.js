import { render } from "@testing-library/react";
import DisplayQuote from "../DisplayQuote";
import "@testing-library/jest-dom/extend-expect";

test("Default props work correctly", () => {
    const {getByTestId} = render(<DisplayQuote/>);
    const quoteSection = getByTestId("displayQuote-quote")
    const authorSection = getByTestId("displayQuote-author");
    const tagSection = getByTestId("displayQuote-tag");

    expect(quoteSection.textContent).toBe("\"No quote found\"");
    expect(authorSection.textContent).toBe("No author found");
    expect(tagSection.textContent).toBe("No categories found");

})

test("Quote, author and tags correctly pulled from quote object", () => {

    const testObj = {
        author: "test-author",
        content: "test-quote",
        tags: ["test-tag"]
    }

    const {getByTestId} = render(<DisplayQuote author={testObj.author} quote={testObj.content} tags={testObj.tags}/>);
    const quoteSection = getByTestId("displayQuote-quote");
    const authorSection = getByTestId("displayQuote-author");
    const tagSection = getByTestId("displayQuote-tag");

    expect(quoteSection.textContent).toBe("\"test-quote\"");
    expect(authorSection.textContent).toBe("test-author");
    expect(tagSection.textContent).toBe("test-tag");

})