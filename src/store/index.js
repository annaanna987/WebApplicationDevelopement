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
      console.log('Trying to fetch posts')
      
      //Local JSON fetching from public folder
      fetch('/json/posts.json') 
        .then(res => res.json())
        .then(posts => commit("setPosts", posts))
        .catch(err => console.error(err.message))
      console.log('Fetching posts complete!')   
      }
         
      
      /*
      //Remote API fetching
      return fetch('https://api.jsonbin.io/v3/b/6727ca99e41b4d34e44dc2a9?meta=false')
        .then(res => res.json())
        .then(data => commit("setPosts", data))
        .catch(err => console.error(err.message));
      console.log('Fetching posts complete!')    
    }
      */

  },
  modules: {
  }
})
