import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top 
  md:w-[2px] md:left-[30px] xs:left-[20px] dark:bg-primaryDark dark:shadow-3xl
  "
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Software Engineering Immersive"
            company="General Assembly"
            companyLink="https://generalassemb.ly/"
            time="2022-Present"
            address="New York, NY"
            work=" Utilized hands-on approach to design and build web applications with full CRUD functionality through Javascript, React, Express, SQL, HTML, CSS, etc. "
          />

          <Details
            position="Franchise Manager"
            company="AT&T"
            companyLink="https://www.att.com/"
            time="2021-2023"
            address="Ridgewood, NY"
            work="Managed daily operation, inventory, shipping & receiving,
            store performance metrics, and customer relations. Trained and 
            developed team members to meet and exceed sales goals and customer
            satisfaction."
          />

          <Details
            position="Franchise Manager | Lead Repair Technician"
            company="Repair Sharks"
            companyLink="https://www.repairsharks.com/"
            time="2015-2021"
            address="Great Neck, NY"
            work="Implemented RepairShopR software to streamline operations, 
            including POS systems, inventory management, automated ordering, 
            and customer communications. Facilitated troubleshooting and resolution 
            of hardware and software of devices ranging from mobile/personal electronics 
            to PCs. Oversaw daily operations and trained team members."
          />

          <Details
            position="O&C AML Risk Assessment Analyst"
            company="JP Morgan Chase"
            companyLink="https://www.jpmorganchase.com/"
            time="2014-2015"
            address="New York, NY"
            work="Reviewed, challenged, and substantiated control ratings and risk results.
            Provided advisory oversight on risk ratings metrics, report formats, corrective 
            actions, and data management. Assessed model documentation and validation templates 
            between J.P. Morgan - United States and other J.P. Morgan AML Risk Assessment Reports."
          />

          <Details
            position="Quality Assurance Internship"
            company="JP Morgan Chase"
            companyLink="https://www.jpmorganchase.com/"
            time="2013-2014"
            address="Jersey City, NJ"
            work="Led a team of 12 testers to a successful release of the Global Multimedia Services 
            Implementation Tool. Wrote over 70 test scripts, using testing tools such as HP ALM and 
            Jira. Developed wireframes and outlines for the organization's websites, which were used 
            by the engineers to create user-friendly pages for a JPMC client-facing website. Wrote End-User 
            Manuals for newly implemented technologies for JPMC client-facing services."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
