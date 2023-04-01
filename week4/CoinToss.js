let head = 1;
let tail = 0;
const coinToss= () =>{ 
    let flip = Math.floor(Math.random()*2);
    if(flip == head){
        return "Heads";
    }else if(flip == tail){
        return "Heads";
    };
}
function fiveHeads() {
        return new Promise( (resolve, reject) => {
            let attempts = 0;
            let headCount = 0;
            for(i = 0;headCount < 5;i++ ){
                attempts++;
                let result = coinToss();
                console.log(result, "was fliped");
                if(result == "Heads"){
                    headCount++;
                } else if(i == 99){
                reject("At 100 filps and failed to hit 5 heads in a row :(")
                break; 
                }else {
                    headCount = 0;
                }
            }if(headCount == 5){
                resolve("5 heads in a row! ;)")
            }
        });
    }
    fiveHeads()
        .then( res => console.log(res) )
        .catch( err => console.log(err) );
    console.log( "When does this run now?" );

