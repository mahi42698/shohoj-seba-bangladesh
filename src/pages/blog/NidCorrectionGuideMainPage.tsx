import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const NidCorrectionGuideMainPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Seo
                title="অনলাইনে NID সংশোধন করার সম্পূর্ণ গাইড - Shohoj Seba Bangladesh"
                description="আপনার জাতীয় পরিচয়পত্র (NID) এর তথ্য অনলাইনে কিভাবে সংশোধন করবেন? ধাপে ধাপে গাইড, প্রয়োজনীয় ডকুমেন্ট এবং সঠিক পদ্ধতি জানুন।"
                keywords="NID সংশোধন, এনআইডি সংশোধন অনলাইন, বাংলাদেশ NID আপডেট, নাম পরিবর্তন, ভুল তথ্য সংশোধন"
            />
            <Navbar />
            <main className="flex-1 container py-12">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-6">অনলাইনে NID সংশোধন করার সম্পূর্ণ গাইড ২০২৬</h1>

                    <p className="text-muted-foreground mb-6">
                        আপনার জাতীয় পরিচয়পত্র (NID) এ যদি কোনো ভুল তথ্য থাকে যেমন নাম, জন্মতারিখ, ঠিকানা বা অন্য কোনো বিবরণ,
                        তাহলে অবশ্যই সেই ভুল সংশোধন করতে হবে। বাংলাদেশ নির্বাচন কমিশন এখন অনলাইনে NID সংশোধনের সুবিধা প্রদান করছে।
                        এই নির্দেশিকা অনুসরণ করে আপনি নিজেই ঘরে বসে NID সংশোধনের আবেদন করতে পারবেন।
                    </p>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">কেন NID সংশোধন প্রয়োজন?</h2>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>নাম, পিতার নাম বা মাতার নাম ভুল লেখা থাকলে</li>
                        <li>জন্মতারিখ সঠিক না থাকলে</li>
                        <li>ঠিকানা বা জন্মস্থান ভুল হলে</li>
                        <li>জেন্ডার/লিঙ্গ (তৃতীয় লিঙ্গ) সংশোধনের প্রয়োজন হলে</li>
                        <li>ব্যাংক অ্যাকাউন্ট, পাসপোর্ট এবং অন্যান্য সেবা গ্রহণের জন্য সঠিক তথ্য প্রয়োজন</li>
                        <li>নথিতে অস্পষ্ট বা অপ্রয়োজনীয় চিহ্ন থাকলে</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">NID সংশোধনের ধরন</h2>
                    <p className="text-muted-foreground mb-4">
                        বাংলাদেশ নির্বাচন কমিশন (EC) তিন ধরনের NID সংশোধন অনুমোদন করে:
                    </p>
                    <div className="bg-card border border-border rounded-lg p-4 mb-6 space-y-3">
                        <div>
                            <h3 className="font-semibold mb-2">১. সাধারণ সংশোধন</h3>
                            <p className="text-muted-foreground text-sm">নাম, জন্মতারিখ, ঠিকানা বা অন্যান্য সাধারণ তথ্য সংশোধন</p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">২. বিশেষ সংশোধন</h3>
                            <p className="text-muted-foreground text-sm">জেন্ডার বা লিঙ্গ পরিচয় সংশোধন (তৃতীয় লিঙ্গ)</p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">৩. দ্রুত সংশোধন</h3>
                            <p className="text-muted-foreground text-sm">জরুরি সংশোধনের জন্য বিশেষ পদ্ধতি (অতিরিক্ত ফি সহ)</p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">প্রয়োজনীয় ডকুমেন্ট এবং তথ্য</h2>
                    <p className="text-muted-foreground mb-4">
                        NID সংশোধনের জন্য নিম্নলিখিত তথ্য ও ডকুমেন্টস থাকতে হবে:
                    </p>
                    <ol className="list-decimal list-inside text-muted-foreground space-y-2 mb-6">
                        <li>আপনার বর্তমান NID নম্বর (১৭ ডিজিট)</li>
                        <li>আপনার জন্মতারিখ</li>
                        <li>সংশোধনের ধরন নির্বাচন করুন</li>
                        <li>সংশোধিত তথ্য প্রদান করুন</li>
                        <li>সংশোধনের কারণ সংক্ষেপে বর্ণনা করুন</li>
                        <li>সহায়ক ডকুমেন্ট (জন্মসনদ, জন্মনিবন্ধন, পাসপোর্ট, হলনামাযুক্ত রেকর্ড ইত্যাদি)</li>
                        <li>আপনার বৈধ ইমেইল ঠিকানা এবং ফোন নম্বর</li>
                    </ol>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ধাপ ১: সরকারি ওয়েবসাইটে প্রবেশ করুন</h2>
                    <p className="text-muted-foreground mb-4">
                        প্রথমে বাংলাদেশ নির্বাচন কমিশনের অফিসিয়াল <a href="https://services.nidw.gov.bd" className="text-primary hover:underline" target="_blank" rel="noreferrer">সেবা পোর্টাল (https://services.nidw.gov.bd)</a> এ যান।
                        এটি সম্পূর্ণ সরকারি ওয়েবসাইট এবং এখানে সম্পূর্ণ নিরাপদ।
                    </p>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ধাপ ২: "NID সংশোধন" অপশন খুঁজুন</h2>
                    <p className="text-muted-foreground mb-4">
                        ওয়েবসাইটে প্রবেশ করার পর, আপনি বিভিন্ন সেবার তালিকা দেখতে পাবেন।
                        "NID সংশোধন" বা "Correct NID" অপশন খুঁজে নিন।
                    </p>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ধাপ ৩: ফর্ম পূরণ করুন</h2>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                        <h3 className="font-semibold mb-3">ফর্ম পূরণের সঠিক নিয়ম:</h3>
                        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                            <li><strong>NID নম্বর:</strong> আপনার বর্তমান ১৭ ডিজিটের NID নম্বর লিখুন (কোনো স্পেস বা ড্যাশ ছাড়াই)</li>
                            <li><strong>জন্মতারিখ:</strong> আপনার সঠিক জন্মতারিখ (DD/MM/YYYY ফরম্যাটে) প্রবেশ করুন</li>
                            <li><strong>সংশোধনের ধরন:</strong> প্রয়োজন অনুযায়ী সংশোধনের ধরন নির্বাচন করুন</li>
                            <li><strong>সংশোধিত তথ্য:</strong> কোন তথ্য সংশোধিত হবে তা সাবধানে লিখুন</li>
                            <li><strong>সংশোধনের কারণ:</strong> সংক্ষেপে কারণ বর্ণনা করুন (যেমন: "জন্মসনদে নাম ভিন্ন")</li>
                        </ol>
                    </div>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ধাপ ৪: সাপোর্টিং ডকুমেন্ট আপলোড করুন</h2>
                    <p className="text-muted-foreground mb-4">
                        নিম্নলিখিত ডকুমেন্টের ডিজিটাল কপি আপলোড করতে হবে। সবগুলো PDF বা JPG ফরম্যাটে হতে হবে এবং ২-৫ MB এর মধ্যে হতে হবে:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li><strong>জন্মসনদ:</strong> আপনার প্রকৃত জন্মসনদ (উভয় পাশ)</li>
                        <li><strong>জন্মনিবন্ধন তালিকা:</strong> ইউনিয়ন অফিস থেকে প্রাপ্ত জন্মনিবন্ধন তালিকা</li>
                        <li><strong>শিক্ষাগত সনদ:</strong> এসএসসি বা এইচএসসি সার্টিফিকেট (যেখানে সঠিক নাম আছে)</li>
                        <li><strong>পাসপোর্ট বা অন্যান্য সরকারি পরিচয়পত্র</strong></li>
                        <li><strong>নোটারি/এফিডেভিট:</strong> প্রয়োজন হলে বিচারক বা নোটারি দ্বারা সিদ্ধান্ত গৃহীত বিবৃতি</li>
                        <li><strong>গেজেট প্রকাশ:</strong> জেন্ডার পরিবর্তনের ক্ষেত্রে সরকারি গেজেট কপি</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ধাপ ৫: অনলাইন ফি পেমেন্ট</h2>
                    <p className="text-muted-foreground mb-4">
                        NID সংশোধনের জন্য একটি নির্দিষ্ট ফি প্রদান করতে হবে। সাধারণ সংশোধনের জন্য ফি ৫০০ টাকা থেকে শুরু।
                        অনলাইন পেমেন্ট গেটওয়ে (bKash, Nagad, রকেট) বা ব্যাংক ট্রান্সফারের মাধ্যমে পেমেন্ট করতে পারবেন।
                    </p>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ধাপ ৬: আবেদন জমা দিন</h2>
                    <p className="text-muted-foreground mb-4">
                        সব তথ্য সঠিকভাবে পূরণ এবং ফি প্রদান করার পরে "Submit" বোতামে ক্লিক করুন।
                        আপনি একটি আবেদন সংখ্যা (Reference Number) পাবেন যা দিয়ে আপনি পরে ট্র্যাক করতে পারবেন।
                    </p>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ধাপ ৭: আবেদন ট্র্যাক করুন</h2>
                    <p className="text-muted-foreground mb-4">
                        আপনার আবেদন জমার পর, সেই সাইটে "Track Application" বা "আবেদন ট্র্যাক করুন" অপশন ব্যবহার করে
                        আপনার আবেদনের অগ্রগতি দেখতে পারবেন। নিয়মিত চেক করুন এবং যদি অতিরিক্ত ডকুমেন্ট লাগে তাহলে আপলোড করুন।
                    </p>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 mt-10">
                        <h3 className="font-semibold mb-3">⚠️ গুরুত্বপূর্ণ সতর্কতা</h3>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li>কখনোই বিকল্প ওয়েবসাইটে আপেন করবেন না; সবসময় <strong>services.nidw.gov.bd</strong> ব্যবহার করুন</li>
                            <li>অনলাইনে কাউকে আপনার NID নম্বর বা ব্যক্তিগত তথ্য শেয়ার করবেন না</li>
                            <li>জালিয়াতি এড়াতে সরকারি অফিসার বা এজেন্টের মাধ্যমে সংশোধন করান</li>
                            <li>ডকুমেন্ট আপলোড করার সময় আসল কপি রাখুন, শুধু স্ক্যান করা কপি জমা দিন</li>
                            <li>সংশোধন প্রক্রিয়া সাধারণত ৩০-৬০ দিন সময় লাগে</li>
                        </ul>
                    </div>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">জেন্ডার/লিঙ্গ পরিবর্তন (তৃতীয় লিঙ্গ) সংশোধন</h2>
                    <p className="text-muted-foreground mb-4">
                        যদি আপনি আপনার জেন্ডার বা লিঙ্গ পরিবর্তন করতে চান, তাহলে নিম্নলিখিত অতিরিক্ত ডকুমেন্টস লাগবে:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>সাইকোলজিস্ট বা সাইকিয়াট্রিস্টের রিপোর্ট</li>
                        <li>মেডিকেল রিপোর্ট (প্রয়োজন হলে)</li>
                        <li>বাংলাদেশ অফিসিয়াল গেজেট প্রকাশনা</li>
                        <li>আইনি সমর্থন ডকুমেন্ট</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">সাধারণ সমস্যা এবং সমাধান</h2>
                    <div className="bg-card border border-border rounded-lg p-4 mb-6 space-y-4">
                        <div>
                            <h3 className="font-semibold mb-2">❌ সমস্যা: "Invalid NID Number" বার্তা আসছে</h3>
                            <p className="text-muted-foreground">সমাধান: আপনার NID নম্বর ডিজিট দ্বারা দ্বিগুণ-চেক করুন। কোনো স্পেস, ড্যাশ বা অতিরিক্ত সংখ্যা না রাখুন।</p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">❌ সমস্যা: ডকুমেন্ট আপলোড হচ্ছে না</h3>
                            <p className="text-muted-foreground">সমাধান: ফাইল সাইজ ২ MB এর বেশি না হয় এবং PDF বা JPG ফরম্যাটে আছে কি দেখুন। ব্রাউজার ক্যাশ ক্লিয়ার করে আবার চেষ্টা করুন।</p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">❌ সমস্যা: অনেক দিন পর আবেদন অনুমোদিত হচ্ছে না</h3>
                            <p className="text-muted-foreground">সমাধান: সংশোধিত তথ্য সম্পর্কে অতিরিক্ত প্রমাণ লাগতে পারে। আপনার নিকটস্থ নির্বাচন অফিসে যোগাযোগ করুন।</p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-2">❌ সমস্যা: পেমেন্ট সফল হয়নি কিন্তু টাকা কেটে গেছে</h3>
                            <p className="text-muted-foreground">সমাধান: নিজের ব্যাংক অ্যাকাউন্ট চেক করুন। যদি রিফান্ড না পেয়ে থাকেন, তাহলে গ্রাহক সেবায় যোগাযোগ করুন।</p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">সংক্ষিপ্ত সময়ে সংশোধন (এক্সপ্রেস সেবা)</h2>
                    <p className="text-muted-foreground mb-4">
                        যদি আপনার NID সংশোধন জরুরি হয় তাহলে দ্রুত সংশোধন সেবা চান। এর জন্য অতিরিক্ত ফি দিয়ে
                        আপনার আবেদন অগ্রাধিকার দিতে পারবেন। এতে সাধারণত ১৫-২০ দিনে সংশোধন সম্পন্ন হয়।
                    </p>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">সংশোধন অনুমোদনের পরে কি করবেন?</h2>
                    <p className="text-muted-foreground mb-4">
                        আপনার NID সংশোধন অনুমোদিত হলে আপনি একটি নোটিফিকেশন ইমেইলে পাবেন। তারপর:
                    </p>
                    <ol className="list-decimal list-inside text-muted-foreground space-y-2 mb-6">
                        <li>নিকটস্থ নির্বাচন অফিসে গিয়ে আপনার নতুন NID সংগ্রহ করুন</li>
                        <li>আপনার সব রেকর্ড (ব্যাংক, সিম, পাসপোর্ট) আপডেট করুন নতুন তথ্য দিয়ে</li>
                        <li>পুরাতন NID ধ্বংস করুন বা সংরক্ষণ করুন (তবে ব্যবহার করবেন না)</li>
                    </ol>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">যোগাযোগ করুন এবং সহায়তা পান</h2>
                    <p className="text-muted-foreground mb-4">
                        যদি অনলাইন প্রক্রিয়ায় সমস্যা হয় তাহলে:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>নিকটস্থ জেলা বা উপজেলার নির্বাচন অফিসে যান</li>
                        <li>বাংলাদেশ নির্বাচন কমিশনের কল সেন্টার ১০৯নম্বরে যোগাযোগ করুন (সকাল ৯টা - রাত ৫টা)</li>
                        <li>অফিসিয়াল ওয়েবসাইট services.nidw.gov.bd এ "Contact Us" সেকশন দেখুন</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">সংক্ষিপ্ত উপসংহার</h2>
                    <p className="text-muted-foreground mb-6">
                        অনলাইন NID সংশোধন সেবা বাংলাদেশে এখন সহজলভ্য এবং সম্পূর্ণভাবে নিরাপদ। আপনার যদি NID এ ভুল তথ্য থাকে,
                        দেরি না করে এই গাইড অনুসরণ করে সংশোধন করিয়ে নিন। সঠিক তথ্য সহ NID আপনার ভবিষ্যত জীবনে অনেক সুবিধা প্রদান করবে।
                        তথ্য সংশোধন প্রক্রিয়ায় সর্বদা সরকারি চ্যানেল অনুসরণ করুন এবং সর্বাধিক সাবধানতা রাখুন।
                    </p>

                    <div className="bg-card border border-border rounded-xl p-6 mb-10">
                        <h3 className="text-xl font-semibold mb-3">আরও পড়ুন</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
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
                            <li>
                                <Link to="/blog/family-card-apply" className="text-primary hover:underline">
                                    পারিবারিক কার্ড আবেদন প্রক্রিয়া বাংলাদেশ
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

export default NidCorrectionGuideMainPage;
