import Footer from "../Footer";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("Footer rendered with correct text", () => {

    const { getByTestId } = render(<Footer></Footer>);
    const footerText = getByTestId("footerText");
    
    expect(footerText.textContent).toBe("Inspiration Bank 2022")
})