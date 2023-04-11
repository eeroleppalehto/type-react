import CoursePart from "../types";
import Part from "./Part";

interface ContentProps {
  contentList: CoursePart[];
}


const Content = (props: ContentProps) => {
  const contents = props.contentList.map(coursePart => <li key={coursePart.name}><Part course={coursePart}/></li>)

  return(
    <>
      <ul>
        {contents}
      </ul>
    </>
  )
};

export default Content;