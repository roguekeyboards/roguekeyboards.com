<script lang="ts">
	import wordmarkOnDark from '@roguekeyboards/brand/wordmark-on-dark.svg';
	import wordmarkOnLight from '@roguekeyboards/brand/wordmark-on-light.svg';
	import mykeebsOnDark from '@roguekeyboards/mykeebs-brand/logo-horizontal-on-dark.svg';
	import mykeebsOnLight from '@roguekeyboards/mykeebs-brand/logo-horizontal-on-light.svg';

	const CONTACT_EMAIL = 'hello@roguekeyboards.com';
	const year = new Date().getFullYear();
</script>

<svelte:head>
	<title>Rogue Keyboards LLC</title>
	<meta name="description" content="Rogue Keyboards LLC, the company behind mykeebs." />
	<meta property="og:title" content="Rogue Keyboards LLC" />
	<meta property="og:description" content="The company behind mykeebs." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://roguekeyboards.com/" />
</svelte:head>

<div class="page">
	<header class="hero">
		<h1>
			<picture>
				<source srcset={wordmarkOnLight} media="(prefers-color-scheme: light)" />
				<img src={wordmarkOnDark} alt="" width="290" height="106" class="wordmark" />
			</picture>
			<span class="sr-only">Rogue Keyboards LLC</span>
		</h1>
	</header>

	<section class="section" aria-labelledby="make-title">
		<h2 id="make-title">What we make</h2>
		<a href="https://mykeebs.com" class="card">
			<picture>
				<source srcset={mykeebsOnLight} media="(prefers-color-scheme: light)" />
				<img src={mykeebsOnDark} alt="" width="297" height="76" class="card-logo" />
			</picture>
			<span class="sr-only">mykeebs:</span>
			<span class="card-text">
				Track your keyboards, switches, keycap sets and builds, from planned to delivered. Free,
				with no ads and no tracking.
			</span>
			<span class="card-cta" aria-hidden="true">mykeebs.com →</span>
		</a>
	</section>

	<section class="section" aria-labelledby="contact-title">
		<h2 id="contact-title">Contact</h2>
		<p>
			Questions, partnerships or anything else:
			<a href="mailto:{CONTACT_EMAIL}" class="link">{CONTACT_EMAIL}</a>
		</p>
	</section>

	<footer class="footer">
		<p>© {year} Rogue Keyboards LLC</p>
	</footer>
</div>
