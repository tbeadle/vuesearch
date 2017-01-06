<template>
	<ul class='dropdown-menu'>
		<li v-for='item in items'><a href='#'>{{ item }}</a></li>
	</ul>
</template>

<script>
import axios from 'axios';

export default {
	props: [
		'facet'
	],
	data: function() {
		return {
			items: [],
		}
	},
	created: function() {
		axios.get(`/api/facetvalues/${this.facet}.json`)
			.then(
				(response) => {
					this.items = response.data;
				}
			)
			.catch(
				(response) => {
					this.items = [];
				}
			);
	},
}
</script>
