// A script in a playground address: `#code=` and the script's UTF-8 in base64url, as the docs'
// "Open in playground" links write it (the docs repository's src/plugins/playground-links.mjs).
// In the fragment, the script never reaches a server.

const KEY = 'code=';

/**
 * The fragment that opens `source` in the playground, without its `#`.
 * @param {string} source
 */
export function encodeSource(source) {
  let binary = '';
  for (const byte of new TextEncoder().encode(source)) binary += String.fromCharCode(byte);
  return KEY + btoa(binary).replaceAll('+', '-').replaceAll('/', '_').replace(/=+$/, '');
}

/**
 * The script a fragment holds (`location.hash`), or null for none, or one that isn't a script.
 * @param {string} hash
 * @returns {string | null}
 */
export function decodeSource(hash) {
  const fragment = hash.replace(/^#/, '');
  if (!fragment.startsWith(KEY)) return null;
  try {
    const base64 = fragment.slice(KEY.length).replaceAll('-', '+').replaceAll('_', '/');
    const bytes = Uint8Array.from(atob(base64), (char) => char.charCodeAt(0));
    return new TextDecoder('utf-8', { fatal: true }).decode(bytes);
  } catch {
    return null;
  }
}
