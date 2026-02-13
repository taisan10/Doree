export default function Why_Edu(){
  return(


<section className="w-full bg-orange-50 py-20">
  <div className="max-w-7xl mx-auto px-1">

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
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">

      {/* Card */}
      {[
        {
          title: "Breaks the Cycle of Poverty",
          desc: "Education opens doors to stable livelihoods, helping families move from survival to stability across generations.",
          img: "/Whose/Education.jpg",
        },
        {
          title: "Builds Confidence & Awareness",
          desc: "An educated child understands rights, health, and responsibilities — becoming a confident decision-maker in life.",
          img: "/Whose/Education1.jpg",
        },
        {
          title: "Empowers Girls & Communities",
          desc: "When girls are educated, entire communities grow stronger, healthier, and more equal.",
          img: "/Whose/Education11.png",
        },
        {
          title: "Shapes a Responsible Society",
          desc: "Education creates informed citizens who contribute positively to society, economy, and nation-building.",
          img: "/Whose/Education10.png",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition"
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-66 object-cover"
          />

          <div className="p-8">
            <h4 className="text-xl font-semibold text-[#131271] mb-3">
              {item.title}
            </h4>
            <p className="text-[#131271]/75 leading-relaxed">
              {item.desc}
            </p>
          </div>
        </div>
      ))}

    </div>
  </div>
</section>





  )
}