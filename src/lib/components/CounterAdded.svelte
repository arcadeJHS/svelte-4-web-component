<svelte:options customElement="PREFIX-counter-added" />

<script>
	let count = 0;
	const increment = () => {
		count += 1;
	};
</script>

<span>Counter Added</span>
<button on:click={increment}>
	count is {count}
</button>
