import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { getAllBlog, getSpecificBlog } from '../redux/features/blog_Slice';
import { getSpecificBlogCat } from '../redux/features/blog_Category_Slice';

const SingleBlog = () => {
    const { search } = useLocation();
    const id = new URLSearchParams(search).get('id')
    console.log(id);

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
    }, [dispatch, id, category]);

    return (
        <section>
            <div className='container p-0'>
                <div className="row">
                    <div className="col-sm-12 col-lg-9 col-md-7 col-12">
                        <h1 className='mb-3 blog-content'>
                            {singleBlog?.title?.rendered}
                        </h1>

                        <nav className='nav-link' aria-label="breadcrumb">
                            <ul className="breadcrumb text-center blog-menu">
                                <p> by </p>
                                <span className='ms-2 nav-link breadcrumb-item menu-content'>
                                    <Link className='nav-link'
                                        to={`/bhargava/author/${singleBlog?.yoast_head_json?.author.toLowerCase()}`}
                                    >
                                        {singleBlog?.yoast_head_json?.author}
                                    </Link>
                                </span>

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

                                <span className="nav-link breadcrumb-item menu-content">
                                    0 comments
                                </span>
                            </ul>
                        </nav>

                        {singleBlog?.yoast_head_json?.og_image.map((img) => (
                            <img src={img?.url} className='w-100' alt={img?.type} key={img} />
                        ))}

                        <p className='mt-4 blog-content-para'>
                            <div dangerouslySetInnerHTML={{
                                __html: singleBlog?.content?.rendered
                            }}
                            />
                        </p>

                        <div className='blog-comment-feild mt-5'>
                            <h2> Submit a Comment </h2>

                            <p>
                                Logged in as BPL@admin.
                                <span style={{ color: '#649348' }}> Edit your profile. Log out? </span>
                                Required fields are marked *
                            </p>

                            <form>
                                <div className="mb-3 mt-3">
                                    <textarea className="form-control comments-field" rows="5"
                                        placeholder='Comment *'>
                                    </textarea>
                                </div>
                                <button type="submit" className="btn button-comment my-3">
                                    Submit Comment
                                </button>
                            </form>
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

export default SingleBlog