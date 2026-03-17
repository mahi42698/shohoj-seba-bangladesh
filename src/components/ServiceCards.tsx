import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, CreditCard, Camera, Baby, PenTool, IdCard } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "পারিবারিক কার্ড আবেদন",
    description: "পারিবারিক কার্ড আবেদন ফরম তৈরি করুন এবং PDF ডাউনলোড করুন।",
    link: "/family-card",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: CreditCard,
    title: "এনআইডি কার্ড স্ক্যানার",
    description: "আপনার জাতীয় পরিচয়পত্র স্ক্যান করে PDF তৈরি করুন।",
    link: "/nid-scanner",
    color: "bg-success/10 text-success",
  },
  {
    icon: Camera,
    title: "পাসপোর্ট সাইজ ছবি তৈরি",
    description: "পাসপোর্ট সাইজের ছবি তৈরি ও ডাউনলোড করুন।",
    link: "/passport-photo",
    color: "bg-amber-100 text-amber-700",
  },
  {
    icon: Baby,
    title: "জন্ম সনদ আবেদন ফরম",
    description: "জন্ম সনদের আবেদন ফরম তৈরি করুন সহজে।",
    link: "/birth-certificate",
    color: "bg-blue-100 text-blue-700",
  },
  {
    icon: PenTool,
    title: "আবেদন পত্র জেনারেটর",
    description: "বিভিন্ন ধরণের আবেদন পত্র তৈরি করুন।",
    link: "/application-letter",
    color: "bg-rose-100 text-rose-700",
  },
  {
    icon: IdCard,
    title: "আইডি কার্ড PDF মেকার",
    description: "আইডি কার্ড থেকে PDF তৈরি করুন সহজে।",
    link: "/id-card-pdf",
    color: "bg-teal-100 text-teal-700",
  },
];

const ServiceCards = () => {
  const navigate = useNavigate();

  return (
    <section className="container py-16">
      <h2 className="text-3xl font-bold text-center mb-10">আমাদের সেবাসমূহ</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border animate-fade-in"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${service.color}`}>
              <service.icon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-muted-foreground mb-4 text-base">{service.description}</p>
            <Button
              variant="default"
              onClick={() => navigate(service.link)}
              className="w-full"
            >
              ব্যবহার করুন
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;
