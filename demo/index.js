import Vue from 'vue';
import VSSearch from '../components/search.vue';

new Vue({
	el: '#app',
	components: {
		'vs-search': VSSearch,
	},
	data: {
		'config': {},
	},
});
