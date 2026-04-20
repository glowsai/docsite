import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Glows.ai",
  favicon: "img/favicon.ico",

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
