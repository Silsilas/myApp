const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const postRouter = express.Router();

postRouter.route('/posts')
  .get((req, res) => {
    const response = { hello: 'this is my API' };
    res.json(response);
  });
app.use('/api', postRouter);

app.get('/', (req, res) => {
  res.send('welcome SILAS node API');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

// const {Client} = require("pg")
// const express = require ("express")
// const app = express();
// app.use(express.json())

// const client = new Client({
//     "user": "silas",
//     "password" : "silas",
//     "host" : "willies",
//     "port" : 5432,
//     "database" : "myapp"
// })

// app.get("/", (req, res) => res.sendFile(`${__dirname}/index.html`))

// app.get("/todos", async (req, res) => {
//     const rows = await readTodos();
//     res.setHeader("content-type", "application/json")
//     res.send(JSON.stringify(rows))
// })

// app.post("/todos", async (req, res) => {
//     let result = {}
//     try{

//         const reqJson = req.body;
//         await createTodo(reqJson.todo)
//         result.success= true;
//     }
//     catch(e){
//         result.success=false;
//     }
//     finally{
//         res.setHeader("content-type", "application/json")
//         res.send(JSON.stringify(result))
//     }

// })

// app.delete("/todos", async (req, res) => {
//     let result = {}
//     try{

//         const reqJson = req.body;
//         await deleteTodo(reqJson.id)
//         result.success= true;
//     }
//     catch(e){
//         result.success=false;
//     }
//     finally{
//         res.setHeader("content-type", "application/json")
//         res.send(JSON.stringify(result))
//     }

// })


// app.listen(8080, () => console.log("Web server is listening.. on port 8080"))

// start()

// async function start() {
//     await connect();
//     /*
//     const todos = await readTodos();
//     console.log(todos)
//     const successCreate = await createTodo("Go to trader joes")
//     console.log(`Creating was ${successCreate}`)
//     const successDelete = await deleteTodo(1)
//     console.log(`Deleting was ${successDelete}`)
//     */
// // }
//
// async function connect() {
//     try {
//         await client.connect();
//     }
//     catch(e) {
//         console.error(`Failed to connect ${e}`)
//     }
// }

// async function readTodos() {
//     try {
//     const results = await client.query("select id, text from todos");
//     return results.rows;
//     }
//     catch(e){
//         return [];
//     }
// }

// async function createTodo(todoText){

//     try {
//         await client.query("insert into todos (text) values ($1)", [todoText]);
//         return true
//         }
//         catch(e){
//             return false;
//         }
// }


// async function deleteTodo(id){

//     try {
//         await client.query("delete from todos where id = $1", [id]);
//         return true
//         }
//         catch(e){
//             return false;
//         }
// }
