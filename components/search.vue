<template>
	<div class='VS-search form-control'>
		<vs-input></vs-input>
		<vs-helper></vs-helper>
	</div>
</template>

<script>
import input from './input.vue';
import helper from './helper.vue';

export default {
	components: {
		'vs-input': input,
		'vs-helper': helper,
	},
	props: [
		'config',
	],
}
</script>

<style>
.VS-search {
	border-radius: 17px;
}
</style>
