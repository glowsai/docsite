import TwitterIcon from "@site/static/img/twitter.svg";
import GithubIcon from "@site/static/img/github.svg";
import DiscordIcon from "@site/static/img/discord.svg";
import ArrowRightIcon from "@site/static/img/arrow-right.svg";
import CloseIcon from "@site/static/img/close.svg";
import CopyIcon from "@site/static/img/copy.svg";

import Link from "@docusaurus/Link";
import { cn } from "@site/src/utils/style";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function Footer() {
  // get inviter_code from cookie
  const inviter_code = Cookies.get("inviter_code");
  const [isVisible, setIsVisible] = useState(true);
  const [isLoadBlock, setIsLoadBlock] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadBlock(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);
  if (!inviter_code) return null;

  return (
    <>
      <div
        className={cn(
          "fixed bottom-0 left-0 p-4 lg:px-2 lg:py-4 transition-opacity duration-300 ease-in-out",
          isVisible && "opacity-0 pointer-events-none"
        )}
      >
        <div className="p-[1px] rounded-[32px] [background-clip:padding-box,_border-box] [background-origin:padding-box,_border-box] [background-image:conic-gradient(from_90deg_at_50%_50%,_#334155_0deg,_#334155_169.87deg,_#94A3B8_274.98deg,_#334155_360deg)]">
          <div className="rounded-[32px] [background-image:linear-gradient(0deg,_rgba(15,_23,_42,_0.95),_rgba(15,_23,_42,_0.95)),_radial-gradient(134.28%_134.28%_at_50%_100%,_rgba(233,_213,_255,_0.2)_0%,_rgba(168,_85,_247,_0.2)_22.35%,_rgba(15,_23,_42,_0.00002)_100%)]">
            <div className="bg-slate-900/95 rounded-[32px]">
              <div className="py-2.5 pl-6 pr-4 rounded-[32px] flex items-center justify-center space-x-2 bg-[radial-gradient(134.28%_134.28%_at_50%_100%,rgba(233,213,255,0.2)_0%,rgba(168,85,247,0.2)_22.35%,rgba(15,23,42,0.00002)_100%)]">
                <div className="t-sb text-center bg-clip-text text-transparent bg-linear-to-r from-[#A855F7] to-[#E9D5FF]">
                  <div className="text-white text-opacity-80">
                    Invitation <br /> Code
                  </div>
                </div>
                <div
                  className="w-7 h-7 flex items-center justify-center bg-[#FFFFFF29] rounded-full cursor-pointer p-1.5 hover:bg-opacity-80 transition"
                  onClick={() => setIsVisible(true)}
                >
                  <ArrowRightIcon className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded block, showing invitation code and sign up button */}
      <div
        className={cn(
          "fixed bottom-0 left-0 w-full transition-all duration-500 ease-in z-999",
          isLoadBlock
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0"
        )}
      >
        <div
          className={cn(
            "fixed bottom-0 left-0 h-[95px] w-full p-[1px] rounded-t-3xl transition-all duration-300 ease-in-out transform origin-left [background-clip:padding-box,_border-box] [background-origin:padding-box,_border-box] [background-image:conic-gradient(from_90deg_at_50%_50%,_#334155_0deg,_#334155_169.87deg,_#94A3B8_274.98deg,_#334155_360deg)]",
            isVisible
              ? "scale-x-100 opacity-100"
              : "scale-x-0 opacity-0 pointer-events-none",
            isLoadBlock
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          )}
        >
          <div
            className={cn(
              "fixed bottom-0 left-0 w-full text-white bg-slate-900/95 px-8 py-6 flex justify-between items-center rounded-t-3xl"
            )}
            style={{
              backgroundImage:
                "radial-gradient(78.69% 78.69% at 50% 100%, rgba(233, 213, 255, 0.2) 0%, rgba(168, 85, 247, 0.2) 22.35%, rgba(15, 23, 42, 2e-05) 100%)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backdropFilter: "blur(8px)",
            }}
          >
            <button
              className="w-8 h-8 absolute -top-4 right-4 text-white bg-slate-900 rounded-full p-1 border border-white flex items-center justify-center hover:bg-opacity-80 cursor-pointer transition"
              onClick={() => setIsVisible(false)}
            >
              <CloseIcon className="w-4 h-4 text-white" />
            </button>

            <div className="w-full flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-0 justify-between items-center">
              <div className="lg:w-1/2 flex flex-col lg:flex-row space-y-4 lg:space-x-6 lg:space-y-0 items-center">
                <div className="text-2xl font-bold">Welcome to Glows.ai</div>

                <div className="pl-4 pr-2 py-2 rounded-lg bg-[#FFFFFF14] t-sb border border-[#FFFFFF3D] flex items-center space-x-2">
                  <div className="text-white text-opacity-80">
                    Invitation Code:
                  </div>
                  <div className="text-white">{inviter_code}</div>
                  <div
                    className="bg-[#FFFFFF29] rounded-[40px] p-[6px]"
                    onClick={() => {
                      if (typeof inviter_code === "string") {
                        navigator.clipboard.writeText(inviter_code);
                      }
                    }}
                  >
                    <CopyIcon className="w-4 h-4 text-white cursor-pointer" />
                  </div>
                </div>
              </div>

              <div>
                <button
                  className="btn t-bold font-semibold text-slate-900 bg-linear-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group"
                  onClick={() => {
                    window.location.href = `https://glows.ai/register?inviter_code=${inviter_code}`;
                  }}
                >
                  Sign Up Now
                  <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="h-16 border-t-[2px] border-b-0 border-solid border-gray100 flex items-center xl:px-8">
        <div className="w-safe-lg xl:w-full m-auto flex items-center justify-between">
          <div className="text-secondary t-bold">
            © {new Date().getFullYear()} Glows.ai |{" "}
            <a href="mailto:hi@glows.ai" className="text-blue-600">
              hi@glows.ai
            </a>
          </div>
          <div className="flex items-center">
            <Link
              href="https://twitter.com/glowsai"
              target="_blank"
              rel="noreferrer noopenner"
              className="w-12 h-12 icon-btn mr-4"
            >
              <TwitterIcon className="text-2xl" />
            </Link>
            <Link
              href="https://github.com/glowsai"
              target="_blank"
              rel="noreferrer noopenner"
              className="w-12 h-12 icon-btn mr-4"
            >
              <GithubIcon className="text-2xl" />
            </Link>
            <Link
              href="https://discord.gg/glowsai"
              target="_blank"
              rel="noreferrer noopenner"
              className="w-12 h-12 icon-btn"
            >
              <DiscordIcon className="text-2xl" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
