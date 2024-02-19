import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllBlog } from '../redux/features/blog_Slice';
import { getAllBlogCat } from '../redux/features/blog_Category_Slice';

const BplAdminPage = () => {
    const dispatch = useDispatch();
    const { blogs } = useSelector(state => state.posts);
    const { blogcategories } = useSelector(state => state.blogCategory);

    useEffect(() => {
        dispatch(getAllBlog())
        dispatch(getAllBlogCat())
    }, [dispatch]);

    const getCategoryNames = (blogCategoryIds) => {
        const categories = blogcategories.filter(category => blogCategoryIds.includes(category.id));
        return categories.map(category => category.name);
    };

    return (
        <section>
            <div className='container p-0'>
                <div className="row img-cat">
                    <div className="col-sm-12 col-lg-9 col-md-7 col-12 pb-5">
                        {blogs.map((blog) => (
                            <div className="col-sm-12 col-lg-12 col-md-12 col-12 pb-5" key={blog?.id}>
                                <Link className='nav-link'
                                    to={`/bhargava/${blog?.slug}/?id=${blog?.id}`}
                                >
                                    {blog?.yoast_head_json?.og_image.map((img) => (
                                        <img src={img?.url} className='w-100' key={img} alt={img?.type} />
                                    ))}

                                    <div className='blog-cat-content'>
                                        <h1 className='mb-3'>
                                            {blog?.title?.rendered}
                                        </h1>
                                    </div>
                                </Link>

                                <nav className='nav-link pt-3' aria-label="breadcrumb">
                                    <ul className="breadcrumb text-center blog-menu">
                                        <p> by </p>
                                        <Link className='nav-link breadcrumb-item'
                                            to={`/bhargava/author/${blog?.yoast_head_json?.author.toLowerCase()}`}
                                        >
                                            <span className='ms-2 menu-content-bpl'>
                                                {blog?.yoast_head_json?.author}
                                            </span>
                                        </Link>

                                        <p className="nav-link breadcrumb-item">
                                            {blog?.date &&
                                                new Date(blog.date).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'short',
                                                    day: 'numeric'
                                                })
                                            }
                                        </p>

                                        <span className="nav-link breadcrumb-item menu-bpl-content">
                                            {getCategoryNames(blog?.categories).map((category, index) => (
                                                <Link className='nav-link d-flex align-items-center'
                                                    to={`/bhargava/category/${category.replace(/\s+/g, '-')}/?id=${blog?.id}`}
                                                >
                                                    {category}
                                                </Link>
                                            ))}
                                        </span>
                                    </ul>
                                </nav>

                                <div className='blog-cat-content-des'>
                                    <div dangerouslySetInnerHTML={{
                                        __html: blog?.content?.rendered
                                    }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="col-sm-12 col-lg-3 col-md-5 col-12 position-relative vertical-line-bpl">
                        <div className='blog-article-content'>
                            <div className="input-group search-blog">
                                <input type="text" className="form-control"
                                    aria-describedby="button-addon2"
                                />
                                <button className="btn btn-outline-secondary" type="button" id="button-addon2">
                                    Search
                                </button>
                            </div>

                            <div className='recent-post postion-relative'>
                                <h2> Recent Posts </h2>
                            </div>

                            <div className='blog-post-link'>
                                {blogs.map((blog) => (
                                    <Link className='nav-link' key={blog?.id}
                                        to={`/bhargava/${blog?.slug}/?id=${blog?.id}`}
                                    >
                                        <p>  {blog?.title?.rendered} </p>
                                    </Link>
                                ))}
                            </div>

                            <div className='recent-comment postion-relative mt-4 pt-1'>
                                <h2> Recent </h2>
                                <h1> Comments </h1>
                            </div>

                            <p className='recent-comment-para'> No comments to show. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BplAdminPage