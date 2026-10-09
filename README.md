# Forward UK — Forward for Britain

A complete, build-free fictional political party website and separate local Control Room. Every project file belongs at the repository root. There are no project directories, package dependencies or build steps.

## Open and publish

Upload all files from this archive directly to the root of a GitHub repository. In GitHub Pages settings, choose deployment from your branch and the root source. Open the resulting Pages URL. The public site starts at `index.html`; the editor is `control-room.html`. Hash routes support direct links on GitHub Pages without rewrite rules.

For a local preview with Node.js installed, run `node preview.cjs` from the project root, then open http://localhost:4173. Prefer HTTP hosting over opening files directly, because browser storage behavior for file URLs varies.

## Public website

Home, Manifesto, Policy Hub, News, Events, Representatives, Leadership, Local Branches, Campaign 2029, Free Membership, Member Area, local-data notice and accessibility information. Search listings, filter representatives, open full records, download manifestos, print to PDF, download calendar files and register event interest locally.

## Control Room

Create, edit and delete records for every content collection. Publish or keep records as drafts. Manage MP, councillor and candidate profiles separately using their role. Edit homepage text, party statistics, announcements, navigation, footer, social links, media references and settings. The `hero` media record sets the homepage image. Image fields accept a root filename or an HTTPS URL; put your uploaded images at the repository root. The interface references images rather than uploading binary files.

Free membership generates unique member numbers and downloadable SVG cards. The local member area includes branch, constituency, event interests, manifesto and policy access, campaign updates, volunteer interests, preferences and status. The Control Room can edit member statuses and records, and view event interests. Public membership statistics are editorial figures; they do not automatically count local demonstration registrations.

## Storage and publishing content

`store.js` is the reusable persistence boundary: `read`, `save`, `upsert`, `remove`, `subscribe`, `validate` and `publicSeed`. Both interfaces use it. Content is stored under `forward-uk-v1` in localStorage. Same-origin tabs receive updates. Records are local to one browser and origin; they are not shared between visitors or devices.

To publish content for new visitors, use Control Room → Export & restore → Download public seed.js. Replace the root `seed.js` in GitHub and commit. The export strips members and event interests. Existing browsers retain their local data; reset in the Control Room to adopt a new bundled seed. Private backups include local member information and must not be committed to a public repository.

## Deliberate prototype boundaries

This is a browser-local demonstration, not a secure membership system. There is no password protection, identity verification, server-side authorization, email delivery or shared database. Anyone with access to the browser can view its local records. Use sample details only. Event interest and volunteer actions save locally and do not contact an organiser. Calendar times are floating local times; the sample event listings use UK wall-clock times.

For production, replace the adapter with an authenticated service, move membership data to private server storage, enforce roles and validation server-side, and provide account verification and recovery. Keep the public-content endpoint separate from member endpoints. Because the current rendering API is synchronous, an asynchronous backend integration should load/cache data before rendering or adapt callers to await the service. Never use public seed files for private member records.

## Design and assets

Royal Azure `#3454D1`, Turquoise `#34D1BF`, Platinum `#EFEFEF`, Black `#070707`. Original brand mark and Westminster illustration are included as SVG files. The illustration is an interpretation of the supplied visual reference, rather than a reproduction of its photographic assets. Manrope and DM Sans load from Google Fonts with system fallbacks. The site works without those fonts. Reduced-motion preference, keyboard focus states, responsive layouts and horizontally scrolling admin tables are included.

All people, dates, figures and policy content are illustrative for a fictional party. Review and replace them before using this as a real organisation’s site.

## Verification

Run `node verify.cjs` for storage, private-data exclusion, backup-validation and flat-project checks. Run `node --check app.js`, `node --check admin.js`, and `node --check store.js` for syntax checks. See `TESTING.md` for the browser acceptance checklist.
