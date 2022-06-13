import { Router } from 'express'
const router = Router()

router.get('/', (req, res) => res.render('index', { title: 'Justiciero', Image: '/img/1.png'}))

router.get('/about', (req, res) => res.render('about'))

router.get('/equipo', (req, res) => res.render('equipo'))

/*router.get('/invite', (req, res) => {
    res.redirect('https://discord.com/api/oauth2/authorize?client_id=863610292406976544&permissions=0&scope=bot%20applications.commands');
})*/

router.get('/invite', (req, res) => res.render('invite'))

router.get('/news', (req, res) => res.render('news'))

router.get('/docs', (req, res) => res.render('docs'))

export default router