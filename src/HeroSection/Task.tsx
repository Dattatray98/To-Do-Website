// Features.tsx
import { CheckCircle } from "lucide-react";

const features = [
  "Create and manage tasks easily",
  "Set reminders and due dates",
  "Mark tasks as completed",
  "Lightweight, fast and responsive",
];

export default function Features() {
  return (
    <section className="py-16 px-6 md:px-16">
      <h2 className="text-3xl font-bold text-center text-blue-200 mb-10">Why Choose Our To-Do App?</h2>
      <ul className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start space-x-4">
            <CheckCircle className="text-indigo-600 mt-1" size={24} />
            <p className="text-lg text-gray-400">{feature}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
