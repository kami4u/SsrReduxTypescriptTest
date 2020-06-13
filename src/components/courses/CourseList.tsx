import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import ICourses from "../../@types/ICourses";

const CourseList: FunctionComponent<ICourses> = ({ courses, onDeleteClick }) => {
  // debugger;
  return (
    <table className="table">
      <thead>
        <tr>
          <th />
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course) => {
          return (
            <tr key={course.id}>
              <td>
                <a className="btn btn-light" href={"http://pluralsight.com/courses/" + course.slug}>
                  Watch
                </a>
              </td>
              <td>
                <Link to={"/course/" + course.slug}>{course.title}</Link>
              </td>
              <td>{course.authorName}</td>
              <td>{course.category}</td>
              <td>
                <button className="btn btn-outline-danger" onClick={() => onDeleteClick(course)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CourseList;
