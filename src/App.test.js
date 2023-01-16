import { render, screen } from "@testing-library/react";
import App from "./App";
import renderer from "react-test-renderer";

describe("snapshot test", () => {
  test("snapshot for App component", () => {
    const renderedComponnt = renderer.create(<App />).toJSON()
    expect(renderedComponnt).toMatchSnapshot();
  })
})
