import PropTypes from "prop-types";
import { useState } from "react";

export const ProjectCard = ({ imgSrc, title, tags, projectLink, classes }) => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <div
        className={
          " relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors " +
          classes
        }
      >
        <figure className="img-box  rounded-lg mb-4 ">
          <img
            onClick={() => setSelectedImg(imgSrc)}
            src={imgSrc}
            alt={title}
            className="img-cover cursor-pointer hover:opacity-80 transition"
            loading="lazy"
          />
        </figure>

        <div className=" flex items-cnenter justify-between gap-4 w-full">
          <div className="w-full">
            <div className="flex justify-between w-full">
              <h3 className="title-1 mb-3 ">{title}</h3>

              <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0">
              
                {projectLink !== "#" ? (
                  <a
                    href={projectLink}
                    target="_blank"
                    className="flex items-center justify-center"
                  >
                    <span
                      className="material-symbols-rounded"
                      aria-hidden="true"
                    >
                      arrow_outward
                    </span>{" "}
                  </a>
                ) : (
                  <div className="flex items-center justify-center opacity-50 cursor-not-allowed">
                    <span
                      className="material-symbols-rounded"
                      aria-hidden="true"
                    >
                      arrow_outward
                    </span>{" "}
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-wrap items-center  gap-2 mt-2 ">
              {tags.map((label, key) => (
                <div
                  className=" text-sm text-zinc-400 bg-zinc-50/5 grid items-center  rounded-lg"
                  key={key}
                >
                  <figure className="bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors">
                    <img
                      src={label}
                      alt={label}
                      width={32}
                      height={32}
                    />
                  </figure>{" "}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImg(null)}
        >
          <img
            src={selectedImg}
            className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,

  tags: PropTypes.array.isRequired,

  projectLink: PropTypes.string.isRequired,
  classes: PropTypes.string,
};
