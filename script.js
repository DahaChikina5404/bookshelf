const books = [
    {
        id: 1,
        title: 'Мастер и Маргарита',
        authors: 'Михаил Булгаков',
        year: '1940',
        image: 'src="https://cv7.litres.ru/pub/c/cover_415/22311873.webp"'
    },

    {
        id: 2,
        title: 'Чайка по имени Джонатан Ливингстон',
        authors: 'Ричард Бах',
        year: '1970',
        image: 'src="https://frontart.ru/images/chayka-po-imeni-djonatan-livingston.jpg"'
    },

    {
        id: 3,
        title: 'Хождение по мукам',
        authors: 'Алексей Толстой',
        year: '1941',
        image: 'src="https://knijky.ru/sites/default/files/styles/264x390/public/1023615857.jpg?itok=3dYxzQg6"'
    },

    {
        id: 4,
        title: 'Три чашки чая',
        authors: 'Грег Мортенсон, Дэвид Релин Оливер',
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
                <button onclick='deleteBooks(${book.id})' class="button_style">Удалить</button>
            </div>`
    })
}   

// Удалить книгу

function deleteBooks(id) {
        const book = books.find((number) => {
            return number.id === id
        })

        const bookIndex = books.indexOf(book)
        books.splice(bookIndex, 1)
        renderBooks()
}

// Очистка поля ввода

function cleanForm() {
        document.getElementById('image').value = ""
        document.getElementById('title').value = ""
        document.getElementById('authors').value = ""
        document.getElementById('year').value = ""
}



// ОТКРЫВАЕМ ПОЛЯ ДЛЯ ВВОДА КНИГИ
// объявляем переменную на открытие полей ввода

let isOpen = false

function openInputBox() {

        const containerAdd = document.getElementById ('container_add-book')

        // Открытие мобильного меню по нажатию кнопки

        if (isOpen) {
            containerAdd.style.display = 'none'
            isOpen = false
        }
        else {
            containerAdd.style.display = 'flex'
            isOpen = true
        }
}


// Добавить книгу

function addBook() {

        const imageValue = document.getElementById('image').value
        const titleValue = document.getElementById('title').value
        const authorsValue = document.getElementById('authors').value
        const yearValue = document.getElementById('year').value

        const book = {
            image: imageValue,
            title: titleValue,
            authors: authorsValue,
            year: yearValue
        }

        books.push(book)
        renderBooks()
        cleanForm()


}

renderBooks()