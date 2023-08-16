import React, { useContext } from 'react'
import DataContext from './context/DataContext';
import { useParams, Link } from "react-router-dom";
import { FiAlertCircle, FiTrash2, FiEdit } from "react-icons/fi";

const PostPage = () => {

  const {posts,handleDelete} = useContext(DataContext);

  const { id } = useParams();
  let post = posts.find((post) => (post.id).toString() === id);
  return (
    <main className="PostPage">
      
      <article className="post">
        {post && (
          <>
            <h2 className="post-title">{post.title}</h2>
            <p className="post-datetime">{post.datetime}</p>
            <p className="post-body">{post.body}</p>
            <div className="del-container">
              <Link to={`/edit/${post.id}`}>
                <button className="delete">
                  <FiEdit className="edit-icon" />
                </button>
              </Link>

              <button className="delete" onClick={() => handleDelete(post.id)}>
                <FiTrash2 className="delete-icon" />
              </button>
            </div>
          </>
        )}
        {!post && (
          <>
            <div className="missing-container">
              <h1>404 - Page Not Found</h1>
              <p>The page you're looking for doesn't exist.</p>
              <div className="icon-container">
                <FiAlertCircle className="missing-icon" />
              </div>
              <Link to="/">go back to home</Link>
            </div>
          </>
        )}
      </article>
    </main>
  );
}

export default PostPage