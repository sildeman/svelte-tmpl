import App from './App.svelte';
import 'dhx-suite/codebase/suite.min.css';
import './styles.css';

const app = new App({
	target: document.body
});

window.app = app;

export default app;