import ProjectCards from "./ProjectCards";
import projectData from "../../public/data/project_data.json";

const Cards = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3">
      {projectData.map((cardData) => (
        <ProjectCards key={cardData?.id} cardData={cardData}></ProjectCards>
      ))}
    </div>
  );
};

export default Cards;
