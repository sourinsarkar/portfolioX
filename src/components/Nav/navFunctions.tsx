export const navDropDown = async () => {
    const response = await fetch('http://localhost:5173', { method: 'POST' });
    if(!response.ok) {
        console.log("ERROR DETECTED");
        return;
    }

    try {
        const data = await response.json();
        console.log(data.message);
    } catch (error) {
        console.log('Failed the parse the required JSON', error);
    }
}