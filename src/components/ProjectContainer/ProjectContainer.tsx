// import uniqid from "uniqid";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import uniqid from "uniqid";
import "./ProjectContainer.css";

type ProjectContainerProps = {
  project: {
    name: string;
    img: string;
    description: string;
    stack: string[];
    sourceCode: string;
    livePreview: string;
  };
};

const ProjectContainer: React.FC<ProjectContainerProps> = ({ project }) => (
  <div className="project">
    <h3>{project.name}</h3>

    <img src={project?.img} alt={project.name} />

    <p className="project__description">{project.description}</p>
    {project.stack && (
      <ul className="project__stack">
        {project.stack.map((item) => (
          <li key={uniqid()} className="project__stack-item">
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label="source code"
        className="link link--icon"
        target="_blank"
      >
        <GitHubIcon />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label="live preview"
        className="link link--icon"
        target="_blank"
      >
        <LaunchIcon />
      </a>
    )}
  </div>
);

export default ProjectContainer;
