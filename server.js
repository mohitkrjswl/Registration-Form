const express = require('express');
const app = express();
let port = 3000;
const path = require('path')
const empcollection = require('./models/data');

require('./db/db')
const temp_path = path.join(__dirname, './template/views')



app.set('view engine', 'hbs');
app.set('views', temp_path);

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('index');
})


app.post('/empdata', async (req, res) => {
  try {
    const password = req.body.password;
    const cpassword = req.body.cpassword;

    if (password === cpassword) {
      const empData = new empcollection({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        cpassword: req.body.cpassword,
      });
      const postData = await empData.save();
      res.send(postData)
    } else {
      res.send("Password didn't matched")
    }

  } catch (error) {
    res.send({ error: 'not saved' });
  }
})
app.listen(port, () => {
  console.log(`listening to the port ${port}`);
});