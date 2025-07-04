<script lang="ts">
	import { goto } from '$app/navigation';
	import { redirect } from '@sveltejs/kit';
	import { onMount } from 'svelte';
	let questions: Question[] = $state([]);
	let loading = $state(true);
	let error = $state('');
	let selected: Question = $derived(questions[0] || null);

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

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		if (!selected) {
			error = 'Please select a question.';
			return;
		}
		if (!selected.id) {
			error = 'Selected question does not have a valid ID.';
			return;
		}
		goto(`/answers/${selected.id}`);
	}
</script>

<form onsubmit={handleSubmit}>
	<label for="question">Question:</label>
	<select value={selected} id="question" required>
		{#each questions as question}
			<option value={question}>
				{question.text}
			</option>
		{/each}
	</select>
	<button type="submit">Submit</button>
</form>
