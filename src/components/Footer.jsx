import { useTranslation } from "react-i18next";
import { ButtonPrimary } from "./Button";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Tokosama",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anouar-sabi-orou-toko-606072304/",
  },
  
];

const Footer = () => {
  const {t} = useTranslation();

  
const sitemap = t("sitemap")

  
  return (
    <>
      <footer className="section">
        <div className="container">
          <div className="lg:grid lg:grid-cols-2 ">
            <div className="mb-10">
              <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up ">{t("footerIntro")}</h2>
              <ButtonPrimary
                href="mailto:codewithsadee@gmail.com"
                label={t("start")}
                icon="chevron_right"
                classes={"reveal-up"}
              />
            </div>

            <div className=" grid grid-cols-2 gap-4 lg:pl-20 ">
              <div>
                <p className="mb-2 reveal-up">{t("navig")}</p>
                <ul>
                  {sitemap.map(({ label, href }, key) => (
                    <li key={key}>
                      <a
                        href={href}
                        className="block text-sm text-zinc-400 py-1 tarnsition-colors hover:text-zinc-200 reveal-up"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-2 reveal-up">Socials</p>
                <ul>
                  {socials.map(({ label, href }, key) => (
                    <li key={key}>
                      <a
                        href={href}
                        target="_blank"
                        className="block text-sm text-zinc-400 py-1 tarnsition-colors hover:text-zinc-200  reveal-up"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

              
          </div>
          <div className="flex items-center justify-between pt-10 mb-8 ">
            <a href="/" className="logo reveal-up">
              <img
                src="/images/logo.svg"
                width={40}
                height={40}
                alt="Logo"
                className=""
              />
            </a>
            <p className="text-zinc-500 text-sm reveal-up">
              &copy; 2025
              <span>TokoSama</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
