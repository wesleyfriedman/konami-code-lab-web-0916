const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var codeCopy = code.slice();
// var codeCopy = [38]
function init() {
  document.addEventListener('keydown', keydownHandler, false);
}

function keydownHandler(event){
  var key = parseInt(event.detail || event.which)
  console.log(key)
  if (key == codeCopy[0]){
    codeCopy = codeCopy.slice(1, codeCopy.length);
    console.log('match ' + key)
    console.log('length: ' + codeCopy.length)
    if (codeCopy.length === 0) {
      console.log('done')
      document.removeEventListener('keydown', keydownHandler, false);
      alert("YOU DID IT!")
    }
  } else {
    document.removeEventListener('keydown', keydownHandler, false);
  }
}

init()
