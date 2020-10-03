class LoginService {

    constructor () {
    }

    async login(username, password) {
        console.log("Login", username + "/" + password)
        const response = await fetch("/api/user/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: username, password: password})
        });
        return response.status == 200;
    }

}

export default new LoginService()

