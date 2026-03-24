<script lang="ts">
	import { socialMediaLinks } from '$lib/data/portfolio';
	import Icon from '@iconify/svelte';

	const links = [
		{ url: socialMediaLinks.github, icon: 'mdi:github', label: 'GitHub' },
		{ url: socialMediaLinks.linkedin, icon: 'mdi:linkedin', label: 'LinkedIn' },
		{ url: `mailto:${socialMediaLinks.gmail}`, icon: 'mdi:email-outline', label: 'Email' },
		{ url: socialMediaLinks.twitter, icon: 'mdi:twitter', label: 'Twitter' },
		{ url: socialMediaLinks.instagram, icon: 'mdi:instagram', label: 'Instagram' }
	];
</script>

<div class="social-links">
	{#each links as link}
		<a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
			<Icon icon={link.icon} width="24" height="24" />
		</a>
	{/each}
</div>

<style>
	.social-links {
		display: flex;
		gap: 1rem;
	}

	a {
		color: var(--color-text-secondary);
		transition: color 0.2s ease, transform 0.2s ease;
		display: flex;
		align-items: center;
	}

	a:hover {
		color: var(--color-accent);
		transform: translateY(-2px);
	}
</style>
