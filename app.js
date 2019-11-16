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

const { Client } = require('pg')
const client = new Client()?
// await client.connect()
// const app = express();
app.use(express.json())

const client = new Client({
    'user': 'postgres',
    'password' : 'star2030',
    'host' : 'willies',
    'port' : 5432,
    'database' : 'myapp'
})

// app.get("/", (req, res) => res.sendFile(`${__dirname}/index.html`))

app.get("/posts", async (req, res) => {
    const rows = await readPosts();
    res.setHeader("content-type", "application/json")
    res.send(JSON.stringify(rows))
})

app.post("/posts", async (req, res) => {
    let result = {}
    try{

        const reqJson = req.body;
        await createTodo(reqJson.post)
        result.success= true;
    }
    catch(e){
        result.success=false;
    }
    finally{
        res.setHeader("content-type", "application/json")
        res.send(JSON.stringify(result))
    }

})

app.delete("/posts", async (req, res) => {
    let result = {}
    try{

        const reqJson = req.body;
        await deleteTodo(reqJson.id)
        result.success= true;
    }
    catch(e){
        result.success=false;
    }
    finally{
        res.setHeader("content-type", "application/json")
        res.send(JSON.stringify(result))
    }

})


app.listen(8080, () => console.log("Web server is listening.. on port 8080"))

start()

async function start() {
    await connect();

    const posts = await readPosts();
    console.log(todos)
    const successCreate = await createPost("Go to trader joes")
    console.log(`Creating was ${successCreate}`)
    const successDelete = await deletePost(1)
    console.log(`Deleting was ${successDelete}`)

}

async function connect() {
    try {
        await client.connect();
    }
    catch(e) {
        console.error(`Failed to connect ${e}`)
    }
}

async function readPosts() {
    try {
    const results = await client.query("select id, text from todos");
    return results.rows;
    }
    catch(e){
        return [];
    }
}

// async function createTodo(postText){

    try {
        await client.query("insert into post (text) values ($1)", [postText]);
        return true
        }
        catch(e){
            return false;
        }
}


async function deletePost(id){

    try {
        await client.query("delete from todos where id = $1", [id]);
        return true
        }
        catch(e){
            return false;
        }
}
