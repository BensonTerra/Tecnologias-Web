function getFormvalue() {
  const dados = document.getElementById('form1');

  for (let i = 0; i < dados.length; i++) 
  {
    if (dados.elements[i].value !== 'Submit') 
    {
      console.log(dados.elements[i].value);
    }
  }

  return false;
}
