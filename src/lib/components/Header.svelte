<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import { fly } from 'svelte/transition';

	let menuOpen = $state(false);

	const links = [
		{ href: `${base}/`, label: 'Home' },
		{ href: `${base}/work`, label: 'Work' },
		{ href: `${base}/contact`, label: 'Contact & Hire Me' }
	];

	function isActive(href: string, pathname: string): boolean {
		if (href === `${base}/`) return pathname === `${base}/` || pathname === base;
		return pathname.startsWith(href);
	}
</script>

<header in:fly={{ y: -20, duration: 400 }}>
	<div class="header-inner container">
		<a href="{base}/" class="logo">MR</a>

		<button
			class="hamburger"
			class:open={menuOpen}
			onclick={() => (menuOpen = !menuOpen)}
			aria-label="Toggle menu"
		>
			<span></span>
			<span></span>
			<span></span>
		</button>

		<nav class:open={menuOpen}>
			{#each links as link}
				<a
					href={link.href}
					class:active={isActive(link.href, $page.url.pathname)}
					onclick={() => (menuOpen = false)}
				>
					{link.label}
				</a>
			{/each}
		</nav>
	</div>
</header>

<style>
	header {
		position: sticky;
		top: 0;
		z-index: 100;
		background: var(--color-bg);
		border-bottom: 1px solid var(--color-border);
	}

	.header-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 70px;
	}

	.logo {
		font-size: 1.5rem;
		font-weight: 700;
		letter-spacing: -0.02em;
	}

	nav {
		display: flex;
		gap: 2rem;
	}

	nav a {
		font-size: 0.95rem;
		color: var(--color-text-secondary);
		transition: color 0.2s ease;
		position: relative;
	}

	nav a:hover,
	nav a.active {
		color: var(--color-text);
	}

	nav a.active::after {
		content: '';
		position: absolute;
		bottom: -4px;
		left: 0;
		right: 0;
		height: 2px;
		background: var(--color-accent);
		border-radius: 1px;
	}

	.hamburger {
		display: none;
		flex-direction: column;
		gap: 5px;
		background: none;
		border: none;
		padding: 4px;
	}

	.hamburger span {
		display: block;
		width: 24px;
		height: 2px;
		background: var(--color-text);
		transition: transform 0.3s ease, opacity 0.3s ease;
	}

	.hamburger.open span:nth-child(1) {
		transform: rotate(45deg) translate(5px, 5px);
	}
	.hamburger.open span:nth-child(2) {
		opacity: 0;
	}
	.hamburger.open span:nth-child(3) {
		transform: rotate(-45deg) translate(5px, -5px);
	}

	@media (max-width: 768px) {
		.hamburger {
			display: flex;
		}

		nav {
			position: absolute;
			top: 70px;
			left: 0;
			right: 0;
			background: var(--color-bg);
			flex-direction: column;
			padding: 1.5rem 2rem;
			gap: 1.25rem;
			border-bottom: 1px solid var(--color-border);
			display: none;
		}

		nav.open {
			display: flex;
		}
	}
</style>
