$(document).ready(function () {
    var nasaKey = 'XCZuNJkOYMTdATrmAO448cXPTKu7wltJJM25C6Vv';
    var url = "https://api.nasa.gov/planetary/apod?api_key=";

    $.ajax({
        url: url + nasaKey,
        success: function (result) {
            console.log(result);
            var date = result.date,
                image = result.hdurl,
                title = result.title,
                explanation = result.explanation;

            var template = $(`<div class="cenas">
                                <img src="${image}"><div class="text">
                                <p class="date">${date}</p>
                                <p class="title">${title}</p>
                                <p class="description">${explanation}</p></div>
                            </div>`);

            $('body').append(template);
        }
    });

});
