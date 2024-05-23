import { useEffect, useState } from "react";

export default function PostListRenderer() {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="post-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {post.map((post) => {
            return (
              <li key={post.id}>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
