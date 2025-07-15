import cn from 'classnames';
import Style from './SectionHeader.module.scss';

interface Props {
  title: string;
  titleGradient?: boolean;
  titleSize?: 'sm' | 'md' | 'lg';
  titleWidth?: string;
  desc?: string;
  descColor?: string;
  descSize?: string;
}

export function SectionHeader({
  title,
  titleGradient = false,
  titleSize = 'sm',
  titleWidth = 'auto',
  desc,
  descColor,
  descSize,
}: Props) {
  return (
    <header className={Style.header}>
      <h3
        className={cn('h3', Style.title, Style[titleSize], {
          [Style.gradient]: titleGradient,
        })}
        style={{ maxWidth: titleWidth }}
      >
        {title}
      </h3>

      <div
        className={cn('desc', Style.desc)}
        style={{ color: descColor, fontSize: descSize }}
      >
        {desc}
      </div>
    </header>
  );
}
