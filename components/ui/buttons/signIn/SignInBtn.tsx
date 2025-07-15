import Style from "./SignInBtn.module.scss";
interface Props {
  text: string;
}
import Link from "next/link";
import Image from "next/image";
import { Arrow01Icon } from "@/components/ui/icons";

export function SignInBtn({ text }: Props) {
  return (
    <div>
      <Link href="#" className={Style.signInBtn}>
        {text}
        <Arrow01Icon />
      </Link>
    </div>
  );
}
