<script lang="ts">
	import { fly } from 'svelte/transition';
	import { slide } from 'svelte/transition';
	import { experience, projectsHeader, projects } from '$lib/data/portfolio';
	import ExperienceCard from '$lib/components/ExperienceCard.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { inview } from '$lib/actions/inview';
	import { socialMediaLinks } from '$lib/data/portfolio';

	let projectsVisible = $state(false);
</script>

<svelte:head>
	<title>Work | Mycale Radcliffe</title>
</svelte:head>

<section class="experience section">
	<div class="container" in:fly={{ y: 30, duration: 500 }}>
		<h1>{experience.title}</h1>
		<p class="section-desc">{experience.description}</p>

		{#each experience.sections as section}
			<details open>
				<summary>
					<h3>{section.title}</h3>
					<span class="chevron"></span>
				</summary>
				<div class="experience-list" transition:slide={{ duration: 300 }}>
					{#each section.experiences as exp}
						<ExperienceCard experience={exp} />
					{/each}
				</div>
			</details>
		{/each}
	</div>
</section>

<section
	class="projects section"
	use:inview
	oninview={() => (projectsVisible = true)}
>
	<div class="container">
		{#if projectsVisible}
			<div in:fly={{ y: 30, duration: 500 }}>
				<h2>{projectsHeader.title}</h2>
				<p class="section-desc">{projectsHeader.description}</p>

				<div class="project-grid">
					{#each projects.data as project}
						<ProjectCard {project} />
					{/each}
				</div>

				<div class="github-link">
					<a href={socialMediaLinks.github} target="_blank" rel="noopener noreferrer">
						View my GitHub →
					</a>
				</div>
			</div>
		{/if}
	</div>
</section>

<style>
	h1 {
		margin-bottom: 0.75rem;
	}

	.section-desc {
		max-width: 640px;
		margin-bottom: 2.5rem;
	}

	details {
		margin-bottom: 1.5rem;
	}

	summary {
		display: flex;
		align-items: center;
		justify-content: space-between;
		cursor: pointer;
		padding: 1rem 0;
		border-bottom: 1px solid var(--color-border);
		list-style: none;
	}

	summary::-webkit-details-marker {
		display: none;
	}

	summary h3 {
		color: var(--color-text);
	}

	.chevron {
		width: 8px;
		height: 8px;
		border-right: 2px solid var(--color-text-secondary);
		border-bottom: 2px solid var(--color-text-secondary);
		transform: rotate(45deg);
		transition: transform 0.3s ease;
	}

	details[open] .chevron {
		transform: rotate(-135deg);
	}

	.experience-list {
		padding-top: 0.5rem;
	}

	.project-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 1.5rem;
		margin-top: 1.5rem;
	}

	.github-link {
		margin-top: 2.5rem;
		text-align: center;
	}

	.github-link a {
		color: var(--color-accent);
		font-weight: 600;
		font-size: 1rem;
		transition: opacity 0.2s;
	}

	.github-link a:hover {
		opacity: 0.8;
	}

	@media (max-width: 768px) {
		.project-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
