import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
const testimonials = [
  {
    text: "The user experience is phenomenal, and the support team is always there to help. Highly recommended!",
    name: "Erica Wyatt",
    title: "Project Manager - Blocklink",
    avatarImage: "/assets/images/avatar-erica-wyatt.jpg",
  },
  {
    text: "Our productivity has skyrocketed since we started using Blockforge. It's a game-changer for our team.",
    name: "Noel Baldwin",
    title: "Lead Developer - Bitbridge",
    avatarImage: "/assets/images/avatar-noel-baldwin.jpg",
  },
  {
    text: "The integration process was seamless, and the performance improvement was remarkable.",
    name: "Harry Bender",
    title: "CTO - CryptoSolutions",
    avatarImage: "/assets/images/avatar-harry-bender.jpg",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-32 bg-zinc-800">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={index}
              initial={{
                opacity: 0,
                y: 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.5,
                ease: "easeInOut",
                duration: 1,
              }}
              className={twMerge(index === 2 && "md:hidden lg:block")}
            >
              <p className="font-heading font-black text-3xl lg:text-4xl">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <cite className="mt-8 block">
                <div className="flex gap-3 items-center">
                  <div>
                    <div
                      className="size-16 bg-zinc-700 rounded-full"
                      style={{
                        backgroundImage: `url(${testimonial.avatarImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>
                  </div>
                  <div>
                    <div className="text-lg not-italic font-black">
                      {testimonial.name}
                    </div>
                    <div className="text-zinc-400 not-italic">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </cite>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};
