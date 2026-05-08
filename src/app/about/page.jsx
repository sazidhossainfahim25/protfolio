import React from 'react';

const AboutPage = () => {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* সেকশন হেডিং */}
        <section className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-brand-blue">Me</span>
          </h1>
          <p className="text-lg opacity-80 leading-relaxed">
            Hello! I'm a passionate developer focused on building clean, user-friendly, and
            efficient web applications. I love turning complex problems into simple, beautiful, and
            intuitive designs.
          </p>
        </section>

        {/* গ্রিড কন্টেন্ট: স্কিল এবং পরিচয় */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* My Skills */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-brand-teal">My Skills</h2>
            <ul className="grid grid-cols-2 gap-3">
              {['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'JavaScript', 'MongoDB'].map(
                (skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-blue" />
                    {skill}
                  </li>
                )
              )}
            </ul>
          </section>

          {/* Education/Experience */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-brand-teal">Experience</h2>
            <div className="space-y-4">
              <div className="border-l-2 border-brand-blue pl-4">
                <h3 className="font-bold">Frontend Developer</h3>
                <p className="text-sm opacity-60">2023 - Present</p>
              </div>
              <div className="border-l-2 border-brand-blue pl-4">
                <h3 className="font-bold">Web Designer</h3>
                <p className="text-sm opacity-60">2022 - 2023</p>
              </div>
            </div>
          </section>
        </div>

        {/* কল টু অ্যাকশন */}
        <section className="mt-20 p-8 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 text-center">
          <h2 className="text-2xl font-bold mb-4">Let's work together!</h2>
          <p className="mb-6 opacity-80">
            I'm currently available for freelance work and new opportunities.
          </p>
          <a
            href="/contact"
            className="inline-block bg-brand-blue text-white px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform"
          >
            Get in Touch
          </a>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
