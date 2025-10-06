const express=require ("express")
const app=express()

app.get('/ping',(req,rep)=>{rep.send("pong")});
app.listen(5200,()=>{"pornit http://localhost:5200"})