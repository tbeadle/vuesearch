<template>
	<select>
		<slot></slot>
		<option v-for='option in options' :value='option.value'>{{ option.text }}</option>
	</select>
</template>

<script>
	export default {
		props: ['options', 'initialValue', 'config', 'events'],
		mounted() {
			this.createSelect2()
		},
		destoyed() {
			this.destroy()
		},
		methods: {
			createSelect2() {
				var sel2 = $(this.$el)
					.val(this.value)
					.select2(this.config || {})
					.on('change',
						(e) => {
							this.$emit('input', e.val)
						}
					)
				_.forIn(
					this.events,
					(func, evnt) => {
						sel2.on(evnt, func)
					}
				)
			},
			destroy() {
				$(this.$el).off().select2('destroy')
			},
		},
		computed: {
			value: {
				get() {
					return $(this.$el).val()
				},
				set(val) {
					$(this.$el).val(val)
				}
			},
		},
		watch: {
			options() {
				this.destroy()
				this.createSelect2()
			},
		},
	}
</script>
