import express from 'express';

let app = express();
const port = 8080;

const images = [
  "https://plus.unsplash.com/premium_photo-1670148434900-5f0af77ba500?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BsYXNofGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1472586662442-3eec04b9dbda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3BsYXNofGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1518469164615-97026679ea59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3BsYXNofGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1661603403807-aa68bfcc983a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3BsYXNofGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1683121825174-ff1620a5e387?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3BsYXNofGVufDB8fDB8fHww"
];

app.get('/img', (req, res) => {
  let img = images[Math.floor(Math.random() * images.length)];
  res.send(`<img src="${img}" alt="Random Image" />`);
});

app.listen(port, () => console.log(`server is running on port ${port}`));
