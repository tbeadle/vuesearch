<template>
	<select2 class='vs-facet-input' :options='facetOptions' :config='config'><option></option></select2>
</template>

<script>
import _ from 'lodash'
import { mapGetters } from 'vuex'
import Select2 from './select2.vue'

function createRandomString(length) {
	var chars = "abcdefghijklmnopqrstufwxyzABCDEFGHIJKLMNOPQRSTUFWXYZ1234567890"
	var pwd = _.sample(chars, length || 12)
	return _.join(pwd, '')
}

export default {
	components: {
		Select2,
	},
	data() {
		return {
			config: {
				placeholder: "Select a facet",
				allowClear: true,
				minimumResultsForSearch: Infinity,
			},
		}
	},
	computed: {
		...mapGetters('vsstore', ['facets']),
		facetOptions() {
			return _.map(this.facets, (facet) => ({ id: facet, text: facet}))
		},
	},
}
</script>
