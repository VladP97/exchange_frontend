
const fetItems = async () => {

   const response = await fetch(`/books/`);
    const data = await response.json();
    console.log(data)
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
  
};

export default fetItems ;