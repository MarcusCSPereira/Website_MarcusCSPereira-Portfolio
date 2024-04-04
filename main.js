function getProjects(){
    const urlGitHub = 'https://api.github.com/users/MarcusCSPereira/repos'
    var loadingElement1 = document.getElementById('loading1')
    var loadingElement2 = document.getElementById('loading2')

    fetch(urlGitHub,{
        method: 'GET',
    })
        .then((response) => response.json())
        .then((response) => {
            showProjects(response)
            loadingElement1.style.display = 'none'
            loadingElement2.style.display = 'none'
        })
        .catch((e) => {
            console.log(`Error -> ${e}`)
        })
}

function showProjects(data){
    var listElement1 = document.getElementById('my-studies-list')
    var listElement2 = document.getElementById('my-projects-list')
    for(let i = 0; i < data.length; i++)
    {
        let div = document.createElement("div")
        let a = document.createElement("a")
        a.href = data[i]['clone_url']
        a.target = '_blank'
        a.title = data[i]['description']
        let linkText = document.createTextNode(data[i]['name']);
        if(data[i]['name'] != 'MarcusCSPereira' && data[i]['name'].includes('Website') == false && data[i]['name'].includes('Project') == false){
          a.appendChild(linkText);
          div.appendChild(a)
          listElement1.appendChild(div)
        }else if(data[i]['name'] != 'MarcusCSPereira'){
            a.appendChild(linkText);
            div.appendChild(a)
            listElement2.appendChild(div)
        }
    }
}
getProjects()

document.addEventListener('DOMContentLoaded', () => {
  new TypeIt('.animated', {
    speed: 150,
    loop: true
    }).type('Olá, me chamo <strong>Marcus César</strong>!', {delay: 400}).delete(28).type('Sou um <strong>Full-Stack</strong> Developer!', {delay: 400}).delete(28).type('<strong>Bem-vindo</strong> ao meu <strong>portfólio</strong>!', {delay: 400}).delete(27).go();
});