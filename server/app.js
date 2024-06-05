const express=require('express');
const parth=require('path')
const app=express();

const adim=require('./routers/adim');
const shop=require('./routers/shop');
const authentication=require('./routers/authentication')

app.use(adim);
app.use(shop);
app.use(addEventListener);

app.listen(5000);  