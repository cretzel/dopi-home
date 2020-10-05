class Store {

    constructor() {
        this.userInfo = null;
        this.loggedIn = this.userInfo != null
    }

    setUserInfo(userInfo) {
        if (userInfo) {
            this.userInfo = userInfo
            this.loggedIn = true
        } else {
            this.userInfo = null
            this.loggedIn = false
        }
    }

}

export default new Store()