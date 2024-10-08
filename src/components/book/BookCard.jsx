// {
//   id, title, subtitle, description, author, img_url, users;
// }
const BookCard = ({ bookObj }) => {
    return (
      <div>
        <h3>{bookObj.title}</h3>
        <img src={bookObj.img_url} alt={bookObj.description} />
        <p>{bookObj.description}</p>
      </div>
    );
};

export default BookCard;
