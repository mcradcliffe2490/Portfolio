<script lang="ts">
	import { base } from '$app/paths';
	import { fly } from 'svelte/transition';
	import { contactPageData, greeting } from '$lib/data/portfolio';
	import SocialLinks from '$lib/components/SocialLinks.svelte';
	import FreelanceForm from '$lib/components/FreelanceForm.svelte';
	import BlogsImg from '$lib/svg/BlogsImg.svelte';
	import { inview } from '$lib/actions/inview';

	let blogVisible = $state(false);
	let formVisible = $state(false);
</script>

<svelte:head>
	<title>Contact | Mycale Radcliffe</title>
</svelte:head>

<section class="contact section">
	<div class="container" in:fly={{ y: 30, duration: 500 }}>
		<div class="contact-grid">
			<div class="contact-info">
				<img
					src="{base}/images/{contactPageData.contactSection.profile_image_path}"
					alt={greeting.full_name}
					class="profile-pic"
				/>
				<h1>{contactPageData.contactSection.title}</h1>
				<p>{contactPageData.contactSection.description}</p>
				<SocialLinks />
				<a href={greeting.resumeLink} target="_blank" rel="noopener noreferrer" class="resume-btn">
					View my Resume →
				</a>
			</div>
		</div>
	</div>
</section>

<section
	class="blog section"
	use:inview
	oninview={() => (blogVisible = true)}
>
	<div class="container">
		{#if blogVisible}
			<div class="blog-grid" in:fly={{ y: 30, duration: 500 }}>
				<div class="blog-text">
					<h2>{contactPageData.blogSection.title}</h2>
					<p>{contactPageData.blogSection.subtitle}</p>
					<a
						href={contactPageData.blogSection.link}
						target="_blank"
						rel="noopener noreferrer"
						class="blog-link"
					>
						Read on Medium →
					</a>
				</div>
				<div class="blog-illustration">
					<BlogsImg />
				</div>
			</div>
		{/if}
	</div>
</section>

<section
	class="hire section"
	use:inview
	oninview={() => (formVisible = true)}
>
	<div class="container">
		{#if formVisible}
			<div in:fly={{ y: 30, duration: 500 }}>
				<FreelanceForm />
			</div>
		{/if}
	</div>
</section>

<style>
	.profile-pic {
		width: 120px;
		height: 120px;
		border-radius: 50%;
		object-fit: cover;
		margin-bottom: 1.5rem;
	}

	.contact-info h1 {
		margin-bottom: 0.75rem;
	}

	.contact-info p {
		max-width: 520px;
		margin-bottom: 1.25rem;
	}

	.resume-btn {
		display: inline-block;
		margin-top: 1.25rem;
		color: var(--color-accent);
		font-weight: 600;
		transition: opacity 0.2s;
	}

	.resume-btn:hover {
		opacity: 0.8;
	}

	.blog-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		align-items: center;
	}

	.blog-text h2 {
		margin-bottom: 0.75rem;
	}

	.blog-text p {
		margin-bottom: 1.25rem;
	}

	.blog-link {
		color: var(--color-accent);
		font-weight: 600;
		transition: opacity 0.2s;
	}

	.blog-link:hover {
		opacity: 0.8;
	}

	.blog-illustration :global(svg) {
		width: 100%;
		height: auto;
		max-height: 350px;
	}

	@media (max-width: 768px) {
		.blog-grid {
			grid-template-columns: 1fr;
		}

		.blog-illustration {
			max-width: 320px;
			margin: 0 auto;
		}
	}
</style>
