<script lang="ts">
	import { freelanceFormData } from '$lib/data/portfolio';

	let submitted = $state(false);
</script>

<section class="freelance-form">
	<h2>{freelanceFormData.title}</h2>
	<p class="subtitle">{freelanceFormData.subtitle}</p>

	{#if submitted}
		<div class="success">
			<p>Thanks for reaching out! I'll get back to you within a few days.</p>
		</div>
	{:else}
		<form
			action={freelanceFormData.formspreeEndpoint}
			method="POST"
			onsubmit={() => {
				submitted = true;
			}}
		>
			<input type="text" name="_gotcha" style="display:none" />

			<div class="form-row">
				<div class="form-group">
					<label for="name">Name</label>
					<input type="text" id="name" name="name" required />
				</div>
				<div class="form-group">
					<label for="email">Email</label>
					<input type="email" id="email" name="email" required />
				</div>
			</div>

			<div class="form-row">
				<div class="form-group">
					<label for="project-type">Project Type</label>
					<select id="project-type" name="project-type" required>
						<option value="" disabled selected>Select a type</option>
						{#each freelanceFormData.projectTypes as type}
							<option value={type}>{type}</option>
						{/each}
					</select>
				</div>
				<div class="form-group">
					<label for="budget">Budget Range</label>
					<select id="budget" name="budget" required>
						<option value="" disabled selected>Select a range</option>
						{#each freelanceFormData.budgetRanges as range}
							<option value={range}>{range}</option>
						{/each}
					</select>
				</div>
			</div>

			<div class="form-group">
				<label for="description">Project Description</label>
				<textarea id="description" name="description" rows="5" required></textarea>
			</div>

			<button type="submit">Send Message</button>
		</form>
	{/if}
</section>

<style>
	.freelance-form {
		max-width: 640px;
	}

	h2 {
		margin-bottom: 0.5rem;
	}

	.subtitle {
		margin-bottom: 2rem;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.form-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.25rem;
	}

	.form-group {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	label {
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--color-text);
	}

	input,
	select,
	textarea {
		font-family: inherit;
		font-size: 0.95rem;
		padding: 0.75rem 1rem;
		border: 1px solid var(--color-border);
		border-radius: 8px;
		background: var(--color-bg);
		color: var(--color-text);
		transition: border-color 0.2s;
	}

	input:focus,
	select:focus,
	textarea:focus {
		outline: none;
		border-color: var(--color-accent);
	}

	textarea {
		resize: vertical;
	}

	button {
		align-self: flex-start;
		padding: 0.75rem 2rem;
		background: var(--color-text);
		color: var(--color-bg);
		border: none;
		border-radius: 8px;
		font-size: 0.95rem;
		font-weight: 600;
		transition:
			opacity 0.2s,
			transform 0.2s;
	}

	button:hover {
		opacity: 0.85;
		transform: translateY(-1px);
	}

	.success {
		padding: 2rem;
		background: var(--color-card-bg);
		border-radius: 12px;
		text-align: center;
	}

	.success p {
		color: var(--color-text);
		font-weight: 500;
	}

	@media (max-width: 768px) {
		.form-row {
			grid-template-columns: 1fr;
		}
	}
</style>
