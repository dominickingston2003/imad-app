console.log('Loaded!');
var commentInput =document.getElementById('comment')
var comment = commentInput.value
var submit = document.getElementById('submit_btn')
submit.onclick = function() {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function(){
      if(request.readyState === XMLHttpRequest.DONE){
          if(request.status === 200){
              var names = request.responseText;
              names = JSON.parse(names);
              var list='';
              for(var i=0;i<name.length;i++){
                  list += '<li>' + name[i] + '</li>';
              }
              var ul = document.getElementById('show')
              ul.innerHTML = list;
          }
      }
  }
  request.open('GET','http;//http://dominickingston2003.imad.hasura-app.io/submit-name?name=' + name,true);
  request.send(null);
};
