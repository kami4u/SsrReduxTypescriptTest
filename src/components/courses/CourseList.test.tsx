import React from "react";
import { shallow } from "enzyme";

import CourseList from "./CourseList";
import { courses, authors } from "../../../tools/mockData";

describe("Course List", () => {
  const wrapper = shallow(<CourseList courses={courses} onDeleteClick={jest.fn()} />);

  it("Shows the rows of ginen course lengthw", () => {
    const listLength = wrapper.find("tbody").children().find("tr").length;
    expect(listLength).toEqual(courses.length);
  });

  it("First column of the row has Watch text", () => {
    const element = wrapper.find("tbody").children().first().children().first();
    expect(element.text()).toEqual("Watch");
  });
});
