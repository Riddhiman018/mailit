console.log('Hello');
['hashchange','load'].forEach(ev=>{
    window.addEventListener(ev,()=>{
//        console.log(window.location.hash);
        const chosenOption = window.location.hash.slice(1);
        if(chosenOption=='login'){
            window.location.assign("https://mailitappbyrb.herokuapp.com/");
        }
        if(chosenOption=='register'){
            window.location.assign("https://mailitappbyrb.herokuapp.com/reg");
        }
    })
})
