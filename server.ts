import Express from "express"

const app = Express()

app.use((req, res, next) => {
  console.log(req.method, req.path)
  next()
})

app.use(Express.static("./public"))

app.listen(3000, () => console.log("listening!"))