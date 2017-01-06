<template>
	<div class='VS-search'>
		<vs-input></vs-input>
	</div>
</template>

<script>
import input from './input.vue';

export default {
	components: {
		'vs-input': input,
	},
	props: [
		'config',
	],
}
</script>
