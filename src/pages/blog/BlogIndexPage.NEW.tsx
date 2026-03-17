import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const articles = [
    {
        title: "অনলাইনে NID সংশোধন করার সম্পূর্ণ গাইড",
        path: "/blog/nid-correction-guide",
        description:
            "আপনার জাতীয় পরিচয়পত্র (NID) এর ভুল তথ্য অনলাইনে কিভাবে সংশোধন করবেন তার সম্পূর্ণ ধাপে ধাপে নির্দেশিকা।",
    },
    {
        title: "জন্ম নিবন্ধন সংশোধন করার নিয়ম বাংলাদেশ",
        path: "/blog/birth-cert-correction-guide",
        description:
            "জন্ম সার্টিফিকেটে ভুল থাকলে অনলাইনে কিভাবে সংশোধন করবেন এবং প্রয়োজনীয় ডকুমেন্টস সম্পর্কে বিস্তারিত জানুন।",
    },
    {
        title: "অনলাইনে পাসপোর্ট চেক করার নিয়ম",
        path: "/blog/passport-check-online",
        description:
            "আপনার পাসপোর্টের আবেদন অগ্রগতি ট্র্যাক করুন এবং অনলাইনে পাসপোর্টের তথ্য যাচাই করুন সহজ নিয়মে।",
    },
    {
        title: "NID কার্ড চেক অনলাইন বাংলাদেশ: সহজ ও নিরাপদ পদ্ধতি",
        path: "/blog/nid-card-check-online",
        description:
            "আপনার NID কার্ড যাচাই করুন অনলাইনে: ধাপে ধাপে গাইড ও সরকারি সেবা সম্পর্কে প্রয়োজনীয় তথ্য।",
    },
    {
        title: "জন্মনিবন্ধন সনদ অনলাইন যাচাই: একটি পূর্ণাঙ্গ গাইড",
        path: "/blog/birth-certificate-verification",
        description:
            "জন্মনিবন্ধন সনদ ভ্যালিডেশন অনলাইনে কিভাবে করবেন ও কোন তথ্যগুলো জানার প্রয়োজন তা বিস্তারিতভাবে জানুন।",
    },
    {
        title: "পারিবারিক কার্ড আবেদন প্রক্রিয়া বাংলাদেশ: ধাপে ধাপে নির্দেশিকা",
        path: "/blog/family-card-apply",
        description:
            "পারিবারিক কার্ডের জন্য কিভাবে আবেদন করবেন, কি কি কাগজপত্র লাগবে এবং যেকরে আবেদন করতে পারবেন সব বিস্তারিত।",
    },
    {
        title: "পাসপোর্ট আবেদন প্রক্রিয়া বাংলাদেশ: আধুনিক অনলাইন ও অফিসিয়াল পথ",
        path: "/blog/passport-application",
        description:
            "বাংলাদেশে পাসপোর্ট আবেদন করতে হলে কোন ধাপে কি করতে হবে, দরকারি ডকুমেন্ট ও সময় সম্পর্কে বিস্তারিত।",
    },
    {
        title: "পুলিশ ক্লিয়ারেন্স সার্টিফিকেট বাংলাদেশ: অনলাইন আবেদন ও পেয়ে যাওয়ার সহজ পদ্ধতি",
        path: "/blog/police-clearance-certificate",
        description:
            "পুলিশ ক্লিয়ারেন্স সার্টিফিকেট কোথায় এবং কিভাবে আবেদন করবেন, প্রয়োজনীয় ডকুমেন্টস ও সময়কাল সম্পর্কে জানুন।",
    },
    {
        title: "ড্রাইভিং লাইসেন্স আবেদন বিডি: সহজ ধাপে ধাপে গাইড",
        path: "/blog/driving-license-application",
        description:
            "বাংলাদেশে ড্রাইভিং লাইসেন্স পাওয়ার পূর্ণাঙ্গ গাইড — অনলাইন আবেদন, পরীক্ষা ও ডকুমেন্টস।",
    },
    {
        title: "ই-টিআইএন সার্টিফিকেট বাংলাদেশ: অনলাইনে ই-টিআইএন সংগ্রহের পদ্ধতি",
        path: "/blog/e-tin-certificate",
        description:
            "ই-টিআইএন কী, কেন লাগবে, এবং অনলাইনে ই-টিআইএন সার্টিফিকেট কিভাবে সংগ্রহ করবেন তার ধাপে ধাপে ব্যাখ্যা।",
    },
    {
        title: "বাংলাদেশে জমির রেকর্ড চেক অনলাইন: পৌরসভা/উপজেলা ভিত্তিক গাইড",
        path: "/blog/land-record-check-online",
        description:
            "লাইসেন্স নম্বর, খতিয়ান, রেকর্ড খোঁজা ও সম্পত্তি যাচাই করে কীভাবে জেনে নেবেন।",
    },
    {
        title: "করোনা ভ্যাকসিন সার্টিফিকেট ডাউনলোড: সহজ অনলাইন প্রক্রিয়া",
        path: "/blog/covid-vaccine-certificate-download",
        description:
            "আপনার করোনা ভ্যাকসিন সার্টিফিকেট দ্রুত ডাউনলোড করার জন্য কি করতে হবে, কোন ওয়েবসাইট বা অ্যাপ ব্যবহার করতে হবে।",
    },
    {
        title: "ভিজিডি/ভিজিএফ কার্ড আবেদন: সঠিক প্রক্রিয়া ও প্রস্তুতি",
        path: "/blog/vgd-vgf-card-application",
        description:
            "সদর উপজেলা বা ইউনিয়ন থেকে ভিজিডি/ভিজিএফ কার্ডের জন্য কীভাবে আবেদন করবেন এবং Eligibility কী থাকে।",
    },
];

const BlogIndexPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Seo
                title="তথ্য: সরকারি সেবা ও প্রয়োজনীয় গাইড - Shohoj Seba Bangladesh"
                description="সরকারি সেবা নিয়ে বিস্তারিত বিশ্লেষণ, নির্দেশিকা ও প্রয়োজনীয় তথ্য - NID, জন্মনিবন্ধন, পাসপোর্ট, ভ্যাকসিন সার্টিফিকেট এবং আরও অনেক কিছু।"
                keywords="বাংলাদেশ সরকার, NID, জন্মনিবন্ধন, পাসপোর্ট, ভ্যাকসিন সার্টিফিকেট, ভিজিডি, ভিজিএফ, ড্রাইভিং লাইসেন্স"
            />
            <Navbar />
            <main className="flex-1 container py-12">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4">তথ্য</h1>
                    <p className="text-muted-foreground mb-8">
                        এখানে আপনি পাবেন বাংলাদেশের সরকারি সেবা সম্পর্কিত সর্বাধুনিক ও SEO-অনুকূল তথ্য। প্রতিটি লিঙ্কে ক্লিক করে বিস্তারিত নিবন্ধ পড়ুন এবং দ্রুত প্রয়োজনীয় নির্দেশনা পান।
                    </p>

                    <div className="grid gap-6">
                        {articles.map((article) => (
                            <Link
                                key={article.path}
                                to={article.path}
                                className="group block rounded-xl border border-border bg-card p-6 hover:border-primary hover:bg-primary/5 transition"
                            >
                                <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary">
                                    {article.title}
                                </h2>
                                <p className="text-muted-foreground">{article.description}</p>
                                <div className="mt-4 text-sm text-primary font-medium">বিস্তারিত পড়ুন →</div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default BlogIndexPage;
