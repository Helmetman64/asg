"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "../../public/resized.png";
import styles from "./Header.module.css";
import Link from "next/link";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useContext } from "react";
import { HeaderColorContext } from "../../app/theme-provider";

const Header: React.FC = () => {
  const { headerColor } = useContext(HeaderColorContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={styles.header}
      style={{ "--header-bg-color": headerColor } as React.CSSProperties}
    >
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <div
            className={`${styles.menuToggle} ${isOpen ? styles.isActive : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            role="button"
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>
        </nav>
        <div className={styles.logo}>
          <Image src={logo} alt="Logo" />
        </div>
      </div>

      {/* Sliding Menu */}
      <div className={`${styles.sideMenu} ${isOpen ? styles.open : ""}`}>
        <ul>
          <li className={styles.navItem}>
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/products" onClick={closeMenu}>
              Shop All Items
            </Link>
            <ul>
              <li className={styles.navItem}>
                <Link href="/products/flowers" onClick={closeMenu}>
                  Flowers
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/products/plushies" onClick={closeMenu}>
                  Plushies
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/products/keychains" onClick={closeMenu}>
                  Keychains
                </Link>
              </li>
            </ul>
          </li>
          <li className={styles.navItem}>
            <Link href="/events" onClick={closeMenu}>
              Upcoming Events
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/#order" onClick={closeMenu}>
              How to Order
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about-us" onClick={closeMenu}>
              About Us
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact-us" onClick={closeMenu}>
              Contact Us
            </Link>
          </li>
        </ul>
        <div className={styles.navIcons}>
          <div className={styles.navItem}>
            <Link href="https://www.instagram.com/alishassecretgarden/">
              <FaInstagram className={styles.icon} />
            </Link>
          </div>
          <div className={styles.navItem}>
            <Link
              href="https://www.tiktok.com/@alishassecretgarden"
              onClick={closeMenu}
            >
              <FaTiktok className={styles.icon} />
            </Link>
          </div>
          <div className={styles.navItem}>
            <Link href="/" onClick={closeMenu}>
              <MdEmail className={styles.icon} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
