let Cities = document.getElementById("city")
let resultElement = document.getElementById("result");


async function Fun(str) {
    try {
        let data = await fetch(`https://islomapi.uz/api/present/day?region=${str}`);
        return await data.json();
    } catch (error) {
        console.error('Ошибка при парсинге JSON:', error);
        throw error;
    }
}


async  function GetTime() {
    let  timeValue = Cities.value;
    resultElement.innerHTML = '';

    let  time = await Fun(timeValue)
    console.log(time);
    resultElement.innerHTML = `
            <p>Date: ${time.date}</p>
            <p>Region: ${time.region}</p>
            <p>Weekday: ${time.weekday}</p>
            <div class="time">
                <h2>Namaz  times</h2>
                <p>Tong saharlik:${time.times.tong_saharlik}</p>
                <p>Quyosh: ${time.times.quyosh}</p>
                <p>Peshin:${time.times.peshin}</p>
                <p>Asr: ${time.times.asr}</p>
                <p>Shom iftor${time.times.shom_iftor}</p>
                <p>Hufton: ${time.times.hufton}</p>
                
            </div>
           
            
            <!-- добавьте другие данные, которые вы хотите отобразить -->
        `;
        let check = time.times;
        for (let i = 0; i < check.length; i++) {
            console.log(check[i]);
            
        }
}



// Получение элемента <select> по его id
const selectElement = document.getElementById('city'); 


const cities = [
    "Оltiariq",
    "Bishkek",
    "O'smat",
    "To'rtko'l",
    "Uzunquduq",
    "Jizzax",
    "Оltinko'l",
    "Chimkent",
    "Rishtоn",
    "Xo'jaоbоd",
    "Do'stlik",
    "Buxoro",
    "Termiz",
    "Dushanbye",
    "Turkmanоbоd",
    "Qоrоvulbоzоr",
    "Оlmaоta",
    "Xоnqa",
    "Tallimarjоn",
    "Uchqo'rg'оn",
    "Uchtepa",
    "Xоnоbоd",
    "Toshkent",
    "G'uzоr",
    "Bekоbоd",
    "Navoiy",
    "Qo'rg'оntepa",
    "Mubоrak",
    "Ashxabоd",
    "Оlоt",
    "Jalоlоbоd",
    "Nurоta",
    "Andijon",
    "Turkistоn",
    "Shumanay",
    "Namangan",
    "Chimbоy",
    "Jоmbоy",
    "Sherоbоd",
    "Mo'ynоq",
    "Bulоqbоshi",
    "Uchquduq",
    "Samarqand",
    "Qiziltepa",
    "Zоmin",
    "Xo'jand",
    "Tоmdi",
    "Yangibоzоr",
    "Jambul",
    "Nukus",
    "Chоrtоq",
    "Taxtako'pir",
    "Tоshhоvuz",
    "Xiva",
    "Kоsоnsоy",
    "Kоnimex",
    "Mingbulоq",
    "Paxtaоbоd",
    "Denоv",
    "O'g'iz",
    "Qo'ng'irоt",
    "Chust",
    "Kattaqo'rg'оn",
    "Farg'оna",
    "Qоrako'l",
    "Arnasоy",
    "Osh",
    "Sayram",
    "Angren",
    "Pоp",
    "G'allaоrоl",
    "Urgut",
    "Shahrixоn",
    "Guliston",
    "Qumqo'rg'оn",
    "Bоysun",
    "Urganch",
    "Qo'qon",
    "Gazli",
    "Xazоrasp",
    "Marg'ilon",
    "Shоvоt",
    "Kоnibоdоm",
    "Quva",
    "Burchmulla",
    "Dehqоnоbоd",
    "Zarafshоn",
    "Qarshi",
    "Kоsоn"
];


cities.forEach(city => {
  const optionElement = document.createElement('option');
  optionElement.value = city;
  optionElement.textContent = city;
  selectElement.appendChild(optionElement);
});

Cities.addEventListener('change',GetTime)