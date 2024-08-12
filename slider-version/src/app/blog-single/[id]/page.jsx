import BlogSingleContent from '@/components/blog-single/BlogSingleContent';
import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import React from 'react';
import BlogData from '@/assets/jsonData/blog/BlogData.json'
import LayoutStyle1 from '@/components/layouts/LayoutStyle1';

export const metadata = {
    title: "Ambrox - Personal Portfolio - Blog Single"
}

const BlogSingle = ({ params }) => {

    const { id } = params
    const data = BlogData.find(blog => blog.id === parseInt(id))

    return (
        <>
            <LayoutStyle1>
                <BreadCrumb breadCrumb="blog-single" title="Blog Single" />
                <BlogSingleContent blogInfo={data} />
            </LayoutStyle1>
        </>
    );
};

export default BlogSingle;