/**
 * Formats author names for summary views (e.g., "Jane, John, and 2 more").
 * @param {Array<Object>} writers - An array of writer objects.
 * @returns {string} The formatted names string.
 */
export function formatAuthorNamesSummary(writers) {
    if (!writers) return '';
    const names = writers.map(w => w.name);
    const count = names.length;

    if (count === 0) return '';
    if (count === 1) return names[0];
    if (count === 2) return `${names[0]} and ${names[1]}`;
    
    const remainingCount = count - 2;
    return `${names[0]}, ${names[1]}, and ${remainingCount} more`;
}

/**
 * Formats author names for full display (e.g., "Jane, John, and Jill").
 * @param {Array<Object>} writers - An array of writer objects.
 * @returns {string} The formatted names string.
 */
export function formatAuthorNamesFull(writers) {
    if (!writers) return '';
    const names = writers.map(w => w.name);
    const count = names.length;

    if (count === 0) return '';
    if (count === 1) return names[0];
    if (count === 2) return `${names[0]} and ${names[1]}`;

    const allButLast = names.slice(0, -1).join(', ');
    const last = names.slice(-1);
    return `${allButLast}, and ${last}`;
}