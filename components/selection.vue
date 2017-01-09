<template>
	<div class='vs-selection'>
		<vs-selected-facet :facet='facet'></vs-selected-facet>
		<vs-selected-value v-if='value !== null' :value='value'></vs-selected-value>
	</div>
</template>

<script>
import VsSelectedFacet from './selected-facet.vue';
import VsSelectedValue from './selected-value.vue';

export default {
	components: {
		VsSelectedFacet,
		VsSelectedValue,
	},
	props: ['facet', 'value'],
}
</script>
