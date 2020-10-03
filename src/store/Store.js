class Store {

    constructor() {
        this.user = this.getDopiSessionAttribute("user")
        this.loggedIn = this.user != null
    }

    setUser(user) {
        console.log("setUser", user)
        if (user) {
            this.user = user
            this.loggedIn = true
            this.setDopiSessionAttribute('user', user)
        } else {
            this.user = null
            this.loggedIn = false
            this.setDopiSessionAttribute('user', null)
        }
    }

    setDopiSessionAttribute(key, value) {
        var dopi = sessionStorage.getItem('dopi');
        if (!dopi) {
            dopi = {}
        } else {
            dopi = JSON.parse(dopi)
        }
        dopi[key] = value
        sessionStorage.setItem('dopi', JSON.stringify(dopi))
    }

    getDopiSessionAttribute(key) {
        var dopi = sessionStorage.getItem('dopi');
        if (!dopi) {
            return null
        } else {
            dopi = JSON.parse(dopi)
        }
        return dopi[key];
    }

}

export default new Store()