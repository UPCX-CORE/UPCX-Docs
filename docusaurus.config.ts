import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "UPCX Documentation",
  tagline: "UPCX Blockchain",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    localeConfigs: {
      en: {},
      // You can omit a locale (e.g. fr) if you don't need to override the defaults
    },
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          path: "./docs/paper",
          routeBasePath: "/paper",
          // Please change this to your repo.
        },
        /*blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },*/
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "developer",
        path: "./docs/developer",
        routeBasePath: "/developer",
        sidebarPath: "./sidebars.ts",
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "UPCX Documentation",
      logo: {
        alt: "My Site Logo",
        src: "img/logo_big.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "WhitePaper",
        },
        {
          type: "docSidebar",
          docsPluginId: "developer",
          sidebarId: "developerSidebar",
          position: "left",
          label: "Developer",
        },
        /* { to: "/blog", label: "Blog", position: "left" },*/
        /* { href: "https://docs.upcx.org/api", label: "API", position: "left" },*/
        {
          href: "https://github.com/UPCX-Core",
          label: "GitHub",
          position: "right",
        },
        /*{
          type: "localeDropdown",
          position: "right",
          dropdownItemsAfter: [
            {
              to: "https://my-site.com/help-us-translate",
              label: "Help us translate",
            },
          ],
        },*/
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "E-Mail",
              href: "mailto:tech-admin@upcx.org",
            },
            {
              label: "Medium",
              href: "https://medium.com/@UPCX-Platforms",
            },
            {
              label: "Telegram",
              href: "https://t.me/UPCXofficial",
            },
            {
              label: "Discord",
              href: "http://dsc.gg/upcx",
            },
          ],
        },
        {
          title: "Docs",
          items: [
            {
              label: "WhitePaper",
              to: "/paper/abstract",
            },
            {
              label: "Developer",
              to: "/developer/introduction",
            },
          ],
        },

        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/UPCX-Core",
            },
          ],
        },
      ],
      copyright: `Copyright © 2020-2025 UPCX-PLATFORMS PTE. LTD.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
