import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import ServiceCards from "@/components/ServiceCards";
import OfficialWebsiteCard from "@/components/OfficialWebsiteCard";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import { CheckCircle2, Zap, ShieldCheck, BookOpen } from "lucide-react";

const Index = () => {
    const recentArticles = [
        {
            title: "অনলাইনে NID সংশোধন করার সম্পূর্ণ গাইড",
            path: "/blog/nid-correction-guide",
            excerpt: "আপনার NID এ ভুল তথ্য থাকলে অনলাইনে সংশোধন করুন সম্পূর্ণ গাইড অনুসরণ করে।",
        },
        {
            title: "জন্ম নিবন্ধন সংশোধন করার নিয়ম বাংলাদেশ",
            path: "/blog/birth-cert-correction-guide",
            excerpt: "জন্ম সার্টিফিকেটের সকল তথ্য সংশোধন প্রক্রিয়া সম্পর্কে জানুন।",
        },
        {
            title: "অনলাইনে পাসপোর্ট চেক করার নিয়ম",
            path: "/blog/passport-check-online",
            excerpt: "আপনার পাসপোর্টের আবেদনের অগ্রগতি ট্র্যাক করুন অনলাইনে।",
        },
    ];

    const benefits = [
        {
            icon: Zap,
            title: "দ্রুত সেবা",
            description: "সরকারি সেবা সম্পর্কে সম্পূর্ণ গাইড মিনিটেই পাবেন।",
        },
        {
            icon: CheckCircle2,
            title: "সঠিক তথ্য",
            description: "সব তথ্য সর্বশেষ বাংলাদেশ সরকারি নীতি অনুযায়ী আপডেট করা।",
        },
        {
            icon: ShieldCheck,
            title: "সম্পূর্ণ নিরাপদ",
            description: "আপনার ব্যক্তিগত তথ্য সম্পূর্ণভাবে সুরক্ষিত থাকে।",
        },
        {
            icon: BookOpen,
            title: "বিস্তারিত গাইড",
            description: "প্রতিটি সেবার জন্য ধাপে ধাপে সম্পূর্ণ নির্দেশনা।",
        },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Seo
                title="সহজ সেবা বাংলাদেশ - বাংলাদেশের সকল নাগরিক সেবা সহজভাবে পান"
                description="বাংলাদেশের সকল নাগরিক সেবা সহজভাবে পান - NID, জন্ম নিবন্ধন, পাসপোর্ট, পারিবারিক কার্ড, ড্রাইভিং লাইসেন্স, ভ্যাকসিন সার্টিফিকেট এবং আরও অনেক কিছু।"
                keywords="NID, জন্ম নিবন্ধন, পাসপোর্ট, বাংলাদেশ সেবা, পারিবারিক কার্ড, এনআইডি স্ক্যানার, পাসপোর্ট আবেদন, ড্রাইভিং লাইসেন্স"
            />
            <Navbar />
            <HeroSection />

            {/* জনপ্রিয় সেবা সেকশন */}
            <section id="services" className="w-full bg-background py-12 md:py-16">
                <div className="container">
                    <div className="mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-3">জনপ্রিয় সেবা</h2>
                        <p className="text-muted-foreground text-lg">
                            বাংলাদেশের সবচেয়ে গুরুত্বপূর্ণ সরকারি সেবা সম্পর্কে জানুন এবং সহজেই আবেদন করুন।
                        </p>
                    </div>
                    <ServiceCards />
                </div>
            </section>

            {/* কেন আমাদের ব্যবহার করবেন */}
            <section className="w-full bg-card border-y border-border py-12 md:py-16">
                <div className="container">
                    <div className="mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-3">কেন আমাদের ব্যবহার করবেন?</h2>
                        <p className="text-muted-foreground text-lg">
                            আমরা আপনাকে বাংলাদেশের সরকারি সেবা সম্পর্কে সবচেয়ে সহজ এবং নির্ভরযোগ্য তথ্য প্রদান করি।
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-background rounded-lg border border-border p-6 hover:border-primary transition"
                                >
                                    <Icon className="w-10 h-10 text-primary mb-4" />
                                    <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* সাম্প্রতিক তথ্য / ব্লগ সেকশন */}
            <section className="w-full bg-background py-12 md:py-16">
                <div className="container">
                    <div className="mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-3">সাম্প্রতিক তথ্য</h2>
                        <p className="text-muted-foreground text-lg">
                            আমাদের সর্বশেষ ব্লগ পোস্ট এবং গাইড দেখুন যা আপনাকে সরকারি সেবা নিতে সাহায্য করবে।
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {recentArticles.map((article) => (
                            <Link
                                key={article.path}
                                to={article.path}
                                className="group rounded-lg border border-border bg-card p-6 hover:border-primary hover:bg-primary/5 transition h-full flex flex-col"
                            >
                                <h3 className="font-semibold text-lg mb-3 group-hover:text-primary line-clamp-2">
                                    {article.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4 flex-1 line-clamp-2">
                                    {article.excerpt}
                                </p>
                                <div className="text-sm text-primary font-medium">আরও পড়ুন →</div>
                            </Link>
                        ))}
                    </div>
                    <div className="mt-10 text-center">
                        <Link
                            to="/blog"
                            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition"
                        >
                            সব নিবন্ধ দেখুন
                        </Link>
                    </div>
                </div>
            </section>

            <OfficialWebsiteCard />
            <Footer />
            <FloatingButtons />
        </div>
    );
};

export default Index;
