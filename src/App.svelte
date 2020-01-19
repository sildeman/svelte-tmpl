<script>
	// Modules
	import Router from 'svelte-spa-router'
	import { routes } from './routes'

	// Components
	import Nav from './components/Nav.svelte'


</script>

<Nav />
<Router {routes} />
