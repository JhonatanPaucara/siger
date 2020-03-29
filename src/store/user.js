const store = {
  state: {
    currentUser: null
  },
  getters: {
    getCurrentUser(state) {
      return state.currentUser;
    }
  },
  mutations: {
    login(state, user) {
      state.currentUser = user;
    }
  },
  actions: {
    loginWithEmail(credentials) {
      console.log(credentials);
      return new Promise(resolve => {
        resolve();
      });
    },
    loginWithFacebook() {
      return new Promise(resolve => {
        resolve();
      });
    },
    loginWithGoogle() {
      return new Promise(resolve => {
        resolve();
      });
    },
    logout() {
      return new Promise(resolve => {
        resolve();
      });
    },
    createUser(newUser) {
      console.log(newUser);
      return new Promise(resolve => {
        resolve();
      });
    }
  }
};

export default store;
