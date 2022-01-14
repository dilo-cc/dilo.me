import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'plan the night'
	}
});

export default app;