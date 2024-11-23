<template>    
    <main>
        <aside></aside>        
        <div id="postsContainer">
            <div v-if="posts.length == 0"  class="loading">
                    Loading posts ...
            </div>
            <div v-else v-for="post in posts" :key="post.id" class="postinfo">
                <Post :post="post" />
            </div>
            <button @click="resetLikes" class="resetButton">Reset Likes</button>
        </div>  
        <aside></aside>              
    </main>    
</template>

<script>
import Post from '@/components/Post.vue';

export default {
    components: {
    Post,
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  },
  mounted() {
    this.$store.dispatch('fetchPosts');
    /*
    // Local JSON
    fetch('http://localhost:3000/posts')
      .then(res => res.json())
      .then(data => this.posts = data)
      .catch(err => console.error(err.message))
    */
  },
  methods: {
    resetLikes() {
      this.$store.commit("resetLikes");
    },
  },
}   
</script>

<style scoped>
main{
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-top: 5px;
    justify-content: center;
}
aside{
    display: flex;
    padding: 30px;
    height: auto;
    width: 15%;
    background-color: rgb(10, 150, 89);
    border-radius: 20px;
    box-shadow: 4px 3px 3px rgb(12, 17, 14);   
}
#postsContainer{
    display: flex;
    flex-direction: column;
}
.resetButton{
  display: flex;
  justify-content: center;
  width: 60%;
  margin: auto;
  margin-top: 10px;
  color:white;
  font-size: 24px;
  background: linear-gradient(90deg, #2e4e41, #01c080);
}
</style>