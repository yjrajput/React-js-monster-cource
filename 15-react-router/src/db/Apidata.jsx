export const Apidata = async () =>{
    try{
       const response =  await fetch('https://www.omdbapi.com/?i=tt3896198&apikey=cc4bfd2c&s=titanic&page=1');
       const data = await (response.json());
       return data
        
    }
    catch(error){console.log(error)}
}