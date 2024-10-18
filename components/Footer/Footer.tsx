import Link from "next/link";
import styles from "./Footer.module.css";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.links}>
          <Link href={"/contact-us"} className={styles.link}>
            Contact Us
          </Link>
          <Link href={"/faqs"} className={styles.link}>
            Faqs
          </Link>
          <Link href={"/#order"} className={styles.link}>
            How to order
          </Link>
        </div>
        <div className={styles.bottom}>
          <div className={styles.icons}>
            <Link href="https://www.instagram.com/alishassecretgarden/">
              <FaInstagram className={styles.icon} />
            </Link>
            <Link href="https://www.tiktok.com/@alishassecretgarden">
              <FaTiktok className={styles.icon} />
            </Link>
            <Link href="/">
              <MdEmail className={styles.icon} />
            </Link>
          </div>
          <div className={styles.copyright}>
            <h4>Alishas Secret Garden © 2024</h4>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
