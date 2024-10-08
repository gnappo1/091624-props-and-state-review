import BookCard from "./BookCard";

function BookContainer({ books }) {

    const mappedBooks = books.map((bookObj) => (
        <BookCard key={bookObj.id} bookObj={bookObj} />
    ));

    return <div>{mappedBooks}</div>;
}

export default BookContainer;
