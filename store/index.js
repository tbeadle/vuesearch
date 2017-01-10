import _ from 'lodash'

export default {
	namespaced: true,
	state: {
		config: {
			facets: {
			},
		},
		selections: [
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
		configure(state, config) {
			state.config = config
		},
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
