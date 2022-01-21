function search_livres() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('livres');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}



// const api = "https://api.airtable.com/v0/appAkNzHk88ighgEZ/Books?&api_key=keyRubrNJNZ6T0NbN"

const api = "https://api.airtable.com/v0/appoPuDsKbL0WoM6n/Books?&api_key=keye4C3NOPBC19U7j"


fetch(api)
  .then(res => res.json())
  .then(data => {
    // console.log(data);
    printData(data.records);
  })

const printData = (data) => {
  data.map( (data, i) => {
    //const url = data.fields.Cover[0].url;
    // const message = "Post #" + i + " Titre : " + 
    //             data.fields.Titre + " Topic : " +
    //             data.fields.Topic + " Auteur : " +
    //             data.fields.Auteur + " Editeur : " +
    //             data.fields.Editeur 
    //             const url = data.fields.Cover[0].url;
                
    // writeData(message,url);

    let src, title, topics, author, editor
    topics = ''

    title = data.fields.Titre
    data.fields.Topic.forEach(topic => {
        topics = topics + topic + ' '
    })
    src = data.fields.Cover ? data.fields.Cover[0].url : ''
    author = data.fields.Auteur 
    editor = data.fields.Editeur 

    newArticle = document.createElement('article')
    let articleTitle = document.createElement('h2')
    let articleImg = document.createElement('img')
    let articleAuteur = document.createElement('p')
    let articleEditeur = document.createElement('p')
    let articleTopic = document.createElement('p')

    articleTitle.innerHTML = title
    articleImg.src = src
    articleImg.alt = "livre"
    articleTopic.innerHTML = topics
    articleAuteur.innerHTML =  author
    articleEditeur.innerHTML =  editor
    
    
    newArticle.appendChild(articleTitle)
    newArticle.appendChild(articleImg)
    newArticle.appendChild(articleTopic)
    newArticle.appendChild(articleAuteur)
    newArticle.appendChild(articleEditeur)

    document.body.appendChild(newArticle)

  })
}

// const writeData = (data, url) => {
//   const newContent = document.createElement("article");
//   newContent.innerText = data;
//   let div = document.querySelector("#grid");
//   div.appendChild(newContent);

//   const img = document.createElement('img');
//   img.setAttribute('src', url);
//   document.body.appendChild(newContent).appendChild(img);
  
// }

// articles.forEach(article => {
//     let src, title, topics, author, editor

//     title = article.fields.Titre
//     article.fields.Topics.forEach(topic => {
//         topics = topics + topic + ' - '
//     })
//     src = article.fields.Cover[0].url

//     newArticle = document.createElement('article')
//     let articleImg = document.createElement('img')
//     articleImg.setAttribute.src = src
//     articleImg.setAttribute.alt = "fépachié"
//     newArticle.appendCHild(articleImg)
// })
