"use client";
import { Pencil } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [posts, setPosts] = useState([
    {
      title: 'Sample Post',
      content: 'This is a sample post content.',
      date: new Date().toLocaleDateString("en-GB"),
      user: {
        name: 'Tarun Sai Srinivas',
        email: 'tarunsaisrinivas7@gmail.com',
      },
    },
  ]);
  const [newPost, setNewPost] = useState({ title: '', content: '', user: { name: '', email: '' } });

  const handleSavePost = () => {
    setPosts([...posts, { ...newPost, date: new Date().toLocaleDateString() }]);
    setNewPost({ title: '', content: '', user: { name: '', email: '' } });
    setShowModal(false);
  };

  const handleDeletePost = (index) => {
    setPosts(posts.filter((_, i) => i !== index));
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-4">
        <input
          type="text"
          placeholder="Search posts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border rounded shadow-sm"
        />
      </div>

      <div className="max-w-2xl mx-auto">
        {filteredPosts.map((post, index) => (
          <div key={index} className="bg-white shadow-md rounded-md p-4 mb-4 relative">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center font-bold text-white">
                {(post.user.name || 'Anonymous')[0]}
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-semibold">{post.user.name || 'Anonymous'}</h3>
                <p className="text-sm text-gray-500">{post.user.email || 'No Email'}</p>
              </div>
              <div className="ml-auto relative">
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={(e) => {
                    const menu = e.currentTarget.nextElementSibling;
                    menu.classList.toggle('hidden');
                  }}
                >
                  &#x22EE;
                </button>
                <div className="absolute right-0 mt-2 w-24 bg-white border rounded shadow-md hidden">
                  <button
                    className="w-full text-left px-4 py-2 text-sm text-blue-500 hover:bg-gray-100"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeletePost(index)}
                    className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-700">{post.content}</p>
            <p className="text-sm text-gray-500 mt-2">{post.date}</p>
          </div>
        ))}
      </div>

      {/* Floating button */}
      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-4 right-4 bg-textcolor1 text-white rounded-full p-4 shadow-lg hover:bg-yellow-600"
      >
        <Pencil />
      </button>

      {/* Modal for adding posts */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Add New Post</h2>
            {/* <input
              type="text"
              placeholder="Name"
              value={newPost.user.name}
              onChange={(e) => setNewPost({ ...newPost, user: { ...newPost.user, name: e.target.value } })}
              className="w-full p-2 border rounded mb-4"
            />
            <input
              type="email"
              placeholder="Email"
              value={newPost.user.email}
              onChange={(e) => setNewPost({ ...newPost, user: { ...newPost.user, email: e.target.value } })}
              className="w-full p-2 border rounded mb-4"
            /> */}
            <input
              type="text"
              placeholder="Title"
              value={newPost.title}
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
              className="w-full p-2 border rounded mb-4"
            />
            <textarea
              placeholder="Content"
              value={newPost.content}
              onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
              className="w-full p-2 border rounded mb-4"
            ></textarea>
            <div className="flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 px-4 py-2 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleSavePost}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
