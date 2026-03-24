<script lang="ts">
	import { base } from '$app/paths';
	import { fly, fade } from 'svelte/transition';
	import { greeting, skills } from '$lib/data/portfolio';
	import SocialLinks from '$lib/components/SocialLinks.svelte';
	import SkillCard from '$lib/components/SkillCard.svelte';
	import FeelingProud from '$lib/svg/FeelingProud.svelte';
	import FullStackImg from '$lib/svg/FullStackImg.svelte';
	import CloudInfraImg from '$lib/svg/CloudInfraImg.svelte';

	const svgComponents: Record<string, typeof FullStackImg> = {
		FullStackImg,
		CloudInfraImg
	};
</script>

<svelte:head>
	<title>{greeting.full_name} | Portfolio</title>
</svelte:head>

<section class="hero section">
	<div class="container">
		<div class="hero-grid" in:fly={{ y: 30, duration: 500 }}>
			<div class="hero-text">
				<p class="greeting-label">{greeting.title} 👋</p>
				<h1>I'm <span class="accent">{greeting.title2}</span></h1>
				<p class="subtitle">{greeting.subTitle}</p>
				<SocialLinks />
				<a href="{base}/contact" class="cta-button">Get in Touch</a>
			</div>
			<div class="hero-illustration">
				<FeelingProud />
			</div>
		</div>
	</div>
</section>

<section class="skills section">
	<div class="container">
		<h2>Here's what I do</h2>
		<div class="skills-list">
			{#each skills.data as skill, i}
				<SkillCard {skill} index={i}>
					{#snippet illustration()}
						{#if svgComponents[skill.fileName]}
							<svelte:component this={svgComponents[skill.fileName]} />
						{/if}
					{/snippet}
				</SkillCard>
			{/each}
		</div>
	</div>
</section>

<style>
	.hero-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		align-items: center;
	}

	.greeting-label {
		font-size: 1.1rem;
		color: var(--color-text-secondary);
		margin-bottom: 0.5rem;
	}

	h1 {
		margin-bottom: 1rem;
	}

	.accent {
		color: var(--color-accent);
	}

	.subtitle {
		font-size: 1.1rem;
		margin-bottom: 1.5rem;
		max-width: 480px;
	}

	.cta-button {
		display: inline-block;
		margin-top: 1.5rem;
		padding: 0.75rem 2rem;
		background: var(--color-text);
		color: var(--color-bg);
		border-radius: 8px;
		font-weight: 600;
		font-size: 0.95rem;
		transition:
			opacity 0.2s,
			transform 0.2s;
	}

	.cta-button:hover {
		opacity: 0.85;
		transform: translateY(-1px);
	}

	.hero-illustration :global(svg) {
		width: 100%;
		height: auto;
		max-height: 450px;
	}

	.skills h2 {
		margin-bottom: 3rem;
	}

	.skills-list {
		display: flex;
		flex-direction: column;
		gap: 4rem;
	}

	@media (max-width: 768px) {
		.hero-grid {
			grid-template-columns: 1fr;
			text-align: center;
		}

		.hero-text {
			order: 1;
		}

		.hero-illustration {
			order: 0;
			max-width: 320px;
			margin: 0 auto;
		}

		.subtitle {
			margin-left: auto;
			margin-right: auto;
		}

		:global(.social-links) {
			justify-content: center;
		}
	}
</style>
