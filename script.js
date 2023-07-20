let count = 0

let books = [
    {
        id: count++,
        title: 'Мастер и Маргарита',
        authors: 'Михаил Булгаков',
        year: '1940',
        image: "https://cv7.litres.ru/pub/c/cover_415/22311873.webp"
    },

    {
        id: count++,
        title: 'Чайка по имени Джонатан Ливингстон',
        authors: 'Ричард Бах',
        year: '1970',
        image: "https://frontart.ru/images/chayka-po-imeni-djonatan-livingston.jpg"
    },

    {
        id: count++,
        title: 'Хождение по мукам',
        authors: 'Алексей Толстой',
        year: '1941',
        image: "https://knijky.ru/sites/default/files/styles/264x390/public/1023615857.jpg?itok=3dYxzQg6"
    },

    {
        id: count++,
        title: 'Три чашки чая',
        authors: 'Грег Мортенсон, Дэвид Релин Оливер',
        year: '2006',
        image: "https://img3.labirint.ru/rc/bd7a48187d7bb49ab991a15854be3d12/363x561q80/books28/272367/cover.jpg?1612520752"
    }
]


// Динамическое добавление объектов из масива

const booksList = document.getElementById('container__with_books')

function renderBooks() {
    booksList.innerHTML = ""

    books.forEach((book) => {
        booksList.innerHTML += `
            <div class="book_style content">
                <img class="image_book" src="${book.image}"/> 
                <p>${book.title}</p>
                <p>${book.authors}</p>
                <p>${book.year}</p>
                <button id="" class="button_style">Изменить</button>
                <button onclick='deleteBooks(${book.id})' class="button_style">Удалить</button>
            </div>`
    })
}   


// Сохранение в Local Storage

function saveLocalStorage() {
    const booksJson = JSON.stringify(books)
    localStorage.setItem("booksBrowser", booksJson)
}


// Удалить книгу

function deleteBooks(id) {
        const book = books.find((number) => {
            return number.id === id
        })

        const bookIndex = books.indexOf(book)
        books.splice(bookIndex, 1)

        renderBooks()
        saveLocalStorage()
}


// Очистка поля ввода

function cleanForm() {
        document.getElementById('image').value = ""
        document.getElementById('title').value = ""
        document.getElementById('authors').value = ""
        document.getElementById('year').value = ""
}


// ОТКРЫВАЕМ и ЗАКРЫВАЕМ ПОЛЯ ДЛЯ ВВОДА КНИГИ (модальное меню)

const containerAdd = document.getElementById ('modal_add-book')
const openInputBox = document.getElementById('open-modal')
const closeInputBox = document.getElementById('close-modal')


function openModal() {
    containerAdd.style.display = 'flex'
}

function closeModal() {
    containerAdd.style.display = 'none'
}

openInputBox.addEventListener('click', openModal)
closeInputBox.addEventListener('click', closeModal)
    

// Добавить книгу

const addBook = document.getElementById('add__new_book')
addBook.addEventListener ('click', () => {
        
        const imageValue = document.getElementById('image').value
        const titleValue = document.getElementById('title').value
        const authorsValue = document.getElementById('authors').value
        const yearValue = document.getElementById('year').value

        const book = {
            image: imageValue,
            title: titleValue,
            authors: authorsValue,
            year: yearValue,
            id: count++
        }

        books.push(book)

        renderBooks()
        cleanForm()
        closeModal()
        saveLocalStorage()
})

// Получение данных из Local Storage

const booksJson = localStorage.getItem("booksBrowser")

if (booksJson) {
    books = JSON.parse(booksJson)
}

renderBooks()