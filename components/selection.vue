<template>
	<div class='vs-selection'>
		<vs-selected-facet @removeSelection='removeSelection' :value='facet'></vs-selected-facet>
		<vs-selected-value v-if='value !== null' :value='value'></vs-selected-value>
	</div>
</template>

<script>
import SelectedFacet from './selected-facet.vue';
import SelectedValue from './selected-value.vue';

export default {
	components: {
		'vs-selected-facet': SelectedFacet,
		'vs-selected-value': SelectedValue,
	},
	props: ['facet', 'value'],
	methods: {
		removeSelection(facet) {
			this.$emit('removeSelection', facet);
		},
	},
}
</script>
