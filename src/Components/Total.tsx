import CoursePart from "../types";

interface TotalProps {
  courseList: CoursePart[];
}

const Total = (props: TotalProps) => {
  const totalExercises: number = props.courseList.reduce((carry, part) => carry + part.exerciseCount, 0);

  return (
    <>
      <p>Number of exercises{" "}{totalExercises}</p>
    </>
  )
};

export default Total;