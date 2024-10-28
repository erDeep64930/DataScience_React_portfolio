import React from 'react';
import Loading1 from '../sub-components/Loading1';
import ContentLoading from '../sub-components/ContentLoading';
import Subscribe from '../sub-components/Subscribe';
import Heading from './Heading';

const BlogPost = () => {
    return (
        <div>
            <div className="py-32 relative w-11/12 max-w-[1080px] mx-auto">
            <Heading heading="My Blog"/>
                <div className="w-8/12 lg:w-10/12 xl:w-8/12 mx-auto mt-10">
                    <div className="text-center text-gray-600 dark:text-gray-100 mb-12">
                        <p className="text-4xl font-bold mb-2">Blog Posts</p>
                        <p className="">What we and other thinks of us.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <Loading1 />
                        <Loading1 />
                        <Loading1 />
                        <ContentLoading />
                        <ContentLoading />
                        <ContentLoading />
                        <div></div>
                        <div className="text-center mt-6"><Subscribe /></div>
                        <div></div>
                    </div>
                                    
                </div>
            </div>
        </div>
    );
}

export default BlogPost;
