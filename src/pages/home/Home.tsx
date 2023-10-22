import i18n from 'common/languages/i18n';
import useLanguage from 'hooks/useLanguage';
import { Language } from 'store/slices/appSlice';

const Home = () => {
  const { setCurrentLanguage } = useLanguage();

  const setLanguageToPortuguese = () => {
    setCurrentLanguage(Language.PT);
  };

  return (
    <div>
      <div>{i18n.t('greeting')}</div>
      <button onClick={setLanguageToPortuguese}>Set Language to Portuguese</button>
    </div>
  );
};

export default Home;
