"use client";

import { useEffect, useContext } from "react";
import Image from "next/image";
import { HeaderColorContext } from "./layout";
import stock from "../public/stock1.jpg";
import flowers from "../public/flower-stock.jpeg";
import plushies from "../public/plushies-stock.jpeg";
import keychains from "../public/keychains-stock.jpeg";
import { Button } from "@mantine/core";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function Home() {
  const { setHeaderColor } = useContext(HeaderColorContext);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options: IntersectionObserverInit = {
      root: null,
      threshold: 0.9, // Change occurs when 30% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bgColor = getComputedStyle(
            entry.target as Element
          ).backgroundColor;
          setHeaderColor(bgColor); // Update the header color
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [setHeaderColor]);

  return (
    <>
      <section className="section landing-section">
        <div className="image-container">
          <Image
            src={stock}
            alt="logo"
            width={1277}
            height={502}
            className="landing-image"
          />
          <h1 className="photo-text title-text">
            Welcome to Alishas Secret Garden
          </h1>
        </div>
      </section>
      <section className="section items-section">
        <div className="items-div">
          <div className="item-photo-container">
            <div className="photo-wrapper">
              <Link href={"/products/flowers"}>
                <Image
                  src={flowers}
                  alt="flowers"
                  width={322}
                  height={391}
                  className="item-photo"
                />
                <h1 className="photo-text item-text ">Flowers</h1>
              </Link>
            </div>
            <div className="photo-wrapper">
              <Link href={"/products/plushies"}>
                <Image
                  src={plushies}
                  alt="plushies"
                  width={322}
                  height={391}
                  className="item-photo"
                />
                <h1 className="photo-text item-text ">Plushies</h1>
              </Link>
            </div>
            <div className="photo-wrapper">
              <Link href="/products/keychains">
                <Image
                  src={keychains}
                  alt="keychains"
                  width={322}
                  height={391}
                  className="item-photo"
                />
                <h1 className="photo-text item-text ">Keychains</h1>
              </Link>
            </div>
          </div>
          <div className="view-items-btn-wrapper">
            <Link href={"/all-items"}>
              <Button
                variant="filled"
                color="rgba(255, 181, 43, 1)"
                size="xl"
                radius="xl"
                className="view-items-btn"
              >
                View all items
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="section order-section" id="order">
        <div className="order-div">
          <h1>How to order?</h1>
          <div className="steps-container">
            <div className="box step1">
              <h3>Step 1</h3>
              <p>
                Long paragraph Long paragraph Long paragraph Long paragraph Long
                paragraphLong paragraph Long paragraph v Long paragraphLong
                paragraph vLong paragraph
              </p>
            </div>
            <FaArrowRight className="arrow" />
            <div className="box step2">
              <h3>Step 2</h3>
              <p>
                Long paragraph Long paragraph Long paragraph Long paragraph Long
                paragraphLong paragraph Long paragraph v Long paragraphLong
                paragraph vLong paragraph
              </p>
            </div>
            <FaArrowRight className="arrow" />
            <div className="box step3">
              <h3>Step 3</h3>
              <p>
                Long paragraph Long paragraph Long paragraph Long paragraph Long
                paragraphLong paragraph Long paragraph v Long paragraphLong
                paragraph vLong paragraph
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section socials-section">
        <h1>Follow our socials</h1>
        <div className="socials-div">
          <div className="socials-photo-container">
            <div className="socials-photo-wrapper">
              <p>Placeholder</p>
            </div>
            <p>Instagram</p>
          </div>
          <div className="socials-photo-container">
            <div className="socials-photo-wrapper">
              <p>Placeholder</p>
            </div>
            <p>Tiktok</p>
          </div>
        </div>
      </section>
      <section className="section about-us-section">
        <div className="about-us-div">
          <h1>About Us</h1>
          <p>Big paragraph</p>
        </div>
      </section>
    </>
  );
}
