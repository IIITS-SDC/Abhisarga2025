"use client";
import ParallaxComponent from "../components/ParllaxComponent";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed text-white relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.98)), url(${encodeURI(
          "/contactBg.webp"
        )})`,
      }}
    >
      <ParallaxComponent backgroundImage="/contact.webp" heading="Contact Us" />
      <img src="/divider.png" className="w-1/2 sm:w-[400px] mt-16 mx-auto block" alt="" />
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#B8860B] mb-4 flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
            Contact Our Wizards.
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
          </h2>
        </div>

        <div className="relative w-[80%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
            {[
              {
                title: "Yashwanth S",
                subtitle: "Chair",
                content: "secretary.sdc@iiits.in", //"+91 6369096042",
              },
              {
                title: "Charvi Palem",
                subtitle: "Co-Chair",
                content: "charvi.p22@iiits.in", //"+91 7671075067",
              },
              {
                title: "Suyash Tiwari",
                subtitle: "Co-Chair",
                content: "suyash.t22@iiits.in", //"+91 9755000981",
              },
              {
                title: "Abhinav Mars",
                subtitle: "SLC President",
                content: "president.slc@iiits.in", //"+91 7569833006",
              },
              {
                title: "Kannan M",
                subtitle: "SDC President",
                content: "president.sdc@iiits.in", //"+91 9843323497",
              },
              {
                title: "Shreeraj M",
                subtitle: "Sponsorship Lead",
                content: "abhisarga.sponsorship@iiits.in", //"+91 8143272388",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="p-2 md:p-4 lg:p-6 bg-[#24222d]/50 backdrop-blur-sm border border-[#F7E290]/20 rounded-lg">
                  <div className="flex flex-col items-center gap-3 justify-center text-center">
                    <div>
                      <h3
                        className="text-xl font-semibold"
                        style={{ color: "#F7E290" }}
                      >
                        {item.title}
                      </h3>
                      <p className="-translate-y-1 text-gray-400">
                        {item.subtitle}
                      </p>
                    </div>
                    <p className="text-gray-300">{item.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 h-[200px] sm:h-[500px]">
            <iframe
              className="rounded-xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31028.893224027328!2d80.0227328!3d13.5593984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d773f1e0f8721%3A0xadb0842ffc2719e4!2sIndian%20Institute%20of%20Information%20Technology%2C%20Sri%20City%2C%20Chittoor!5e0!3m2!1sen!2sin!4v1737188121631!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
