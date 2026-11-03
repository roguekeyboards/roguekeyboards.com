<script lang="ts">
	import './layout.css';
	import favicon from '@roguekeyboards/brand/favicon.svg';
	import faviconIco from '@roguekeyboards/brand/favicon.ico';
	import appleTouchIcon from '@roguekeyboards/brand/apple-touch-icon.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={faviconIco} sizes="32x32" />
	<link rel="icon" href={favicon} type="image/svg+xml" />
	<link rel="apple-touch-icon" href={appleTouchIcon} />
</svelte:head>

<main id="main">
	{@render children()}
</main>
