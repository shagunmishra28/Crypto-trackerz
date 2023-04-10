export default function Footer() {
  return (
    <footer className="text-sm text-center text-slate-400 mt-auto py-4 border-t border-slate-200">
      <p className="mx-2">
        CryptoTracker © {new Date().getFullYear()}{' '}
        <a
          href="https://github.com/feliperdamaceno"
          target="_blank"
          rel="author"
        >
          feliperdamaceno
        </a>
      </p>
    </footer>
  )
}
