import style from "./avatar.module.css";
import Image from "next/image";

export default function Avatar({ name, picture }) {
  return (
    <Image
      src={picture}
      alt={name}
      width={500}
      height={500}
      className={style.avatarPhoto}
    />
  );
}
