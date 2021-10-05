//Author: Kent Pedrocha

// Question 2: Promises

// ● Given the script file callbacks.js, write a script that does the following:
// o Create a method resolvedPromise that is similar to delayedSuccess and resolves a
// message after a timeout of 500ms.
// o Create a method rejectedPromise that is similar to delayedException and rejects an
// error message after a timeout of 500ms.
// o Call both promises separately and handle the resolved and reject results and then output
// to the console

const resolvedPromise = () => {
    //creating promise
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            let success = {'message' : 'delayed success'}
            resolve(success);
        }, 500)
    })
}

const rejectedPromise = () => {
    return new Promise(function(resolve, reject){
    setTimeout(() =>{
        try {
            let errMsg = {'error' : 'delayed exception!'}
            reject(errMsg);
        } catch (e){
            console.error(e);
        }
    }, 500)
    })
}
resolvedPromise().then(success => console.log(success))
rejectedPromise().catch(error => console.error(error))