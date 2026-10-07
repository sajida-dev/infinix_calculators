import assert from "node:assert/strict";
import {
    authorsData, getAllAuthors, getAuthorBySlug, getAuthorForCategory,
    getCanonicalAuthorSlug, legacyAuthorSlugs,
} from "../app/data/authorsData";
import { blogData } from "../app/data/blogData";

assert.equal(getAllAuthors().length, 5);
assert.deepEqual(getAllAuthors().map((author) => author.name).sort(), [
    "Atlas Keller", "Ellison Grant", "Orion Mercer", "Rowan Vance", "Vaughn Mercer",
]);
for (const [slug, author] of Object.entries(authorsData)) {
    assert.equal(author.slug, slug);
    assert.equal(author.schemaType, "Person");
    assert.equal(author.credentials, "");
    assert.deepEqual(author.education, []);
    assert.deepEqual(author.reviewedCategories, []);
    assert.equal(author.email, "");
    assert.equal(author.socials, undefined);
    assert.equal(author.linkedinUrl, undefined);
}
assert.deepEqual(
    Object.fromEntries(Object.entries(authorsData).map(([slug, author]) => [slug, author.avatar])),
    {
        "ellison-grant": "/authors/Gemini_Generated_Image_xplw38xplw38xplw.jpg",
        "vaughn-mercer": "/authors/Gemini_Generated_Image_qz8kvjqz8kvjqz8k.jpg",
        "atlas-keller": "/authors/Gemini_Generated_Image_oxoig3oxoig3oxoi.jpg",
        "rowan-vance": "/authors/Gemini_Generated_Image_43lzf243lzf243lz.jpg",
        "orion-mercer": "/authors/Gemini_Generated_Image_ax1zmoax1zmoax1z.jpg",
    },
);
for (const [legacy, canonical] of Object.entries(legacyAuthorSlugs)) {
    assert.equal(getCanonicalAuthorSlug(legacy), canonical);
    assert.equal(getAuthorBySlug(legacy), authorsData[canonical]);
}
assert.equal(getCanonicalAuthorSlug("not-an-author"), undefined);
assert.equal(getCanonicalAuthorSlug("__proto__"), undefined);
assert.equal(getAuthorBySlug("not-an-author").slug, "ellison-grant");
assert.equal(getAuthorForCategory("construction").slug, "atlas-keller");
assert.equal(getAuthorForCategory("financial").slug, "vaughn-mercer");
assert.equal(getAuthorForCategory("math").slug, "rowan-vance");
assert.equal(getAuthorForCategory("therapy productivity").slug, "orion-mercer");
assert.equal(getAuthorForCategory("math", "productivity").slug, "orion-mercer");
assert.equal(getAuthorForCategory("unit-converter", "cbm").slug, "atlas-keller");
assert.equal(getAuthorForCategory("Technology & 3D Printing").slug, "ellison-grant");
assert.equal(getAuthorForCategory("math", "3d-printing-cost").slug, "ellison-grant");
assert.equal(getAuthorForCategory("unknown").slug, "ellison-grant");
const technologyPosts = Object.values(blogData).filter((post) => post.category === "Technology & 3D Printing");
assert.equal(technologyPosts.length, 5);
for (const post of technologyPosts) {
    assert.equal(post.authorSlug, "ellison-grant", post.slug);
    assert.equal(post.author, "Ellison Grant", post.slug);
}
for (const post of Object.values(blogData)) {
    if (post.authorSlug) assert.ok(getCanonicalAuthorSlug(post.authorSlug), post.slug);
}
console.log("PASS: supplied author names, canonical/legacy attribution, category routing, and article references without invented credentials.");