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
        });

        if (response.ok) {
            let userInfo = await response.json();
            store.setUserInfo(userInfo)
            return userInfo
        }
        store.setUserInfo(null)
        return null;
    }

    async logout() {
        const response = await fetch("/api/user/logout", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            store.setUserInfo(null);
        }
    }

    async refreshToken() {
        const response = await fetch("/api/user/refresh", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            let userInfo = await response.json();
            store.setUserInfo(userInfo);
        } else {
            store.setUserInfo(null);
        }
    }

    async getUser(username) {
        const response = await fetch("/api/user/users/" + username, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.ok) {
            let user = await response.json();
            console.log("Fetched user:", user);
            return user;
        } else {
            console.log("Error fetching user");
        }
    }

    async startTokenRefresher() {
        this.refreshToken();

        const _this = this;
        window.setTimeout(function() {
            if(store.loggedIn) {
                _this.refreshToken();
            }
            _this.startTokenRefresher();
        },  20 * 1000)
    }
}

export default new LoginService()

