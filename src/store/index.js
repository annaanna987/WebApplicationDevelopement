import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: []
  },
  getters: {
  },
  mutations: {
    addLike(state, postId) {
      const post = state.posts.find(post => post.id == postId);
      post.postLikes = post.postLikes + 1;
    },
    setPosts(state, posts) {
      state.posts = posts;
    },
    resetLikes(state) {
      state.posts.forEach(post => {
        post.postLikes = 0;
      })
    }
  },
  actions: {
    fetchPosts({ commit }) {
      console.log('fetching posts')
      /*
      // Local JSON
      fetch('http://localhost:3000/posts')
      .then(res => res.json())
      .then(posts => commit("setPosts", posts))
      .catch(err => console.error(err.message))
      */

      return fetch('https://api.jsonbin.io/v3/b/6727ca99e41b4d34e44dc2a9?meta=false')
        .then(res => res.json())
        .then(data => commit("setPosts", data))
        .catch(err => console.error(err.message));
    }

  },
  modules: {
  }
})
