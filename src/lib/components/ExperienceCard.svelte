<script lang="ts">
	import { base } from '$app/paths';
	import type { Experience } from '$lib/data/portfolio';

	let { experience }: { experience: Experience } = $props();
</script>

<div class="experience-card">
	<div class="card-header">
		<img src="{base}/images/{experience.logo_path}" alt={experience.company} class="logo" />
		<div class="header-text">
			<h4>{experience.title}</h4>
			<a href={experience.company_url} target="_blank" rel="noopener noreferrer" class="company">
				{experience.company}
			</a>
			<div class="meta">
				<span>{experience.duration}</span>
				<span class="separator">·</span>
				<span>{experience.location}</span>
			</div>
		</div>
	</div>
	<p class="description">{experience.description}</p>
</div>

<style>
	.experience-card {
		padding: 1.5rem 0;
		border-bottom: 1px solid var(--color-border);
	}

	.experience-card:last-child {
		border-bottom: none;
	}

	.card-header {
		display: flex;
		gap: 1rem;
		align-items: flex-start;
	}

	.logo {
		width: 48px;
		height: 48px;
		border-radius: 8px;
		object-fit: contain;
		background: var(--color-card-bg);
		padding: 4px;
		flex-shrink: 0;
	}

	.header-text {
		flex: 1;
	}

	h4 {
		font-size: 1rem;
		font-weight: 600;
		color: var(--color-text);
		margin-bottom: 0.15rem;
	}

	.company {
		font-size: 0.9rem;
		color: var(--color-accent);
		transition: opacity 0.2s;
	}

	.company:hover {
		opacity: 0.8;
	}

	.meta {
		font-size: 0.825rem;
		color: var(--color-text-secondary);
		margin-top: 0.25rem;
	}

	.separator {
		margin: 0 0.4rem;
	}

	.description {
		margin-top: 0.75rem;
		font-size: 0.9rem;
		line-height: 1.6;
	}
</style>
