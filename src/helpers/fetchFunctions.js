
export let sendGet = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch(e) {
        console.log(e.message || e);
        return [];
    }
}
export let sendPost = async (url, body) => {
    const postInformation = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    };
    try {
        const response = await fetch(url, postInformation);
        console.log(response, 'response')
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e.message || e);
        return {error: 'Ocurrió un error'};
    }
    
}