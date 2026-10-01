# Academic Personal Website

A static academic website for GitHub Pages, with a responsive layout and light and dark themes. No dependencies or build step are required.

## Editing your profile

Edit **`profile.js`** to update your content. Configuration comments are in English; no layout changes are needed.

| Field | Content |
| --- | --- |
| `name` | Full name displayed below the portrait |
| `headerName` | English name for the header and footer |
| `authorName` | Name to emphasize in paper author lists |
| `position` / `department` / `institution` | Academic position, department, and institution |
| `location` | Current city and state or country |
| `photo` | Photo path relative to the website root |
| `email` | Contact email address |
| `links` | Google Scholar, GitHub, LinkedIn, and CV URLs |
| `about` | Biography paragraphs, with optional inline links |
| `education` | Degrees and educational background |
| `research` | Optional research areas and descriptions |
| `publications` | Published papers |
| `preprints` | Preprints |
| `crossDisciplinary` | Cross-disciplinary research papers and projects |
| `experience` | Internships, including optional locations |

1. Replace bracketed placeholders with your information.
2. Leave unavailable links as `""`; empty resource links are hidden.
3. To add a paper or experience, copy a complete `{ ... }` entry and separate entries with commas.
4. Set a section list to `[]` to hide that section and its navigation link.
5. Entries appear in the order provided. Reverse chronological order is recommended for papers and experience.

Biography paragraphs support links in the form `[display text](https://example.com)`. Other text is displayed as plain text, without HTML. Escape double quotes inside strings as `\"`. Use backticks for multiline text such as BibTeX.

## Paper authors and resources

Your `authorName` is automatically bolded in comma-separated author lists. Add `*` after equal-contributing authors; the explanation appears once below the Publications heading.

Use `paper`, `code`, and `project` for resource links. A nonempty `bibtex` field adds an expandable citation.

## Photos and CV

Place PDFs and other assets in `assets/` and reference their relative paths in `profile.js`. The current portrait is `liner.jpeg` in the project root. An initials placeholder is displayed when the portrait is missing or fails to load.

The CV is stored at `assets/cv.pdf`. The biography links to it, and the link opens in a new tab for PDF viewing. The CV is not listed among the sidebar links.

## Local preview

Open `index.html` in a browser with JavaScript enabled, or run:

```sh
python3 -m http.server 8000
```

Then visit http://localhost:8000. Save your edits and refresh the page to see updates.

## GitHub Pages

Commit and push the website files to the `main` branch of `LinerXiang/linerxiang.github.io`. Configure the repository's Pages settings to deploy from the `main` branch and the root folder.

The intended site address is https://linerxiang.github.io/. Local files alone do not indicate a successful deployment; check the repository's Pages settings or Actions for deployment status.

## Files

- `profile.js`: Personal content and configuration.
- `assets/`: CV, icons, and other assets.
- `index.html`: Page structure.
- `content.js`: Profile rendering and resource links.
- `styles.css`: Styling and responsive layout.
- `script.js`: Theme preferences and footer year.

## Design reference

The layout is inspired by [Academic Pages](https://academicpages.github.io/): top navigation, a portrait and profile sidebar, and academic content on the right. This is an independent static implementation, not an installation of the Academic Pages Jekyll system.
