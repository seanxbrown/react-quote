import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AuthorCard from "../../AuthorCard";

test("Information from author object displayed successfully", () => {
    const authors = [ { 
        name: "test 1",
        description: "Desc 1",
        bio: "bio 1",
        link: "#"
    }

]
    const { getByTestId } = render(<AuthorCard authors={authors}/>);
    const authorName = getByTestId("author-name");
    const description = getByTestId("author-desc");
    const bio = getByTestId("author-bio");
    const link = getByTestId("author-link");

    expect(authorName.textContent).toBe("test 1")
    expect(description.textContent).toBe("Desc 1")
    expect(bio.textContent).toBe("bio 1")
    expect(link.textContent).toBe("Learn More")

})