import express from 'express'
import { SourceNode } from 'source-map'

const app = express()
const port = 3000

const sourceNode = new SourceNode(null, null, null, [
    new SourceNode(2, 13, "raw.js", "Hallo", "Hello")
])
// sourceNode.setSourceContent("raw.js", 'console.log(\'hello\')');
const {source, map} = sourceNode.toStringWithSourceMap({
    file: "translated.txt"
})

app.get('/', (req, res) => {
    res.send(`<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello World</h1>
    <script src="./index.js"></script>
</body>
</html>`)
})

app.get('/index.js', (req, res) => {
    res.send(`debugger;
${source}
//# sourceMappingURL=index.js.map`)
})

app.get('/index.js.map', (req, res) => {
    console.log('index.js.map headers', req.headers)
    res.send(JSON.stringify(map, null, 2))
})

app.get('*', (req, res) => {
    console.log('* url', req.url)
    console.log('* headers', req.headers)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
