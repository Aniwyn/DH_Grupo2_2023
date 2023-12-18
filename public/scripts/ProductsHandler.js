function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

if (document.getElementById('prevPage') && document.getElementById('nextPage')) {
    document.getElementById('prevPage').addEventListener('click', () => {
        const currentPage = parseInt(getParameterByName('page')) || 1;
        console.log("adasd")
        if (currentPage > 1) {
            const prevPage = currentPage - 1;
            window.location.href = `/products?page=${prevPage}`
        }
    })
    
    document.getElementById('nextPage').addEventListener('click', () => {
        const currentPage = parseInt(getParameterByName('page')) || 1;
    
        if (currentPage < totalPages) {
            const nextPage = currentPage + 1;
            window.location.href = `/products?page=${nextPage}`;
        }
    })
}


let inputSearch = document.getElementById('search');
let buttonSearch = document.getElementById('button-search')

inputSearch.addEventListener('keypress', (event) => {

    if (event.key !== 'Enter') {
        return
    }

    toFilter()
})

buttonSearch.addEventListener('click', () => {
    toFilter()
})

function toFilter() {
    const searchTerm = inputSearch.value.trim()

    if(inputSearch.value === '') {
        window.location.href = `/products`
        return
    }

    window.location.href = `/products?page=1&term=${searchTerm}`
}

document.addEventListener('DOMContentLoaded', function() {
    let pages = document.querySelectorAll(".pagination__pages")
    let genres = document.querySelectorAll(".genre__item")

    const url = new URL(window.location.href);
    const genre = url.pathname.split("/").pop().replace("%20", " ");

    console.log("AAA", url)
    console.log("BBB", genre)
    console.log("CCC", genres)

    for (let i = 0; i < pages.length; i++) {
        if (pages[i].innerHTML == page ) {
            pages[i].style.color = "var(--color-yellow)"
        }
    }
    
    if (genre != "products") {
        for (let h = 0; h < genres.length; h++) {
            if (genres[h].innerText == genre) {
                genres[h].style.color = "var(--color-yellow)"
            }
        }
    }
})

// ----------------------- SEARCH

// const levenshteinDistance = (str1 = '', str2 = '') => {
//     const track = Array(str2.length + 1).fill(null).map(() =>
//         Array(str1.length + 1).fill(null));
//     for (let i = 0; i <= str1.length; i += 1) {
//         track[0][i] = i;
//     }
//     for (let j = 0; j <= str2.length; j += 1) {
//         track[j][0] = j;
//     }
//     for (let j = 1; j <= str2.length; j += 1) {
//         for (let i = 1; i <= str1.length; i += 1) {
//             const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
//             track[j][i] = Math.min(
//                 track[j][i - 1] + 1, // deletion
//                 track[j - 1][i] + 1, // insertion
//                 track[j - 1][i - 1] + indicator, // substitution
//             );
//         }
//     }
//     return track[str2.length][str1.length];
// };

// let inputSearch = document.getElementById('search');
// let cardsContainer = document.getElementById('card-container');
// inputSearch.addEventListener('input', function () {
//     console.log('BFDFDD:', baseProducts);
//     let toSearch = inputSearch.value.toLowerCase().split(' ');

//     let result = baseProducts.filter(product => {
//         let fullName = (product.name + ' ' + product.second_name).toLowerCase()
//         let splitFullName = fullName.split(' ');

//         let minDistance = Infinity;
//         let threshold = 1;

//         const termMatches = toSearch.forEach(term => {
//             return splitFullName.forEach(fullTerm => {
//                 const distance = levenshteinDistance(term, fullTerm);
//                 console.log('DSITANCIAA: ', distance, '  ', term, '  comparado con : ', fullTerm);
//                 minDistance = Math.min(minDistance, distance)

//                 return distance <= threshold
//             })
//         })

//         console.log('SOY TERMATCH: ', minDistance);
//         return (minDistance <= threshold) || (fullName.includes(inputSearch.value.toLowerCase()))
//     })
//     console.log('hola', result);
// })