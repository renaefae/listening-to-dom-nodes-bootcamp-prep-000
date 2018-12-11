const input = document.querySelector('input')
input.addEventListener('keydown', function(e)) 
{
  if (e.which === 71)
 {return e.preventDefault()}
 else{ console.log(e.which)} 
  
}); 
