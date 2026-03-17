import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const DrivingLicenseApplicationPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Seo
                title="ড্রাইভিং লাইসেন্স আবেদন বাংলাদেশ - অনলাইন ও অফিসিয়াল প্রক্রিয়া"
                description="বাংলাদেশে ড্রাইভিং লাইসেন্সের জন্য কিভাবে আবেদন করবেন, প্রয়োজনীয় ডকুমেন্ট, পরীক্ষা ও বায়োমেট্রিক প্রক্রিয়া - সম্পূর্ণ গাইড।"
                keywords="ড্রাইভিং লাইসেন্স বাংলাদেশ, ড্রাইভিং লাইসেন্স আবেদন, Bangladesh driving license, ডায়া লাইসেন্স"
            />
            <Navbar />
            <main className="flex-1 container py-12">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-6">ড্রাইভিং লাইসেন্স আবেদন বাংলাদেশ: ধাপে ধাপে নির্দেশিকা</h1>

                    <p className="text-muted-foreground mb-6">
                        বাংলাদেশে ব্যক্তিগত বা ব্যবসায়িক ব্যবহারের জন্য ড্রাইভিং লাইসেন্স খুবই গুরুত্বপূর্ণ।
                        ড্রাইভিং লাইসেন্স পাওয়ার জন্য সঠিক তথ্য, পরীক্ষার প্রস্তুতি এবং প্রয়োজনীয় কাগজপত্রের সম্পর্কে বিস্তারিত জানা জরুরি।
                    </p>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ড্রাইভিং লাইসেন্স কেন প্রয়োজন?</h2>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>স্বয়ংক্রিয় বা মোটরগাড়ি চালানো আইনিভাবে বৈধ করতে।</li>
                        <li>দুর্ঘটনা বা আইনগত দায় কমাতে।</li>
                        <li>সরকারি বা বেসরকারি চাকরির জন্য প্রায়ই বাধ্যতামূলক।</li>
                        <li>বিদেশ ভ্রমণ বা ড্রাইভিং লাইসেন্স যাচাই এর জন্য আন্তর্জাতিক ভূমিকায় প্রয়োজন।</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">প্রয়োজনীয় ডকুমেন্টস</h2>
                    <p className="text-muted-foreground mb-4">
                        ড্রাইভিং লাইসেন্সের জন্য সাধারণত নিম্নলিখিত ডকুমেন্টস সুবিন্যস্ত করে নিন:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>ন্যাশনাল আইডেন্টিটি কার্ড (NID) বা জন্মনিবন্ধন সনদ।</li>
                        <li>যৎসামান্য বয়সের জন্য জন্মনিবন্ধন অথবা স্কুল সনদ।</li>
                        <li>স্থানীয় ঠিকানার প্রমাণ (যেমন বিল বা ভ্যাট রশিদ)।</li>
                        <li>সফটকপি ও রঙিন ফটো (পাসপোর্ট সাইজ)।</li>
                        <li>যদি থাকলে পূর্বের লাইসেন্স বা এফএমসি সিরিজের নথি।</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ধাপ ১: আবেদন ফরম সংগ্রহ</h2>
                    <p className="text-muted-foreground mb-4">
                        জেলা বা মহানগর ড্রাইভিং লাইসেন্স অফিসে গিয়ে সরাসরি আবেদন ফরম সংগ্রহ করতে পারেন। কিছু ক্ষেত্রে অনলাইনে আবেদন ফরম ডাউনলোড করে পূরণ করা যায়।</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>সরকারি ড্রাইভিং লাইসেন্স অফিসের রিসেপশন থেকে ফরম নিন।</li>
                        <li>ফরম অনলাইনে ডাউনলোড করতে <a href="https://dte.gov.bd" className="text-primary hover:underline" target="_blank" rel="noreferrer">dte.gov.bd</a> দেখুন।</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ধাপ ২: ফর্ম পূরণ ও ফি প্রদান</h2>
                    <ol className="list-decimal list-inside text-muted-foreground space-y-2 mb-6">
                        <li>প্রয়োজনীয় তথ্য দিয়ে ফরম পূরণ করুন (ব্যক্তিগত তথ্য, ঠিকানা, NID ইত্যাদি)।</li>
                        <li>সঠিক ডকুমেন্টস সংযুক্ত করুন (NID, ঠিকানা প্রমাণ, ছবি)।</li>
                        <li>ড্রাইভিং লাইসেন্স ফি অফিসে প্রদান করুন অথবা ব্যাংক স্লিপ সংরক্ষণ করুন।</li>
                        <li>আপনার আবেদন সাবমিশন রসিদ সংরক্ষণ করুন।</li>
                    </ol>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ধাপ ৩: প্রি-ড্রাইভিং ও লিখিত পরীক্ষা</h2>
                    <p className="text-muted-foreground mb-4">
                        আপনাকে লিখিত পরীক্ষা ও প্রি-ড্রাইভিং পরীক্ষা দিতে হতে পারে। পরীক্ষার প্রশ্ন সাধারণত সড়ক নিরাপত্তা, ট্রাফিক নিয়ম এবং ড্রাইভিং শিষ্টাচার সম্পর্কিত।</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>ট্রাফিক সিগন্যাল ও আইন সম্পর্কিত প্রশ্নের উত্তর প্রাথমিকভাবে শিখুন।</li>
                        <li>ড্রাইভিং পরীক্ষার জন্য সংশ্লিষ্ট অফিসে সময়মতো উপস্থিত হন।</li>
                        <li>পরীক্ষায় পাস করলে আপনি লাইসেন্স ইস্যু করার জন্য যোগ্য হবেন।</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ধাপ ৪: লাইসেন্স সংগ্রহ</h2>
                    <p className="text-muted-foreground mb-4">
                        পাস হলে লাইসেন্স তৈরি হবে এবং নির্দিষ্ট সময়ে আপনাকে সংগ্রহ করতে বলা হবে।</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>লাইসেন্স সংগ্রহের সময় আপনার আবেদন স্লিপ সঙ্গে নিন।</li>
                        <li>লাইসেন্স পাওয়ার পর তথ্য ভুল থাকলে সংশোধনের জন্য বলুন।</li>
                        <li>লাইসেন্স হারিয়ে গেলে পুনরায় অনলাইনে ট্র্যাক করুন এবং পুনরায় আবেদন করুন।</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">পরবর্তী বিষয়গুলো মনে রাখবেন</h2>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>লাইসেন্স নবায়ন বা আপডেট করার সময় শর্ত মেনে চলুন।</li>
                        <li>লাইসেন্সের মেয়াদ শেষ হলে সময়মতো নবায়ন করুন।</li>
                        <li>প্রয়োজন হলে ড্রাইভিং লাইসেন্সের ফটোকপি নিয়ে রাখুন।</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">উপসংহার</h2>
                    <p className="text-muted-foreground mb-6">
                        সঠিক ডকুমেন্টস ও প্রস্তুতি নিয়ে ড্রাইভিং লাইসেন্সের আবেদন করা অনেক সহজ।
                        প্রতিটি ধাপ ঠিকভাবে অনুসরণ করলে আপনার ড্রাইভিং লাইসেন্স দ্রুত পাওয়া সম্ভব।
                    </p>

                    <div className="bg-card border border-border rounded-xl p-6 mb-10">
                        <h3 className="text-xl font-semibold mb-3">আরও পড়ুন</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>
                                <Link to="/blog/nid-card-check-online" className="text-primary hover:underline">
                                    NID কার্ড চেক অনলাইন
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog/police-clearance-certificate" className="text-primary hover:underline">
                                    পুলিশ ক্লিয়ারেন্স সার্টিফিকেট বাংলাদেশ
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

export default DrivingLicenseApplicationPage;
