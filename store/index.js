import _ from 'lodash'

export default {
	namespaced: true,
	state: {
		config: {
			/* TODO These should get populated by an API call during store
			 * creation.
			 */
			facets: {
				'Tags': null,
				'Passes': null,
			},
		},
		selections: [
			{facet: 'Tags', value: 'platform,4000'},
			{facet: 'Passes', value: null},
		],
	},
	getters: {
		facets: state => {
			let facets = _.keys(state.config.facets)
			facets.sort()
			return facets
		},
	},
	mutations: {
		removeSelection(state, facet) {
			let idx = _.findIndex(
				state.selections,
				selectionObj => selectionObj.facet == facet
			)
			if (idx >= 0) {
				state.selections.splice(idx, 1)
			}
		},
	},
}
