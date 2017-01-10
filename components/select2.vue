<template>
	<select><slot></slot></select>
</template>

<script>
	export default {
		props: ['options', 'value', 'config'],
		mounted() {
			this.createSelect2()
		},
		destoyed() {
			$(this.$el).off().select2('destroy')
		},
		methods: {
			createSelect2() {
				$(this.$el)
					.val(this.value)
					.select2({
						...(this.config || {}),
						data: this.options,
					})
					.on(
						'change',
						() => {
							this.$emit('input', this.value)
						}
					)
			},
		},
		watch: {
			options(options) {
				$(this.$el).off().select2('destroy').empty()
				this.createSelect2()
			},
			value(value) {
				$(this.$el).val(value)
			},
		},
	}
</script>
