
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let users = [];

app.post('/register', (req,res)=>{
  const {usuario} = req.body;
  users.push({usuario, tokens:2000});
  res.json({msg:"ok"});
});

app.post('/login',(req,res)=>{
  const {usuario} = req.body;
  const user = users.find(u=>u.usuario===usuario);
  if(!user) return res.status(400).json({msg:"no user"});
  res.json({user});
});

app.listen(3001, ()=>console.log("server running"));
