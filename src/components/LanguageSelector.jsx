import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const lng = localStorage.getItem("lng");

  const changeLanguage = () => {
    if (lng === "en") {
      i18n.changeLanguage("fr");
      localStorage.setItem("lng", "fr");
    } else {
      i18n.changeLanguage("en");
      localStorage.setItem("lng", "en");
    }
  };

  return (
    <div className="btn-container flex gap-2">
      <button
        className=" flex items-center w-20 "
        onClick={() => changeLanguage()}
      >
        {lng === "en" ? (
          <div className="rounded-full overflow-hidden w-7 mr-2">
            <img
              src="/images/gb.png"
              className="w-9 h-7"
              alt=""
            />
          </div>
          
        ) : (
          <div className="rounded-full overflow-hidden w-7 mr-2">
          <img
            src="/images/fr.png"
            className="w-9 h-7"
            alt=""
          />
        </div>
        )} {localStorage.getItem("lng")}
      </button>
    </div>
  );
};

export default LanguageSelector;
