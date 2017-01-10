import _ from 'lodash'

export default {
	namespaced: true,
	state: {
		config: {
			facets: {
			},
		},
		facetOptions: {},
		selections: [
		],
	},
	getters: {
		facets: state => {
			let facets = _.keys(state.config.facets)
			facets.sort()
			return facets
		},
		facetOptions: state => {
			return _.map(
				state.facetOptions,
				facet => ({value: facet, text: facet})
			)
		},
	},
	mutations: {
		configure(state, config) {
			state.config = config
			var facetOptions
			if (state.selections.length) {
				let facets = _.clone(state.config.facets)
				_.forEach(
					state.selections, selection => {
						delete facets[selection.facet]
					}
				)
				facetOptions = _.keys(facets)
			} else {
				facetOptions = _.keys(state.config.facets)
			}
			facetOptions.sort()
			state.facetOptions = facetOptions
		},
		removeSelection(state, facet) {
			let idx = _.findIndex(
				state.selections,
				selectionObj => selectionObj.facet == facet
			)
			if (idx >= 0) {
				console.log('removing selection', facet)
				state.selections.splice(idx, 1)
				/* Insert the option back in to facetOptions. */
				state.facetOptions.splice(
					_.sortedIndex(state.facetOptions, facet),
					0,
					facet
				);
			}
		},
		selectFacet(state, facet) {
			var selection = {'facet': facet, 'value': null}
			console.log('adding selection', facet)
			state.selections.push(selection)
			/* Remove the facet from the available options. */
			state.facetOptions.splice(
				_.sortedIndex(state.facetOptions, facet),
				1
			)
		}
	},
}
