<template>
	<select>
		<slot></slot>
		<option v-for='option in options' :value='option.value'>{{ option.text }}</option>
	</select>
</template>

<script>
	export default {
		props: ['options', 'value', 'config', 'events'],
		mounted() {
			this.createSelect2()
		},
		destoyed() {
			$(this.$el).off().select2('destroy')
		},
		methods: {
			createSelect2() {
				var sel2 = $(this.$el)
					.val(this.value)
					.select2(this.config || {})
					.on(
						'change',
						() => {
							this.$emit('input', this.value)
						}
					)
				_.forIn(
					this.events,
					(func, evnt) => {
						sel2.on(evnt, func)
					}
				)
			},
		},
		watch: {
			options() {
				$(this.$el).off().select2('destroy')
				this.createSelect2()
			},
			value(value) {
				$(this.$el).val(value)
			},
		},
	}
</script>
