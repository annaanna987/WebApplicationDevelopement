window.onload = function() {
/* Fetch API */
     //fetch('https://jsonplaceholder.typicode.com/posts')
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
        //date = new Date().toLocaleString()        
        let text = document.createElement("p");
        text.innerText = "GROUP_BR";
        footer.appendChild(text);
        document.body.appendChild(footer);
    })
} 