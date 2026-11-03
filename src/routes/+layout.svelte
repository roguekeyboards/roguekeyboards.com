<script lang="ts">
	import './layout.css';
	// ?no-inline keeps Vite from turning the small icons into data: URIs, which Safari ignores
	// for favicons; it needs them as real files.
	import favicon from '@roguekeyboards/brand/favicon.svg?no-inline';
	import faviconIco from '@roguekeyboards/brand/favicon.ico?no-inline';
	import favicon32 from '@roguekeyboards/brand/favicon-32.png?no-inline';
	import appleTouchIcon from '@roguekeyboards/brand/apple-touch-icon.png?no-inline';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={faviconIco} sizes="any" />
	<link rel="icon" href={favicon32} type="image/png" sizes="32x32" />
	<link rel="icon" href={favicon} type="image/svg+xml" />
	<link rel="apple-touch-icon" href={appleTouchIcon} />
</svelte:head>

<main id="main">
	{@render children()}
</main>
