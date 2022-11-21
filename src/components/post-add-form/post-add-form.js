import React from "react";

const PostAddForm = () => {
  return (
    <form className="bottm-pannel d-flex">
      <input
        type="text"
        placeholedr="О чём думаешь?"
        className="form-control new-post-label"
      />
      <button type="submit" className="btn btn-outline-seconary">
        Добавить Пост
      </button>
    </form>
  );
};

export default PostAddForm;
