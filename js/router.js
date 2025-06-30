import { routes } from './config/routes.js';
import { updateActiveNavLink } from './lib/navigation.js';
import { handleFooterVisibility } from './features/footerVisibility.js';

/**
 * Parses the location hash into a path and an optional parameter.
 * @param {string} hash - The location hash (e.g., '#search/football').
 * @returns {{path: string, param: string|undefined}}
 */
function getRouteAndParams(hash) {
    const [path, param] = hash.replace('#', '').split('/');
    return { path: path || 'home-page', param };
}

/**
 * Handles routing when the URL hash changes.
 * It finds the corresponding render function and executes it.
 */
export function handleRouteChange() {
    const { path, param } = getRouteAndParams(location.hash);
    
    handleFooterVisibility(path);
    
    const renderFunction = routes[path];

    if (renderFunction) {
        renderFunction(param).catch(err => {
            console.error(`Error rendering route ${path}:`, err);
            // Optionally render an error page
        });
    } else {
        // Fallback to home page if route is not found
        location.hash = '#home-page';
    }
    
    updateActiveNavLink(path);
    window.scrollTo(0, 0);
}

/**
 * Initializes the router by attaching event listeners.
 */
export function initRouter() {
    window.addEventListener('hashchange', handleRouteChange);
    handleRouteChange(); // Initial render on page load
}