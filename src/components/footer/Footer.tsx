import Image from "next/image";
import Section from "../section/Section";

function Footer() {
  return (
    <footer className="flex bg-[color:var(--bg-highlight)] items-center justify-center">
      <Section>
        <div className="flex flex-row text-[color:var(--text-dim)] py-4 gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-2">
              <Image
                src="/static/images/footerLogo_valve_new.png"
                width={100}
                height={100}
                alt="steam-logo"
              />
              <Image
                src="/static/images/logo_steam.svg"
                width={100}
                height={100}
                alt="steam-logo"
              />
            </div>
            <span className="text-xs text-ellipsis w-96">
              © {new Date().getFullYear()} Valve Corporation. All rights
              reserved. All trademarks are property of their respective owners
              in the US and other countries. VAT included in all prices where
              applicable.{" "}
            </span>
          </div>
          <div className="flex flex-col px-14 gap-1">
            <span className="text-xs">About Valve</span>
            <span className="text-xs">Steamworks</span>
            <span className="text-xs">Jobs</span>
            <span className="text-xs">Steam Distribution</span>
            <span className="text-xs">Support</span>
          </div>
          <div className="flex gap-1 px-14 flex-col">
            <span className="text-xs">Privacy Policy</span>
            <span className="text-xs">Legal</span>
            <span className="text-xs">Steam Suscriber Agreement</span>
            <span className="text-xs">Refunds</span>
            <span className="text-xs">Cookies</span>
          </div>
          <div className="flex flex-col px-14 gap-1">
            <span className="text-xs truncate">
              Developed by{" "}
              <b>
                <a
                  href="https://github.com/xArkqngel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[color:var(--color-primary)] "
                >
                  xArkqngel
                </a>
              </b>
            </span>
            <span className="text-xs">
              Credits to{" "}
              <b>
                <a
                  href="https://x.com/juxtopposed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[color:var(--color-primary)] "
                >
                  Juxtopposed
                </a>
              </b>
            </span>
          </div>
        </div>
      </Section>
    </footer>
  );
}

export default Footer;
