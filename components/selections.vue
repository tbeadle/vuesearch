<template>
	<ul class='vs-selections'>
		<vs-selection @removeSelection='removeSelection' v-for='selection in selections' :facet='selection.facet' :value='selection.value'></vs-selection>
	</ul>
</template>

<script>
import Selection from './selection.vue';

export default {
	props: ['selections'],
	components: {
		'vs-selection': Selection,
	},
	methods: {
		removeSelection(facet) {
			this.$emit('removeSelection', facet);
		},
	},
}
</script>
