const express=require('express')
const hbs=require('hbs')
const path=require('path')
const app=express()
const port =3100

// paths modules::::::::::::::::

const staticPath=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/partials')

// Use of express():::::::::::::::::::::::::::::::
app.use(express.json())

// staticpath binding:::::::::::::::::::::::::::::::::::

app.use(express.static(staticPath))
app.set('view engine','hbs')

// partialpath binding::::::::::::::::::::::::::::::::::::::::::::::::::
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

// file rendering :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

app.get('/',(req,res)=>{
    res.render('Home')
})

app.get('/Home',(req,res)=>{
    res.render('Home')
})

app.get('/About',(req,res)=>{
    res.render('about')
})


app.get('/Contact',(req,res)=>{
    res.render('Contact')
})

app.get('/Products',(req,res)=>{
    res.render('Products')
})

app.get('/Service',(req,res)=>{
    res.render('Service')
})


// listen on server::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
app.listen(port,()=>{
    console.log(`port run on ${port}`);
})