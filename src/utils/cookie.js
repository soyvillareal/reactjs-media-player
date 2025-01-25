/**
 * Get a cookie from the browser.
 * @param {string} name - Name of cookie to get.
 * @returns {string} - Value of the cookie or null if not found.
 * @example const cookie = getCookie('name');
 * @description This function is used to get a cookie from the browser.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
 */
export const getCookie = (name) => {
  const nameEQ = `rmp_${name}=`;
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

/**
 * Set a cookie in the browser.
 * @param {string} name - Name of the cookie.
 * @param {string} value - Value of the cookie.
 * @param {number} days - Number of days until the cookie expires (optional).
 * @example setCookie('name', 'value', 7);
 * @description This function is used to set a cookie in the browser.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
 */
export const setCookie = (name, value, days) => {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }
  document.cookie = `rmp_${name}=${value || ''}${expires}; path=/`;
};

/**
 * Remove a cookie from the browser.
 * @param {string} name - Nombre de la cookie que se desea eliminar.
 * @example deleteCookie('name');
 * @description This function is used to remove a cookie from the browser.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie#Example_4_Reset_the_previous_cookie
 */
export function deleteCookie(name) {
  document.cookie = `rmp_${encodeURIComponent(name)}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}
