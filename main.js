$(document).ready(function () {
    $('#myModal').on('shown.bs.modal', function () {
        $('#btn-search').trigger('focus')
    });


    $('#btn-search').on('click', () => {
        let query = $('#query').val();

        getMovies(query);

    });



});

function getMovies(query) {
    const apiKey = 'Enter your OMDBAPI';
    axios.get('http://www.omdbapi.com/?s=' + query + '&apikey=' + apiKey)
        .then((response) => {
            console.log(response);
            let movies = response.data.Search;
            // Declare an Emplty Varioable 
            let obj= Object.keys(movies).length;
            console.log(obj);
            $('#count').html(obj);
            let output = '';
            // Loop over the Array and output the Objects
            $.each(movies, (index, movie) => {
                // Append the Movies in the Output Varioable
               
                output += `
                
            <div class="col-md-4 animated  zoomIn">
            <div class="card ">
                <img class="card-img-top" src="${movie.Poster}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title" id='movieTitle'>${movie.Title}</h5>
                    <button type="button" class="btn btn-primary">
                    Year Released <span class="badge badge-info">${movie.Year}</span>
                    </button>
                    <a href="#" class="btn btn-success" id='moreDetail'data-toggle="modal" data-target="#exampleModal">More Details</a>
                  </div>
            </div>

        </div>
        </div>     
            `

            });
            // Append the Output Variable to the Movie Div
            $('#movies').html(output);
            
        })
        .catch((err) => {
            console.log(err)
        });
}
