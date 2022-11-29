const passwordBox = document.querySelector('.password-box input'),
  copyIcon = document.querySelector('.password-box .copy-icon'),
  rangeInput = document.querySelector('.range-box input'),
  rangeSlider = document.querySelector('.range-box .slider-numer'),
  generateBtn = document.querySelector('.generate-button')

  let allCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789^!$%&|[](){}:;.,*+-#@<>~"


  // terceiro passo é eu criar a função que gera a senha q é ativada sempre que a pagina é recarregada
  function generatePassword(){
    let newPassword = ''

    // loop que gera cada caracter 
    for (let i = 0; i < rangeInput.value; i++) {
      let randomNum = Math.floor(Math.random() * allCharacters.length)
      newPassword +=  allCharacters[randomNum]
    }
    //aqui eu defini que a senha seja vista no display
    passwordBox.value = newPassword
    copyIcon.classList.replace("uil-file-check-alt",  "uil-copy")
  }

  // primeiro passo é deixar o rangeInput funional p/ definir a qnt de caracteres na minha senha
  rangeInput.addEventListener('input', () => {
    const tryIt = rangeSlider.innerText = rangeInput.value

    //eu chamo a função aqui pq eu preciso que quando eu defino um range, isso me retorne a senha com o n° de caracteres definidos
    generatePassword()
  })

  //função para copiar a senha 
  copyIcon.addEventListener('click', () => {
    //A propriedade Clipboardda interface writeText() grava a string de texto especificada na área de transferência do sistema. 
    navigator.clipboard.writeText(passwordBox.value)
    copyIcon.classList.replace("uil-copy", "uil-file-check-alt")
  })

  generatePassword()
  // segundo passo é criar ação no meu botão para chamar a função que cria a senha
  generateBtn.addEventListener('click', generatePassword)