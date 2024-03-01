const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>FORM3</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src='main.js'></script>
    <style>
       body {
        margin: 0;
        padding: 0;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    
    }
        .container{
            text-align: center;
            background-color: rgb(243,243,243);
            width: 80%;
            height: 80%;
        }
        .icon{
            margin-top: 3%;
            font-size: 48px;
            color: rgb(98,162,163);
            margin-bottom: 4.5%;
        }
        .big-title{
            color: rgba(0, 0, 0, 0.918);
            font-weight: bolder;
            font-family:Arial, Helvetica, sans-serif;
            font-size: 350%;
            margin-bottom: 3%;
        }
        p{
            color: rgb(82, 82, 82);
            font-size: 150%;
            font-family: Arial, Helvetica, sans-serif;
            margin-bottom: 2%;
        }
        input{
            width: 50%;
            height: 13%;
            border:none;
        }
        ::placeholder{
            color: gray;
            font-size: 150%;
            font-family: Arial, Helvetica, sans-serif;

        }
        button{
            color: rgb(255, 255, 255);
            font-size: 120%;
            background-color: rgba(16, 190, 190, 0.856);
            height: 13%;
            width: 25%;
            border-radius: 5%;
            border: none;
            font-family: Arial, Helvetica, sans-serif;
        }
        
    </style>
</head>
<body>
    <div class="container">
        <div class="icon">
            <img src="https://png2.cleanpng.com/sh/b724ef8b7085f887cd6a511f65fe5e4d/L0KzQYm3U8MyN5x8iZH0aYP2gLBuTflxcJDzfZ9ubXHsfH7pjCgua5DyiOd9ZYKwebT2jwMudJDsh59ubXHsfH68gfJnOWg1TaNvOEK5SHA9WcA2P2M9TaMAMkK3R4OAUMkyOmo2RuJ3Zx==/kisspng-iphone-email-box-computer-icons-logo-email-5abf17051f8268.6905728515224727091291.png" height="50px" width="50px" alt="ok">
        </div>
        <h1 class="big-title">Get the invite</h1>
        <p>Loren ipsum dolor sit amit consetetur adipiscing elit. Aliquam viverra orici ut.</p>
        <input type="text" placeholder="Enter Email">
        <br><br>
        <button>REQUEST INVITE</button>
    </div>
</body>
</html>
`
