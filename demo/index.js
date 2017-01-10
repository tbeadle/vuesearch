import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import Vuesearch from '../components/vuesearch.vue'
import vsstore from '../store'

var store = new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production',
	modules: {
		vsstore,
	},
})

new Vue({
	el: '#app',
	store,
	template: '<vuesearch :config="config" :selections="selections"></vuesearch>',
	components: {
		Vuesearch,
	},
	data: {
		config: {
			facets: {
				'Config Set': {
					'type': 'ajax',
				},
				'Tags': {
					'type': 'text',
					'placeholder': 'Comma-separated tags',
				},
				'Passes': null,
			}
		},
		selections: [],
	},
})
