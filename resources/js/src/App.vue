<template>
	<PrimaryHeader />
	<main class="main">
		<router-view />
	</main>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import PrimaryHeader from '/components/PrimaryHeader.vue';

	export default defineComponent({
		components: {
			PrimaryHeader,
		},
		setup() {
			return {
				username: 'Михаил',
			};
		},
	});
</script>

<style lang="less" scoped>
	.main {
		width: 992px;
		margin: 0 auto;
		padding: 40px;
	}
</style>