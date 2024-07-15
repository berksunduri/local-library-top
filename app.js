const express = require('express')
const path = require('path')
require('dotenv').config()

const app = express();

const PORT = process.env.PORT

const filePaths = {
    '/': 'index.html',
    '/contact-me': 'public/contact-me.html',
    '/about': 'public/about.html'
}

//middleware
app.use(express.static(path.join(__dirname)))

//route handler
app.get('*', (req, res) => {
    const filePath = filePaths[req.url] || 'public/404.html';
    res.sendFile(path.join(__dirname, filePath))
})

// Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
