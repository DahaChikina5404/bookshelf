const books = [
    {
        title: 'Мастер и Маргарита',
        authors: 'Михаил Булгаков',
        year: '1940',
        image: 'src="https://cv7.litres.ru/pub/c/cover_415/22311873.webp"'
    },

    {
        title: 'Чайка по имени Джонатан Ливингстон',
        authors: 'Ричард Бах',
        year: '1970',
        image: 'src="https://frontart.ru/images/chayka-po-imeni-djonatan-livingston.jpg"'
    },

    {
        title: 'Хождение по мукам',
        authors: 'Алексей Толстой',
        year: '1941',
        image: 'src="https://knijky.ru/sites/default/files/styles/264x390/public/1023615857.jpg?itok=3dYxzQg6"'
    },

    {
        title: 'Три чашки чая',
        authors: 'Мортенсон Грег, Релин Оливер Дэвид',
        year: '2006',
        image: 'src="https://img3.labirint.ru/rc/bd7a48187d7bb49ab991a15854be3d12/363x561q80/books28/272367/cover.jpg?1612520752"'
    }
]

const booksList = document.getElementById('container')

function renderBooks() {
    booksList.innerHTML = ""

    books.forEach((book) => {
        booksList.innerHTML += `
            <div class="book_style content">
                <img class="image_book" ${book.image}/>
                <p>${book.title}</p>
                <p>${book.authors}</p>
                <p>${book.year}</p>
                <button class="button_style">Изменить</button>
                <button class="button_style">Удалить</button>
            </div>`
    })
}   
renderBooks()