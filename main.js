// GET REQUEST
function getTodos() {
    axios
    .get('https://jsonplaceholder.typicode.com/todos')
    .then((res)=>showOutput(res))
    .catch((error)=>console.log(error));
  }
  
  // POST REQUEST
  function addTodo() {
    axios.post('https://jsonplaceholder.typicode.com/todos',{title:'new Data',completed:false})
    .then(res =>showOutput(res))
    .catch((error)=>console.log(error));
  }
  
  // PUT/PATCH REQUEST
  function updateTodo() {
    axios.patch('https://jsonplaceholder.typicode.com/todos/1',{title:'newrey',completed:true})
    .then(res =>showOutput(res))
    .catch((error)=>console.log(error));
  }
  
  // DELETE REQUEST
  function removeTodo() {
    axios.delete('https://jsonplaceholder.typicode.com/todos/1')
    .then(res =>showOutput(res))
    .catch((error)=>console.log(error));
  }
  
  // SIMULTANEOUS DATA
  function getData() {
    axios.all([axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),axios.get('https://jsonplaceholder.typicode.com/photos?_limit=5')])
    .then(res=>{
        console.log(res[0]);
        console.log(res[1]);
        
        showOutput(res[1]);
    })
  }
  
  // CUSTOM HEADERS
  function customHeaders() {
    const config = {
        headers:{
            'Content-Type':'application/json',
            Authorization:'some token'
        }
    }

    axios.post('https://jsonplaceholder.typicode.com/todos',{title:'new Data',completed:false},config)
    .then(res =>showOutput(res))
    .catch((error)=>console.log(error));
    
  }
  
  // TRANSFORMING REQUESTS & RESPONSES
  function transformResponse() {
    console.log('Transform Response');
  }
  
  // ERROR HANDLING
  function errorHandling() {
    console.log('Error Handling');
  }
  
  // CANCEL TOKEN
  function cancelToken() {
    console.log('Cancel Token');
  }
  
  // INTERCEPTING REQUESTS & RESPONSES

  axios.interceptors.request.use(
    config=>{

        console.log(`${config.method.toUpperCase()} request sent to ${config.url} at ${new Date().getHours()} hours ${new Date().getMinutes()} minutes`);
        return config;
    },
    error=>{
        return Promise.reject(error);
    }
  );
  
  // AXIOS INSTANCES
  
  // Show output in browser
  function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3"> 
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }
  
  // Event listeners
  document.getElementById('get').addEventListener('click', getTodos);
  document.getElementById('post').addEventListener('click', addTodo);
  document.getElementById('update').addEventListener('click', updateTodo);
  document.getElementById('delete').addEventListener('click', removeTodo);
  document.getElementById('sim').addEventListener('click', getData);
  document.getElementById('headers').addEventListener('click', customHeaders);
  document
    .getElementById('transform')
    .addEventListener('click', transformResponse);
  document.getElementById('error').addEventListener('click', errorHandling);
  document.getElementById('cancel').addEventListener('click', cancelToken);