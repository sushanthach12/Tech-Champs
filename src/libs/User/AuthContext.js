export const SignupHandler = async(credentials) => {
    try {
        const res = await fetch(`${process.env.NEXT_BACKEND_URL}/api/auth/signup`, {
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
