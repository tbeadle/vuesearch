<template>
	<div class='vs-helper'>
		<vs-selections @removeSelection='removeSelection' :selections='selections'></vs-selections>
		<!-- TODO vs-facet-input -->
	</div>
</template>

<script>
import _ from 'lodash';
import Selections from './selections.vue';

export default {
	props: [
		'initialSelections',
	],
	data() {
		return {
			selections: _.cloneDeep(this.initialSelections),
		}
	},
	components: {
		'vs-selections': Selections,
	},
	methods: {
		removeSelection(facet) {
			let idx = _.findIndex(
				this.selections,
				(selectionObj) => selectionObj.facet == facet
			);
			if (idx >= 0) {
				this.selections.splice(idx, 1);
			}
		},
	},
}
</script>
