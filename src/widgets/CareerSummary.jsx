export default function CareerSummary() {
  const careerTimeline = [
    {
      id: 1,
      company: "TKM Institute of Technology",
      title: "Graduation",
      date: "June 2025",
      jobDescription: "",
    },
    {
      id: 2,
      company: "Ferns IT Solutions",
      title: "React Developer Intern",
      date: "",
      jobDescription: "",
    },
    {
      id: 3,
      company: "ECS Fin Inc.",
      title: "Associate Software Engineer",
      date: "Novemeber 2025",
      jobDescription:
        "Collaborate with backend teams to understand the business logic behind Java APIs and translate them into intuitive frontend workflows. Design user interactions, integrate APIs, and ensure seamless communication between the UI and backend services.",
    },
  ];
  return (
    <div className="flex max-sm:flex-col">
      {careerTimeline.map((item, index) => {
        const isLast = index === careerTimeline.length - 1;
        return (
          <div
            className="h-16 flex items-center content-center gap-1 w-full"
            key={item.id}
          >
            <p className="absolute mb-8 mr-8 text-xs text-zinc-300">
              {item.date}
            </p>
            <div className="w-1 h-1 rounded-full bg-white" />
            <p className="absolute mt-8 text-sm font-bold text-zinc-300 ">
              {item.company}
            </p>
            <p className="absolute mt-17 text-[10px] text-zinc-400 italic">
              {item.title}
            </p>
            <hr className={`w-full ${isLast ? "border-dashed" : "mr-1"}`} />
            {isLast && (
              <>
                <div className="w-1 h-1 rounded-full bg-white" />{" "}
                <p className="mt-8 text-sm font-bold text-zinc-300">Present</p>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
