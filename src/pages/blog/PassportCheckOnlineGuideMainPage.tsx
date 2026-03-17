import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const PassportCheckOnlineGuideMainPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Seo
                title="অনলাইনে পাসপোর্ট চেক করার নিয়ম - Shohoj Seba Bangladesh"
                description="বাংলাদেশে পাসপোর্ট অনলাইনে যাচাই এবং চেক করার সঠিক নিয়ম। পাসপোর্ট স্ট্যাটাস, অ্যাপ্লিকেশন ট্র্যাকিং এবং আপডেট পান।"
                keywords="পাসপোর্ট চেক অনলাইন, বাংলাদেশ পাসপোর্ট, পাসপোর্ট ভেরিফাই, পাসপোর্ট স্ট্যাটাস, ই-পাসপোর্ট"
            />
            <Navbar />
            <main className="flex-1 container py-12">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-6">অনলাইনে পাসপোর্ট চেক করার নিয়ম ২০২৬</h1>

                    <p className="text-muted-foreground mb-6">
                        বাংলাদেশে পাসপোর্ট হল আন্তর্জাতিক ভ্রমণের জন্য সবচেয়ে গুরুত্বপূর্ণ ডকুমেন্ট। আপনি যদি পাসপোর্ট নিয়ে উদ্বিগ্ন,
                        আবেদনের অগ্রগতি জানতে চান বা পাসপোর্টের তথ্য যাচাই করতে চান, তাহলে বাংলাদেশ সরকারের অনলাইন সিস্টেম
                        ব্যবহার করে সহজেই এটি করতে পারেন। এই সম্পূর্ণ গাইডটি আপনাকে অনলাইনে পাসপোর্ট চেক ও যাচাই করার সব নিয়ম জানাবে।
                    </p>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">অনলাইনে পাসপোর্ট চেক করার প্রয়োজনীয়তা</h2>
                    <p className="text-muted-foreground mb-4">
                        পাসপোর্ট অনলাইনে চেক করা দরকার:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>আবেদনের অগ্রগতি জানতে</li>
                        <li>পাসপোর্টের করা হয়েছে কিনা তা নিশ্চিত করতে</li>
                        <li>আন্তর্জাতিক ভ্রমণে যাওয়ার আগে পাসপোর্টের বৈধতা যাচাই করতে</li>
                        <li>পাসপোর্টের তথ্য সঠিক আছে কিনা তা নিশ্চিত করতে</li>
                        <li>পুনর্নবীকরণ বা নবায়ন প্রক্রিয়া আরম্ভ করতে</li>
                        <li>হারানো বা ক্ষতিগ্রস্ত পাসপোর্টের প্রতিস্থাপন নিতে</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">অফিসিয়াল পাসপোর্ট সার্ভিস পোর্টাল</h2>
                    <p className="text-muted-foreground mb-4">
                        বাংলাদেশ সরকার নাগরিকদের জন্য একটি সম্পূর্ণ অনলাইন পাসপোর্ট ম্যানেজমেন্ট সিস্টেম চালু করেছে। আপনি নিম্নলিখিত সাইটে পাসপোর্ট চেক করতে পারেন:
                    </p>
                    <div className="bg-card border border-border rounded-lg p-4 mb-6">
                        <p className="text-muted-foreground font-semibold">বাংলাদেশ পাসপোর্ট অনলাইন সার্ভিস</p>
                        <p className="text-muted-foreground">
                            <a href="https://www.passport.gov.bd" className="text-primary hover:underline" target="_blank" rel="noreferrer">https://www.passport.gov.bd</a>
                        </p>
                        <p className="text-muted-foreground text-sm mt-2">এই অফিসিয়াল সাইটে আপনি পাসপোর্ট সম্পর্কিত সকল তথ্য পাবেন এবং অনলাইন সেবা নিতে পারবেন।</p>
                    </div>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ধাপ ১: অফিসিয়াল ওয়েবসাইটে প্রবেশ করুন</h2>
                    <p className="text-muted-foreground mb-4">
                        প্রথমে আপনার ব্রাউজারে <strong>passport.gov.bd</strong> লিখে প্রবেশ করুন। নিশ্চিত করুন যে লিঙ্কটি সরকারের অফিসিয়াল ডোমেইনে রয়েছে।
                        কোনো বিকল্প বা অনুরূপ ওয়েবসাইটে যাবেন না কারণ সেগুলো জালিয়াতি হতে পারে।
                    </p>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ধাপ ২: "ট্র্যাক অ্যাপ্লিকেশন" অপশন নির্বাচন করুন</h2>
                    <p className="text-muted-foreground mb-4">
                        ওয়েবসাইটে প্রবেশ করার পর, আপনি বিভিন্ন সেবার অপশন দেখতে পাবেন। "Track Application" বা "আবেদন ট্র্যাক করুন" অপশন খুঁজে নিন।
                        এই অপশনে ক্লিক করলে আপনার আবেদনের অগ্রগতি জানতে পারবেন।
                    </p>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ধাপ ৩: প্রয়োজনীয় তথ্য প্রদান করুন</h2>
                    <p className="text-muted-foreground mb-4">
                        পাসপোর্ট চেক করার জন্য আপনাকে নিম্নলিখিত তথ্য প্রদান করতে হবে:
                    </p>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                            <li><strong>একটি অনন্য আবেদন সংখ্যা (Reference Number/Application ID):</strong> আপনি পাসপোর্টের জন্য যখন অনলাইনে আবেদন করেছিলেন, তখন একটি রেফারেন্স নম্বর পেয়েছিলেন। এটি সাধারণত ৪-৬ সংখ্যার হয়।</li>
                            <li><strong>পাসপোর্ট নম্বর (যদি আছে):</strong> যদি আপনার পাসপোর্ট ইতিমধ্যে জারি হয়েছে, তাহলে পাসপোর্ট নম্বর দিয়েও চেক করতে পারেন।</li>
                            <li><strong>আপনার নাম ও জন্মতারিখ:</strong> কিছু ক্ষেত্রে অতিরিক্ত যাচাইয়ের জন্য এই তথ্য প্রয়োজন।</li>
                        </ol>
                    </div>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ধাপ ৪: অনুসন্ধান সম্পাদন করুন</h2>
                    <p className="text-muted-foreground mb-4">
                        প্রয়োজনীয় তথ্য পূরণ করে "Search" বা "খুঁজুন" বোতামে ক্লিক করুন। সিস্টেম আপনার আবেদন অনুসন্ধান করবে এবং ফলাফল দেখাবে।
                        এই প্রক্রিয়া সাধারণত কয়েক সেকেন্ড সময় নেয়।
                    </p>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ধাপ ৫: আপনার পাসপোর্টের স্ট্যাটাস দেখুন</h2>
                    <p className="text-muted-foreground mb-4">
                        অনুসন্ধানের পর আপনি নিম্নলিখিত তথ্য দেখতে পাবেন:
                    </p>
                    <div className="bg-card border border-border rounded-lg p-4 mb-6 space-y-3">
                        <div>
                            <p className="font-semibold">আবেদনের স্থিতি (Application Status)</p>
                            <p className="text-muted-foreground text-sm">এটি দেখায় যে আপনার পাসপোর্ট আবেদন কোন পর্যায়ে রয়েছে।</p>
                        </div>
                        <div>
                            <p className="font-semibold">প্রক্রিয়াকরণের তারিখ (Processing Date)</p>
                            <p className="text-muted-foreground text-sm">পাসপোর্ট প্রক্রিয়া করা হবে যে তারিখে তা দেখায়।</p>
                        </div>
                        <div>
                            <p className="font-semibold">ডেলিভারির তারিখ (Delivery Date)</p>
                            <p className="text-muted-foreground text-sm">যদি পাসপোর্ট তৈরি হয়ে গেছে, তাহলে এটা কখন ডেলিভার করা হবে তা দেখায়।</p>
                        </div>
                        <div>
                            <p className="font-semibold">পাসপোর্ট নম্বর (Passport Number)</p>
                            <p className="text-muted-foreground text-sm">যদি পাসপোর্ট ইতিমধ্যে জারি হয়েছে, তাহলে এখানে নম্বর দেখা যাবে।</p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">পাসপোর্টের বিভিন্ন স্ট্যাটাস ব্যাখ্যা</h2>
                    <div className="bg-card border border-border rounded-lg p-4 mb-6 space-y-3">
                        <div>
                            <h3 className="font-semibold mb-2">✍️ Application Received / আবেদন গৃহীত</h3>
                            <p className="text-muted-foreground text-sm">আপনার পাসপোর্টের আবেদন অনলাইন সিস্টেমে গৃহীত হয়েছে।</p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">📋 Under Review / পর্যালোচনাধীন</h3>
                            <p className="text-muted-foreground text-sm">সংশ্লিষ্ট অফিস আপনার আবেদন এবং ডকুমেন্ট পর্যালোচনা করছে।</p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">⚠️ Pending / অপেক্ষমাণ</h3>
                            <p className="text-muted-foreground text-sm">আপনার আবেদন অপেক্ষা করছে। অতিরিক্ত তথ্য বা ডকুমেন্ট লাগতে পারে।</p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">✅ Approved / অনুমোদিত</h3>
                            <p className="text-muted-foreground text-sm">আপনার আবেদন অনুমোদিত হয়েছে এবং পাসপোর্ট তৈরি চলছে।</p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">🎫 Ready for Collection / সংগ্রহের জন্য প্রস্তুত</h3>
                            <p className="text-muted-foreground text-sm">আপনার পাসপোর্ট তৈরি সম্পন্ন হয়েছে এবং সংগ্রহের জন্য প্রস্তুত।</p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">📦 Delivered / ডেলিভার করা হয়েছে</h3>
                            <p className="text-muted-foreground text-sm">আপনার পাসপোর্ট আপনার নিকটস্থ পাসপোর্ট অফিসে পৌঁছেছে এবং আপনি সংগ্রহ করতে পারেন।</p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">❌ Rejected / প্রত্যাখ্যাত</h3>
                            <p className="text-muted-foreground text-sm">আপনার আবেদন প্রত্যাখ্যাত হয়েছে। কারণ জানতে অফিসে যোগাযোগ করুন।</p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">পাসপোর্টের তথ্য যাচাই করুন (Verification)</h2>
                    <p className="text-muted-foreground mb-4">
                        একবার আপনার পাসপোর্ট জারি হয়ে গেলে, আপনি অনলাইনে এর তথ্য যাচাই করতে পারেন। এর জন্য:
                    </p>
                    <ol className="list-decimal list-inside text-muted-foreground space-y-2 mb-6">
                        <li>ওয়েবসাইটে "Verify Passport" বা "পাসপোর্ট যাচাই করুন" অপশন খুঁজুন</li>
                        <li>আপনার পাসপোর্ট নম্বর লিখুন</li>
                        <li>জন্মতারিখ প্রদান করুন</li>
                        <li>"Verify" বোতামে ক্লিক করুন</li>
                        <li>আপনার পাসপোর্টের সম্পূর্ণ তথ্য নিশ্চিত করুন</li>
                    </ol>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">মোবাইল অ্যাপ্লিকেশন ব্যবহার করে পাসপোর্ট চেক করুন</h2>
                    <p className="text-muted-foreground mb-4">
                        বাংলাদেশ সরকার একটি মোবাইল অ্যাপ্লিকেশনও চালু করেছে যার মাধ্যমে আপনি সহজেই পাসপোর্ট চেক করতে পারেন:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>Google Play Store বা Apple App Store থেকে "Bangladesh Passport" অ্যাপ ডাউনলোড করুন</li>
                        <li>অ্যাপটি খুলে আপনার অ্যাকাউন্ট তৈরি করুন</li>
                        <li>আপনার পাসপোর্ট আবেদন সংখ্যা বা পাসপোর্ট নম্বর লিখুন</li>
                        <li>তাৎক্ষণিক আপডেট এবং বিজ্ঞপ্তি পান</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ই-পাসপোর্ট সম্পর্কে তথ্য</h2>
                    <p className="text-muted-foreground mb-4">
                        বাংলাদেশে এখন ই-পাসপোর্ট (ডিজিটাল পাসপোর্ট) চালু হয়েছে। এটি একটি বায়োমেট্রিক পাসপোর্ট যাতে নিরাপত্তা বৈশিষ্ট্য বেশি থাকে।
                        ই-পাসপোর্টের জন্য আবেদন প্রক্রিয়া একই থাকে, তবে আপনি অনলাইনে সহজেই ই-পাসপোর্টের জন্য আবেদন করতে পারেন।
                    </p>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">সাধারণ সমস্যা এবং সমাধান</h2>
                    <div className="bg-card border border-border rounded-lg p-4 mb-6 space-y-4">
                        <div>
                            <h3 className="font-semibold mb-2">❌ সমস্যা: "No Record Found" বার্তা পাচ্ছি</h3>
                            <p className="text-muted-foreground">সমাধান: আপনার আবেদন সংখ্যা বা পাসপোর্ট নম্বর সঠিক কিনা দ্বিগুণ-চেক করুন। কোনো টাইপো থাকলে সংশোধন করুন।</p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">❌ সমস্যা: অনেক দিন ধরে "Under Review" দেখাচ্ছে</h3>
                            <p className="text-muted-foreground">সমাধান: নিকটস্থ পাসপোর্ট অফিসে যোগাযোগ করুন। অতিরিক্ত ডকুমেন্ট বা তথ্য লাগতে পারে।</p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">❌ সমস্যা: আবেদন সংখ্যা হারিয়ে ফেলেছি</h3>
                            <p className="text-muted-foreground">সমাধান: পাসপোর্ট অফিসে আপনার নাম ও জন্মতারিখ দিয়ে আপনার আবেদন খুঁজে নিতে পারবেন।</p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">❌ সমস্যা: পাসপোর্ট সংগ্রহের জন্য নিকটস্থ অফিস নেই</h3>
                            <p className="text-muted-foreground">সমাধান: অনেক সময় পাসপোর্ট যেকোনো জেলার পাসপোর্ট অফিস থেকে সংগ্রহ করা যায়। অফিসিয়াল ওয়েবসাইটে চেক করুন।</p>
                        </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 mt-10">
                        <h3 className="font-semibold mb-3">⚠️ গুরুত্বপূর্ণ সতর্কতা</h3>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li>সবসময় অফিসিয়াল ওয়েবসাইট passport.gov.bd ব্যবহার করুন</li>
                            <li>জাল ওয়েবসাইটে কখনো আপনার ব্যক্তিগত তথ্য শেয়ার করবেন না</li>
                            <li>আপনার পাসপোর্ট নম্বর ও ব্যক্তিগত তথ্য সাবধানে রক্ষা করুন</li>
                            <li>পাসপোর্ট এজেন্টদের মাধ্যমে করাবেন না; সবসময় সরকারি চ্যানেল ব্যবহার করুন</li>
                            <li>আপনার পাসপোর্ট হারিয়ে গেলে অবিলম্বে পাসপোর্ট অফিসে জানান</li>
                        </ul>
                    </div>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">পাসপোর্ট নবায়ন বা পুনর্নবীকরণ</h2>
                    <p className="text-muted-foreground mb-4">
                        আপনার পাসপোর্টের মেয়াদ শেষ হতে যাচ্ছে বা শেষ হয়ে গেছে? তাহলে অনলাইনে পুনর্নবীকরণের জন্য আবেদন করতে পারেন।
                        এই প্রক্রিয়া নতুন পাসপোর্ট নেওয়ার মতোই, তবে কিছু ডকুমেন্ট কম লাগতে পারে।
                    </p>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">পাসপোর্ট সেবায় যোগাযোগ করুন</h2>
                    <p className="text-muted-foreground mb-4">
                        যদি আপনার পাসপোর্ট সম্পর্কিত কোনো প্রশ্ন বা সমস্যা থাকে:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li><strong>অফিসিয়াল ওয়েবসাইট:</strong> passport.gov.bd এ "Contact Us" সেকশন দেখুন</li>
                        <li><strong>নিকটস্থ পাসপোর্ট অফিস:</strong> আপনার জেলার পাসপোর্ট অফিসে সরাসরি যান</li>
                        <li><strong>সিটিজেন হটলাইন:</strong> বাংলাদেশ সরকারের সিটিজেন হটলাইনে কল করুন</li>
                        <li><strong>ইমেইল সাপোর্ট:</strong> অফিসিয়াল ইমেইল এড্রেসে প্রশ্ন পাঠান</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">সংক্ষিপ্ত উপসংহার</h2>
                    <p className="text-muted-foreground mb-6">
                        বাংলাদেশে এখন পাসপোর্ট সম্পর্কিত সব তথ্য অনলাইনে পাওয়া যায়। আপনার পাসপোর্টের আবেদন অগ্রগতি জানতে,
                        তথ্য যাচাই করতে বা পুনর্নবীকরণ করতে কোনো ঝামেলা নেই। এই গাইড অনুসরণ করে আপনি সহজেই অনলাইনে পাসপোর্ট চেক করতে পারবেন।
                        সর্বদা অফিসিয়াল চ্যানেল এবং সরকারি ওয়েবসাইট ব্যবহার করুন, এবং আপনার ব্যক্তিগত তথ্য সুরক্ষিত রাখুন।
                    </p>

                    <div className="bg-card border border-border rounded-xl p-6 mb-10">
                        <h3 className="text-xl font-semibold mb-3">আরও পড়ুন</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>
                                <Link to="/blog/passport-application" className="text-primary hover:underline">
                                    পাসপোর্ট আবেদন প্রক্রিয়া বাংলাদেশ - আধুনিক অনলাইন পথ
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog/nid-card-check-online" className="text-primary hover:underline">
                                    NID কার্ড চেক অনলাইন - সঠিক ও দ্রুত ভেরিফিকেশন
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog/birth-certificate-verification" className="text-primary hover:underline">
                                    জন্মনিবন্ধন সনদ অনলাইন যাচাই - একটি পূর্ণাঙ্গ গাইড
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

export default PassportCheckOnlineGuideMainPage;
