// templates - express
// npm install pug --save
app.set('view engine', 'pug')

//
app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})
