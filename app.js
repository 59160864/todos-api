const express=require('express')
const app = express()
const port = 3000

app.use(express.json())

let todos=[
    {
        id:1,title:'Sample todo', completed:false
    },
    {
        id:2,title:'Completed Sample todo', completed:true
    }
]
app.get('/todos',(req,res)=>{
    res.send(todos)
})
app.post('/todos',(req,res)=>{
    let title=req.body.title
    let todo = {title:title,completed:false,id:todos.length+1}
    todos.push(todo)
    res.status(201).send(todo)

})
app.get('/todos/:id',(req,res)=>{
    let id = req.params.id
    let result = todos.filter(todo =>todo.id.toString()===id)
    let todo=result[0]
    res.send(todo)
})
app.delete('/todos/:id',(req,res)=>{
    let id =req.params.id
    delete todos[id]
    res.send("Delete Complete")
})
app.listen(port,()=>{
    console.log('Todo-API started at '+ port)
})
/*const express=require('express')
const app = express()
const port = 3000

app.use(express.json())

let pokemons=[]

app.get('/hello',(req,res)=>{
    res.send({ messenge: 'Hello Pokemon' })
})

app.get('/pokemons',(req,res)=>{
    res.send(pokemons)
})



app.listen(port,()=>{
    console.log('Pokemon API Server started at '+port)
})*/