import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const PassportApplicationPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Seo
                title="পাসপোর্ট আবেদন প্রক্রিয়া বাংলাদেশ - অনলাইন ও অফিস লেনদেন"
                description="বাংলাদেশে পাসপোর্টের জন্য আবেদন কিভাবে করবেন, প্রয়োজনীয় ডকুমেন্ট, অনলাইন সেবা ও কাজের প্রক্রিয়া সম্পর্কে বিস্তারিত নির্দেশিকা।"
                keywords="বাংলাদেশ পাসপোর্ট আবেদন, পাসপোর্ট অনলাইন, পাসপোর্ট ডকুমেন্ট, পাসপোর্ট প্রক্রিয়া"
            />
            <Navbar />
            <main className="flex-1 container py-12">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-6">পাসপোর্ট আবেদন প্রক্রিয়া বাংলাদেশ: অনলাইন ও অফিস ব্যাখ্যা</h1>

                    <p className="text-muted-foreground mb-6">
                        বিদেশ ভ্রমণের জন্য বাংলাদেশি নাগরিকদের পাসপোর্ট আবশ্যক। পাসপোর্ট প্রক্রিয়াটি অনেক সময় জটিল মনে হলেও সঠিক নির্দেশনা থাকলে এটি খুব সহজে করা যায়।
                        এখানে আপনি পাসপোর্টের জন্য কিভাবে আবেদন করবেন, কোন ডকুমেন্ট লাগে, এবং আবেদন জমা দেওয়ার পর কীভাবে ট্র্যাক করবেন তা বিস্তারিত জানবেন।
                    </p>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">পাসপোর্ট আবেদন শুরু করার শর্তাবলী</h2>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>বাংলাদেশের আদর্শ নাগরিক হিসেবে আপনার বৈধ NID থাকতে হবে।</li>
                        <li>কমপক্ষে ১২ বছর বা তার বেশি বয়স হলে অনলাইনে স্ব-স্ব কর্তৃক আবেদন করা যায়।</li>
                        <li>ছোট বেলার পাসপোর্টের জন্য মা বা পিতার অভিভাবক হিসেবে আবেদন করা যেতে পারে।</li>
                        <li>পাসপোর্ট পাওয়ার জন্য দুর্ভেদ্য স্বাস্থ্যসুরক্ষার শর্তও থাকতে পারে।</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">প্রয়োজনীয় ডকুমেন্টস</h2>
                    <p className="text-muted-foreground mb-4">
                        আবেদন করার আগে সব ডকুমেন্ট প্রস্তুত করে নিন:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>পাসপোর্ট আবেদন ফরম (অনলাইনে পূরণ করা অংশ)।</li>
                        <li>ভ্যালিড NID কার্ড বা জন্মনিবন্ধন সনদের মূল ও অনুলিপি।</li>
                        <li>ব্যাংক ডিপোজিট স্লিপ (পাসপোর্ট ফি প্রদানের প্রমাণ)।</li>
                        <li>৩ টি আধারোগ্য ছবি (ব্রেন্টার পাসপোর্ট ফটো সহ)।</li>
                        <li>যদি আবেদনকারীর বৈবাহিক অবস্থা থাকে, বিবাহ সনদ ও বিবাহিত স্বামীর NID প্রমাণ।</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ধাপ ১: অনলাইনে আবেদন ফরম পূরণ করুন</h2>
                    <p className="text-muted-foreground mb-4">
                        বাংলাদেশ সরকারের <a href="https://www.passport.gov.bd" className="text-primary hover:underline" target="_blank" rel="noreferrer">passport.gov.bd</a> পোর্টালে যান।
                        সেখানে "Apply" বা "New Application" অপশন নির্বাচন করে ফরম পূরণ শুরু করুন।
                    </p>
                    <ol className="list-decimal list-inside text-muted-foreground space-y-2 mb-6">
                        <li>প্রথমে রেজিস্ট্রেশন করে লগইন করুন।</li>
                        <li>ব্যক্তিগত তথ্য যেমন নাম, জন্মতারিখ, ঠিকানা সঠিকভাবে দিন।</li>
                        <li>জন্ম ও নাগরিকত্ব সম্পর্কিত তথ্য যোগ করুন।</li>
                        <li>এড্রেস ট্যাব এ স্থায়ী ও অস্থায়ী ঠিকানা দেবেন।</li>
                        <li>যদি পূর্বে পাসপোর্ট থাকে, সেই তথ্য দিন।</li>
                    </ol>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ধাপ ২: ফি প্রদানের ধাপ</h2>
                    <p className="text-muted-foreground mb-4">
                        অনলাইন আবেদন করার পর আপনাকে নির্দিষ্ট ফি জমা দিতে হবে। সাধারণত ব্যাঙ্ক বা ডিজিটাল গ্রাহক সেবার মাধ্যমে প্রদেয় ফি জমা দিয়ে পেমেন্ট রশিদ সংগ্রহ করতে হয়।
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>প্রয়োজনীয় ফি ও পেমেন্ট মেথড ওয়েবসাইটে উল্লেখিত থাকে।</li>
                        <li>পেমেন্ট রশিদ সংরক্ষণ করুন, কারণ সেটি অফিস-এ জমা দিতে হবে।</li>
                        <li>অনলাইন পেমেন্টে সফল না হলে অনেক ক্ষেত্রে ব্যাঙ্ক যাচাই করতে সময় নিতে পারে।</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ধাপ ৩: অফিসে উপস্থিতি ও বায়োমেট্রিক</h2>
                    <p className="text-muted-foreground mb-4">
                        নির্দিষ্ট সময়ে আপনাকে পাসপোর্ট অফিসে উপস্থিত হতে বলা হবে। সেখানে আপনার ছবি, আঙুলের ছাপ, স্বাক্ষর এবং অন্য প্রয়োজনীয় তথ্য নেয়া হবে।</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>যথাসময়ে অফিসে উপস্থিত হন এবং রশিদ ও ডকুমেন্টস দেখান।</li>
                        <li>বায়োমেট্রিক ফিঙ্গারপ্রিন্ট নেওয়া হবে - এতে সঠিকতা জরুরি।</li>
                        <li>বায়োমেট্রিক ও ছবি নেওয়ার সময় শান্ত থাকুন এবং নির্দেশ মেনে চলুন।</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ধাপ ৪: স্ট্যাটাস চেক ও ডেলিভারি</h2>
                    <p className="text-muted-foreground mb-4">
                        আবেদন জমা দেওয়ার পরে আপনি অনলাইনে আপনার স্ট্যাটাস চেক করতে পারবেন। সাধারণত পাসপোর্ট কয়েক সপ্তাহে ডেলিভারি হয়।</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>অনলাইন স্ট্যাটাস চেক করার জন্য আপনার আবেদন আইডি/মোবাইল নম্বর ব্যবহার করতে হবে।</li>
                        <li>যদি ডেলিভারিতে বিলম্ব হয়, সংশ্লিষ্ট অফিসে যোগাযোগ করুন।</li>
                        <li>আপনার মোবাইল বা ইমেইলে পাওয়া কোড/নোটিফিকেশন সংরক্ষণ করুন।</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">টিপস এবং সতর্কতা</h2>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>সর্বদা সরকারি পোর্টালের অফিসিয়াল লিঙ্ক ব্যবহার করুন।</li>
                        <li>কোনোরকম ঝুঁকিপূর্ণ তথ্য অনলাইনে শেয়ার করবেন না।</li>
                        <li>প্রসেসিং ফি যেনেই পেমেন্ট করা হয়, তা যাচাই করুন।</li>
                        <li>প্রয়োজনীয় ডকুমেন্টস ঠিকঠাক সাথে নিয়ে অফিসে যান।</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">উপসংহার</h2>
                    <p className="text-muted-foreground mb-6">
                        পাসপোর্ট আবেদন প্রক্রিয়া ঠিকঠাক হলে আপনার বিদেশ ভ্রমনের স্বপ্ন আরো সহজ হয়ে যায়। সঠিক ডকুমেন্টস-বাছাই, অনলাইনের তথ্য পূরণ এবং ধৈর্য আপনার আবেদন সফল করবে।
                    </p>

                    <div className="bg-card border border-border rounded-xl p-6 mb-10">
                        <h3 className="text-xl font-semibold mb-3">আরও পড়ুন</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>
                                <Link to="/blog/nid-card-check-online" className="text-primary hover:underline">
                                    NID কার্ড চেক অনলাইন বাংলাদেশ
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog/police-clearance-certificate" className="text-primary hover:underline">
                                    পুলিশ ক্লিয়ারেন্স সার্টিফিকেট বাংলাদেশ
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog/land-record-check-online" className="text-primary hover:underline">
                                    জমির রেকর্ড চেক অনলাইন বাংলাদেশ
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

export default PassportApplicationPage;
