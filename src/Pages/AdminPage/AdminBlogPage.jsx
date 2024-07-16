import React, { useState } from 'react';

const AdminBlogPage = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission here, e.g., sending data to a server

    // Example of how to send data to a server (make sure to handle this in your backend):
    // const formData = new FormData();
    // formData.append('title', title);
    // formData.append('date', date);
    // formData.append('author', author);
    // formData.append('content', content);
    // formData.append('image', image);

    // fetch('/api/upload-blog', {
    //   method: 'POST',
    //   body: formData,
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     // Handle success
    //   })
    //   .catch(error => {
    //     // Handle error
    //   });
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin - Add New Blog Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-lg font-semibold mb-1">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="date" className="block text-lg font-semibold mb-1">Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="author" className="block text-lg font-semibold mb-1">Author</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-lg font-semibold mb-1">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            rows="6"
            required
          />
        </div>
        <div>
          <label htmlFor="image" className="block text-lg font-semibold mb-1">Image</label>
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
            className="w-full p-2 border border-gray-300 rounded"
            accept="image/*"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdminBlogPage;
