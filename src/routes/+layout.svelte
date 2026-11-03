<script lang="ts">
	import './layout.css';

	let { children } = $props();
</script>

<main id="main">
	{@render children()}
</main>
