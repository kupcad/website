<!--
  @component
  The playground page's app: @kupcad/playground on the script the address brings (`#code=`, as a
  docs example's "Open in playground" writes it), else on the first example. In the model's
  toolbar, the examples to start from instead, and Share, which puts the script in the address
  and copies it. Replacing a script the person changed asks first.
-->
<script>
  import { Playground } from '@kupcad/playground';
  import { decodeSource, encodeSource } from '../lib/share.js';

  /** @import { Example } from '../examples' */

  /** @type {{ examples: Example[] }} */
  let { examples } = $props();

  /** How long Share's label says the link was copied, in milliseconds. */
  const SHARED_MS = 2000;

  /** @param {string} source @returns {Example} */
  const sharedScript = (source) => ({ id: 'shared', title: 'Shared script', source });

  /** What the playground started on: given another, it starts again on it. */
  let start = $state(startOf(location.hash) ?? examples[0]);
  /** The script as the person has it, and whether they changed it since it started. */
  let current = start.source;
  let edited = false;
  let shareLabel = $state('Share');

  /** @param {string} hash @returns {Example | null} */
  function startOf(hash) {
    const source = decodeSource(hash);
    return source === null ? null : sharedScript(source);
  }

  /** Starts on `next`, once the person says their changes may go. @param {Example} next */
  function startOn(next) {
    if (edited && !confirm('Replace your script? Your changes to it will be lost.')) return false;
    start = next;
    current = next.source;
    edited = false;
    return true;
  }

  /** @param {Event & { currentTarget: HTMLSelectElement }} event */
  function chooseExample(event) {
    const example = examples.find(({ id }) => id === event.currentTarget.value);
    if (example && startOn(example)) history.replaceState(null, '', location.pathname);
    else event.currentTarget.value = start.id;
  }

  /** A script shared to this page while it is open (a link pasted into its address bar). */
  function followAddress() {
    const shared = startOf(location.hash);
    if (shared) startOn(shared);
  }

  async function share() {
    const url = `${location.origin}${location.pathname}#${encodeSource(current)}`;
    history.replaceState(null, '', url);
    try {
      await navigator.clipboard.writeText(url);
      shareLabel = 'Link copied';
    } catch {
      shareLabel = 'Link in the address bar';
    }
    setTimeout(() => (shareLabel = 'Share'), SHARED_MS);
  }
</script>

<svelte:window onhashchange={followAddress} />

{#key start}
  <Playground
    source={start.source}
    name={start.id}
    onsource={(source) => {
      current = source;
      edited = true;
    }}
  >
    {#snippet actions()}
      <select class="kc-control" aria-label="Example" value={start.id} onchange={chooseExample}>
        {#if start.id === 'shared'}
          <option value="shared">Shared script</option>
        {/if}
        {#each examples as example (example.id)}
          <option value={example.id}>{example.title}</option>
        {/each}
      </select>
      <button type="button" class="kc-control" onclick={share}>{shareLabel}</button>
    {/snippet}
  </Playground>
{/key}
