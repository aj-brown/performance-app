import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import App from "../App";
import { View } from "react-native";

/**
 * A good place to start is having a tests that your component renders correctly.
 */
test("renders correctly", () => {
  // Idiom: no need to capture render output, as we will use `screen` for queries.
  render(<App />);

  // Idiom: `getBy*` queries are predicates by themselves, but we will use it with `expect().toBeOnTheScreen()`
  // to clarify our intent.
  expect(
    screen.getByRole("header", { name: "Sign in to Example App" })
  ).toBeOnTheScreen();
});

test("React Native API assumption: <View> renders single host element", () => {
  const view = render(<View testID="test" />);

  expect(view.toJSON()).toMatchInlineSnapshot(`
    <View
      testID="test"
    />
  `);
});
