import { useNavigate } from "react-router-dom";
import Form from "../components/Form";

export default function Post() {
  const navigate = useNavigate();

  const handleAdd = (post) => {
    const stored = JSON.parse(localStorage.getItem("posts")) || [];
    const updated = [...stored, post];

    localStorage.setItem("posts", JSON.stringify(updated));
    navigate("/");
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white/60 shadow-xl p-8 rounded-xl">
      <h2 className="text-2xl font-bold mb-6">Add New Post</h2>
      <Form
        onSubmit={handleAdd}
        titlePlaceholder="Enter blog title..."
        blogPlaceholder="Enter blog content..."
      />
    </div>
  );
}
