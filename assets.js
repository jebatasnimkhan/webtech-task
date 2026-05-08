loadBooks();

function addBook()
{
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let category = document.getElementById("category").value;
    let status = document.getElementById("status").value;

    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function ()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            loadBooks();
        }
    };

    xhttp.open("POST", "../ajax/bookAjax.php", true);

    xhttp.setRequestHeader(
        "Content-type",
        "application/x-www-form-urlencoded"
    );

    xhttp.send(
        "action=add"
        + "&title=" + title
        + "&author=" + author
        + "&category=" + category
        + "&status=" + status
    );
}

function loadBooks()
{
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function ()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            document.getElementById("bookData").innerHTML =
                this.responseText;
        }
    };

    xhttp.open("POST", "../ajax/bookAjax.php", true);

    xhttp.setRequestHeader(
        "Content-type",
        "application/x-www-form-urlencoded"
    );

    xhttp.send("action=fetch");
}

function deleteBook(id)
{
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function ()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            loadBooks();
        }
    };

    xhttp.open("POST", "../ajax/bookAjax.php", true);

    xhttp.setRequestHeader(
        "Content-type",
        "application/x-www-form-urlencoded"
    );

    xhttp.send("action=delete&id=" + id);
}