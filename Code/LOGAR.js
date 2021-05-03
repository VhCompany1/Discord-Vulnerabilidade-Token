console.log(`seu token é ${document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token}`)    

setTimeout(function() {
    const token = `"token-aqui"`
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