document.getElementById('submit-button').addEventListener('click', alertName)

function alertName (){
  let name = document.getElementById('name').value;
  alert(name);
}