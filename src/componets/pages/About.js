import React from "react";
import Footer from "../Footer";
import "./About.css";

function About() {
  return (
    <>
      <section class="about-us" id="about">
        <div class="bg-image"></div>
        <h2 class="section__titleus section__title--aboutus">About Us</h2>
        <div class="services">
          <div class="service">
            <h3>Our Firm</h3>
            <p>
              ActiveWayz Engineering, founded in 2016 by Admas Zewdie, is a
              transportation and civil engineering consulting firm with a focus
              on active transportation: complete streets, pedestrian, bicycle
              lanes, and trails. ActiveWayz provides technical services to
              cities, counties, and other public agencies in planning and
              designing cost-effective transportation projects.
            </p>
            <p>
              ActiveWayz has completed transportation projects with more than 25
              client agencies throughout Northern California, with particular
              focus on roadway and active transportation projects in Caltrans
              and local jurisdictions. ActiveWayz’ services include complete
              street design, trail design, feasibility studies, cost estimating,
              utility investigation and relocation coordination, and Caltrans
              project development and delivery.
            </p>
            <p>
              ActiveWayz Engineering is a California Unified Certification
              Program (CUCP) certified minority-owned Underutilized and
              Disadvantaged Business Enterprise (UDBE and DBE) and an Alameda
              County Small Local Business Enterprise.
            </p>
          </div>
        </div>
      </section>
      <section class="about-me" id="about">
        <h2 class="section__title section__title--about">Our People</h2>
        <p class="section__subtitle section__subtitle--about">
          Founder Admas Zewdie
        </p>
        <div class="about-me__body">
          <p>
            Admas Zewdie has more than 24 years experience in the design and
            management of transportation and public works projects. Prior to
            founding ActiveWayz Engineering Admas Zewdie served as
            Transportation Services Division Manager for a mid-sized private
            consulting firm. His experience encompasses a wide variety of skills
            including project management, geometric design, specification
            writing, cost estimating, drainage design, utility relocation
            coordination, and constructability review. He has extensive
            experience in the planning and design of trails, trail connections,
            and trail/roadway crossings.
          </p>
          <p>
            Admas serves on his home city's Bicycle and Pedestrian Advisory
            Committee, where he uses his complete design experience to advance
            the goal of transforming our streets to serve all users. He holds a
            B.Sc. in Civil Engineering from Addis Ababa University and an MBA
            from Haas School of Business, UC Berkeley. You can reach Admas at
            Admas@ActiveWayz.Engineering.
          </p>
        </div>
        <img src="/img/admi.webp" alt="" class="about-me__img" />
      </section>
      <Footer />
    </>
  );
}

export default About;
