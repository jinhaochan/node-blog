const express = require('express')
const ctfRouter = require('./routes/ctfs')
const app = express()

app.set('view engine', 'ejs')

app.use('/ctfs', ctfRouter)

app.get('/', (req, res) => {
    const ctfs = [
	    {
	    title: 'Test CTF',
	    createdAt: new Date(),
	    description: 'Testing desc'
    },
	    {
	    title: 'Test CTF2',
	    createdAt: new Date(),
	    description: 'Testing desc2'
    },
    ]

    res.render('ctfs/index', {ctfs: ctfs})
})

app.listen(8080)
