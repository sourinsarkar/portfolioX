export const navDropDown = async () => {
    const response = await fetch('http://localhost:5173/navDropDown', { method: 'POST' });
    const data = await response.json();
    console.log(data.message);
}