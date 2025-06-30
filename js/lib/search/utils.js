/**
 * Strips HTML tags from a string to create plain text for searching.
 * @param {string} html - The HTML string to clean.
 * @returns {string} The plain text content.
 */
export function stripHtml(html) {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
}