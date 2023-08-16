import React, { createContext, useState, useEffect } from "react";
import useWindowSize from "../hook/useWindowSize";
import useAxiosFetch from "../hook/useAxiosFetch";
import { format } from "date-fns";
import api from "../api/post";
import { useNavigate } from "react-router-dom";

const DataContext = createContext({})

export const DataProvider = ({children}) => {

  const [posts,setPosts] = useState([]);
  const [search,setSearch] = useState('');
  const [searchResult,setSearchResult] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [editTitle,setEditTitle] = useState('');
  const [editBody,setEditBody] = useState('');
  const navigate = useNavigate();
  const {width} = useWindowSize();
  const { data,fetchError,isLoading } = useAxiosFetch("http://localhost:3500/posts");

  useEffect(()=>{
    setPosts(data);
  },[data])

  useEffect(() => {
    let filterResult = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResult(filterResult.reverse());
  },[search,posts,data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let id = posts.length ? posts[posts.length-1].id + 1: 1;
    let date = format(new Date(), "MMMM dd, yyyy pp");
    let newPost = {id,title: title,datetime:date,body:body};
    try {
      const response = await api.post("/posts", newPost);
      let allPost = [...posts, response.data];
      setPosts(allPost);
      setTitle("");
      setBody("");
      navigate("/");
    } catch (err) {
        console.log(`Error:${err.response}`);
    } 
    
  };
  
  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      let postList = posts.filter((post) => post.id !== id);
      setPosts(postList);
      navigate("/");
    } catch (err) {
      console.log(`Error:${err.response}`);
    }  
    
  }

  const handleEdit = async (id) => {
    let date = format(new Date(), "MMMM dd, yyyy pp");
    let updatedPost = { id, title: editTitle, datetime: date, body: editBody };
    try {
      const response = await api.put(`/posts/${id}`,updatedPost);
      let updatedList =posts.map(post => post.id === id ? {...response.data} : post) ;
      setPosts(updatedList);
      setEditTitle("");
      setEditBody("");
      navigate("/");
    } catch (err) {
      console.log(`Error:${err.response}`);
    }
  }



    return (
        <DataContext.Provider value={{
            searchResult,
            posts,fetchError,isLoading,search,setSearch,
            width,title,setTitle,body,setBody,handleSubmit,
            handleDelete, editTitle,editBody,setEditTitle,
            setEditBody,handleEdit,
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;