<script lang="ts">
	import wordmarkOnDark from '@roguekeyboards/brand/wordmark-on-dark.svg';
	import mykeebsOnDark from '@roguekeyboards/mykeebs-brand/logo-horizontal-on-dark.svg';
	import glitchWhite from '#lib/assets/twitch/glitch_flat_white.svg';

	const CONTACT_EMAIL = 'hello@roguekeyboards.com';
	const TWITCH_URL = 'https://www.twitch.tv/roguekeyboards';
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
			<img src={wordmarkOnDark} alt="" width="290" height="106" class="wordmark" />
			<span class="sr-only">Rogue Keyboards LLC</span>
		</h1>
	</header>

	<section class="section" aria-labelledby="who-title">
		<h2 id="who-title">Who we are</h2>
		<p>
			We fell down the mechanical keyboard rabbit hole in 2025. In 2026, we decided it was time to
			give something back to the hobby we love: software, services and content we hope others find
			useful, and maybe a little entertaining.
		</p>
	</section>

	<section class="section" aria-labelledby="make-title">
		<h2 id="make-title">What we make</h2>
		<a href="https://mykeebs.com" class="card">
			<img src={mykeebsOnDark} alt="" width="297" height="76" class="card-logo" />
			<span class="sr-only">mykeebs:</span>
			<span class="card-text">
				Track your keyboards, switches, keycap sets and builds, from planned to delivered. Free,
				with no ads and no tracking.
			</span>
			<span class="card-cta" aria-hidden="true">mykeebs.com →</span>
		</a>
		<a href={TWITCH_URL} class="card">
			<span class="card-head">
				<img src={glitchWhite} alt="" width="30" height="35" class="card-mark" />
				<span class="card-title">Live on Twitch</span>
			</span>
			<span class="card-text">Watch us build, tinker and talk keyboards, live.</span>
			<span class="card-cta" aria-hidden="true">twitch.tv/roguekeyboards →</span>
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
