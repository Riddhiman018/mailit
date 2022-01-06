console.log('Hello');
['hashchange','load'].forEach(ev=>{
    window.addEventListener(ev,()=>{
//        console.log(window.location.hash);
        const chosenOption = window.location.hash.slice(1);
        if(chosenOption=='login'){
            window.location.assign("http://127.0.0.1:8000/");
        }
        if(chosenOption=='register'){
            window.location.assign("http://127.0.0.1:8000/reg");
        }
    })
})