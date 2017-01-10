<template>
	<div class='vuesearch'>
		<vs-selections></vs-selections>
		<vs-facet-input></vs-facet-input>
	</div>
</template>

<script>
import VsSelections from './selections.vue'
import VsFacetInput from './facet-input.vue'

export default {
	components: {
		VsFacetInput,
		VsSelections,
	},
	props: ['config', 'selections'],
	created() {
		this.$store.commit('vsstore/configure', this.config)
	},
}
</script>
