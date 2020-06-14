import React from "react";
import { shallow, mount } from "enzyme";
import AboutPage from "./AboutPage";

describe("About Page", () => {
  it("Shows About Page and p tags as well", () => {
    const wrapper = shallow(<AboutPage />);
    // console.log(wrapper.debug());
    const h2 = wrapper.find("h2").text();
    const p = wrapper.find("p").text();

    expect(h2).toBe("About Page");
    expect(p).toBe("This app uses React");
  });

  it("Test component with mount....", () => {
    const wrapper = mount(<AboutPage />);
    // console.log(wrapper.debug());
    expect(wrapper.find("h2").exists());
  });
});
