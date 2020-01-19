import Home from './routes/Home.svelte'
import Sobre from './routes/Sobre.svelte'
import NotFound from './routes/NotFound.svelte'

export const routes = {
    '/': Home,
    '/sobre': Sobre,
    '*': NotFound
}