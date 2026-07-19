import './Loader.scss'

const Loader = () => {
  return (
    <div className="loader" role="status" aria-live="polite">
      <span className="loader__spinner" />
      <span className="loader__text">Loading products…</span>
    </div>
  )
}

export default Loader