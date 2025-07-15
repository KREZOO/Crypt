import cn from 'classnames';
import Style from './StaticCard.module.scss';

interface Props {
  title: string;
  data: string;
  className?: string;
}

export function StaticCard({ title, data, className }: Props) {
  return (
    <div className={cn(Style.card, className)}>
      <div className={Style.data}>{data}</div>
      <div className={Style.title}>{title}</div>
    </div>
  );
}
