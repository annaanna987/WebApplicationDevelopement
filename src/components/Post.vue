<template>
    <div class="Post">
        <article>
            <header>
                <div id="userInfo">
                    <img src="@/assets/img/userLogoDefault.png">
                    <p class="posterName">{{ post.posterName }}</p>
                </div>
                <p class="postTime">{{ post.postTime }}</p>                
            </header>
            <img :src="post.postImg">
            <p>{{ post.postText }}</p>
            <div id="postPopularity">
            <button @click="addLike">
                <img src="@/assets/img/thumb-up.png" class="thumbUp">
            </button>
            <p class="numberOfLikes">{{ post.postLikes }}</p> 
            </div>          
        </article>
    </div>
</template>


<script>
export default {
    props: {
    post: {
      type: Object,
    }
  },
  methods: {
    addLike() {
      this.$store.commit("addLike", this.post.id);
    },
  },
}        
</script>


<style scoped>
/**Article content section**/
article{
    width: 70%;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    border:1px dotted #21ad81;
    border-radius: 50px;
    box-shadow: 4px 3px 3px rgb(17, 12, 12);
}
article > header{   
    display: flex;
    justify-content: space-between; 
    border-radius: 50px;
    background-color: #21ad60;   
    box-shadow: 2px 3px 3px rgb(255, 227, 128);
}

#userInfo ~ p{
    display: flex;
    font-family:Arial, Helvetica, sans-serif;
    font-size: 32px;
    color: rgb(59, 59, 59);
    text-align: left;
}
#userInfo > img{    
    display: flex;
    height: 48px;
    margin-left: 10px;
    margin-top: 24px;
}
header ~ p{
    font-size: 28px;
    margin-left: 25px;
}
.postTime{
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 20px;
    margin-right: 20px;
    color: #FFF;
    background-color:#21ad60;   
}
article > img{
    width: 100%;
    border-radius: 20px;
    margin-top: 10px;
    box-shadow: 2px 3px 3px burlywood;
}
article > p {
    color:#cca700;
    font-weight: 600;
}
.thumbUp{
    display: flex;
    margin-left: 50px;
    margin-bottom: 20px;
    width: 42px;
    box-shadow: 4px 6px 6px #73AD21;
}
#postPopularity {
  display: flex;
  flex-direction: row;
  align-items: baseline;
}
button{
    border: none;
    cursor: pointer;
    background-color: inherit;
}
button:active{
    transform: scale(0.95);
    background-color: inherit;
}
.numberOfLikes{
    box-shadow: 2px 3px 3px #73AD21;    
    color:#ffffff;
    background-color: #73AD21;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 24px;
}
</style>