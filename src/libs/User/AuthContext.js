export const SignupHandler = async(credentials) => {
    try {
        const res = await fetch(`http://localhost:5000/api/auth/signup`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({...credentials})
        })

        const response = await res.json();

        return response;
    }catch (err) {
        return new Error("Internal Server Error")
    }
}
