<template>
	<div class='has-feedback'>
		<label class='control-label sr-only'>Search</label>
		<input class='VS-input'>
		<span class='form-control-feedback glyphicon glyphicon-search'>
	</div>
</template>

<script>
export default {
	props: [
		'value',
	],
}
</script>
