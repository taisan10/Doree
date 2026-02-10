export default function EducationHero() {
  return (

<section className="w-full bg-[#FFF7ED] text-[#131271]">
  <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-14 items-center">
    
    {/* LEFT CONTENT */}
    <div>
      <p className="text-sm uppercase tracking-widest text-[#131271]/70">
        Meaning of Education
      </p>

      <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
        Education Creates
        <br />
        Possibilities, Not Just Degrees
      </h2>

      <p className="mt-6 text-base md:text-lg leading-relaxed text-[#131271]/90">
        Education gives children the tools to think, question, and dream.
        It equips them with skills to navigate life with confidence and
        enables communities to grow sustainably across generations.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div className="w-full   mx-auto">
       <img
         src="/Whose/Hero.jpg"
         alt="Education initiative with children"
         className="w-full  h-[320px] md:h-[520px] md:w-[700px] object-cover"
       /> 
     </div>

  </div>






























<section className="w-full bg-orange-50 py-20">
  <div className="max-w-7xl mx-auto px-6">

    {/* Section Header */}
    <div className="max-w-3xl mx-auto text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-[#131271] mb-6">
        Why Education Truly Matters
      </h2>

      <p className="text-lg text-[#131271]/80 leading-relaxed">
        Education is not just about books or classrooms.
        It is about giving children the power to think,
        choose, and shape their own future with dignity.
      </p>
    </div>

    {/* Impact Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

      {/* Card 1 */}
      <div className="bg-white rounded-3xl p-8 shadow-sm">
        <h4 className="text-xl font-semibold text-[#131271] mb-3">
          Breaks the Cycle of Poverty
        </h4>
        <p className="text-[#131271]/75 leading-relaxed">
          Education opens doors to stable livelihoods,
          helping families move from survival to stability
          across generations.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-3xl p-8 shadow-sm">
        <h4 className="text-xl font-semibold text-[#131271] mb-3">
          Builds Confidence & Awareness
        </h4>
        <p className="text-[#131271]/75 leading-relaxed">
          An educated child understands rights, health,
          and responsibilities — becoming a confident
          decision-maker in life.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-3xl p-8 shadow-sm">
        <h4 className="text-xl font-semibold text-[#131271] mb-3">
          Empowers Girls & Communities
        </h4>
        <p className="text-[#131271]/75 leading-relaxed">
          When girls are educated, entire communities
          grow stronger, healthier, and more equal.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-white rounded-3xl p-8 shadow-sm">
        <h4 className="text-xl font-semibold text-[#131271] mb-3">
          Shapes a Responsible Society
        </h4>
        <p className="text-[#131271]/75 leading-relaxed">
          Education creates informed citizens who
          contribute positively to society, economy,
          and nation-building.
        </p>
      </div>

    </div>
  </div>
</section>



















<section className="w-full bg-orange-50 py-20">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left Image */}
      <div className="w-full">
        <img
          src="/Whose/Education.jpg"
          alt="Education changing lives"
          className="w-full h-[420px] object-cover rounded-3xl"
        />
      </div>

      {/* Right Content */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#131271] mb-6">
          Why Education Matters
        </h2>

        <p className="text-lg text-[#131271]/80 leading-relaxed mb-8">
          Education is more than learning alphabets or passing exams.
          It is the foundation that gives children confidence,
          choice, and the courage to dream beyond their circumstances.
        </p>

        <ul className="space-y-6">
          <li className="flex items-start gap-4">
            <span className="w-2 h-2 mt-2 rounded-full bg-[#131271]" />
            <p className="text-[#131271]/80">
              Education breaks generational poverty and creates long-term stability.
            </p>
          </li>

          <li className="flex items-start gap-4">
            <span className="w-2 h-2 mt-2 rounded-full bg-[#131271]" />
            <p className="text-[#131271]/80">
              It empowers children, especially girls, with awareness and self-belief.
            </p>
          </li>

          <li className="flex items-start gap-4">
            <span className="w-2 h-2 mt-2 rounded-full bg-[#131271]" />
            <p className="text-[#131271]/80">
              Educated communities are healthier, stronger, and more resilient.
            </p>
          </li>
        </ul>
      </div>

    </div>
  </div>
</section>





</section>
    
  );
}
