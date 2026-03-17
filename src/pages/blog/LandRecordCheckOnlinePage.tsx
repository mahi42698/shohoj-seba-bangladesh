import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const LandRecordCheckOnlinePage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Seo
                title="জমির রেকর্ড চেক অনলাইন BD - খতিয়ান ও সন্তোষজনক তথ্য পেতে গাইড"
                description="বাংলাদেশে জমির রেকর্ড কিভাবে চেক করবেন অনলাইনে, খতিয়ান নম্বর খুঁজে পাবেন কীভাবে, এবং ভূমির অধিকারের নিশ্চয়তা সম্পর্কে তথ্য।"
                keywords="জমির রেকর্ড, খতিয়ান অনলাইন, ভোগদখল রেকর্ড, বাংলাদেশ জমি তথ্য, ভূমি রেকর্ড অনলাইন"
            />
            <Navbar />
            <main className="flex-1 container py-12">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-6">জমির রেকর্ড চেক অনলাইন BD: খতিয়ান ও দাগ নম্বর যাচাই</h1>

                    <p className="text-muted-foreground mb-6">
                        জমি কেনা-বেচা, উচ্ছেদ, লিজ বা আইনি মামলা করার সময় জমির সঠিক রেকর্ড জানা অত্যন্ত জরুরি।
                        বাংলাদেশে জমি রেকর্ড চেক করার জন্য সচরাচর “খতিয়ান” (Khatian) ও “দাগ” নম্বর ব্যবহার করা হয়।
                        অনলাইন মাধ্যমে সহজেই এসব তথ্য পাওয়া যায়, যা আপনার সিদ্ধান্তকে আরও বিশ্বাসযোগ্য করে।
                    </p>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">খতিয়ান ও দাগ নম্বর কি?</h2>
                    <p className="text-muted-foreground mb-4">
                        খতিয়ান হলো জমির রেকর্ড যেখানে জমির মালিকানা, ভোগদখল ও ভূমি বিবরণ থাকে।
                        দাগ হলো জমির নির্দিষ্ট অংশের ইউনিক আইডেন্টিফায়ার যা খতিয়ানের ভিতরে উল্লেখিত থাকে।
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>খতিয়ান নম্বর আপনার জমির পূর্ণ রেকর্ড দেখতে সহায়তা করে।</li>
                        <li>দাগ নম্বর নির্দিষ্ট প্লট বা খাস জমি সনাক্ত করে।</li>
                        <li>জমির নীলাম, আইনগত বিবাদ বা ট্রান্সফার করার সময় উভয় তথ্য দরকার।</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">প্রয়োজনীয় তথ্য</h2>
                    <p className="text-muted-foreground mb-4">
                        অনলাইন রেকর্ড চেক করার জন্য সাধারণত এই তথ্যগুলো দরকার:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>জেলার নাম</li>
                        <li>উপজেলা/থানার নাম</li>
                        <li>মৌজা/মৌজা কোড</li>
                        <li>খতিয়ান নম্বর</li>
                        <li>দাগ নম্বর</li>
                        <li>ভূমি মালিকের নাম (আবশ্যিক না হলেও সহায়ক)</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ধাপ ১: অনলাইন প্ল্যাটফর্মে যান</h2>
                    <p className="text-muted-foreground mb-4">
                        বাংলাদেশ জমি রেকর্ড অনলাইনে চেক করার জন্য সাধারণত জেলা প্রশাসকের ওয়েবসাইট বা মন্ত্রণালয় কর্তৃক প্রদত্ত ভিজিটর পোর্টাল ব্যবহৃত হয়।
                    </p>
                    <p className="text-muted-foreground mb-4">
                        একটি সাধারণ প্ল্যাটফর্ম হল <a href="http://lrc.gov.bd" className="text-primary hover:underline" target="_blank" rel="noreferrer">lrc.gov.bd</a>।
                        এখানে আপনি জেলা, উপজেলা, মৌজা ইত্যাদি নির্বাচন করে খতিয়ান সন্নিবেশ করতে পারেন।
                    </p>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ধাপ ২: খতিয়ান ও দাগ নম্বর দিয়ে অনুসন্ধান</h2>
                    <p className="text-muted-foreground mb-4">
                        সাধারণত অনুসন্ধান ফর্মে খতিয়ান নম্বর/দাগ নম্বর দিন এবং সঠিক মৌজা/উপজেলা নির্বাচন করুন। তারপর ‘Search’ বা ‘View’ ক্লিক করুন।</p>
                    <ol className="list-decimal list-inside text-muted-foreground space-y-2 mb-6">
                        <li>প্রথমে জেলা ও উপজেলা ঠিক করুন।</li>
                        <li>মৌজা/মৌজা কোড নির্বাচন করুন।</li>
                        <li>খতিয়ান নম্বর দিন এবং অনুসন্ধান করুন।</li>
                        <li>দাগ নম্বর দিলে নির্দিষ্ট প্লট নিয়ে তথ্য পাবেন।</li>
                    </ol>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ধাপে ধাপে তথ্য বিশ্লেষণ</h2>
                    <p className="text-muted-foreground mb-4">
                        অনুসন্ধানের পর আপনি নিম্নরূপ তথ্য পাবেন:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>খতিয়ানে দাগের মালিকের নাম ও ঠিকানা।</li>
                        <li>ভূমি ভাগ (ভাগ, বৈতা ইত্যাদি) এবং জমির পরিমাণ।</li>
                        <li>মালিকানার পরিবর্তন ও লেনদেনের ইতিহাস (যদি থাকে)।</li>
                        <li>খাস জমি বা সরকারি জমি হলে সেটির বিবরণ।</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ভূমি তথ্য যাচাইয়ের পর করণীয়</h2>
                    <p className="text-muted-foreground mb-4">
                        যদি আপনি কোন ভুল বা অসঙ্গতি খুঁজে পান, তাহলে নিকটস্থ ভূমি অফিসে বা জমির রেকর্ড অফিসে যোগাযোগ করে সংশোধন করুন।</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>ভুল নাম, ভুল দাগ, ভুল পরিমাণ ইত্যাদি সংশোধনের জন্য কাগজপত্র জমা দিন।</li>
                        <li>জমি লেনদেনের আগে সব রেকর্ড জেনে নিন।</li>
                        <li>যদি মামলা কিনা বা জটিলতা থাকে, তাহলে আইনজীবীর পরামর্শ নিন।</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">বিঃদ্রঃ - অনলাইন রেকর্ডের সীমাবদ্ধতা</h2>
                    <p className="text-muted-foreground mb-4">
                        অনলাইন রেকর্ড সব সময় আপডেটেড না-ও থাকতে পারে বা কিছু ক্ষেত্রে অপর্যাপ্ত তথ্য থাকতে পারে। তাই প্রয়োজন হলে স্থানীয় ভূমি অফিসে সরাসরি যাচাই করুন।
                    </p>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">উপসংহার</h2>
                    <p className="text-muted-foreground mb-6">
                        অনলাইন জমি রেকর্ড চেক করা আপনাকে জমি লেনদেনে সুরক্ষা দেয় এবং ঝামেলা কমায়।
                        সঠিক খতিয়ান ও দাগ নম্বর জানলে আপনি দ্রুত নিশ্চিত করতে পারবেন যে জমি প্রকৃতপক্ষে আপনার অধীনে আছে।
                    </p>

                    <div className="bg-card border border-border rounded-xl p-6 mb-10">
                        <h3 className="text-xl font-semibold mb-3">আরও পড়ুন</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>
                                <Link to="/blog/passport-application" className="text-primary hover:underline">
                                    পাসপোর্ট আবেদন প্রক্রিয়া বাংলাদেশ
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog/police-clearance-certificate" className="text-primary hover:underline">
                                    পুলিশ ক্লিয়ারেন্স সার্টিফিকেট বাংলাদেশ
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog/nid-card-check-online" className="text-primary hover:underline">
                                    NID কার্ড চেক অনলাইন বাংলাদেশ
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default LandRecordCheckOnlinePage;
