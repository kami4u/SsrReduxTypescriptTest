import React, { FunctionComponent } from "react";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";
import ICourse from "../../@types/ICourse";
import IAuthor from "../../@types/IAuthor";

interface IProps {
  course: ICourse;
  authors: IAuthor[];
  onSave: (any) => void;
  onChange: (any) => void;
  saving: boolean;
  errors: any;
}

const CourseForm: FunctionComponent<IProps> = ({
  course,
  authors,
  onSave,
  onChange,
  saving = false,
  errors = {},
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{course.id ? "Edit" : "Add"} Course</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="title"
        label="Title"
        value={course.title}
        onChange={onChange}
        error={errors.title}
      />

      <SelectInput
        name="authorId"
        label="Author"
        value={course.authorId || ""}
        defaultOption="Select Author"
        options={authors.map((author) => ({
          value: author.id,
          text: author.name,
        }))}
        onChange={onChange}
        error={errors.author}
      />

      <TextInput
        name="category"
        label="Category"
        value={course.category}
        onChange={onChange}
        error={errors.category}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

export default CourseForm;
