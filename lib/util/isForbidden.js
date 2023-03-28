'use strict';

/**
 * @typedef {Object} ForbidOptions
 * @property {string[]} [allowList]
 * @property {string[]} [disallowList]
 * @property {string} [message]
 */

/**
 * @param {Map<string, ForbidOptions>} forbidMap
 * @param {string} prop
 * @param {string} tagName
 * @returns {boolean}
 */
function isForbidden(forbidMap, prop, tagName) {
  const options = forbidMap.get(prop);
  if (!options) { return false; }

  if (options.allowList) {
    return (typeof tagName === 'undefined') || options.allowList.indexOf(tagName) === -1;
  }
  if (options.disallowList) {
    return (typeof tagName === 'undefined') || options.disallowList.indexOf(tagName) !== -1;
  }

  return true;
}

module.exports = isForbidden;
