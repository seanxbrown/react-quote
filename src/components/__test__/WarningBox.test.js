import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { WarningBox } from "../WarningBox";

test("Default message appears if no warning present", () => {
    const { getByTestId } = render(<WarningBox/>);
    const warningBox = getByTestId("warningBox");

    expect(warningBox.textContent).toBe("No message")

})


test("Default message appears if no warning present", () => {
    const { getByTestId } = render(<WarningBox message={"Test message"}/>);
    const warningBox = getByTestId("warningBox");

    expect(warningBox.textContent).toBe("Test message")

})

