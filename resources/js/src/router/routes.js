import Home from '@/pages/Home.vue';
import SomePage from '@/pages/SomePage.vue';
import About from '@/pages/About.vue';

const routes = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/some-page',
		component: SomePage,
	},
	{
		path: '/about',
		component: About,
	},
];

export default routes;