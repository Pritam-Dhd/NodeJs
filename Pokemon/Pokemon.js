// ❗Third Party module of pokemon
const http = require("http");
const pokemon = require("pokemon");
const PORT = 4000;
const hostname = "localhost";

const server = http.createServer((req, res) => {
    const allPokemon = pokemon.all();
    const Pokemon = allPokemon.map((p) => `<li>${p}</li>`).join("");
    
    if(req.url==="/" || req.url==="/home"){
        res.end(
            `<!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Pokemon</title>
                </head>
                <body>
                    <h1>Pokemon List</h1>
                    <ol>
                    ${Pokemon} 
                    </ol>
                </body>
            </html>`
          );
    }
    else{
        res.end(" <h1>404 Page Not Found</h1>");
    }
});

server.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});
