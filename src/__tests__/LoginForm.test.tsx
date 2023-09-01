import axios from 'axios';

test("check if the apikey is valid", async ()=>{
    const apiUrl = 'https://api.sallinggroup.com/v2/stores?country=DK&page=1&per_page=10&zip=8220';
    const response = await axios.get(apiUrl,{
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_SALLING_API_KEY}`
        }})
    expect(response.status).toBe(200);
});


