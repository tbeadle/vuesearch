import Vue from 'vue';
import Helper from '../components/helper.vue';

new Vue({
	el: '#app',
	template: '<vs-helper :initialSelections="selections" :config="config"></vs-helper>',
	components: {
		'vs-helper': Helper,
	},
	data: {
		config: {
		},
		selections: [
			{'facet': 'Tags', 'value': 'platform,4000'},
			{'facet': 'Passes', 'value': null},
		],
	},
});
