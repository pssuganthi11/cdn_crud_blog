import { useLocation, useNavigate } from "react-router-dom";
import Form from "../components/Form";

export default function Edit() {
  const location = useLocation();
  const navigate = useNavigate();
  const post = location.state;

  if (!post) return <h3>No Post Selected</h3>;

  const handleUpdate = (updatedPost) => {
    const stored = JSON.parse(localStorage.getItem("posts")) || [];

    const updatedPosts = stored.map((p) =>
      p.id === updatedPost.id ? updatedPost : p,
    );

    localStorage.setItem("posts", JSON.stringify(updatedPosts));

    navigate("/");
  };

  return (
    <div className=" flex justify-center items-center px-4    ">
      <div className="w-full max-w-2xl p-8 rounded-2xl shadow-lg">
        <div className="max-w-2xl mx-auto mt-10 bg-white/60 shadow-xl p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-6">Edit Post</h2>

          <Form
            className="bg-white"
            selectedPost={post}
            onSubmit={handleUpdate}
            
          />
        </div>
      </div>
    </div>
  );
}
