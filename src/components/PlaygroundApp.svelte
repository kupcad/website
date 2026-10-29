<!--
  @component
  The playground page's app: @kupcad/playground on the script the address brings (`#code=`, as a
  docs example's "Open in playground" writes it), else on the first example. Above it, a bar in
  the site's frame: the example to load (Load gives the playground its script, the example's own
  again if it is the one open), and Share, which puts the script in the address and copies it.
  Replacing a script the person changed asks first.
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

  /** The script the playground starts with. */
  const first = sharedOf(location.hash) ?? examples[0];
  /** What the playground was given last: an example, or a shared script. */
  let given = $state.raw(first);
  /** The script as the playground has it: the one given, as the person edits it. */
  let script = first.source;
  /** The example Load gives. */
  let chosen = $state(first.id === 'shared' ? examples[0].id : first.id);
  let shareLabel = $state('Share');
  /** @type {ReturnType<typeof Playground>} */
  let playground;

  /** @param {string} hash @returns {Example | null} */
  function sharedOf(hash) {
    const source = decodeSource(hash);
    return source === null ? null : sharedScript(source);
  }

  /**
   * Gives the playground `next`, once the person says their changes may go.
   * @param {Example} next
   */
  function give(next) {
    const edited = script !== given.source;
    if (edited && !confirm('Replace your script? Your changes to it will be lost.')) return false;
    given = next;
    script = next.source;
    playground.load(next.source);
    return true;
  }

  function load() {
    const example = examples.find(({ id }) => id === chosen);
    if (example && give(example)) history.replaceState(null, '', location.pathname);
  }

  /** A script shared to this page while it is open (a link pasted into its address bar). */
  function followAddress() {
    const shared = sharedOf(location.hash);
    if (shared) give(shared);
  }

  async function share() {
    const url = `${location.origin}${location.pathname}#${encodeSource(script)}`;
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

<div class="flex h-full flex-col">
  <div class="frame flex shrink-0 px-1 pb-1">
    <label
      class="eyebrow flex min-w-0 flex-1 cursor-pointer items-center gap-3 bg-paper px-4 transition-colors hover:bg-card md:px-6"
    >
      <span class="text-muted max-sm:sr-only">Example</span>
      <select
        bind:value={chosen}
        class="eyebrow min-w-0 flex-1 cursor-pointer appearance-none bg-transparent py-3 outline-offset-4"
      >
        {#each examples as example (example.id)}
          <option value={example.id}>{example.title}</option>
        {/each}
      </select>
      <svg viewBox="0 0 16 16" aria-hidden="true" class="pointer-events-none size-4 shrink-0">
        <path d="m4 6 4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5" />
      </svg>
    </label>
    <button
      type="button"
      class="eyebrow flex cursor-pointer items-center gap-2 bg-ink px-4 font-medium text-card transition-colors hover:bg-ink/85 md:px-6"
      onclick={load}
    >
      Load <span aria-hidden="true">→</span>
    </button>
    <button
      type="button"
      class="eyebrow cursor-pointer bg-paper px-4 transition-colors hover:bg-card md:px-6"
      onclick={share}
    >
      {shareLabel}
    </button>
  </div>
  <div class="min-h-0 flex-1">
    <Playground
      bind:this={playground}
      source={first.source}
      name={given.id}
      onsource={(next) => (script = next)}
    />
  </div>
</div>
