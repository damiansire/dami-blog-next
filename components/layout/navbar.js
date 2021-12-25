import Container from "./container";
import cn from "classnames";
import Link from "next/link";

export default function Navbar({ preview }) {
  return (
    <div
      className={cn("border-b", {
        "bg-accent-7 border-accent-7 text-white": preview,
        "bg-accent-1 border-accent-2": !preview,
      })}
    >
      <Container>
        <ul className="flex justify-evenly">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/guias">
              <a>Guias</a>
            </Link>
          </li>
        </ul>
      </Container>
    </div>
  );
}
