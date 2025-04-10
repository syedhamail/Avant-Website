"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-white">

      {/* Company Logo */}
      <div className="fixed top-0 right-5 z-[1000]">
        <img
          src="/Avant-Website-Photos/avant-logo.png"
          alt="Company Logo"
          className="w-28 h-auto sm:w-32 md:w-36 lg:w-40 xl:w-44"
        />
      </div>

      {/* Company Name */}
      <div className="bg-[#2eb921] overflow-hidden whitespace-nowrap pt-5 pb-5">
        <motion.h1
          className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold inline-block text-[#1227e8dd]"
          animate={{ x: ["200%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          <a href="https://www.linkedin.com/company/avant-pharmapakistan/?originalSubdomain=pk">
            Avant Pharmaceuticals (Pvt) Ltd
          </a>
        </motion.h1>
      </div>

      {/* Hero Section */}
      <section
        className="pt-14 pb-14 mt-1"
        style={{
          background: "linear-gradient(90deg, rgba(16,203,15,1) 15%, rgba(60,222,141,1) 60%, rgba(157,199,178,1) 100%)",
        }}
      >
        <div className="flex justify-center">
          <img
            src="/Avant-Website-Photos/avant_hero-sec-pic.png"
            alt="pic"
            className="rounded-2xl border-2 border-black w-4/5 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5"
          />
        </div>

        <div className="mt-12 px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold italic text-center font-[initial]">
            A Company with the Vision
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold italic text-center mt-4 font-[initial]">
            of Customer’s Satisfaction
          </h1>
        </div>
      </section>

      {/* Vision Section */}
      <section
        className="pt-14 pb-14 mt-1"
        style={{
          background:
            "linear-gradient(90deg, rgba(16,203,15,1) 15%, rgba(60,222,141,1) 60%, rgba(157,199,178,1) 100%)",
        }}
      >
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 px-4">
          <img
            src="/Avant-Website-Photos/avant_vision.png"
            alt="pic"
            className="rounded-2xl border-2 border-black w-4/5 sm:w-2/3 md:w-1/2 lg:w-2/5"
          />

          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center text-[#1020addd]"
          >
            VISION
          </h1>
        </div>

        <div className="text-white font-bold text-base sm:text-lg mt-12 px-4 max-w-5xl mx-auto">
          <p className="text-center leading-7 sm:leading-8">
            We want to be a vision driven company focusing on capitalizing our human
            resources, implementing advance technologies and finding innovative
            solutions which are pivotal in achieving par excellence in quality,
            productivity and cost efficiency, helping us in not only making our
            business efficient but also in capturing a decent place in the local and
            global pharmaceuticals markets.
          </p>

          <p className="text-center mt-6 leading-7 sm:leading-8">
            We also want to be a company where projects are totally backed up by
            equity financing and retained earnings are sufficiently maintained to
            facilitate in the continuous provision of unmatched benefits to
            stakeholders and fulfillment of social responsibilities.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section
        className="pt-14 pb-14 mt-1"
        style={{
          background:
            "linear-gradient(90deg, rgba(16,203,15,1) 15%, rgba(60,222,141,1) 60%, rgba(157,199,178,1) 100%)",
        }}
      >
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 px-4">
          <img
            src="/Avant-Website-Photos/avant_mission.png"
            alt="pic"
            className="rounded-2xl border-2 border-black w-4/5 sm:w-2/3 md:w-1/2 lg:w-2/5"
          />

          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center text-[#1020addd]"
          >
            MISSION
          </h1>
        </div>

        <div className="text-white font-bold text-base sm:text-lg mt-12 px-4 max-w-5xl mx-auto">
          <p className="text-center leading-7 sm:leading-8">
            To produce premium quality medicines in the areas of proprietary
            prescription products, branded generics and niche therapeutic segments.
          </p>

          <p className="text-center mt-6 leading-7 sm:leading-8">
            We produce medicines that conform to cGMP requirements and cater the
            healthcare needs of not only the local but also the international markets.
          </p>

          <p className="text-center mt-6 leading-7 sm:leading-8">
            We work tirelessly to provide the highest quality and most affordable
            medicines to the ailing humanity, thereby contributing for the betterment
            of society.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="px-4 py-10">
        {/* Heading */}
        <div className="flex justify-center items-center mt-10">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center py-4 px-6 bg-[#2eb921] text-[#1227e8dd] rounded-lg shadow-lg w-auto lg:w-[40%]"
          >
            HISTORY
          </h1>
        </div>

        {/* Paragraph */}
        <div className="flex justify-center items-center mt-10">
          <p
            className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-[15px] text-center py-6 px-4 sm:w-3/4 md:w-2/3 lg:w-[70%] bg-gradient-to-r from-[#10cb0f] via-[#3cdc8d] to-[#9dc7b2] rounded-lg shadow-lg leading-7 sm:leading-8"
          >
            Today, Avant Pharma is one of the fastest growing national pharmaceuticals companies, proud
            of the current market share of its products. Avant Pharma products have unique advantages in
            the healthcare system. The company is continuously evaluating new products to add to the
            existing portfolio. The healing touch. It honors every individual{"'"}s right to live without
            suffering & sickness. At Avant Pharma, we dedicate ourselves to medical advancement in
            recognition of the fact that there can be no greater world than one free from disease.
            <br />
            <br />
            Avant Pharma is dedicated to enhancing human life through developments, manufacturing, and
            sales of quality pharmaceutical products. The company was established in 2012, with its main
            office and manufacturing facility in Karachi, Pakistan. Avant Pharma thanks doctors, pharmacists,
            and healthcare institutions who have placed trust in the quality and efficacy of its products.
            Avant Pharmaceuticals is built on a solid foundation of talented people, unparalleled research and
            development platforms, strong clinical and commercial presence, and trust from its loyal, quality-conscious
            prescribers. These factors have enabled Avant Pharma, in just a few years, to grow from a bold
            young startup to a leading pharmaceutical company in Pakistan. Besides contributing significantly
            to the economy through its growth, Avant Pharma has also contributed to exports to South Asia, Central Asia,
            the Middle East, and Africa, with Europe in progress. Avant Pharma’s growth motive is to believe in tomorrow
            and fulfill it, with extensive plans underway to meet the current cGMP. To meet growth requirements up to 2020,
            new plants are in planning, one for the basic raw material to be set up at Korangi Industrial Area. Avant Pharma’s
            vision is to provide quality medicines at an economical price for all classes of people, and the same vision is
            shared by its team of qualified and dedicated professionals with vast experience in research, production, and
            marketing of quality healthcare products.
          </p>
        </div>
      </section>

      {/* PHILOSOPHY Section */}
      <section className="px-4 py-10">
        {/* Heading */}
        <div className="flex justify-center items-center mt-10">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center py-4 px-6 bg-[#2eb921] text-[#1227e8dd] rounded-lg shadow-lg w-auto lg:w-[40%]"
          >
            PHILOSOPHY
          </h1>
        </div>

        {/* Paragraph */}
        <div className="flex justify-center items-center mt-10">
          <p
            className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-[15px] text-center py-6 px-4 sm:w-3/4 md:w-2/3 lg:w-[70%] bg-gradient-to-r from-[#10cb0f] via-[#3cdc8d] to-[#9dc7b2] rounded-lg shadow-lg leading-7 sm:leading-8"
          >
            We at AVANT PHARMA pharma group are united in a common mission with shared values that drive
            us to achieve an ambitious vision: “Customer caring Company” to be recognized as the leading
            pharmaceutical company on the globe. Avant Pharma Group endeavors to produce the best products,
            earn the best returns, offer the best package, and contribute to the communities in which we work
            and live. To accomplish this, we need to “Attract, Engage, Develop, Motivate & Retain Exceptional Talent”.
            We believe that every individual should have the chance to achieve significant growth, both financially
            and professionally.
          </p>
        </div>
      </section>

      {/* STRENGTHS Section */}
      <section className="px-4 py-10">
        {/* Heading */}
        <div className="flex justify-center items-center mt-10">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center py-4 px-6 bg-[#2eb921] text-[#1227e8dd] rounded-lg shadow-lg w-auto lg:w-[40%]"
          >
            STRENGTHS
          </h1>
        </div>

        {/* Paragraph */}
        <div className="flex justify-center items-center mt-10">
          <p
            className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-[15px] text-center py-6 px-4 sm:w-3/4 md:w-2/3 lg:w-[70%] bg-gradient-to-r from-[#10cb0f] via-[#3cdc8d] to-[#9dc7b2] rounded-lg shadow-lg leading-7 sm:leading-8"
          >
            Avant Pharma group believes that skills, commitment, modern concepts, new ways of working,
            supportive organizational structure, state-of-the-art technologies, innovative methods, and
            a motivated workforce are the key strengths towards our corporate success.
          </p>
        </div>
      </section>

      {/* PRODUCT DEVELOPMENT Section */}
      <section className="bg-gradient-to-r from-[#10cb0f] via-[#3cdc8d] to-[#9dc7b2] pt-14 pb-14 mt-10 px-4">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
          <img
            src="/Avant-Website-Photos/avant_product-development.png"
            alt="pic"
            className="rounded-2xl border-2 border-black w-3/4 sm:w-2/5 mb-6 sm:mb-0"
          />
          <h1
            className="text-4xl sm:text-6xl md:text-7xl text-white font-bold text-center sm:text-left"
            style={{ color: "#1020addd" }}
          >
            PRODUCT <br />DEVELOPMENT
          </h1>
        </div>

        <div className="mt-16 font-bold text-white">
          <p className="flex justify-center text-center leading-[32px] text-sm sm:text-base md:text-lg">
            Avant Pharma has a modern Development facility, equipped with the state
            of the art instruments <br /> and laboratory scale machines. Our laboratory is
            capable of producing all dosage forms of <br /> pharmaceuticals and performs
            various functions simultaneously.
          </p>
          <p className="flex justify-center text-center mt-5 leading-[32px] text-sm sm:text-base md:text-lg">
            All new molecules received from our multinational partners undergo studies
            for compatibility, <br /> stability and proper dosage forms to meet local conditions.
            New formulations are developed <br /> for our own products in different dosage
            forms. Continuous improvement is carried out on <br /> our existing products to
            enhance the stability and efficiency in intended use.
          </p>
          <p className="flex justify-center text-center mt-5 leading-[32px] text-sm sm:text-base md:text-lg">
            Before launching a new product, pilot batches are produced at lab scale.
            After proper testing <br /> and conducting stability studies and positive feedback,
            the product is recommended for <br /> commercial production. These commercial
            batches are then validated before they are <br /> released for marketing.
          </p>
        </div>
      </section>

      {/* QUALITY Section */}
      <section className="bg-gradient-to-r from-[#10cb0f] via-[#3cdc8d] to-[#9dc7b2] pt-14 pb-14 mt-1 px-4">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10 ">
          <img
            src="/Avant-Website-Photos/avant_quality.png"
            alt="pic"
            className="rounded-2xl border-2 border-black w-3/4 sm:w-2/5 mb-6 sm:mb-0"
          />
          <h1
            className="text-4xl sm:text-6xl md:text-7xl text-white font-bold text-center sm:text-left"
            style={{ color: "#1020addd" }}
          >
            QUALITY
          </h1>
        </div>

        <div className="mt-16 font-bold text-white">
          <p className="flex justify-center text-center leading-[32px] text-sm sm:text-base md:text-lg">
            Avant Pharma strives for continuous improvement through establishing and
            reviewing the quality policy, <br /> quality objectives and outcome of internal quality
            audits, corrective and preventive actions annually. <br /> Also providing training to its
            employees, adoption of latest techniques and the implementation <br /> of documented
            procedures at all levels.
          </p>
          <p className="flex justify-center text-center mt-5 leading-[32px] text-sm sm:text-base md:text-lg">
            Our Management provides good working environment and makes it sure that all
            the required resources are available <br /> and proper training is provided to the status
            and strives ceaselessly day after day to improve their skills. We strive <br />to enhance
            the quality of human life and help humanity to attain excellence in all aspects of
            quality and standards<br /> and provide quality products to all suffering people.
            We believe continuous improvement in our personnel,<br /> processes, products &
            yielding the best we can. We will provide total satisfaction to our direct and <br />
            indirect customers through quality products and services and observe high
            Ethical Standards.
          </p>
        </div>
      </section>

      {/* MANUFACTURING PLANT Section */}
      <section
        style={{
          background:
            "rgb(16,203,15) linear-gradient(90deg, rgba(16,203,15,1) 15%, rgba(60,222,141,1) 60%, rgba(157,199,178,1) 100%)",
        }}
        className="pt-14 pb-14 mt-1 px-4"
      >
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
          <img
            src="/Avant-Website-Photos/avant_manufacturing-plant.png"
            alt="pic"
            className="rounded-2xl border-2 border-black w-3/4 sm:w-2/5"
            style={{
              position: "relative",
              zIndex: 1,
              marginLeft: "0%",
            }}
          />
          <h1
            className="text-4xl sm:text-6xl md:text-7xl text-white font-bold text-center sm:text-left max-w-full"
            style={{
              color: "#1020addd",
            }}
          >
            MANUFACTURING <br />PLANT
          </h1>
        </div>

        <div className="mt-16 font-bold text-white">
          <p className="flex justify-center text-center leading-[32px] text-sm sm:text-base md:text-lg">
            We have a modern manufacturing plant situated in Karachi, Pakistan which is
            cGMP / Cglp <br /> compliant and well equipped including following manufacturing
            facilities.
          </p>
          <p className="flex justify-center text-center mt-5 leading-[32px] text-lg">
            • General Tablets Section <br />
            • General Capsules Section <br />
            • Liquid Section <br />
            • General Antibiotic Section <br />
          </p>
        </div>
      </section>

      {/* RESEARCH & DEVELOPMENT Section */}
      <section
        style={{
          background:
            "rgb(16,203,15) linear-gradient(90deg, rgba(16,203,15,1) 15%, rgba(60,222,141,1) 60%, rgba(157,199,178,1) 100%)",
        }}
        className="pt-14 pb-14 mt-1 px-4"
      >
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
          <img
            src="/Avant-Website-Photos/avant_research-&-development.png"
            alt="pic"
            className="rounded-2xl border-2 border-black w-3/4 sm:w-2/5"
            style={{
              position: "relative",
              zIndex: 1,
              marginLeft: "0%",
            }}
          />
          <h1
            className="text-4xl sm:text-6xl md:text-7xl text-white font-bold text-center sm:text-left max-w-full"
            style={{
              color: "#1020addd",
            }}
          >
            RESEARCH & <br />DEVELOPMENT
          </h1>
        </div>

        <div className="mt-16 font-bold text-white">
          <p className="flex justify-center text-center leading-[32px] text-sm sm:text-base md:text-lg">
            Research & Development (R&D) generally stands as the backbone
            of pharmaceuticals industry. In AVANT PHARMA we are mindful <br />
            of the importance of this sector; hence established a state of
            art R&D wing within our corporate boundaries. Avant Pharma{"'"}s <br />
            R&D Wing stands as the most important aspect of its business
            model; which receives constant and consistent attention <br /> and
            review of the corporate leadership. Resultantly; Avant Pharma{"'"}s
            R&D force has shown splendid results through <br /> the best
            utilization technological and other resources. While pursuing
            our frontline goal of providing reliable and <br /> responsible spirit. In
            order to continue this track of advancement Avant Pharma
            never loses its sight from the <br /> day to day training and capacity
            building of our R&D staff. With the best R&D resources, we
            ensure <br /> our capability to deal with all kind of future challenges
            in the health sector.
          </p>
        </div>
      </section>

      {/* SALES & MARKETING Section */}
      <section
        style={{
          background:
            "rgb(16,203,15) linear-gradient(90deg, rgba(16,203,15,1) 15%, rgba(60,222,141,1) 60%, rgba(157,199,178,1) 100%)",
        }}
        className="pt-14 pb-14 mt-1 px-4"
      >
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
          <img
            src="/Avant-Website-Photos/avant_sales-&-marketing.png"
            alt="pic"
            className="rounded-2xl border-2 border-black w-3/4 sm:w-2/5"
            style={{
              position: "relative",
              zIndex: 1,
              marginLeft: "0%",
            }}
          />
          <h1
            className="text-4xl sm:text-6xl md:text-7xl text-white font-bold text-center sm:text-left max-w-full"
            style={{
              color: "#1020addd",
            }}
          >
            SALES & <br />MARKETING
          </h1>
        </div>

        <div className="mt-16 font-bold text-white">
          <p className="flex justify-center text-center leading-[32px] text-sm sm:text-base md:text-lg">
            AVANT PHARMA believes in transparent modes of marketing; transmitting a reliable brand image to
            its customers. While <br /> handling the challenging task of Customer Relationship Marketing (CRM)
            at the cutting edge of thick competition, our <br /> Marketing & Sales Team is very much sensitive in
            understanding the requirement and expectation of our valued <br /> customers. The focal theme of our
            marketing strategy is to provide unambiguous and clear information about <br /> our products, quality
            control procedures, and facilities to our end users. On the other hand, our marketing <br /> team
            untiringly works on awareness campaigns relating to preventive and curative methods <br /> applied to
            different diseases and infections.
          </p>
          <p className="flex justify-center text-center mt-5 leading-[32px] text-sm sm:text-base md:text-lg">
            This is the way AVANT PHARMA always keeps in touch with its customers and provides valuable
            information relating <br /> to treatment modalities along with feedback on the use and effectiveness
            of products used by the consumers. Due <br /> to such active sales and marketing campaigns, AVANT
            PHARMA has registered one of the highest growth <br /> in the Pakistani market over the last few years,
            which is around a 40% annual growth rate.
          </p>
        </div>
      </section>

      {/* EXPORTS OPERATIONS Section */}
      <section
        style={{
          background:
            "rgb(16,203,15) linear-gradient(90deg, rgba(16,203,15,1) 15%, rgba(60,222,141,1) 60%, rgba(157,199,178,1) 100%)",
        }}
        className="pt-14 pb-14 mt-1 px-4"
      >
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
          <img
            src="/Avant-Website-Photos/avant_export-operations.png"
            alt="pic"
            className="rounded-2xl border-2 border-black w-3/4 sm:w-2/5"
            style={{
              position: "relative",
              zIndex: 1,
              marginLeft: "0%",
            }}
          />
          <h1
            className="text-4xl sm:text-6xl md:text-7xl text-white font-bold text-center sm:text-left max-w-full"
            style={{
              color: "#1020addd",
            }}
          >
            EXPORTS <br />OPERATIONS
          </h1>
        </div>

        <div className="mt-16 font-bold text-white">
          <p className="flex justify-center text-center leading-[32px] text-sm sm:text-base md:text-lg">
            To serve ailing humanity by offering quality pharmaceutical
            products globally, yet keeping the cost <br /> as controlled as possible.
            This is practically difficult in view of the fact that Avant Pharma intends to
            join <br /> hands with some world-renowned companies to manufacture their
            brands for international <br /> markets. By expanding the horizon, Avant
            Pharma can help more to the ailing humanity <br /> abroad to make them avail
            the products manufactured at world-class facilities.
          </p>
          <p className="flex justify-center text-center mt-5 leading-[32px] text-sm sm:text-base md:text-lg">
            The world is our home. Avant Pharma is a growth-oriented company with a
            concerted focus on seeking <br /> viable solutions and blends of research and
            technology, in order to offer top-of-the-line products to highly demanding
            international markets.
          </p>
          <p className="flex justify-center text-center mt-5 leading-[32px] text-sm sm:text-base md:text-lg">
            Avant Pharma uses its accumulated expertise in ethical pharmaceuticals marketing
            to develop new <br /> and untapped markets. With this aim in mind, the company
            is now <br /> introducing products to various international markets.
          </p>
          <p className="flex justify-center text-center mt-5 leading-[32px] text-sm sm:text-base md:text-lg">
            Avant Pharma intends to join hands with some of the world-renowned companies
            to manufacture their brands <br /> for international markets. By expanding the
            horizon, Avant Pharma contributes to helping ailing humanity <br /> internationally
            through the availability of products manufactured at world-class facilities.
          </p>
        </div>
      </section>

      {/* SUPPLY CHAIN Section */}
      <section
        style={{
          background:
            "rgb(16,203,15) linear-gradient(90deg, rgba(16,203,15,1) 15%, rgba(60,222,141,1) 60%, rgba(157,199,178,1) 100%)",
        }}
        className="pt-14 pb-14 mt-1 px-4"
      >
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
          <img
            src="/Avant-Website-Photos/avant_supply-chain.png"
            alt="pic"
            className="rounded-2xl border-2 border-black w-3/4 sm:w-2/5"
            style={{
              position: "relative",
              zIndex: 1,
              marginLeft: "0%",
            }}
          />
          <h1
            className="text-4xl sm:text-6xl md:text-7xl text-white font-bold text-center sm:text-left max-w-full"
            style={{
              color: "#1020addd",
            }}
          >
            SUPPLY <br />CHAIN
          </h1>
        </div>

        <div className="mt-16 font-bold text-white">
          <p className="flex justify-center text-center leading-[32px] text-sm sm:text-base md:text-lg">
            Supply Chain management is the planning & arrangement
            of materials, information, and finances in a well <br />
            coordinated and coherent manner so the quality products
            safely & timely reach the hands of <br /> customers through
            the chain of manufacturer, wholesaler, retailer, and other
            functioning <br /> units. In fact, growth in any sector depends
            on its smooth and robust supply chain.
          </p>
          <p className="flex justify-center text-center mt-5 leading-[32px] text-sm sm:text-base md:text-lg">
            Avant Pharma is proud to have established its well-linked supply
            chain, which has always proved to be <br /> its major strength.
            Today, Avant Pharma has a strong presence in all the provinces,
            nooks, and corners of <br /> Pakistan through the arteries of
            its distribution network. While recognizing the importance of
            a smooth <br /> supply chain system, Avant Pharma has always
            focused on developing a chain of functioning <br /> units, which
            pass through procurement, warehousing, operations, and
            distribution <br /> networks, with speed, accuracy, and value
            for money. With the strength of our <br /> vigorous supply chain,
            we foresee radiant prospects to enter newer <br /> and bigger
            markets, making our presence felt in the wide <br /> sphere of
            the pharmaceutical industry.
          </p>
        </div>
      </section>

      {/* General Health Portfolio Section */}
      <section
        style={{
          background:
            "rgb(16,203,15) linear-gradient(90deg, rgba(16,203,15,1) 15%, rgba(60,222,141,1) 60%, rgba(157,199,178,1) 100%)",
        }}
        className="pt-14 pb-14 mt-1"
      >
        <div className="flex justify-center">
          <h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white text-center"
            style={{
              color: "#1020addd",
            }}
          >
            General Health Portfolio
          </h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-14 px-4 sm:px-6 md:px-10">
          {[
            "1.png",
            "2.png",
            "3.png",
            "4.png",
            "5.png",
            "6.png",
            "7.png",
            "8.png",
            "9.png",
            "10.png",
            "11.png",
            "12.png",
            "13.png",
            "14.png",
            "15.png",
            "16.png",
            "17.png",
            "18.png",
            "19.png",
            "20.png",
            "21.png",
            "22.png",
            "23.png",
            "24.png",
            "25.png",
            "26.png",
            "27.png",
            "28.png",
            "29.png",
            "30.png",
            "31.png",
            "32.png"
          ].map((imageName, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border-t-4 border-[#2eb921] hover:shadow-2xl transition duration-300 ease-in-out"
            >
              <img
                src={`/General-Health-Portfolio/${imageName}`}
                alt={`Product ${index + 1}`}
                className="w-full h-[150px] md:h-[200px] lg:h-[250px] object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* AVANT PEADS CARE Section */}
      <section
        style={{
          background:
            "rgb(16,203,15) linear-gradient(90deg, rgba(16,203,15,1) 15%, rgba(60,222,141,1) 60%, rgba(157,199,178,1) 100%)",
        }}
        className="pt-14 pb-14 mt-1"
      >
        <div className="flex justify-center">
          <h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white text-center"
            style={{
              color: "#1020addd",
            }}
          >
            Avant Peads Care
          </h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-14 px-4 sm:px-6 md:px-10">
          {[
            "1.png",
            "2.png",
            "3.png",
            "4.png",
            "5.png",
            "6.png",
            "7.png",
            "8.png",
            "9.png",
            "10.png",
            "11.png",
            "12.png",
            "13.png",
            "14.png",
            "15.png",
            "16.png",
            "17.png",
          ].map((imageName, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border-t-4 border-[#2eb921] hover:shadow-2xl transition duration-300 ease-in-out"
            >
              <img
                src={`/Avant-Peads-Care/${imageName}`}
                alt={`Product ${index + 1}`}
                className="w-full h-[150px] md:h-[200px] lg:h-[250px] object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/*Avant CNS Mind Force Section*/}
      <section
        style={{
          background:
            "rgb(16,203,15) linear-gradient(90deg, rgba(16,203,15,1) 15%, rgba(60,222,141,1) 60%, rgba(157,199,178,1) 100%)",
        }}
        className="pt-14 pb-14 mt-1"
      >
        <div className="flex justify-center">
          <h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white text-center"
            style={{
              color: "#1020addd",
            }}
          >
            Avant CNS Mind Force
          </h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-14 px-4 sm:px-6 md:px-10">
          {[
            "1.png",
            "2.png",
            "3.png",
            "4.png",
            "5.png",
            "6.png",
            "7.png",
            "8.png",
            "9.png",
            "10.png",
            "11.png",
            "12.png",
            "13.png",
            "14.png",
            "15.png",
            "16.png",
            "17.png",
            "18.png",
            "19.png",
            "20.png",
            "21.png",
            "22.png",
            "23.png",
            "24.png",
            "25.png",
            "26.png",
            "27.png",
            "28.png",
            "29.png",
            "30.png",
            "31.png",
            "32.png"
          ].map((imageName, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border-t-4 border-[#2eb921] hover:shadow-2xl transition duration-300 ease-in-out"
            >
              <img
                src={`/Avant-CNS-Mind-Force/${imageName}`}
                alt={`Product ${index + 1}`}
                className="w-full h-[150px] md:h-[200px] lg:h-[250px] object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Life Healthcare Division Section */}
      <section
        style={{
          background:
            "rgb(16,203,15) linear-gradient(90deg, rgba(16,203,15,1) 15%, rgba(60,222,141,1) 60%, rgba(157,199,178,1) 100%)",
        }}
        className="pt-14 pb-14 mt-1"
      >
        <div className="flex justify-center">
          <h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white text-center"
            style={{
              color: "#1020addd",
            }}
          >
            Life Healthcare Division Section
          </h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-14 px-4 sm:px-6 md:px-10">
          {[
            "1.png",
            "2.png",
            "3.png",
            "4.png",
            "5.png",
            "6.png",
            "7.png",
            "8.png",
            "9.png",
            "10.png",
            "11.png",
            "12.png",
            "13.png",
            "14.png",
            "15.png",
            "16.png",
            "17.png",
            "18.png",
            "19.png",
            "20.png",
            "21.png",
            "22.png",
            "23.png",
            "24.png",
          ].map((imageName, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border-t-4 border-[#2eb921] hover:shadow-2xl transition duration-300 ease-in-out"
            >
              <img
                src={`/Avant-CNS-Mind-Force/${imageName}`}
                alt={`Product ${index + 1}`}
                className="w-full h-[150px] md:h-[200px] lg:h-[250px] object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/*Avant CNS Mind Force Section*/}
      <section
        style={{
          background:
            "rgb(16,203,15) linear-gradient(90deg, rgba(16,203,15,1) 15%, rgba(60,222,141,1) 60%, rgba(157,199,178,1) 100%)",
        }}
        className="pt-14 pb-14 mt-1"
      >
        <div className="flex justify-center">
          <h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white text-center"
            style={{
              color: "#1020addd",
            }}
          >
            Avant Products
          </h1>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-14 px-4 sm:px-6 md:px-10">
          {[
            "1.png",
            "3.png",
            "2.png",
            "5.png",
            "4.png",
            "6.png",
            "7.png",
            "8.png",
            "9.png",
            "10.png",
            "21.png",
            "11.png",
            "12.png",
            "13.png",
            "14.png",
            "15.png",
            "16.png",
            "17.png",
            "18.png",
            "19.png",
            "20.png",
            "22.png",
            "23.png",
            "20.png",
            "24.png",
            "25.png",
            "26.png",
            "27.png",
            "28.png",
            "29.png",
            "30.png",
            "31.png",
            "32.png",
            "33.png",
            "34.png",
            "35.png",
            "36.png",
            "37.png",
            "38.png",
            "39.png",
            "40.png",
            "41.png",
            "42.png",
            "43.png",
            "44.png",
            "45.png",
            "46.png",
            "47.png",
            "48.png",
            "49.png",
            "50.png",
            "51.png",
            "52.png",
            "53.png",
            "54.png",
            "55.png",
            "56.png",
            "57.png",
            "58.png",
            "59.png",
            "60.png",
            "61.png",
            "62.png",
            "63.png",
            "64.png",
            "65.png",
            "66.png",
            "67.png",
            "68.png",
            "69.png",
            "70.png",
            "71.png",
            "72.png",
            "73.png",
            "74.png",
            "75.png",
            "76.png",
            "77.png",
            "78.png",
            "79.png",
            "80.png",
            "81.png",
            "82.png",
            "83.png",
            "84.png",
            "85.png",
            "86.png",
            "87.png",
            "88.png",
            "89.png",
            "90.png",
            "91.png",
            "92.png",
            "93.png",
            "94.png",
            "95.png",
            "96.png",
            "97.png",
            "98.png",
            "99.png",
            "100.png",
            "101.png",
            "102.png",
            "103.png",
            "104.png",
            "105.png",
            "106.png"
          ].map((imageName, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border-t-4 border-[#2eb921] hover:shadow-2xl transition duration-300 ease-in-out"
            >
              <img
                src={`/Avant-Products/${imageName}`}
                alt={`Product ${index + 1}`}
                className="w-full h-[100px] md:h-[200px] lg:h-[250px] object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <section
        className="pt-16 pb-20 text-white relative overflow-hidden mt-1"
        style={{
          background: "linear-gradient(to bottom, #007fd4, #49b0e3)",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          {/* Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-14 sm:mb-20">
            Ensuring Better Health
          </h2>

          {/* Image and Values */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-32">
            {/* Image */}
            <img
              src="/Avant-Website-Photos/avant-company.png"
              alt="Factory Building"
              className="rounded-2xl shadow-2xl border-4 border-white w-full sm:w-[600px] lg:w-[700px] h-auto max-h-[500px] object-cover"
            />

            {/* Values */}
            <div className="flex flex-col items-center lg:items-start gap-4 mt-6 lg:mt-0">
              {["Excellence", "Integrity", "Innovation"].map((value, idx) => (
                <div
                  key={idx}
                  className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-full shadow-md text-center w-44 sm:w-48 text-base sm:text-lg"
                >
                  {value}
                </div>
              ))}
            </div>
          </div>

          {/* Factory Info */}
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start gap-10 mt-16 text-center lg:text-left">
            {/* Factory 1 */}
            <div className="text-sm sm:text-base md:text-lg font-semibold leading-relaxed">
              <h4 className="text-xl sm:text-2xl font-bold mb-2">Factory # 1:</h4>
              <p>
                Plot # 4/103, 4/104 Sector # 21 <br />
                Korangi Industrial Area, Karachi-Pakistan. <br />
                Phone: 021-35000583 <br />
                Email: avantcommercial@gmail.com <br />
                info@avantpharma.com.pk
              </p>
            </div>

            {/* Factory 2 */}
            <div className="text-sm sm:text-base md:text-lg font-semibold leading-relaxed mt-4 lg:mt-0">
              <h4 className="text-xl sm:text-2xl font-bold mb-2">Factory # 2:</h4>
              <p>
                Plot # M-28, Hub Industrial Trading <br />
                Estate, Hub-Pakistan. <br />
                Karachi-Pakistan.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}