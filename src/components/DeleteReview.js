
import { useParams } from "react-router-dom";

function DeleteReview({ reviews_id }) {
  const { id } = useParams();

  function handleDelete(e) {
    e.preventDefault();
    fetch(`https://ruby-pokemon.herokuapp.com/reviews/${reviews_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((r) => {
      if (r.ok) {
        window.location.reload();
      } else {
        r.json();
      }
    });
  }

  console.log(reviews_id);

  return (
    <div>
      <button className="btn" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default DeleteReview;
