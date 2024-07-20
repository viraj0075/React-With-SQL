//THis is the Book Query
export const SELECT_QUERY = "SELECT * FROM books";
export const INSERT_QUERY =
  "INSERT INTO books (`title`,`desc`,`cover`,`price`) VALUES (?)";
export const DELETE_QUERY = "DELETE FROM books WHERE id = ?";
export const UPDATE_QUERY =
  "UPDATE books SET `title` = ?  ,`desc` = ?,`cover` = ?,`price`= ? WHERE id = ?";
export const SELECT_BY_ID = "SELECT * FROM books where id = ?";