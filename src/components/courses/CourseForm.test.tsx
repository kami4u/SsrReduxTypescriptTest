import React from "react";
import { shallow } from "enzyme";

import { create } from "react-test-renderer";
import { courses, authors } from "../../../tools/mockData";
import CourseForm from "./CourseForm";

// Snapshot testing.....
it("sets submit button label 'Saving...' when saving in true", () => {
  const tree = create(
    <CourseForm
      course={courses[0]}
      authors={authors}
      onSave={jest.fn()}
      onChange={jest.fn()}
      saving
      errors
    />
  );

  expect(tree).toMatchSnapshot();
});

it("sets submit button label 'Save' when saving in false", () => {
  const tree = create(
    <CourseForm
      errors
      course={courses[0]}
      authors={authors}
      onSave={jest.fn()}
      onChange={jest.fn()}
      saving={false}
    />
  );

  expect(tree).toMatchSnapshot();
});
it("Shows error when error is passed", () => {
  const tree = create(
    <CourseForm
      errors={{ title: "This is required field" }}
      course={courses[0]}
      authors={authors}
      onSave={jest.fn()}
      onChange={jest.fn()}
      saving
    />
  );

  expect(tree).toMatchSnapshot();
});

const renderCourseForm = (args) => {
  const defaultProps = {
    authors: [],
    course: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {},
  };

  const props = { ...defaultProps, ...args };
  return shallow(<CourseForm {...props} />);
};

// Enzyme testing...
it("renders from and header", () => {
  const wrapper = renderCourseForm({});
  //   console.log(wrapper.debug());
  expect(wrapper.find("form").length).toBe(1);
  expect(wrapper.find("h2").text()).toEqual("Add Course");
});

it("labels save buttons as 'Save' when not saving", () => {
  const wrapper = renderCourseForm({});
  expect(wrapper.find("button").text()).toBe("Save");
});

it("labels save buttons as 'Saving...' when saving", () => {
  const wrapper = renderCourseForm({ saving: true });
  expect(wrapper.find("button").text()).toBe("Saving...");
});

it("Shows the error when error for title is passed", () => {
  const wrapper = renderCourseForm({ errors: { title: "This is required Field." } });
  const titleTextInput = wrapper.findWhere((item) => item.prop("name") === "title");
  expect(titleTextInput.prop("error")).toEqual("This is required Field.");
});
