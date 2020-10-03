import store from "../store/Store";

class LoginService {

    constructor (store) {
        this.store = store
    }

    async login(username, password) {
        const response = await fetch("/api/user/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: username, password: password})
        })

        if (response.ok) {
            let user = await response.json();
            store.setUser(user)
            return user
        }
        store.setUser(null)
        return null;
    }

}

export default new LoginService()

