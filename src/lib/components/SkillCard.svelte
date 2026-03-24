<script lang="ts">
	import type { SkillCategory } from '$lib/data/portfolio';
	import type { Snippet } from 'svelte';
	import SoftwareSkills from './SoftwareSkills.svelte';
	import { inview } from '$lib/actions/inview';
	import { fly } from 'svelte/transition';

	let { skill, index, illustration }: { skill: SkillCategory; index: number; illustration?: Snippet } = $props();
	let visible = $state(false);
	const reverse = index % 2 !== 0;
</script>

<div class="skill-card" use:inview oninview={() => (visible = true)}>
	{#if visible}
		<div class="skill-content" class:reverse in:fly={{ y: 30, duration: 500 }}>
			<div class="skill-image">
				{#if illustration}
					{@render illustration()}
				{/if}
			</div>
			<div class="skill-text">
				<h3>{skill.title}</h3>
				<SoftwareSkills skills={skill.softwareSkills} />
				<ul>
					{#each skill.skills as description}
						<li>{description}</li>
					{/each}
				</ul>
			</div>
		</div>
	{/if}
</div>

<style>
	.skill-card {
		min-height: 300px;
	}

	.skill-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		align-items: center;
	}

	.skill-content.reverse {
		direction: rtl;
	}

	.skill-content.reverse > * {
		direction: ltr;
	}

	.skill-image {
		max-width: 100%;
	}

	.skill-image :global(svg) {
		width: 100%;
		height: auto;
	}

	h3 {
		font-size: 1.5rem;
		margin-bottom: 0.75rem;
		color: var(--color-text);
	}

	ul {
		list-style: none;
		margin-top: 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	li {
		color: var(--color-text-secondary);
		font-size: 0.95rem;
		line-height: 1.5;
		padding-left: 1rem;
		position: relative;
	}

	li::before {
		content: '—';
		position: absolute;
		left: 0;
		color: var(--color-accent);
	}

	@media (max-width: 768px) {
		.skill-content {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.skill-content.reverse {
			direction: ltr;
		}
	}
</style>
