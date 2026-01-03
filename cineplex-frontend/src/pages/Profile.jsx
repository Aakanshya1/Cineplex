import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function Profile() {
  const navigate = useNavigate()

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [editMode, setEditMode] = useState(false)
  const [avatarFile, setAvatarFile] = useState(null)
  const [avatarPreview, setAvatarPreview] = useState(null)
  const token = localStorage.getItem("jwtToken")

  useEffect(() => {
    if (!token) {
      navigate("/login")
      return
    }

    const fetchUserProfile = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/auth/getuser`,
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        )
        setUser(res.data.user)
        console.log(res.data.user)
      } catch (err) {
        console.error(err.response?.data || err.message)

        if (err.response?.status === 401) {
          localStorage.removeItem("jwtToken")
          navigate("/login")
        } else {
          setError("Failed to load profile")
        }
      } finally {
        setLoading(false)
      }
    }

    fetchUserProfile()
  }, [token, navigate])

  const handleChange = (e) => {
    setUser(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSave = async () => {
    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/auth/update`,
        user,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      setEditMode(false)
    } catch {
      alert("Update failed")
    }
  }

const handleAvatarUpload = async () => {
  if (!avatarFile) return;

  const formData = new FormData();
  formData.append("avatar", avatarFile);

  try {
    const res = await axios.put(
      `${import.meta.env.VITE_API_URL}/auth/uploadavatar`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data"
        }
      }
    );

   
    setUser(prev => ({ ...prev, avatar: res.data.avatar }));
    
    setAvatarPreview(null);
    setAvatarFile(null);

  } catch (err) {
    alert("Avatar upload failed");
    console.error(err.response?.data || err.message);
  }
};


  useEffect(() => {
  return () => {
    if (avatarPreview) {
      URL.revokeObjectURL(avatarPreview)
    }
  }
}, [avatarPreview])

  const handleLogout = () => {
    localStorage.removeItem("jwtToken")
    navigate("/login")
  }

  if (loading) return <p className="text-white text-center mt-20">Loading...</p>
  if (error) return <p className="text-red-500 text-center mt-20">{error}</p>
  if (!user) return null

  return (
    <section className="min-h-screen bg-black text-white flex justify-center pt-20">
      <div className="bg-white/10 p-8 rounded-xl w-full max-w-md flex flex-col gap-6">

      
      <div className="flex flex-col items-center gap-3">

  <input
    type="file"
    id="avatarInput"
    accept="image/*"
    onChange={(e) => {
  const file = e.target.files[0]
  if (!file) return
  setAvatarFile(file)
  setAvatarPreview(URL.createObjectURL(file))
}}
    className="hidden"
  />

  
  <label htmlFor="avatarInput" className="cursor-pointer group">
    <div className="relative">
     <img
  src={avatarPreview || `${import.meta.env.VITE_API_URL}${user.avatar}` || "/default-avatar.png"}
  className="w-24 h-24 rounded-full object-cover border border-white/20 group-hover:opacity-80 transition"
/>



     
      <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-xs text-white opacity-0 group-hover:opacity-100 transition rounded-full">
        Change
      </div>
    </div>
  </label>


  {avatarFile && (
    <button
      onClick={handleAvatarUpload}
      className="text-xs bg-white/20 px-3 py-1 rounded"
    >
      Save Avatar
    </button>
  )}
</div>

        
        <div className="flex flex-col gap-4">
          <input
            name="name"
            value={user.name || ""}
            onChange={handleChange}
            disabled={!editMode}
            className="bg-black/40 p-2 rounded outline-none"
          />

          <input
            name="email"
            value={user.email || ""}
            disabled
            className="bg-black/40 p-2 rounded opacity-60"
          />
        </div>

        
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="bg-black/40 p-4 rounded">
            <p className="text-2xl font-bold">{user.watchlistCount || 0}</p>
            <p className="text-sm text-gray-400">Watchlist</p>
          </div>
          <div className="bg-black/40 p-4 rounded">
            <p className="text-2xl font-bold">{user.watchedCount || 0}</p>
            <p className="text-sm text-gray-400">Watched</p>
          </div>
        </div>

     
        {editMode ? (
          <button onClick={handleSave} className="bg-green-600 py-2 rounded">
            Save Changes
          </button>
        ) : (
          <button onClick={() => setEditMode(true)} className="bg-blue-600 py-2 rounded">
            Edit Profile
          </button>
        )}

        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 transition py-2 rounded"
        >
          Logout
        </button>
      </div>
    </section>
  )
}

export default Profile
