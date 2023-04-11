import CoursePart from "../types";


const Part = ({course}: {course: CoursePart}) => {
  switch (course.kind) {
    case 'basic':
      return(
        <>
          <h2>{course.name} {course.exerciseCount}</h2>
          <p>{course.description}</p>
        </>
      )
      break;
  
    case "group":
      return (
        <>
          <h2>{course.name} {course.exerciseCount}</h2>
          <p>project exercises {course.groupProjectCount}</p>
        </>
      )
      break
    case "background":
      return (
        <>
          <h2>{course.name} {course.exerciseCount}</h2>
          <p>{course.description}</p>
          <a href={course.backgroundMaterial}>Link</a>
        </>
      )
    case "special":
      return (
        <>
          <h2>{course.name} {course.exerciseCount}</h2>
          <p>{course.description}</p>
          <p>prerequisites: {course.requirements.toString()}</p>
        </>
      )
    default:
      return (<></>)
      break;
  }
};

export default Part;