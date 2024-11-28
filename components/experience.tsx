import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Experience() {
  const experiences = [
    {
      company: "Pteris Global Limited",
      position: "Mechanical Design Engineer",
      duration: "June 2022 - Present",
      location: "Penang, Malaysia",
      description: "Specializing in Baggage Handling System design and implementation.",
      projects: [
        "Lead Engineer for Cheddi Jagan International Airport",
        "Team Member for Charles Douglas International Airport",
        "Team Member for Sharjah International Airport"
      ]
    },
    {
      company: "Daifuku Oceania",
      position: "Mechanical Engineer",
      duration: "December 2017 - May 2022",
      location: "Kuala Lumpur, Malaysia",
      description: "Specialized in Baggage Handling System design and project management.",
      projects: [
        "Lead Engineer for Kansai International Airport (Domestic Line)",
        "Lead Engineer for Honaira International Airport",
        "Lead Engineer for King Khalid International Airport",
        "Team Member for Kansai International Airport (International Line)",
        "Team Member for Haneda International Airport",
        "Team Member for FedEx - Roissy Charles De Gaulle logistic material handling system",
        "Supervised installation for Baggage Tray System (BTS) Test-Loop System - Nilai, Malaysia",
        "Team Member for Muscat Crew Terminal Airport"
      ]
    },
    {
      company: "Daifuku Oceania",
      position: "Intern",
      duration: "June 2017 - November 2017",
      location: "Kuala Lumpur, Malaysia",
      description: "Gained practical experience in mechanical engineering and baggage handling systems.",
      projects: []
    },
    {
      company: "Sanyco Grand",
      position: "Intern",
      duration: "June 2013 - November 2013",
      location: "Shah Alam, Selangor, Malaysia",
      description: "Acquired foundational experience in mechanical engineering practices.",
      projects: []
    }
  ]

  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Professional Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">{exp.company}</h3>
                  <p className="text-gray-600">{exp.position}</p>
                </div>
                <Badge variant="secondary">{exp.duration}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-2">{exp.location}</p>
              <p className="text-gray-700 mb-4">{exp.description}</p>
              {exp.projects.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-2">Key Projects:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {exp.projects.map((project, projectIndex) => (
                      <li key={projectIndex} className="text-gray-700">{project}</li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

