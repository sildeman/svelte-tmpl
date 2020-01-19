<script>
    import {push, pop, replace} from 'svelte-spa-router'
    import { onMount } from 'svelte'
    import { Toolbar } from 'dhx-suite/codebase/suite.min'

    let tollbar
    let nav
    let navItems = [
        { id: 'home', type: 'navItem', html: '<i class="dxi dxi-blur text-4xl text-white"></i>'},
        { type: 'title', html: '<div class="text-xl font-hairline text-white">Nome do Projeto</div>'},
        { type: 'spacer'},
        { id: 'rotafake', type: 'navItem', html: '<div class="text-lg font-hairline text-white">Rota Fake</div>'},
        { id: 'sobre', type: 'navItem', html: '<div class="text-lg font-hairline text-white">Sobre</div>'},
    ]


    onMount(() => {
        nav = new Toolbar(tollbar, {css: "bg-blue-700 p-1"})
        nav.data.parse(navItems)
        nav.events.on('click', (id, e) => id === 'home' ? push('/') : push(`/${id}`))
    })
</script>

<nav bind:this={tollbar}></nav>