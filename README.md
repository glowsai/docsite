# Doc Site

## Creating New Sections

1. **Documentation File Rules**: Place English version files in the `/docs/docs` folder and images in `/docs-images`.
2. **Other Language Versions**: For example, the Traditional Chinese version should be placed in `/i18n/zh-TW/docusaurus-plugin-content-docs/current/docs`.

> **Important**: File names for different languages must be absolutely identical, including case sensitivity.

-----

## URL Generation Rules

1. **Default Behavior**: URLs are generated using the filename by default. For example:

      * `datadrive-app.md` -\> `https://docs.glows.ai/datadrive-app`
      * `Data Drive app.md` -\> `https://docs.glows.ai/docs/Data%20Drive%20app`

2. **Custom URLs**: You can customize the URL by adding an `id` attribute within the document.

      * `id: dd-app` -\> `https://docs.glows.ai/docs/dd-app`

-----

Please add the following content to the very top of your document:

```markdown
---
id: dd-app
---
```

-----

## In-Page Anchor Link Rules

Docusaurus generates a heading `id` from the heading text using these rules:

1. Convert to **lowercase**.
2. Replace **spaces with hyphens** (`-`).
3. **Remove punctuation** such as `:`, `?`, `.`, `,`, `(`, `)`, `!`.
4. Non-ASCII characters (Chinese, Japanese, etc.) are kept as-is.

An anchor link must point to the generated `id`, **not** the raw heading text. Anchors containing spaces or uppercase letters will not work.

| Heading | Correct anchor | Wrong anchor |
|---|---|---|
| `## Create a Model Route` | `[link](#create-a-model-route)` | `[link](#Create a Model Route)` |
| `## 建立 Model Route` | `[link](#建立-model-route)` | `[link](#建立 Model Route)` |
| `## Contact Us` | `[link](#contact-us)` | `[link](#Contact Us)` |
| `## 聯繫我們` | `[link](#聯繫我們)` | — |

> **Tip**: To keep anchors stable across languages, you can assign an explicit `id` to a heading with `{#custom-id}`, for example `## 建立 Model Route {#create-a-model-route}`. Every translation can then reuse the same anchor.

To find anchors that contain spaces (a common mistake), run:

```bash
grep -rnE '\]\(#[^)]* [^)]*\)' docs i18n
```
