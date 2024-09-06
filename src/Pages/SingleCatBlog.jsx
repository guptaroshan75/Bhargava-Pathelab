import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { getAllBlog, getSpecificBlog } from '../redux/features/blog_Slice';
import { getSpecificBlogCat } from '../redux/features/blog_Category_Slice';

const SingleCatBlog = () => {
    const { search } = useLocation();
    const id = new URLSearchParams(search).get('id')

    const dispatch = useDispatch();
    const { blogs } = useSelector(state => state.posts);
    const { singleBlog } = useSelector(state => state.posts);
    const { blogcategory } = useSelector(state => state.blogCategory);

    const category = singleBlog?.categories && singleBlog.categories.length > 0 ? singleBlog.categories[0] : null;
    useEffect(() => {
        dispatch(getAllBlog())
        if (id) {
            dispatch(getSpecificBlog(id)).then(() => {
                if (singleBlog?.categories && singleBlog.categories.length > 0) {
                    const blogCat = singleBlog.categories[0];
                    dispatch(getSpecificBlogCat(blogCat));
                }
            });
        }
    }, [dispatch, id, category, singleBlog?.categories]);

    return (
        <section>
            <div className='container p-0'>
                <div className="row">
                    <div className="col-sm-12 col-lg-9 col-md-7 col-12 pb-5">
                        <Link className='nav-link'
                            to={`/bhargava/${singleBlog?.slug}/?id=${singleBlog?.id}`}
                        >
                            {singleBlog?.yoast_head_json?.og_image.map((img) => (
                                <img src={img?.url} className='w-100 img-cat' alt={img?.type} key={img} />
                            ))}

                            <div className='blog-cat-content'>
                                <h1 className='mb-3'>
                                    {singleBlog?.title?.rendered}
                                </h1>
                            </div>
                        </Link>

                        <nav className='nav-link pt-3' aria-label="breadcrumb">
                            <ul className="breadcrumb text-center blog-menu">
                                <p> by </p>
                                <Link className='nav-link breadcrumb-item'
                                    to={`/bhargava/author/${singleBlog?.yoast_head_json?.author.toLowerCase()}`}
                                >
                                    <span className='ms-2 menu-content'>
                                        {singleBlog?.yoast_head_json?.author}
                                    </span>
                                </Link>


                                <p className="nav-link breadcrumb-item">
                                    {singleBlog?.date &&
                                        new Date(singleBlog.date).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'short',
                                            day: 'numeric'
                                        })
                                    }
                                </p>

                                <span className="nav-link breadcrumb-item menu-content">
                                    <Link className='nav-link d-flex align-items-center'
                                        to={`/bhargava/category/${blogcategory?.slug}/?id=${singleBlog?.id}`}
                                    >
                                        {blogcategory?.name}
                                    </Link>
                                </span>
                            </ul>
                        </nav>

                        <div className='blog-cat-content-des'>
                            <div dangerouslySetInnerHTML={{
                                __html: singleBlog?.content?.rendered
                            }}
                            />
                        </div>
                    </div>

                    <div className="col-sm-12 col-lg-3 col-md-5 col-12 position-relative vertical-line">
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

export default SingleCatBlog