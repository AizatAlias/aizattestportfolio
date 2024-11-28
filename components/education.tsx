export function Education() {
  const education = [
    {
      institution: "Universiti Kuala Lumpur",
      degree: "Bachelor of Engineering (Technology) Product Design",
      duration: "September 2014 - September 2018"
    },
    {
      institution: "German-Malaysian Institute",
      degree: "Diploma of Product Design and Manufacturing",
      duration: "June 2011 - November 2014"
    }
  ]

  return (
    <section id="education" className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
      <div className="space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="text-center">
            <h3 className="text-xl font-semibold">{edu.institution}</h3>
            <p className="text-gray-600">{edu.degree}</p>
            <p className="text-sm text-gray-500">{edu.duration}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

