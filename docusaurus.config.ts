import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { themes as prismThemes } from "prism-react-renderer";
import type { Config, LoadContext, Plugin } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const DEFAULT_LOCALE = "en";
const LOCALE_STORAGE_KEY = "glowsai.sdkdoc.locale";
const EXPLICIT_PATH_LOCALES = ["en", "zh-TW", "ja"] as const;

function getExplicitLocaleFromPathname(pathname: string): string | null {
  const firstSegment = pathname.split("/").filter(Boolean)[0];

  return firstSegment &&
    EXPLICIT_PATH_LOCALES.includes(
      firstSegment as (typeof EXPLICIT_PATH_LOCALES)[number]
    )
    ? firstSegment
    : null;
}

function getEnglishAliasPathname(pathname: string): string {
  return pathname === "/"
    ? `/${DEFAULT_LOCALE}/`
    : `/${DEFAULT_LOCALE}${pathname}`;
}

function getAliasFilePath(outDir: string, pathname: string): string {
  return path.join(outDir, pathname.replace(/^\/+/, ""), "index.html");
}

function escapeHtmlAttribute(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function createEnglishAliasRedirectHtml(targetPathname: string): string {
  const locale = JSON.stringify(DEFAULT_LOCALE);
  const storageKey = JSON.stringify(LOCALE_STORAGE_KEY);
  const target = JSON.stringify(targetPathname);
  const cookie = JSON.stringify(
    `${LOCALE_STORAGE_KEY}=${DEFAULT_LOCALE}; Max-Age=31536000; Path=/; SameSite=Lax`
  );

  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <link rel="canonical" href="${escapeHtmlAttribute(targetPathname)}" />
  </head>
  <script>
    try {
      window.localStorage.setItem(${storageKey}, ${locale});
    } catch (e) {}

    try {
      document.cookie = ${cookie};
    } catch (e) {}

    window.location.replace(${target} + window.location.search + window.location.hash);
  </script>
</html>`;
}

function englishLocaleAliasRedirectsPlugin(context: LoadContext): Plugin {
  return {
    name: "english-locale-alias-redirects",
    async postBuild({ routesPaths, outDir }) {
      if (context.i18n.currentLocale !== context.i18n.defaultLocale) {
        return;
      }

      await Promise.all(
        routesPaths
          .filter(
            (routePath) =>
              routePath.startsWith("/") &&
              routePath !== "/404.html" &&
              !routePath.includes(":") &&
              getExplicitLocaleFromPathname(routePath) === null
          )
          .map(async (routePath) => {
            const aliasPathname = getEnglishAliasPathname(routePath);
            const aliasFilePath = getAliasFilePath(outDir, aliasPathname);

            await mkdir(path.dirname(aliasFilePath), { recursive: true });
            await writeFile(
              aliasFilePath,
              createEnglishAliasRedirectHtml(routePath),
              { flag: "wx" }
            );
          })
      );
    },
  };
}

const config: Config = {
  title: "Glows.ai",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://docs.glows.ai",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "glowsai", // Usually your GitHub org/user name.
  projectName: "user-doc", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-TW", "ja"],
    localeConfigs: {
      en: {
        label: "English",
      },
      "zh-TW": {
        label: "繁體中文",
      },
      ja: {
        label: "日本語",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          path: "docs",
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          exclude: ["**/docs-images/**"],
          breadcrumbs: false,
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  plugins: [
    // [
    //   "@docusaurus/plugin-content-docs",
    //   {
    //     id: "tutorials",
    //     path: "tutorials",
    //     routeBasePath: "tutorials",
    //     sidebarPath: "./sidebars-tutorials.ts",
    //     includeCurrentVersion: true,
    //   },
    // ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        createRedirects(existingPath) {
          // Derive the "old format" path from the current path for redirection
          // e.g. /zh-TW/docs/get-started → old path is /zh-TW/docs/Get started
          // Only create redirects for paths that contain hyphens (the old format used spaces)
          if (!existingPath.includes('-')) {
            return undefined;
          }
          const oldPath = existingPath
            .replace(/-/g, ' ')           // Convert hyphens back to spaces
            .replace(/\/(\w)/g, (match, char) => '/' + char.toUpperCase()); // Capitalize first letter

          if (oldPath !== existingPath) {
            return [oldPath]; // Redirect old path to the current path
          }
          return undefined;
        },
      },
    ],
    englishLocaleAliasRedirectsPlugin,
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  clientModules: [require.resolve("./src/i18n/localeRedirect.ts")],

  themeConfig: {
    // Replace with your project's social card
    image: "img/logo_text.svg",
    announcementBar: {
      id: "announcementBar-1",
      content: `<img src="/img/respect_emoji.png" alt="Respect Emoji" class="half-emoji-icon" /> Speed up your innovation with Glows.ai, Scale up your large model training <a class="announcement-bar-button" href="https://glows.ai">Learn More</a>`,
      isCloseable: true,
      textColor: "#FFF",
    },
    navbar: {
      logo: {
        alt: "Glows.ai",
        src: "img/logo_text.svg",
        target: "_blank",
        href: "https://glows.ai",
      },
      items: [
        {
          to: "https://glows.ai",
          position: "left",
          label: "Product",
          className: "text-[14px] leading-[22px] font-medium",
        },
        {
          to: "https://glows.ai",
          position: "left",
          label: "Solution",
          routeBasePath: "/solution",
          className: "text-[14px] leading-[22px] font-medium",
        },
        {
          to: "https://sdkdoc.glows.ai",
          position: "left",
          label: "API",
          routeBasePath: "api",
          className: "text-[14px] leading-[22px] font-medium",
        },
        {
          type: "doc",
          docId: "docs/overview",
          position: "left",
          label: "User Doc",
          className: "text-[14px] leading-[22px] font-medium",
        },
        {
          to: "https://glows.ai/article",
          position: "left",
          label: "Article",
          className: "text-[14px] leading-[22px] font-medium",
        },
        {
          to: "https://glows.ai",
          position: "left",
          label: "About us",
          routeBasePath: "about-us",
          className: "text-[14px] leading-[22px] font-medium",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      disableSwitch: true,
      defaultMode: "light",
      respectPrefersColorScheme: false,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
