import Link from "next/link";
import styles from "./navbar.module.css";
export default function Navbar({ preview }) {
  // coding note
  return (
    <div className={styles.measure}>
      <a href="https://damiansire.com" className={styles.siteTitle}>
        The Sire Way
      </a>
      <nav role="navigation" className={styles.siteNav}>
        <Link href="/">
          <a className={styles.navigationLink}>Home</a>
        </Link>
        <Link href="/posts">
          <a className={styles.navigationLink}>Blog</a>
        </Link>
        <Link href="/guias">
          <a className={styles.navigationLink}>Guias</a>
        </Link>
      </nav>
    </div>
  );
}
