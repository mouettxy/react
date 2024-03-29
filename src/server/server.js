import express from 'express';
import ReactDOM from 'react-dom/server';
import { App } from '../App';
import {indexTemplate} from './indexTemplate';
import axios from 'axios';

const app = express();

app.use('/static', express.static('./dist/client'))

app.get('/auth',(req,res)=>{
  axios.post(
    'https://www.reddit.com/api/v1/access_token',
    `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`,
    {
      auth: { username: process.env.CLIENT_ID, password: 't4LNEwM6ExsrcWkgF4SjUZcvGKxtRw'},
      headers: { 'Content-type': 'application/x-www-form-urlencoded'}
    }
  )
  .then(({data}) => {
    res.send(
      indexTemplate(ReactDOM.renderToString(App()), data['access_token'])
      )
  })
  .catch((e) => {
    res.redirect('http://localhost:3000')
  })
})

app.get('*',(req,res)=>{
  res.send(indexTemplate(ReactDOM.renderToString(App())))
})
app.listen(3000,()=>{
  console.log("server started on port http://localhost:3000")
})