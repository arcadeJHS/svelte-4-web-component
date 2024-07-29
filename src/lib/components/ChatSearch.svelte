<svelte:options customElement="PREFIX-chat-search" />

<script>
	import { onMount } from 'svelte';
	import { search } from '../stores/SearchStore';

	onMount(async () => {
		let _search =  await search.start();
		search.set(_search);
	});
</script>

<div>
	<pre>{JSON.stringify($search, null, 2)}</pre>
</div>
