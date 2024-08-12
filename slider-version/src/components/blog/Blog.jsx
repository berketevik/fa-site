import React from 'react';
import BlogData from '@/assets/jsonData/blog/BlogData.json'
import SingleBlog from './SingleBlog';

const Blog = () => {
    return (
        <>
            <div className="container">
                <div className="content">
                    <div className="row align-center">
                        <div className="col-lg-1 info">
                            <h2 className="curbe-title">My Blog</h2>
                        </div>
                        <div className="col-lg-10 offset-lg-1">
                            <div className="row">
                                {BlogData.map(blog =>
                                    <SingleBlog blog={blog} key={blog.id} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;