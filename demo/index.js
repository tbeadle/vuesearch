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
	template: '<vuesearch></vuesearch>',
	components: {
		Vuesearch,
	},
	data: {
		config: {
		},
		selections: [
			{'facet': 'Tags', 'value': 'platform,4000'},
			{'facet': 'Passes', 'value': null},
		],
	},
})
