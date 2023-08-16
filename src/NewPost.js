import React, { useContext } from 'react'
import DataContext from './context/DataContext';

const NewPost = () => {

  const {title,setTitle,body,setBody,handleSubmit} = useContext(DataContext);

  return (
    <main className="NewPost">
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit} className="post-form">
        <label htmlFor="post-title">Title:</label>
        <input
          type="text"
          id="post-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="post-body">Body:</label>
        <textarea
          id="post-body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <button type="submit" className="post-submit-button">
          Submit
        </button>
      </form>
    </main>
  );
}

export default NewPost