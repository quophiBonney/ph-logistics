"use client";
import { React, useEffect } from "react";
import HomePage from "@/app/home/page";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return <HomePage />;
}
