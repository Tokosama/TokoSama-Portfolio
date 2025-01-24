import { useTranslation } from "react-i18next";
import { ButtonOutline } from "./Button";

export const Hero = () => {
  const { t } = useTranslation(["home"]);
  return (
    <>
      <section
        id="home"
        className="pt-28 lg:pt-36"
      >
        <div className="container items-center lg:grid lg:grid-cols-2  lg:gap-10 ">
          <div>
            <div className="flex items-center gap-3 ">
              {/* <figure className="img-box w-9 h-9 rounded-lg">
                <img
                  src="/images/avatar-1.jpg"
                  width={40}
                  height={40}
                  alt="tokoSama portrait"
                  className="img-cover"
                />
              </figure> */}
              <div className="flex items-center gap-1.5 text-zinc-400 text-sm tarcking-wide">
                <span className=" relative w-2 h-2 rounded-full bg-emerald-400">
                  <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                </span>
                {t("greeting")}
              </div>
            </div>
            <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10 ">
              {t("intro")}
            </h2>
            <div className="flex items-center gap-3  ">
              <a
                className=" max-w-max  flex items-center gap-2 px-4 rounded-xl font-medium text-sm ring-1 ring-zinc-50/5 ring-inset transition-[background-color] h-11 bg-sky-400 text-zinc-950 hover:bg-sky-300 active:bg-sky-400
}"
                href="/TkCV.pdf"
                target="/"
              >
                {t("cv")}
                <span
                  className="material-symbols-rounded"
                  aria-hidden="true"
                >
                  download
                </span>
              </a>

              <ButtonOutline
                href={"#contact"}
                label={t("scroll")}
                icon={"arrow_downward"}
              />
            </div>
          </div>
          {/* <div className="hidden lg:block">
            <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-40 to-65% rounded-[60px] overflow-hidden">
              <img
                src="/images/hero-banner.png"
                width={656}
                height={800}
                alt="tokoSama"
                className="w-full"
              />
            </figure>
          </div> */}
        </div>
      </section>
    </>
  );
};
