import { BookOpen, CheckCircle, BarChart, FileText } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: BookOpen, title: "Easy Folder Creation" },
            { icon: CheckCircle, title: "Simple Attendance Tracking" },
            { icon: BarChart, title: "Real-Time Attendance Summaries" },
            { icon: FileText, title: "Comprehensive Reports" },
          ].map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
