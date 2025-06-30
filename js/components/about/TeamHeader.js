import { PageHeader } from '../layout/PageHeader.js';

/**
 * Renders the header for the "Meet the Team" section.
 * @returns {string} HTML string for the team header.
 */
export function TeamHeader() {
    return PageHeader(
        '<h2>Meet the Team</h2>',
        'The dedicated students behind every story. We are writers, editors, photographers, and leaders committed to bringing you the news that matters.'
    ).replace('page-header', 'page-header team-header');
}