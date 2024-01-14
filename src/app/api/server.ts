const express = require('express');
var cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/subjects', (req, res) => {
    // get data from db
    // const result = await db.collection('subjects').find().toArray()


    // res.send(result)
    res.send([
        {
            subjectID: 'dfghja',
            subjectName: 'Math',
            teacherName: 'Brenda',
        },
        {
            subjectID: 'lwvghd',
            subjectName: 'Science',
            teacherName: 'Stacy',
        }
    ]);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});