<template>
    <main id="signup">
    <form action="index.html" class="form-container">
        <h1>Welcome to PostIt</h1>
        <p>Sign up</p>
        <input type="text" class="input-field" placeholder="Email" id="email" required>
        <input type="password" class="input-field" placeholder="Password" id="password" required>
        <p><button id="signup-button">Sign up</button></p>
    </form>
    </main>
</template>

<script>
export default {
  name: 'signup'   
}
</script>

<style scoped>
/**Form section**/
.form-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    background-color: white;
    max-width: 500px;
    border-radius: 8px;
}

.form-field {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
}
textarea, input[type="file"] {
    
    width: 100%;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
}
button {
    width: 40%;
    padding: 10px;
    background-color: #2c3e50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
a:hover{
    color:firebrick;
}
button:hover {
    background-color: #1456d9;
}
h1 + a, p + a {
    display: flex;
    justify-content: center;
    text-decoration: none;
    margin-top: 30px;
    font-size: 25px;
    color: aqua;
}
h1, label {
    display: flex;
    justify-content: center;
    text-align: center;
}
p ~ input {
    display: flex;
    justify-content: center;
    text-align: center;
}
h1 ~ p{
    display: flex;
    justify-content: center;
    text-align: center;
}
</style>