window.onload = function() {
/* Fetch API */
     //fetch('https://api.jsonbin.io/v3/b/6727ca99e41b4d34e44dc2a9?meta=false')
        fetch('posts.json') //Fetch data from local JSON file
        .then((response) => response.json())
        .then(json => {                      
            let asideL = document.createElement("aside");      
            let main = document.createElement("main"); 
            let asideR = document.createElement("aside");      

            let divPosts = document.createElement("div");
                divPosts.id = "postsContainer";            
            document.body.appendChild(main);  
            main.appendChild(asideL);
            main.appendChild(divPosts);
            main.appendChild(asideR);              

            for (let i = 0; i < json.length; i++) {
                let article = document.createElement("article");                
                let header = document.createElement("header");                    
                let divUserInfo = document.createElement("div");
                    divUserInfo.id = "userInfo";                      
                
                let posterLogo = document.createElement("img");
                    posterLogo.src = 'img/userLogoDefault.png';                    
                let posterName = document.createElement("p");
                    posterName.className = 'posterName';
                    posterName.innerText = json[i].posterName;                        
                let postTime = document.createElement("p");
                    postTime.className = 'postTime';
                    postTime.innerText = json[i].postTime;                
                
                divUserInfo.appendChild(posterLogo);
                divUserInfo.appendChild(posterName);
                header.appendChild(divUserInfo);
                header.appendChild(postTime);                    
                                       
                let postPicture = document.createElement("img");
                    postPicture.src = json[i].postImg;                    
                let postText = document.createElement("p");
                    postText.innerText = json[i].postText;                    
                let thumbUpImg = document.createElement("img");
                    thumbUpImg.setAttribute("src",'img/thumb-up.png');
                    thumbUpImg.className = 'thumbUp';
                article.appendChild(header);  
                article.appendChild(postPicture);
                article.appendChild(postText);
                article.appendChild(thumbUpImg);      
                divPosts.appendChild(article);          
            }     
        }) 
     .catch(err => {
        let errDiv = document.createElement("div");
        errDiv.className = 'post';
        errDiv.innerText = err;
        document.body.appendChild(errDiv);
    }) 
     .finally(() => {
        let footer = document.createElement("footer");
        let text = document.createElement("p");
        text.innerText = "GROUP_BR";
        footer.appendChild(text);
        document.body.appendChild(footer);
        // Lisa klikkimise sündmus kasutaja logo külge
        document.getElementById('userLogo').addEventListener('click', toggleDropdown);
    })
    // Funktsioon, mis toggleb (vahetab) rippmenüü nähtavust
    function toggleDropdown(event) {
        event.preventDefault(); // Takista linki vaikimisi toimingut
        const dropdownMenu = document.getElementById('dropdownMenu');
    
        // Lisa või eemalda 'show' klass, et kuvada või peita rippmenüü
        dropdownMenu.classList.toggle('show');
    }
    // Sulge rippmenüü, kui klikitakse väljaspool
    window.addEventListener('click', function(event) {
        const dropdownMenu = document.getElementById('dropdownMenu');
        const userLogo = document.getElementById('userLogo');
    
        // Kontrolli, kas klikk oli kasutaja logo või rippmenüü väliselt!!!
        if (!userLogo.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove('show'); // Eemalda 'show' klass, et rippmenüü sulgeda
        }
    });

} 








 
