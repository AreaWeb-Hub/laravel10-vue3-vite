<template>
	<h1>Counter: {{ counter }}</h1>
	<button class="btn btn-success" @click="increment">Increment</button>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue';
import {useStore} from "vuex";

export default defineComponent({
	components: {},
	setup() {
		const store = useStore();

		const counter = computed(() => {
			return store.state.count;
		});

		const increment = () => {
			store.commit('increment');
		};

		return {
			counter,
			increment
		};
	},
});
</script>

<style lang="less" scoped>

</style>