<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { Project } from '$lib/data/portfolio';

	let { project }: { project: Project } = $props();
</script>

<a
	href={project.url}
	target="_blank"
	rel="noopener noreferrer"
	class="project-card"
	class:disabled={project.url === '#'}
>
	<h4>{project.name}</h4>
	<p>{project.description}</p>
	{#if project.languages.length > 0}
		<div class="languages">
			{#each project.languages as lang}
				<span class="lang-badge">
					<Icon icon={lang.iconifyClass} width="16" height="16" />
					{lang.name}
				</span>
			{/each}
		</div>
	{/if}
</a>

<style>
	.project-card {
		display: flex;
		flex-direction: column;
		padding: 1.5rem;
		background: var(--color-card-bg);
		border-radius: 12px;
		transition:
			transform 0.2s ease,
			box-shadow 0.2s ease;
		text-decoration: none;
	}

	.project-card:hover {
		transform: translateY(-3px);
		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
	}

	.project-card.disabled {
		pointer-events: none;
	}

	h4 {
		font-size: 1.1rem;
		font-weight: 600;
		color: var(--color-text);
		margin-bottom: 0.5rem;
	}

	p {
		font-size: 0.9rem;
		line-height: 1.5;
		flex: 1;
	}

	.languages {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: 1rem;
	}

	.lang-badge {
		display: flex;
		align-items: center;
		gap: 0.35rem;
		font-size: 0.8rem;
		color: var(--color-text-secondary);
		background: var(--color-bg);
		padding: 0.25rem 0.6rem;
		border-radius: 6px;
	}
</style>
