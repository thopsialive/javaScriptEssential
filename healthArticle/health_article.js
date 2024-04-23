// Step 3: Defining object and variables for XMLHttpRequest
var xhr = new XMLHttpRequest();
var url = './health_article.json';

// Step 4: URL definition and request set up
xhr.open('GET', url, true); // True: Indicates if the request is asynchronous (true) or synchronous (false).

// Step 5: Response type specification
xhr.responseType = 'json';

// Step 6: Handling the 'onload' event
xhr.onload = function() { // define what should happen when the data is successfully loaded
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');

    // Step 7: Iterating through articles and constructing HTML
    articles.forEach(function(article) {
        var articleDiv = document.createElement('div'); //<div></div>
        articleDiv.classList.add('article'); //<div class='article'></div>

        var title = document.createElement('h2'); //<h2></h2>
        title.textContent = article.title; //<h2>${article.title}</h2>

        var description = document.createElement('p'); //<p></p>
        description.textContent = article.description; //<p>${article.description}</p>

        var waysHeader = document.createElement('h3'); //<h3></h3>
        waysHeader.textContent = 'Ways to Achieve:'; //<h3>Ways to Achieve:</h3>

        var waysList = document.createElement('ul'); //<ul></ul>
        article.ways_to_achieve.forEach(function(way) {
        var listItem = document.createElement('li'); //<li></li>
        listItem.textContent = way; //<li>${way}</li>
        waysList.appendChild(listItem); //<ul> <li>${way}</li> </ul>
        });

        var benefitsHeader = document.createElement('h3'); //<h3></h3>
        benefitsHeader.textContent = 'Benefits:'; //<h3>Benefits:</h3>

        var benefitsList = document.createElement('ul'); //<ul></ul>
        article.benefits.forEach(function(benefit) {
        var listItem = document.createElement('li'); //<li></li>
        listItem.textContent = benefit; //<li>${benefit}</li>
        benefitsList.appendChild(listItem); //<ul> <li>${benefit}</li> </ul>
        });

        articleDiv.appendChild(title); //<div> <h2>${article.title}</h2> </div>
        articleDiv.appendChild(description); //...
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);

        articlesDiv.appendChild(articleDiv);
    });
}

// Step 8: Sending the request
xhr.send(); //send the XMLHttpRequest to fetch the data
