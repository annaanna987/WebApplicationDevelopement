<template>
  <main id="signup">
    <form class="form-container" @submit.prevent="validatePassword">
      <h1>Welcome to PostIt</h1>
      <p>Sign up</p>
      <input
        type="text"
        class="input-field"
        placeholder="Email"
        id="email"
        required
      />
      <input
        type="password"
        class="input-field"
        placeholder="Password"
        id="password"
        v-model="password"
        required
      />
      <p><button id="signup-button" type="submit">Sign up</button></p>
    </form>
  </main>
</template>

<script>
export default {
  name: "signup",
  data() {
    return {
      password: "",
    };
  },
  methods: {
    validatePassword() {
      // Password validation rules
      const errors = [];
      if (this.password.length < 8 || this.password.length > 15) {
        errors.push("Password must be 8-15 characters long.");
      }
      if (!/[A-Z]/.test(this.password)) {
        errors.push("Password must contain at least one uppercase letter.");
      }
      if (!/[a-z]/.test(this.password)) {
        errors.push("Password must contain at least one lowercase letter.");
      }
      if (!/\d/.test(this.password)) {
        errors.push("Password must contain at least one number.");
      }
      if (!/[_]/.test(this.password)) {
        errors.push("Password must contain _.");
      }

      // Show popup if errors exist
      if (errors.length > 0) {
        alert(`The password is invalid:\n\n${errors.join("\n")}`);
      } else {
        // Redirect to the main page on success
        alert("Sign-up successful!");
        window.location.href = "index.html";
      }
    },
  },
};
</script>

<style scoped>
/** Form section **/
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

.input-field {
  width: 100%;
  margin-bottom: 15px;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #1456d9;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #103ea1;
}

h1 {
  text-align: center;
  font-weight: bold;
}

p {
  text-align: center;
}

p button {
  display: inline-block;
  margin-top: 10px;
}
</style>
