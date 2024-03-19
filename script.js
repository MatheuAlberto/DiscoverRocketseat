function toggleMode(){
    const html = document.documentElement

/* Forma de como a máquina iria ler o código.

    if(html.classList.contains('light')){
       html.classList.remove('light') 
    } else{
        html.classList.add('light')
    }

*/
    html.classList.toggle('light') //já coloca e retira automaticamente o ,light.

    /* usaremos o mesmo comando if/else para substituir imagem*/ 
    const img = document.querySelector("#profile img")
    if(html.classList.contains('light')){
        // se tiver light mode, adiciona a img light
        img.setAttribute('src', './Stylss/avatar-light.png')
        img.setAttribute('alt', 'imagem do Matheus, olhando para o lado esquerdo, usando um cabelo de samurai e imagem preto e branco')
     } else{
        // se não tiver light mode, adiciona a img light
        img.setAttribute('src', '/Stylss/Avatar.png')
     }

}