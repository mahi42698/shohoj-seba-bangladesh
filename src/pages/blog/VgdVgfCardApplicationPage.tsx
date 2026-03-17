import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const VgdVgfCardApplicationPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Seo
                title="ভিজিডি / ভিজিএফ কার্ড আবেদন - প্রক্রিয়া ও প্রয়োজনীয়তা"
                description="ভিজিডি ও ভিজিএফ কার্ড পেতে কিভাবে আবেদন করবেন, কারা যোগ্য, কোন ডকুমেন্ট দরকার এবং আবেদন প্রক্রিয়া সম্পর্কে সম্পূর্ণ গাইড।"
                keywords="ভিজিডি কার্ড, ভিজিএফ কার্ড, VGD আবেদন, VGF আবেদন, বাংলাদেশ ভিজিডি, ভিজিএফ"
            />
            <Navbar />
            <main className="flex-1 container py-12">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-6">ভিজিডি / ভিজিএফ কার্ড আবেদন: সম্পূর্ণ নির্দেশিকা</h1>

                    <p className="text-muted-foreground mb-6">
                        ভিজিডি (VGD) এবং ভিজিএফ (VGF) কার্ড বাংলাদেশে দরিদ্র ও ক্ষুদ্র পরিবারকে খাদ্য সহায়তা প্রদানের একটি গুরুত্বপূর্ণ প্রোগ্রাম।
                        এই কার্ডের মাধ্যমে নির্দিষ্ট মাসের জন্য সস্তায় চাল বা খাদ্য পেলেও, কার্ড পাওয়ার প্রক্রিয়া, যোগ্যতা ও আবেদন সম্পর্কে পরিষ্কার ধারণা থাকা প্রয়োজন।
                    </p>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ভিজিডি ও ভিজিএফ কী?</h2>
                    <p className="text-muted-foreground mb-4">
                        ভিজিডি (ভাইব্রেন্ট গ্রামীণ ডেভেলপমেন্ট) কার্ড সাধারণত শিশু সন্তানের মা, বিধবা বা বৃদ্ধদের জন্য প্রদান করা হয়।
                        ভিজিএফ (ভাইব্রেন্ট গ্রামীণ ফুড) কার্ড ভিন্ন ধরনের সহায়তা প্রদান করে, যেখানে প্রায় দরিদ্র পরিবারকে খাদ্যের হার কুপন দ্বারা দেওয়া হয়।
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>ভিজিডি কার্ডে মাসে নির্দিষ্ট পরিমাণ চাল বা ভিজিএফ কুপন দেওয়া হয়।</li>
                        <li>ভিজিএফ কার্ডে বিশেষ সুযোগের মাধ্যমে খাদ্য দ্রব্যাদি বা গাছপালা কৃষি উপকরণ দেওয়া হতে পারে।</li>
                        <li>উভয় প্রোগ্রামই পরিবারকে খাদ্য নিরাপত্তা ও সহানুভূতিশীলতা প্রদান করে।</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">কারা যোগ্য?</h2>
                    <p className="text-muted-foreground mb-4">
                        সাধারণত ভিজিডি/ভিজিএফ কার্ড পাওয়ার যোগ্যতা নীচের ভিত্তিতে নির্ধারিত হয়:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>পরিবারের আয় সীমার মধ্যে থাকা দরিদ্র পরিবারের সদস্য।</li>
                        <li>সর্বাধিক কৃষি ভূমি না থাকা বা খুব কম ভূমির মালিকানা।</li>
                        <li>পরিবারে বয়োজ্যেষ্ঠ সদস্য, বিধবা, বিধুরা বা মারাত্মক অসুস্থ ব্যক্তি থাকা।</li>
                        <li>ঋণ গ্রহীতা পরিবার বা অতিরিক্ত ক্ষতিগ্রস্ত পরিবার।</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">প্রয়োজনীয় ডকুমেন্টস</h2>
                    <p className="text-muted-foreground mb-4">
                        আবেদন করার আগে নিচের নথিপত্র সংগ্রহ করুন:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>NID বা জন্মনিবন্ধন সনদের কপি (বিধবা/বিধুর ক্ষেত্রে অতিরিক্ত ডকুমেন্ট লাগতে পারে)।</li>
                        <li>পরিবারের সদস্যদের বয়স, শিক্ষার স্তর ও আয়ের তথ্য।</li>
                        <li>ঠিকানার প্রমাণ — ইউটিলিটি বিল বা ল্যান্ড ক্রয় রশিদ।</li>
                        <li>উপজেলা বা ইউনিয়ন পরিষদ থেকে প্রাপ্ত দরিদ্রতা সনদ (যদি থাকে)।</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ধাপ ১: আবেদন ফরম সংগ্রহ</h2>
                    <p className="text-muted-foreground mb-4">
                        ভিজিডি/ভিজিএফ কার্ডের আবেদন ফরম সাধারণত ইউনিয়ন পরিষদ, উপজেলা নির্বাহী কর্মকর্তার অফিস বা ডিজিটাল সেবা কেন্দ্র থেকে পাওয়া যায়।
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>নিকটস্থ ইউনিয়ন পরিষদ বা উপজেলা অফিসে গিয়ে আবেদন ফরম নিন।</li>
                        <li>কিছু ক্ষেত্রে অনলাইনে নির্দিষ্ট পোর্টালে ফরম ডাউনলোড করার অপশন থাকতে পারে।</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ধাপ ২: আবেদন ফরম পূরণ ও জমা</h2>
                    <p className="text-muted-foreground mb-4">
                        ফরমে আপনার পরিবারের সদস্যদের বিস্তারিত তথ্য সঠিকভাবে পূরণ করুন এবং প্রয়োজনীয় ডকুমেন্টস সংযুক্ত করুন।</p>
                    <ol className="list-decimal list-inside text-muted-foreground space-y-2 mb-6">
                        <li>পরিবারের প্রধানের নাম, ঠিকানা ও মোবাইল নম্বর লিখুন।</li>
                        <li>পরিবারের সদস্যদের সংখ্যা, তাদের শিক্ষা এবং আয়ের তথ্য যোগ করুন।</li>
                        <li>যদি কারো স্বাস্থ্যগত সমস্যা বা ভিন্নভাবে অক্ষম থাকে, তা উল্লেখ করুন।</li>
                        <li>প্রয়োজনীয় নথি ফরমের সাথে সংযুক্ত করে আবেদন জমা দিন।</li>
                    </ol>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ধাপ ৩: ভেরিফিকেশন ও কার্ড বিতরণ</h2>
                    <p className="text-muted-foreground mb-4">
                        আবেদন জমা দেওয়ার পরে কর্তৃপক্ষ ভেরিফিকেশন করবে। এটি সাধারণত উপজেলা বা ইউনিয়ন পর্যায়ে হয়, এবং তারপর আপনাকে কার্ড প্রদান করা হয়।</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>ভেরিফিকেশনের সময় আপনার বাড়িতে বা এলাকার সাথে সম্পর্কিত তথ্য যাচাই হবে।</li>
                        <li>ভেরিফিকেশন সম্পন্ন হলে আপনাকে কার্ড বিতরণ সম্পর্কে অবহিত করা হবে।</li>
                        <li>কার্ড পাওয়ার পর তা সুরক্ষিত স্থানে রাখুন।</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">সতর্কতা</h2>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>কোন দালাল বা মধ্যস্থকারীকে টাকা দিয়ে দ্রুত কার্ড দেওয়ার প্রতিশ্রুতি দিলে তা এড়িয়ে চলুন।</li>
                        <li>কার্ড দেওয়ার প্রক্রিয়া সরকারি নিয়ম অনুযায়ী সম্পন্ন করুন।</li>
                        <li>কার্ড পেলে তা অন্যের সাথে ভাগ করবেন না এবং ক্ষতির প্রতিরোধ করুন।</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">উপসংহার</h2>
                    <p className="text-muted-foreground mb-6">
                        ভিজিডি ও ভিজিএফ কার্ড সময়মত পাওয়া আপনার পরিবারের খাদ্য নিরাপত্তা ও জীবনমান উন্নত করতে সহায়তা করে।
                        সঠিক ভাবে আবেদন ও ভেরিফিকেশন করলে আপনি প্রয়োজনীয় সহায়তা পাবেন।
                    </p>

                    <div className="bg-card border border-border rounded-xl p-6 mb-10">
                        <h3 className="text-xl font-semibold mb-3">আরও পড়ুন</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>
                                <Link to="/blog/family-card-apply" className="text-primary hover:underline">
                                    পারিবারিক কার্ড আবেদন প্রক্রিয়া
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog/nid-card-check-online" className="text-primary hover:underline">
                                    NID কার্ড চেক অনলাইন
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog/birth-certificate-verification" className="text-primary hover:underline">
                                    জন্মনিবন্ধন সনদ অনলাইন যাচাই
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

export default VgdVgfCardApplicationPage;
