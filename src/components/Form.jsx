import { useState, useEffect } from "react";

export default function Form({
  onSubmit,
  selectedPost,
  titlePlaceholder,
  blogPlaceholder,
}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (selectedPost) {
      setTitle(selectedPost.title);
      setContent(selectedPost.content);
    }
  }, [selectedPost]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert("Please Enter All Fields");
      return;
    }

    onSubmit({
      id: selectedPost?.id || Date.now(),
      title,
      content,
    });

    if (!selectedPost) {
      setTitle("");
      setContent("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block mb-2 font-medium">Title</label>
        <input
          type="text"
          placeholder={titlePlaceholder}
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">Content</label>
        <textarea
          placeholder={blogPlaceholder}
          rows="4"
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg w-full"
      >
        {selectedPost ? "Update Blog" : "Add blog"}
      </button>
    </form>
  );
}
