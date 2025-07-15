import { LinkBtn } from "@/components/ui/buttons/linkBtn/LinkBtn";
import { PAGES } from "@/config/pages.config";
import {
  Exchange1Icon,
  Exchange2Icon,
  Exchange3Icon,
  Exchange4Icon,
  Exchange5Icon,
  Exchange6Icon,
} from "@/components/ui/icons";

import Style from "./Hero.module.scss";
import Link from "next/link";

interface Props {}

export function Hero({}: Props) {
  const exchanges: { Icon: any; path: string; soon: boolean }[] = [
    { Icon: Exchange1Icon, path: PAGES.EXCHANGES[0], soon: false },
    { Icon: Exchange2Icon, path: PAGES.EXCHANGES[1], soon: false },
    { Icon: Exchange3Icon, path: PAGES.EXCHANGES[2], soon: false },
    { Icon: Exchange4Icon, path: PAGES.EXCHANGES[3], soon: false },
    { Icon: Exchange5Icon, path: PAGES.EXCHANGES[4], soon: false },
    { Icon: Exchange6Icon, path: PAGES.EXCHANGES[5], soon: true },
  ];

  return (
    <section className={Style.hero}>
      <div className={Style.content + " container"}>
        <header className={Style.header}>
          <h1 className="h1">
            Crypto trading {""}
            <div className={Style.subtitle}>with bots and smart seals</div>
          </h1>

          <LinkBtn text="Sign up now" path={PAGES.SIGN_UP} />
        </header>

        <footer className={Style.footer}>
          <div className={Style.exchangesTitle}>
            Trade for free on your favorite exchanges
          </div>

          <div className={Style.exchanges}>
            {exchanges.map(({ Icon, path, soon }, index) => (
              <Link
                href={path}
                key={index}
                className="exchange"
                target="_blank"
              >
                <Icon />

                {soon && <span className="soon">Soon</span>}
              </Link>
            ))}
          </div>
        </footer>
      </div>

      <div className={Style.bg} />
    </section>
  );
}
