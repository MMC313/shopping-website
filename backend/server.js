const port = 3000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
const app = express()

app.use(cors())

//routes
app.use(express.static('public'))

// Renders my index.html as the homepage on 
app.get('/', (req,res)=>{
  res.render(__dirname +'/index.html')
  
})

//Connects to my MongoDB API
app.get('/results', (req,res)=>{
  let queryData = req.query.search

  var config = {
    method: 'post',
    url: 'https://us-east-1.aws.data.mongodb-api.com/app/data-eddpb/endpoint/data/v1/action/aggregate',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'EeEfMQnJocksl1TPpW2J8h9YnwIuGpfkVuFhpVrNYbKswltZoIjvVyLL331WLBfZ',
    },
    data: loadInfo(queryData)
  };


  function loadInfo(x){
    let data = JSON.stringify({
      "collection": "Inventory",
      "database": "GraphicsCards",
      "dataSource": "Cluster0"
    });
  
    return data
  }

  axios(config)
    .then((response)=>{
      res.json(response.data)
    })
    .catch(function (error) {
        console.log(error);
    });
  
})

app.listen(port, ()=> console.log(`Server running on port:${port}`)) 
