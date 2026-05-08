<?php

require_once "../controller/BookController.php";

$action = $_POST['action'];

if ($action == "add") {

    $title = $_POST['title'];
    $author = $_POST['author'];
    $category = $_POST['category'];
    $status = $_POST['status'];

    insertBookController($title, $author, $category, $status);
}

elseif ($action == "fetch") {

    $result = showBooksController();

    while($row = mysqli_fetch_assoc($result)) {

        echo "
        <tr>
            <td>{$row['id']}</td>
            <td>{$row['title']}</td>
            <td>{$row['author']}</td>
            <td>{$row['category']}</td>
            <td>{$row['status']}</td>

            <td>
                <button onclick='deleteBook({$row['id']})'>
                    Delete
                </button>
            </td>
        </tr>
        ";
    }
}

elseif ($action == "delete") {

    $id = $_POST['id'];

    removeBookController($id);
}

?>