<template>
	<div class='vs-selected-facet'>
		<span @click='removeSelection' class='glyphicon glyphicon-remove-sign'></span>
		<span class='vs-selected-facet-value'>{{ value }}</span>
	</div>
</template>

<script>
export default {
	props: ['value'],
	methods: {
		removeSelection() {
			this.$emit('removeSelection', this.value);
		},
	},
}
</script>
