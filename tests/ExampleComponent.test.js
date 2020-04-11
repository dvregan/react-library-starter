import React from "react";
import renderer from "react-test-renderer";
import { ExampleComponent } from "../src";

describe("ExampleComponent", () => {
  it("renders the same snapshot", () => {
    const component = renderer.create(<ExampleComponent />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
