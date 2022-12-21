let body = document.querySelector('body');
let ul = document.createElement('ul');
body.appendChild(ul);

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(function(json){
    /*
        json as a parameter is an array of post objects. 
        Find every post created by a user with the id 
        of 7 and show each of this user's post's
        body on the user interface from the 
        index.html file. 

        body is a property of a post object set to a
        string value.
        
        Hint: use console.log(json) to analyze the
        data structure
     */
    function body(arr, id){
      for (let i = 0; i < arr.length; i++){
        if (arr[i].userId === id){
          let li = document.createElement('li');
          li.innerText = arr[i].body;
          ul.appendChild(li);
        }
      }
    }
    body(json, 7);
  })