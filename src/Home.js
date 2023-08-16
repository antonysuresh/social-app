import React, { useContext } from 'react'
import DataContext from "./context/DataContext";
import Feed from './Feed'
import Loading from './component/Loading'
import Error from './component/Error';
import NoPost from './component/NoPost';

const Home = () => {
  const {posts,searchResult,fetchError,isLoading} = useContext(DataContext);
  return (
    <main className="Home">
      {isLoading && <Loading /> }
      {!isLoading && fetchError && <Error message={fetchError} />}
      {!isLoading && !fetchError && posts.length ? 
        <Feed posts={searchResult}  /> : <NoPost /> }
    </main>
  );
}

export default Home