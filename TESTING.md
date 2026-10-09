# Browser acceptance checklist

## Checks performed on this build

Passed: JavaScript syntax checks; automated storage CRUD and update-event tests; settings persistence; public export excludes member/registration records; backup validation; URL filtering and HTML escaping; no project subdirectories.

Browser-verified: desktop homepage rendering; membership form and generated member number; member dashboard; preference save; volunteer interest; event interest registration; Control Room create and publish; public article visibility; switching to draft removes it from another tab; representative role filtering and empty result; mobile navigation; homepage at 390px and 768px; mobile Control Room member table. Measured no horizontal document overflow on those responsive views. No browser console errors were reported on the checked public page.

Downloads, backup restoration, deletion and every possible custom content combination have not been exhaustively browser-tested. Repeat the checklist below when replacing sample content or adding a backend.

## Repeatable acceptance checklist

- Open the homepage, each navigation route, and the extra page links in the footer.
- Search a listing; filter Representatives by MP, Councillor and Candidate; check an empty result.
- Create a published news item in the Control Room. Confirm it appears in the public site in another tab. Change to draft and confirm it disappears. Delete it.
- Edit homepage text and statistics; verify public output.
- Join with sample details, open the member area, download a card, save preferences, register and cancel event interest, and save volunteer interest.
- Download a manifesto and a calendar event; print a manifesto to PDF using the browser.
- Export a private backup, export a public seed, restore the backup and verify the records. Confirm public seed contains no member or event-interest records.
- At 390px, 768px and desktop width, check navigation, cards, forms and horizontal Control Room table scrolling.
- Use keyboard navigation and the skip link. Check reduced-motion behavior.
- Delete a local member and confirm associated event interests are removed.

Automated checks are supplied in `verify.cjs`. Browser testing results for the delivered build are reported with the handoff; this checklist documents repeatable acceptance tests rather than claiming every item was automated.
