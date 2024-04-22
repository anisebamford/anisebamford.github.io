import Express from "express"
import path from "path";

const app = Express()

app.use((req, res, next) => {
  console.log(req.method, req.path)
  next()
})

app.get("/db", (req, res, next) => {
  res.sendFile(path.join(__dirname, "db.json"))
})

app.use(Express.static("./public"))

app.listen(3000, () => console.log("listening!"))