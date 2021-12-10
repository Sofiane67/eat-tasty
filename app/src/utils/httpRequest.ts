export const sendHttpRequest = async (url: string, init: {method:string} | {method:string, headers:{}, body: string}) => {
    console.log(url, init)
    try {
        const res = await fetch(url,init);
        const data = await res.json();
        return data; 
    } catch (error) {
        console.log(error);
    }
    
}