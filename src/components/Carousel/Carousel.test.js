import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Carousel from "./Carousel";

const mockCarouselData = [
  { image: "https://example.com/comic1.jpg", name: "Comic 1" },
  { image: "https://example.com/comic2.jpg", name: "Comic 2" },
];

describe("Carousel Component", () => {
  test("renders the carousel items correctly", () => {
    render(<Carousel carouselData={mockCarouselData} />);

    expect(screen.getByAltText("Comic 1")).toBeInTheDocument();
    expect(screen.getByText("Comic 1")).toBeInTheDocument();
    expect(screen.getByAltText("Comic 2")).toBeInTheDocument();
    expect(screen.getByText("Comic 2")).toBeInTheDocument();
  });

  test("renders nothing if no data is provided", () => {
    render(<Carousel carouselData={[]} />);

    expect(screen.queryByAltText("Comic 1")).not.toBeInTheDocument();
    expect(screen.queryByText("Comic 1")).not.toBeInTheDocument();
    expect(screen.queryByAltText("Comic 2")).not.toBeInTheDocument();
    expect(screen.queryByText("Comic 2")).not.toBeInTheDocument();
  });
});
