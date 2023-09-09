import React from 'react'
import { useAppSelector } from '../../hook'
import { selectBlog } from './BlogReducer';
import './blogcomponent.css';

export const Blogcomponenet = () => {
  const Blog = useAppSelector(selectBlog);
  return (
    <div className="container blogcomp">
    <button className='btn btn-primary addbutton'>Add Blog</button>
      <div className="card">
        {Blog.map(blog =>
          <div className="card-body">
            <h5 className="card-title">{blog.title}</h5>
            <p className="card-text">{blog.description}</p>
            <hr />
          </div>
        )}
        </div>
    </div>
  )
}
