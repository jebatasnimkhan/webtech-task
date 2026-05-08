<?php

require_once "../model/BookModel.php";

function insertBookController($title, $author, $category, $status)
{
    return addBook($title, $author, $category, $status);
}

function showBooksController()
{
    return getBooks();
}

function removeBookController($id)
{
    return deleteBook($id);
}

function editBookController($id, $title, $author, $category, $status)
{
    return updateBook($id, $title, $author, $category, $status);
}

?>