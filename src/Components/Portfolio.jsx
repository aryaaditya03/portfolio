/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Membuat Project Website Trivia Bunga",
    description:
      "Tugas Kampus Semester 2 Mata Kuliah Web Programming 1, membuat website trivia bunga menggunakan HTML, CSS, dan JavaScript.",
    url: "https://github.com/aryaaditya03/TriviaBunga.git",
  },
  {
    title: "Membuat Project Website NewStudentInfo",
    description:
      "Membuat website NewStudentInfo menggunakan HTML, CSS, dan JavaScript. Website ini berisi informasi mahasiswa baru, seperti biodata, nilai, dan lain-lain. Menggunakan framework Bootstrap & CodeIgniter.",
    url: "https://github.com/aryaaditya03/NewStudentInfo.git",
  },
  {
    title: "My Resume Project Website",
    description:
      "A project website to showcase my resume. Built using HTML, CSS, PHP, JavaScript, and hosted on Hostinger.",
    url: "https://arya-aditya.codeafive.com/",
  },
  {
    title: "Membuat Website PPDB SMAN180",
    description:
      "Membuat website SMAN180 menggunakan HTML, CSS, dan JavaScript. Website ini berisi informasi sekolah, seperti visi, misi, dan lain-lain. Website ini dibuat untuk PPDB SMAN180.",
    url: "https://sma180.site",
  },
  {
    title: "Membuat Aplikasi Multi-Tool",
    description:
      "Membuat aplikasi Multi-Tool dengan site appsgeyser.com",
    url: "https://drive.google.com/drive/folders/1Ic0tltv2iOoDbvYV5Ewqi2M7yk8SP9R9",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
