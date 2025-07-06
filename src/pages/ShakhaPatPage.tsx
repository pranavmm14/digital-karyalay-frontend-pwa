import { useTranslation } from 'react-i18next'

export const ShakhaPatPage = () => {
  const { t } = useTranslation()

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">{t('Shakha Pat')}</h1>

      <div className="border rounded p-4 shadow-sm bg-white">
        <p className="text-gray-700 mb-2">
          {t('This section will allow admins to manage swayamsevak records manually.')}
        </p>
        <ul className="list-disc pl-6 text-sm text-gray-600">
          <li>{t('Add/edit swayamsevak name, contact, and role')}</li>
          <li>{t('Filter swayamsevaks by shakha')}</li>
          <li>{t('Export or print report')}</li>
        </ul>
      </div>
    </div>
  )
}

export default ShakhaPatPage;