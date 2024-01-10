import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-light sm:text-base
    "
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>

       
         <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=ankitsarangi21@gmail.com"
          className="flex items-center lg:py-2 pointer"
          target="_blank"
          rel="noopener noreferrer"
        >
          ankitsarangi21@gmail.com
        </a>

          
        

        <Link
          href="https://www.linkedin.com/in/ankit-sarangi/"
          target="_blank"
          className="underline underline-offset-2"
        >
          Say Hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
