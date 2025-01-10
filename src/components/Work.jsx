import { useTranslation } from "react-i18next";
import { ProjectCard } from "./ProjectCard";

const Work = () => {
  const { t } = useTranslation(["work"]);
  const works = t("works");
  return (
    <>
      <section
        className="section"
        id="work"
      >
        <div className="container">
          <h2
            className="headline-2 mb-8 reveal-up
          
          "
          >
            {t("portfolio")}{" "}
          </h2>
          <div className="grid gap-x-4  gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
            {works.map(({ imgSrc, title, tags, projectLink }, key) => (
              <ProjectCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                classes={"reveal-up"}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
Work;
