<script lang="ts">
	import { db } from '../firebase';
	import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
	import { onMount } from 'svelte';

	let projects: Project[] = [];
	let errorMessage = '';

	const fetchProjects = async () => {
		try {
			const query = await getDocs(collection(db, 'projects'));
			projects = query.docs.map((project) => {
				const data = project.data();
				return {
					id: project.id,
					name: data.name,
					dateCreated: data.dateCreated
				};
			});
		} catch (error) {
			console.error('Error fetching documents:', error);
			errorMessage = 'Failed to fetch projects. Please try again later.';
		}
	};

	// Fetch projects when the component mounts
	onMount(() => {
		fetchProjects();
	});
</script>

<h1>Projects List</h1>
{#if errorMessage}
	<p>{errorMessage}</p>
{:else}
	<ul>
		{#each projects as project}
			{console.log(project.dateCreated)}
			<li>
				<strong>Name:</strong>
				{project.name} <br />
				<strong>Date Created:</strong>
				{new Date(project.dateCreated.toDate()).toLocaleDateString()}
			</li>
		{/each}
	</ul>
{/if}
