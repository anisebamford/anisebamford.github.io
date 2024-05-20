import Express from "express"

const app = Express()

app.use((req, res, next) => {
  console.log(req.method, req.path)
  next()
})

app.use(Express.static("./public"))

app.use(function(req, res, next) {
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
    res.sendFile("./public/index.html", {root: __dirname})
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    res.json({ error: 'Not found' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
});

app.listen(3000, () => console.log("listening!"))