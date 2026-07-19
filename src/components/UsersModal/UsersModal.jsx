import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { FiX } from 'react-icons/fi'
import { getUsers } from '../../services/api'
import Loader from '../Loader/Loader'
import './UsersModal.scss'


const UsersModal = ({ isOpen, onClose }) => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [hasFetched, setHasFetched] = useState(false)

  useEffect(() => {
    if (!isOpen) return undefined
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  useEffect(() => {
    if (!isOpen || hasFetched) return

    const fetchUsers = async () => {
      setLoading(true)
      setError(null)
      try {
        const data = await getUsers()
        setUsers(data)
        setHasFetched(true)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [isOpen, hasFetched])

  if (!isOpen) return null

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) onClose()
  }

  return createPortal(
    <div className="modal-overlay" onClick={handleBackdropClick}>
      <div className="modal-box users-modal">
        <div className="users-modal__header">
          <h2 className="users-modal__title">Users</h2>
          <button
            type="button"
            className="users-modal__close"
            onClick={onClose}
            aria-label="Close users list"
          >
            <FiX size={20} />
          </button>
        </div>

        <div className="users-modal__body">
          {loading && <Loader />}

          {error && (
            <p className="users-modal__error">
              Something went wrong while loading users.
            </p>
          )}

          {!loading && !error && (
            <ul className="users-modal__list">
              {users.map((user) => (
                <li className="users-modal__item" key={user.id}>
                  <img
                    src={user.image}
                    alt={`${user.firstName} ${user.lastName}`}
                    className="users-modal__avatar"
                  />
                  <div className="users-modal__details">
                    <p className="users-modal__name">
                      {user.firstName} {user.lastName}
                    </p>
                    <p className="users-modal__meta">{user.email}</p>
                    <p className="users-modal__meta">{user.phone}</p>
                    <p className="users-modal__meta">{user.company?.name}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>,
    document.body
  )
}

export default UsersModal