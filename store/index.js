import _ from 'lodash'

export default {
	namespaced: true,
	state: {
		config: {},
		selections: [
			{facet: 'Tags', value: 'platform,4000'},
			{facet: 'Passes', value: null},
		],
	},
	getters: {
		selections: state => state.selections,
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
