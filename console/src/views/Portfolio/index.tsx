import monogram from 'assets/monogram.svg';
import styles from './styles/Portfolio.module.scss';

export default function Portfolio() {
  const { shell } = styles
  return (
    <div className={shell}>
      <img alt="Kraken Flex" height={160} src={monogram} />
      <h1>Engineer Exam</h1>
    </div>
  );
}