<template>
	<div class='vs-selected-facet'>
		<span @click='removeSelection' class='glyphicon glyphicon-remove-sign'></span>
		<span class='vs-selected-facet-value'>{{ facet }}</span>
	</div>
</template>

<script>
export default {
	props: ['facet'],
	methods: {
		removeSelection() {
			this.$store.commit('vsstore/removeSelection', this.facet);
		},
	},
}
</script>
