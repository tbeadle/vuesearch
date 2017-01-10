<template>
	<ul class='vs-selections'>
		<vs-selection v-for='selection in selections' :facet='selection.facet' :value='selection.value'></vs-selection>
	</ul>
</template>

<script>
import VsSelection from './selection.vue'
import { mapState } from 'vuex'

export default {
	components: {
		VsSelection,
	},
	computed: mapState('vsstore', [
		'selections'
	]),
}
</script>
