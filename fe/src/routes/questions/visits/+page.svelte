<script lang="ts">
	import { onMount } from 'svelte';
	let questions: Question[] = [];
	let loading = true;
	let error = '';

	async function fetchQuestions() {
		loading = true;
		error = '';
		try {
			const res = await fetch('http://localhost:8000/question');
			if (res.ok) {
				questions = await res.json();
			} else {
				error = 'Failed to load questions.';
			}
		} catch (e) {
			error = 'Error loading questions.';
		} finally {
			loading = false;
		}
	}

	onMount(fetchQuestions);
</script>

{#if loading}
	<p>Loading questions...</p>
{:else if error}
	<p>{error}</p>
{:else}
	<h2>Questions Visitors</h2>
	<ul>
		{#each questions as question}
			<li>
				<div>
					{question.text}
				</div>
        <div>
          {#if question.visitors}
            Visitors: {question.visitors}
          {:else}
            No visitors yet
          {/if}
        </div>
			</li>
		{/each}
	</ul>
{/if}
