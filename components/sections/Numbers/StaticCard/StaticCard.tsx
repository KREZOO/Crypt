import cn from 'classnames';
import Style from './StaticCard.module.scss';

interface Props {
  title: string;
  data: string;
  className?: string;
  lang?: string;
}

export function StaticCard({ title, data, className, lang }: Props) {
  return (
    <div className={cn(Style.card, className)}>
      <div className={Style.data} lang={lang}>
        {data}
      </div>

      <div className={Style.title} lang={lang}>
        {title}
      </div>
    </div>
  );
}
