import { useEffect, useState } from 'react';
import fire from '../../config/fire-conf';
import Link from 'next/link'

const Blog = (props) => {

    const [blog, setBlog] = useState(null);

  useEffect(() => {
    fire.firestore()
      .collection('Blog')
      .doc(props.id)
      .get()
      .then(result => {
        setBlog(result.data())
      })
  }, []);
  if(!blog){
    return(
      <h2>Loading...</h2>
    )
  }
  return (
    <div>
      <h2>{blog.title}</h2>
      <p>
        {blog.content}
      </p>
      <Link href="/">
        <a>Back</a>
      </Link>
    </div>
  )
}
Blog.getInitialProps = ({ query }) => {
  return {
      id: query.id,
  }
}
export default Blog