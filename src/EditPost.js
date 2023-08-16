import React, { useContext, useEffect } from 'react'
import DataContext from './context/DataContext';
import { useParams } from 'react-router-dom'
import NoPost from './component/NoPost';

const EditPost = () => {

  const {posts,editTitle,editBody,setEditTitle,setEditBody,handleEdit} = useContext(DataContext)
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditBody, setEditTitle]);

  return (
    <main className="EditPost">
      {editTitle && (
        <>
          <h2>Edit Post</h2>
          <form className="editForm" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="body">Body:</label>
              <textarea
                id="body"
                value={editBody}
                onChange={(e) => setEditBody(e.target.value)}
              />
            </div>
            <div>
              <button type="submit" onClick={() => handleEdit(post.id)}>
                Submit
              </button>
            </div>
          </form>
        </>
      )},
      {!editTitle && (
        <NoPost /> 
      )}
    </main>
  );
};

export default EditPost