import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export const NotFoundPage = () => {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-6">{t('Page not found')}</p>
      <Link
        to="/"
        className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition"
      >
        {t('Go to Dashboard')}
      </Link>
    </div>
  )
}
export default NotFoundPage;
