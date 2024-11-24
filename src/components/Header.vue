<template>
    <nav>
      <div>
      <header class="navHeader">
        <div>
          <p><a href="/"><router-link to="/">Home</router-link></a></p>
          <p>|</p>
          <p><a href="/addPost"><router-link to="/login">Sign up</router-link></a></p>
        </div>        
        <div class="dropdown">
          <a href="#" class="userLogo" id="userLogo">
            <img class="userLogo" src="@/assets/img/userLogoDefault.png" alt="User Logo">
          </a>
          <div class="dropdown-content" id="dropdownMenu">
            <a href="/login"><p class="userName">Prime User</p></a>
            <p class="userEmail">pm_01@users.net</p>
            <a href="/login">Logout</a>
          </div>
        </div>
      </header>
    </div>
    </nav>
</template>

<script type="text/javascript" src="@/assets/js/dropdown.js"></script>



<style>
.navHeader{
    display: flex;
    justify-content:space-between;                    
    background: linear-gradient(90deg, #2e4e41, #01c080);
    background-color:rgb(31, 63, 43);
    border-radius: 10px;
    border: 2px solid #747474;
    box-shadow: 2px 3px 3px burlywood;
}
header > div {
    display: flex;
    margin-left: 20px;
}
div > p{
    font-size: 32px;
    align-self: flex-start;
    text-decoration: none;
}
div > p a{    
    color: #fac85c;
    text-decoration: none;
}
div > p a:hover{
    background-color: darkslategrey;
    color:#73AD21;
}
header > p{
    align-self: flex-end;
}
.userLogo{        
    display: flex;        
    width: 72px;
    height: 72px;
    margin-right: 20px;
    margin-top: 8px;
}
nav a.router-link-exact-active {
  color: #42b983;
}
/** Dropdown menu on navigation header**/
.dropdown {
    display: flex;
    position: relative;
}

.dropdown-content {
    display: none;
    position: absolute;
    top: 100%;
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    border-radius: 5px;
    width: 250px;
    overflow: hidden;
}

.dropdown-content.show {
    display: block;
    left: -150px;
}

.dropdown-content p, .dropdown-content a {
    display: block;
    margin: 0;
    padding: 10px 20px;
    color: black;
    text-decoration: none;
    font-size: 24px;
    border-bottom: 1px solid #dcdcdc; /* Line between each option */
    transition: background-color 0.3s, color 0.3s;
}

.dropdown-content p:last-child, .dropdown-content a:last-child {
    border-bottom: none; /* Remove line under the last option */
}

.dropdown-content p:hover, .dropdown-content a:hover {
    background-color: darkslategrey;
    color: #73AD21;
}
</style>