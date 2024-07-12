import React, { useState } from "react";

const CommentsList = () => {
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий в моем домашнем задании" },
    { id: 2, text: "Это второй комментарий в моем домашнем задании" },
    { id: 3, text: "Это третий комментарий в моем домашнем задании" },
  ]);

  const deleteComment = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  return (
    <div>
      <h2>Список комментариев</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            {comment.text}
            <button onClick={() => deleteComment(comment.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsList;