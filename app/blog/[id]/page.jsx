import posts from "@/posts.json";

export default function Page({ params }) {
  const postId = parseInt(params.id, 10);
  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="flex flex-col gap-3  ml-72 max-[768px]:ml-0 px-96 pt-24 max-[1568px]:px-64 max-[1024px]:px-28 max-[768px]:px-5 max-[768px]:pt-20 max-[768px]:pb-14">
      <h1 className="font-semibold">{post.title}</h1>
      <p>{post.contentA}</p>
      <p>{post.contentB}</p>
      <p>{post.contentC}</p>
      <p>{post.contentD}</p>
      <p>{post.contentE}</p>
      <p>{post.contentF}</p>
      <p>{post.contentG}</p>
      <p>{post.contentH}</p>
      <p>{post.contentJ}</p>
    </div>
  );
}
