import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

function Profile() {
  const navigate = useNavigate()

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [editMode, setEditMode] = useState(false)
  const [avatarFile, setAvatarFile] = useState(null)

  const token = localStorage.getItem("jwtToken")

  useEffect(() => {
    if (!token) {
      navigate("/login")
      return
    }

    const fetchUserProfile = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/user/profile`,
          { headers: { Authorization: `Bearer ${token}` } }
        )
        setUser(res.data)
      } catch (err) {
        setError("Failed to load profile")
      } finally {
        setLoading(false)
      }
    }

    fetchUserProfile()
  }, [])

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSave = async () => {
    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/api/user/profile`,
        user,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      setEditMode(false)
    } catch {
      alert("Update failed")
    }
  }

  const handleAvatarUpload = async () => {
    if (!avatarFile) return

    const formData = new FormData()
    formData.append("avatar", avatarFile)

    try {
      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/user/avatar`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      setUser({ ...user, avatar: res.data.avatar })
    } catch {
      alert("Avatar upload failed")
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("jwtToken")
    navigate("/login")
  }

  if (loading) return <p className="text-white text-center mt-20">Loading...</p>
  if (error) return <p className="text-red-500 text-center mt-20">{error}</p>

  return (
    <section className="min-h-screen bg-black text-white flex justify-center pt-20">
      <div className="bg-white/10 p-8 rounded-xl w-full max-w-md flex flex-col gap-6">

        {/* Avatar */}
        <div className="flex flex-col items-center gap-2">
          <img
            src={user.avatar || "/default-avatar.png"}
            className="w-24 h-24 rounded-full object-cover border"
          />

          <input
            type="file"
            onChange={(e) => setAvatarFile(e.target.files[0])}
            className="text-sm"
          />

          <button
            onClick={handleAvatarUpload}
            className="text-xs bg-white/20 px-3 py-1 rounded"
          >
            Update Avatar
          </button>
        </div>

        {/* Fields */}
        <div className="flex flex-col gap-4">
          <input
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
            disabled={!editMode}
            className="bg-black/40 p-2 rounded outline-none"
          />

          <input
            name="email"
            value={user.email}
            disabled
            className="bg-black/40 p-2 rounded opacity-60"
          />
        </div>

        {/* Stats */}
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

        {/* Actions */}
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
