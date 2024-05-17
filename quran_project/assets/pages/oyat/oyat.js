const urlParams = new URLSearchParams(window.location.search)
let app2 = document.querySelector(".app__oyat")
let article = document.querySelector(".head__article")
let englishUser = document.getElementById("en")
const UserNumber = urlParams.get("number");

console.log(UserNumber);










function Fun(str, selectedValue) {
    try {
        if (selectedValue === "") {
            return fetch(`http://api.alquran.cloud/v1/surah/${str}`).then(response => response.json());
        } else {
            return fetch(`http://api.alquran.cloud/v1/surah/${str}/${selectedValue}`).then(response => response.json());
        }
    } catch (error) {
        console.error('Ошибка при парсинге JSON:', error);
        throw error;
    }
}

async function GetOyat() {
    try {
        let selectedValue = englishUser.value;
        let oyat = await Fun(UserNumber, selectedValue);
        console.log(oyat);

        // Очистить старый контент
        article.innerHTML = '';
        app2.innerHTML = '';

        if (oyat) {
            // console.log(oyat.data);
            console.log(oyat.data.ayahs);
            let h1 = document.createElement('h1');
            for (let i = 0; i < oyat.data.ayahs.length; i++) {
                // console.log(oyat.data.ayahs[i].text);
                let div = document.createElement('div');
                let p = document.createElement('p');
            
                p.textContent = oyat.data.ayahs[i].text;
                h1.textContent = oyat.data.englishName;
                article.appendChild(h1);
                div.appendChild(p);
                app2.appendChild(div);
                if (oyat.data.edition && oyat.data.edition.format === 'audio') {
                    // console.log('Это аудио.');
                    let audio = document.createElement('audio')
                    audio.src  = oyat.data.ayahs[i].audio;
                    audio.controls = true;
                    app2.appendChild(audio)
                    // console.log('Ссылка на звук:', oyat.data.ayahs[i].audio);
                }
            }
           
        }
    } catch (error) {
        console.log(error);
    }
}

englishUser.addEventListener('change', GetOyat);
document.addEventListener('DOMContentLoaded', GetOyat);
