<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { SoftwareSkill } from '$lib/data/portfolio';

	let { skills }: { skills: SoftwareSkill[] } = $props();
</script>

<div class="skills-row">
	{#each skills as skill}
		<div class="skill-icon" title={skill.skillName}>
			<Icon icon={skill.fontAwesomeClassname} width="36" height="36" />
			<span class="skill-name">{skill.skillName}</span>
		</div>
	{/each}
</div>

<style>
	.skills-row {
		display: flex;
		flex-wrap: wrap;
		gap: 1.5rem;
		margin-top: 1rem;
	}

	.skill-icon {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.4rem;
		transition: transform 0.2s ease;
	}

	.skill-icon:hover {
		transform: translateY(-3px);
	}

	.skill-name {
		font-size: 0.7rem;
		color: var(--color-text-secondary);
	}
</style>
