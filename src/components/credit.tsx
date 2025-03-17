export default function Credit() {
  return (
    <div className="bg-gray-900 p-4 text-center text-gray-400 text-sm">
      <p>
        © {new Date().getFullYear()} - dev by{' '}
        <a className="hover:underline" href="https://brayenluhat.netlify.app" target="_blank" rel="noopener noreferrer">
          brayen luhat
        </a>
      </p>
    </div>
  )
}
