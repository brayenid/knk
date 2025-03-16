export default function Credit() {
  return (
    <div className="bg-gray-800 p-4 text-center text-gray-400 uppercase text-sm">
      <p>
        © {new Date().getFullYear()} - Dev.{' '}
        <a href="https://brayenluhat.netlify.app" target="_blank" rel="noopener noreferrer">
          Brayen L
        </a>
      </p>
    </div>
  )
}
