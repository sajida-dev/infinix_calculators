# Update Topsoil Blog Content with Reddit Insights

## Goal Description
We need to enrich the existing topsoil‑related blog posts in `app/data/blogData.ts` using the community insights gathered from the provided Reddit URLs. The updates must:
- Incorporate relevant quotes and statistics from Reddit users, citing them as `u/Username` with a hyperlink to the original comment (using `rel="nofollow"`).
- Add high‑volume SEO keywords identified in the Reddit discussions (e.g., "topsoil calculator", "how much topsoil", "topsoil cost per cubic yard", "topsoil delivery", etc.).
- Keep each article length between **1,500–2,500 words**.
- Preserve the existing structure (`title`, `excerpt`, `headings`, `content`).
- If a topsoil topic is not already present in `blogData.ts`, create a new entry following the same schema.
- Ensure all outbound links include `rel="nofollow"` to protect link‑juice.
- Maintain E‑E‑A‑T by attributing user quotes explicitly.

## User Review Required
- **[IMPORTANT]** Confirm the list of Reddit URLs to be used (the ones provided earlier). If there are additional URLs, please share them.
- **[IMPORTANT]** Approve the SEO keyword list (high‑volume keywords) we plan to embed.
- **[IMPORTANT]** Approve the citation format (e.g., `As u/johndoe notes…` with a hyperlink to the Reddit comment).

## Open Questions
- Do you want the new citations to open in a new tab (`target="_blank"`)?
- Should we add a small “Sources” section at the end of each article listing the Reddit URLs?
- Any specific tone or brand voice preferences beyond the existing conversational style?

## Proposed Changes
---
### Blog Data Updates
- **[MODIFY]** `app/data/blogData.ts`
  - For each of the four existing topsoil posts (`how-much-topsoil-do-i-need`, `fill-dirt-vs-topsoil`, `topsoil-cost-guide`, `best-soil-depth-for-grass`):
    - Replace the `content` template string with an expanded version that includes Reddit quotes, SEO‑rich headings, and a “Sources” list.
    - Add any missing high‑volume keywords to the `headings` array.
- **[NEW]** Add a new entry `"topsoil-delivery-basics"` (if not present) with a full blog structure.

---
## Verification Plan
### Automated Tests
- Run the project's TypeScript build (`npm run build`) to ensure `blogData.ts` still compiles.
- Execute any existing unit tests (`npm test`).

### Manual Verification
- Load the development server (`npm run dev`) and navigate to the updated blog URLs to confirm the new content renders correctly.
- Check that all external links contain `rel="nofollow"`.
- Verify word count (use a simple script or online tool) is within the 1,500‑2,500 range.
