let app = document.querySelector(".app")

async function Fun(str) {
    let data = await fetch(`http://api.alquran.cloud/v1/${str}`);

    return data.json();
}

async function GetData() {
    let sura = await Fun("surah");

    if (sura) {
        let suraArr = sura.data;
      console.log(sura.data);  
      for (let i = 0; i < suraArr.length; i++) {
        let div = document.createElement('div');
        let h1 = document.createElement('h1');
        let button = document.createElement('button');
        let cartNumber = document.createElement('h2')
        h1.textContent = suraArr[i].englishName;
        cartNumber.textContent = suraArr[i].number;
        button.innerHTML = 'Ayah';
        div.appendChild(h1);
        div.appendChild(cartNumber);
        div.appendChild(button);
        div.classList.add('app__div');
        button.addEventListener('click', function(){
            localStorage.setItem('number',suraArr[i].number);
            window.location.href = `assets/pages/oyat/oyat.html?number=${suraArr[i].number}`;
        })
        app.appendChild(div);
      }
    }
}



GetData();