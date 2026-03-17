import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const BirthCertCorrectionGuideMainPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Seo
                title="জন্ম নিবন্ধন সংশোধন করার নিয়ম বাংলাদেশ ২০২৬ - সম্পূর্ণ গাইড"
                description="জন্ম নিবন্ধন সংশোধন করার সঠিক নিয়ম, প্রয়োজনীয় ডকুমেন্ট এবং অনলাইন পদ্ধতি জানুন। ধাপে ধাপে সম্পূর্ণ গাইড।"
                keywords="জন্ম নিবন্ধন সংশোধন, জন্ম সার্টিফিকেট সংশোধন, বাংলাদেশ জন্ম নিবন্ধন, জন্মসনদ সংশোধন"
            />
            <Navbar />
            <main className="flex-1 container py-12">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-6">জন্ম নিবন্ধন সংশোধন করার নিয়ম বাংলাদেশ ২০২৬</h1>

                    <p className="text-muted-foreground mb-6">
                        জন্ম নিবন্ধন সনদ বাংলাদেশের সবচেয়ে গুরুত্বপূর্ণ ডকুমেন্ট। যদি এতে কোনো ভুল থাকে যেমন নাম, জন্মতারিখ,
                        পিতা-মাতার নাম বা অন্য কোনো তথ্য, তাহলে সেই ভুল সংশোধন করা অপরিহার্য। বাংলাদেশ সরকার এখন
                        স্থানীয় সরকার বিভাগের (Local Government Division) মাধ্যমে জন্ম নিবন্ধন সংশোধনের সুবিধা প্রদান করছে।
                        এই সম্পূর্ণ গাইদটি অনুসরণ করে আপনি সহজেই জন্ম নিবন্ধন সংশোধন করতে পারবেন।
                    </p>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">জন্ম নিবন্ধনে কি কি ভুল সংশোধন করা যায়?</h2>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>শিশুর নাম ভুল লেখা থাকলে</li>
                        <li>জন্মতারিখ সঠিক না হলে</li>
                        <li>পিতার নাম বা পিতার তথ্য ভুল থাকলে</li>
                        <li>মাতার নাম বা মাতার তথ্য ভুল থাকলে</li>
                        <li>জেনারেটর (লিঙ্গ) ভুল হলে</li>
                        <li>জন্মস্থান বা জেলা/উপজেলা ভুল হলে</li>
                        <li>পালক পিতা-মাতার তথ্য যোগ করতে হলে</li>
                        <li>জেনারেটর পরিবর্তন (রূপান্তর) করতে হলে</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">সংশোধনের ধরন এবং খরচ</h2>
                    <div className="overflow-x-auto mb-6">
                        <table className="w-full border border-border">
                            <thead className="bg-card">
                                <tr>
                                    <th className="border border-border p-3 text-left font-semibold">সংশোধনের ধরন</th>
                                    <th className="border border-border p-3 text-left font-semibold">প্রয়োজনীয় সময়</th>
                                    <th className="border border-border p-3 text-left font-semibold">খরচ</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-border p-3">নাম সংশোধন</td>
                                    <td className="border border-border p-3">১০-২০ দিন</td>
                                    <td className="border border-border p-3">নির্ভর করে ঘোষণা, সাধারণত বিনামূল্যে</td>
                                </tr>
                                <tr>
                                    <td className="border border-border p-3">জন্মতারিখ সংশোধন</td>
                                    <td className="border border-border p-3">১৫-৩০ দিন</td>
                                    <td className="border border-border p-3">সাধারণত বিনামূল্যে</td>
                                </tr>
                                <tr>
                                    <td className="border border-border p-3">জেনারেটর/লিঙ্গ পরিবর্তন</td>
                                    <td className="border border-border p-3">৩০-৬০ দিন</td>
                                    <td className="border border-border p-3">ভিন্ন ফি, সরকারি নির্দেশ অনুযায়ী</td>
                                </tr>
                                <tr>
                                    <td className="border border-border p-3">পালক পিতা-মাতা যোগ করা</td>
                                    <td className="border border-border p-3">২০-৪০ দিন</td>
                                    <td className="border border-border p-3">নির্দিষ্ট ফি আছে</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">প্রয়োজনীয় ডকুমেন্ট এবং তথ্য</h2>
                    <p className="text-muted-foreground mb-4">
                        জন্ম নিবন্ধন সংশোধনের জন্য নিম্নলিখিত ডকুমেন্টস এবং তথ্য প্রয়োজন:
                    </p>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                        <h3 className="font-semibold mb-3">সকল সংশোধনের জন্য প্রয়োজনীয়:</h3>
                        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                            <li>বর্তমান জন্ম নিবন্ধন সনদের মূল কপি</li>
                            <li>শিশুর পিতা-মাতার জাতীয় পরিচয়পত্র (NID)</li>
                            <li>শিশুর পিতা-মাতার জন্ম নিবন্ধন সনদ</li>
                            <li>শিশুর পিতা-মাতার বিয়ের কাবিননামা বা বিয়ের রেজিস্ট্রেশন</li>
                            <li>সংশোধনের কারণ সংক্ষেপে লিখিত বিবৃতি</li>
                        </ol>
                    </div>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ধাপ ১: গণপরিষদের কাছে আবেদন করুন</h2>
                    <p className="text-muted-foreground mb-4">
                        জন্ম নিবন্ধন সংশোধনের জন্য আপনাকে যেই ইউনিয়ন পরিষদে শিশুর জন্ম নিবন্ধিত হয়েছিল সেই ইউনিয়ন পরিষদে আবেদন করতে হবে।
                        আবেদনের জন্য একটি আবেদনপত্র পূরণ করতে হবে এবং প্রয়োজনীয় ডকুমেন্টস সহ জমা দিতে হবে।
                    </p>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ধাপ ২: নির্ধারিত ফি প্রদান করুন</h2>
                    <p className="text-muted-foreground mb-4">
                        যদি প্রয়োজনীয় হয় তাহলে সংশোধনের জন্য নির্ধারিত ফি প্রদান করুন। সাধারণ নাম বা জন্মতারিখ সংশোধনের জন্য সাধারণত কোনো ফি নেই,
                        তবে জেনারেটর পরিবর্তনের ক্ষেত্রে নির্দিষ্ট ফি থাকতে পারে।
                    </p>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ধাপ ৩: প্রশাসনিক যাচাই-বাছাই প্রক্রিয়া</h2>
                    <p className="text-muted-foreground mb-4">
                        আপনার আবেদন জমা দেওয়ার পর, ইউনিয়ন পরিষদ বা স্থানীয় প্রশাসন নিম্নলিখিত পদক্ষেপ অনুসরণ করবে:
                    </p>
                    <ol className="list-decimal list-inside text-muted-foreground space-y-2 mb-6">
                        <li>আবেদনপত্র যাচাই করবে</li>
                        <li>নোটিশ/বিজ্ঞপ্তি প্রকাশ করবে স্থানীয় অফিসে</li>
                        <li>প্রত্যক্ষদর্শীদের অবস্থা যাচাই করবে</li>
                        <li>শিশুর পিতা-মাতার সাক্ষ্য সংগ্রহ করবে</li>
                        <li>প্রয়োজনে আদালতে মামলা করবে (বড় পরিবর্তনের জন্য)</li>
                    </ol>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ধাপ ৪: জনসাধারণের আপত্তি শোনা</h2>
                    <p className="text-muted-foreground mb-4">
                        স্থানীয় প্রশাসন একটি নোটিশ প্রকাশ করবে যেটি নির্দিষ্ট সময়ের জন্য (সাধারণত ১৫-৩০ দিন) জনসাধারণের সামনে রাখা হয়।
                        এই সময়ে কেউ যদি আপত্তি জানায়, তাহলে সেই বিষয়ে শোনা হবে এবং তদন্ত করা হবে।
                    </p>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ধাপ ৫: চূড়ান্ত অনুমোদন এবং ডিজিটাল আপডেট</h2>
                    <p className="text-muted-foreground mb-4">
                        যদি সবকিছু সঠিক থাকে এবং কোনো আপত্তি না আসে, তাহলে:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>ইউনিয়ন পরিষদ সংশোধন অনুমোদন করবে</li>
                        <li>জন্ম নিবন্ধন ডেটাবেসে তথ্য আপডেট করা হবে</li>
                        <li>সরকারি ডিজিটাল সিস্টেমে নতুন তথ্য যুক্ত হবে</li>
                        <li>আপনাকে নতুন জন্ম নিবন্ধন সনদ প্রদান করা হবে</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">অনলাইন জন্ম নিবন্ধন সংশোধন (ডিজিটাল সেবা)</h2>
                    <p className="text-muted-foreground mb-4">
                        বাংলাদেশে এখন অনলাইনে জন্ম নিবন্ধন সংশোধনের ব্যবস্থা চালু হয়েছে। আপনি নিম্নলিখিত ওয়েবসাইট ব্যবহার করতে পারেন:
                    </p>
                    <div className="bg-card border border-border rounded-lg p-4 mb-6">
                        <p className="text-muted-foreground">
                            <a href="https://birth.sbr.gov.bd" className="text-primary hover:underline" target="_blank" rel="noreferrer">https://birth.sbr.gov.bd</a>
                        </p>
                        <p className="text-muted-foreground text-sm mt-2">এই সাইটে আপনি আপনার জন্ম নিবন্ধন অনলাইনে চেক করতে পারবেন এবং সংশোধনের জন্য অনলাইন আবেদন করতে পারবেন।</p>
                    </div>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">অনলাইন সংশোধনের ধাপসমূহ</h2>
                    <ol className="list-decimal list-inside text-muted-foreground space-y-3 mb-6">
                        <li>
                            <strong>ওয়েবসাইটে প্রবেশ করুন:</strong> birth.sbr.gov.bd এ যান এবং একটি অ্যাকাউন্ট তৈরি করুন
                        </li>
                        <li>
                            <strong>জন্ম নিবন্ধন খুঁজুন:</strong> আপনার অনুসন্ধান করে আপনার জন্ম নিবন্ধন খুঁজে নিন
                        </li>
                        <li>
                            <strong>সংশোধনের আবেদন করুন:</strong> "Request Correction" বা "সংশোধনের আবেদন" অপশন নির্বাচন করুন
                        </li>
                        <li>
                            <strong>সংশোধনের ধরন নির্বাচন করুন:</strong> কোন তথ্য সংশোধন করতে চান তা নির্বাচন করুন
                        </li>
                        <li>
                            <strong>নতুন তথ্য প্রদান করুন:</strong> সঠিক তথ্য লিখুন এবং সংশোধনের কারণ বর্ণনা করুন
                        </li>
                        <li>
                            <strong>ডকুমেন্ট আপলোড করুন:</strong> প্রয়োজনীয় ডকুমেন্টের স্ক্যান কপি আপলোড করুন
                        </li>
                        <li>
                            <strong>ফি প্রদান করুন (যদি প্রয়োজন হয়):</strong> অনলাইন পেমেন্ট সিস্টেমের মাধ্যমে ফি দিন
                        </li>
                        <li>
                            <strong>আবেদন জমা দিন:</strong> সবকিছু সঠিকভাবে পূরণ করে আবেদন জমা দিন এবং একটি রেফারেন্স নম্বর পান
                        </li>
                    </ol>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">আবেদনের স্ট্যাটাস ট্র্যাক করুন</h2>
                    <p className="text-muted-foreground mb-4">
                        অনলাইনে আবেদন করলে আপনি রেফারেন্স নম্বর ব্যবহার করে আপনার আবেদনের অগ্রগতি ট্র্যাক করতে পারবেন।
                        নিয়মিত চেক করুন এবং যদি অতিরিক্ত তথ্য বা ডকুমেন্ট লাগে তাহলে আপলোড করুন।
                    </p>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 mt-10">
                        <h3 className="font-semibold mb-3">⚠️ গুরুত্বপূর্ণ সতর্কতা</h3>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li>সবসময় সরকারি চ্যানেল ব্যবহার করুন; বেসরকারি এজেন্টের মাধ্যমে করাবেন না</li>
                            <li>আপনার ব্যক্তিগত তথ্য (NID নম্বর, জন্মতারিখ) অজানা মানুষের সাথে শেয়ার করবেন না</li>
                            <li>ডকুমেন্ট আপলোড করার সময় উচ্চমানের স্ক্যান নিশ্চিত করুন</li>
                            <li>মিথ্যা তথ্য প্রদান করলে আইনি শাস্তি হতে পারে</li>
                            <li>সংশোধন প্রক্রিয়া সাধারণত ১৫-৬০ দিন সময় লাগে; তাড়াহুড়ো করবেন না</li>
                        </ul>
                    </div>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">জেনারেটর/লিঙ্গ পরিবর্তন (বিশেষ ক্ষেত্রে)</h2>
                    <p className="text-muted-foreground mb-4">
                        যদি শিশুর জেনারেটর (লিঙ্গ পরিচয়) পরিবর্তন করতে হয়, তাহলে অতিরিক্ত ডকুমেন্টস এবং প্রক্রিয়া অনুসরণ করতে হবে:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>মেডিকেল রিপোর্ট ও সার্টিফিকেট</li>
                        <li>সাইকোলজিস্ট/সাইকিয়াট্রিস্টের মতামত</li>
                        <li>আইনি নোটিশ বা ডিক্লারেশন</li>
                        <li>জেলা ম্যাজিস্ট্রেটের অনুমোদন (কিছু ক্ষেত্রে)</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">প্রায়োজনীয় যোগাযোগ তথ্য</h2>
                    <p className="text-muted-foreground mb-4">
                        যদি আপনার জন্ম নিবন্ধন সংশোধনে সমস্যা হয়, তাহলে নিম্নলিখিত যোগাযোগ করুন:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li><strong>স্থানীয় ইউনিয়ন পরিষদ:</strong> আপনার এলাকার ইউনিয়ন অফিসে সরাসরি যোগাযোগ করুন</li>
                        <li><strong>উপজেলা নির্বাহী অফিসার (UNO):</strong> জটিল বিষয়ের জন্য UNO অফিসে যোগাযোগ করুন</li>
                        <li><strong>স্থানীয় সরকার বিভাগ (LGD):</strong> প্রয়োজনে LGD এর সাথে যোগাযোগ করুন</li>
                        <li><strong>সিটিজেন হটলাইন:</strong> সমস্যা সমাধানের জন্য বাংলাদেশ সরকারের সিটিজেন হটলাইনে কল করুন</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">নতুন জন্ম সনদ পাওয়ার পর</h2>
                    <p className="text-muted-foreground mb-4">
                        আপনার জন্ম নিবন্ধন সংশোধিত হয়ে নতুন সনদ পেলে, আপনার সমস্ত গুরুত্বপূর্ণ নথিপত্র আপডেট করুন:
                    </p>
                    <ol className="list-decimal list-inside text-muted-foreground space-y-2 mb-6">
                        <li>জাতীয় পরিচয়পত্র (NID) আপডেট করুন</li>
                        <li>পাসপোর্ট হালনাগাদ করুন</li>
                        <li>ব্যাংক অ্যাকাউন্ট তথ্য সংশোধন করুন</li>
                        <li>স্কুল ও কলেজের রেকর্ড আপডেট করুন</li>
                        <li>অন্যান্য সরকারি সেবায় নতুন তথ্য আপডেট করুন</li>
                    </ol>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">সংক্ষিপ্ত উপসংহার</h2>
                    <p className="text-muted-foreground mb-6">
                        জন্ম নিবন্ধন সংশোধন বাংলাদেশে এখন সহজ এবং স্বচ্ছ প্রক্রিয়ায় সম্ভব। যদি আপনার জন্ম নিবন্ধনে ভুল থাকে,
                        দেরি না করে উপরোক্ত ধাপসমূহ অনুসরণ করে সংশোধন করিয়ে নিন। সঠিক জন্ম নিবন্ধন আপনার এবং আপনার সন্তানের
                        ভবিষ্যত ও সমস্ত শিক্ষা, চাকরি এবং আইনি বিষয়ে সাহায্য করবে।
                    </p>

                    <div className="bg-card border border-border rounded-xl p-6 mb-10">
                        <h3 className="text-xl font-semibold mb-3">আরও পড়ুন</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>
                                <Link to="/blog/birth-certificate-verification" className="text-primary hover:underline">
                                    জন্মনিবন্ধন সনদ অনলাইন যাচাই - একটি পূর্ণাঙ্গ গাইড
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog/nid-card-check-online" className="text-primary hover:underline">
                                    NID কার্ড চেক অনলাইন - সঠিক ও দ্রুত ভেরিফিকেশন
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

export default BirthCertCorrectionGuideMainPage;
