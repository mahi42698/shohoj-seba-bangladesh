import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const NidCardCheckOnlinePage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Seo
                title="NID কার্ড চেক অনলাইন বাংলাদেশ - সঠিক ও দ্রুত ভেরিফিকেশন"
                description="বাংলাদেশে NID কার্ড অনলাইনে কিভাবে যাচাই করবেন: ধাপে ধাপে গাইড, প্রয়োজনীয় তথ্য এবং সর্বশেষ অফিসিয়াল লিঙ্ক।"
                keywords="NID কার্ড চেক, NID ভেরিফিকেশন, বাংলাদেশ NID অনলাইন, এনআইডি যাচাই"
            />
            <Navbar />
            <main className="flex-1 container py-12">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-6">NID কার্ড চেক অনলাইন বাংলাদেশ: সঠিক ও দ্রুত প্রক্রিয়া</h1>

                    <p className="text-muted-foreground mb-6">
                        আপনার জাতীয় পরিচয়পত্র (NID) বাংলাদেশের একটি সবচেয়ে গুরুত্বপূর্ণ ডকুমেন্ট।
                        ব্যাংক অ্যাকাউন্ট খোলা, এসএসসি/এইচএসসি রেজিস্ট্রেশন, অনলাইন আবেদন, ড্রাইভিং লাইসেন্স,
                        ও সরকারি কাজের জন্য NID সঠিক ও ভ্যালিড কি না তা যাচাই করা অপরিহার্য।
                        আনন্দের বিষয় হলো, বাংলাদেশ সরকারের ই-নামজারি প্ল্যাটফর্ম এবং NID সেবা এখন অনলাইনে
                        আপনার সহজেই যাচাই করার সুযোগ দেয়।
                    </p>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">কেন NID চেক করা জরুরি?</h2>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>অনেক ক্ষেত্রে অনলাইন ফর্মে ভুল তথ্য দেয়া হয়ে থাকে; সেক্ষেত্রে NID যাচাই করলে নির্ভুল তথ্য পাওয়া যায়।</li>
                        <li>ব্যাংক ও মোবাইল সিম ব্যবহারের জন্য NID ভ্যালিডেশন প্রয়োজন।</li>
                        <li>নকল NID বা ভুল নাম্বার ব্যবহারের ফলে প্রতারণা রোধ করা যায়।</li>
                        <li>সরকারি সেবা গ্রহণে কেবলমাত্র সঠিক NID হলে আবেদন সফল হয়।</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">প্রয়োজনীয় তথ্য ও ডকুমেন্ট</h2>
                    <p className="text-muted-foreground mb-4">
                        অনলাইন NID চেক করার জন্য আপনার কাছে নিম্নলিখিত তথ্য থাকা উচিত:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>আপনার ১৭ ডিজিটের NID নম্বর</li>
                        <li>আপনার জন্মতারিখ (DD/MM/YYYY ফরম্যাটে)</li>
                        <li>প্রয়োজনে জন্মস্থান বা উপজেলা</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ধাপ ১: সরকারি ওয়েবসাইটে যান</h2>
                    <p className="text-muted-foreground mb-4">
                        NID যাচাই করার জন্য বাংলাদেশ নির্বাচন কমিশনের (EC) বা <a href="https://services.nidw.gov.bd" className="text-primary hover:underline" target="_blank" rel="noreferrer">https://services.nidw.gov.bd</a> ওয়েবসাইটে যান। এই সাইট সরকার দ্বারা অনুমোদিত এবং প্রতারণামূলক ওয়েবসাইট থেকে সুরক্ষা প্রদান করে।
                    </p>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ধাপ ২: সঠিক তথ্য প্রদান করুন</h2>
                    <p className="text-muted-foreground mb-4">
                        ওয়েবসাইটে প্রদত্ত ফর্মে আপনার NID নম্বর, জন্মতারিখ এবং প্রয়োজনে জন্মস্থান (জেলা/উপজেলা) প্রদান করুন। আবেদন ফর্মে তথ্য ঠিকঠাক না দিলে ফলাফল সঠিক হবে না।
                    </p>
                    <ol className="list-decimal list-inside text-muted-foreground space-y-2 mb-6">
                        <li>প্রথমে আপনি NID নম্বর সঠিকভাবে লিখুন।</li>
                        <li>তারপর জন্মতারিখ সিলেক্ট করুন (DD/MM/YYYY)।</li>
                        <li>প্রয়োজনে জেলা/উপজেলা বাছাই করুন।</li>
                        <li>“Submit” বা “Search” বোতামে ক্লিক করুন।</li>
                    </ol>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ধাপ ৩: ফলাফল ব্যাখ্যা করুন</h2>
                    <p className="text-muted-foreground mb-4">
                        সফল যাচাইয়ের পর আপনি NID এর সাথে সংশ্লিষ্ট নাম, ঠিকানা, জন্মতারিখ ও অন্যান্য তথ্য দেখতে পারবেন। যদি ফলাফল না আসে বা “No record found” দেখায়, তাহলে নীচের পদক্ষেপ নিন।
                    </p>

                    <h3 className="text-xl font-semibold mt-8 mb-3">সমস্যা হলে করণীয়</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>প্রথমে অবশ্যই আপনার প্রদানকৃত তথ্য সঠিক কিনা যাচাই করুন।</li>
                        <li>NID নম্বর ১৭ ডিজিটে ঠিক আছে কি দেখুন (ড্যাশ/স্পেস থাকলে সরিয়ে দিন)।</li>
                        <li>জন্মতারিখ ভুল হলে সংশোধন করে আবার চেষ্টা করুন।</li>
                        <li>যদি সার্ভার ডাউন থাকে, কিছু সময় পরে আবার চেষ্টা করুন।</li>
                        <li>যদি সমস্যা অব্যাহত থাকে, নিকটস্থ নির্বাচন অফিস বা জেলা অফিসে যোগাযোগ করুন।</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">উন্নত টিপস</h2>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>প্রতারণা এড়াতে সবসময় সরকারি ডোমেইন ব্যবহার করুন (nidw.gov.bd)।</li>
                        <li>পাবলিক ওয়াই-ফাই বা অজানা নেটওয়ার্কের পরিবর্তে ব্যক্তিগত নেটওয়ার্ক ব্যবহার করুন।</li>
                        <li>আপনার NID সংরক্ষিত ডকুমেন্টে খেয়াল রাখুন এবং অনলাইনে শেয়ার করবেন না।</li>
                        <li>নাগরিক সেবা নিতে হলে NID চেক করার পরে আপনার তথ্য আপডেট আছে কি না পরীক্ষা করুন।</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">সংক্ষিপ্ত উপসংহার</h2>
                    <p className="text-muted-foreground mb-6">
                        অনলাইন NID চেক করা একটি নিরাপদ ও দ্রুত উপায়, যা আপনাকে জীবনের গুরত্বপূর্ণ কাজগুলোতে সাহায্য করে।
                        নিয়মিত যখনই ব্যাংক, মোবাইল সিম বা সরকারি সেবা নিতে চান তখন NID যাচাই করতে ভুলবেন না। এটিই আপনার নিজস্ব সুরক্ষা।
                    </p>

                    <div className="bg-card border border-border rounded-xl p-6 mb-10">
                        <h3 className="text-xl font-semibold mb-3">আরও পড়ুন</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>
                                <Link to="/blog/birth-certificate-verification" className="text-primary hover:underline">
                                    জন্মনিবন্ধন সনদ অনলাইন যাচাই - বিস্তারিত গাইড
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog/family-card-apply" className="text-primary hover:underline">
                                    পারিবারিক কার্ড আবেদন প্রক্রিয়া বাংলাদেশ
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog/passport-application" className="text-primary hover:underline">
                                    পাসপোর্ট আবেদন প্রক্রিয়া বাংলাদেশ
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

export default NidCardCheckOnlinePage;
