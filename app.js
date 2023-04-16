const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000

// main root
app.get('/', function(req, res) {
    res.sendFile((__dirname +'/index.html'));
});

// files serve
app.use('/static',express.static((__dirname +'/assets')))

app.listen(PORT, () => {
    console.log(`app up at port ${PORT}`);
})