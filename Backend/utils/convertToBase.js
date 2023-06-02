const ConvertToBase64 = async(imageUrl) => {
    try{
        const reader = new FileReader();
        reader.readAsDataURL(imageUrl);
        reader.onload = () => {
            console.log(reader.result);
            return reader.result;
        }
        reader.onerror = (error) => {
            console.log("Error: " + error);
        }
    
    }catch(err) {

    }
}

module.exports = ConvertToBase64;