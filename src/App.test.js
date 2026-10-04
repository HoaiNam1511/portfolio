import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("swiper/react", () => {
    const React = require("react");

    return {
        Swiper: ({ children }) => React.createElement("div", null, children),
        SwiperSlide: ({ children }) =>
            React.createElement("div", null, children),
    };
});

test("renders portfolio introduction", () => {
    render(<App />);

    expect(screen.getByText("HELLO")).toBeInTheDocument();
});
