import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const BirthCertificateVerificationPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Seo
                title="জন্মনিবন্ধন সনদ অনলাইন যাচাই - বাংলাদেশে প্রয়োজনীয় গাইড"
                description="বাংলাদেশে জন্মনিবন্ধন সনদ ভ্যালিডেশন অনলাইনে কিভাবে করবেন, প্রয়োজনীয় তথ্য কি, কীভাবে ফলাফলে ভুল ঠিক করবেন - বিস্তারিত নির্দেশিকা।"
                keywords="জন্মনিবন্ধন সনদ, অনলাইন যাচাই, জন্মনিবন্ধন চেক, বাংলাদেশ জন্মনিবন্ধন"
            />
            <Navbar />
            <main className="flex-1 container py-12">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-6">জন্মনিবন্ধন সনদ অনলাইন যাচাই: বাংলাদেশে সম্পূর্ণ গাইড</h1>

                    <p className="text-muted-foreground mb-6">
                        জন্মনিবন্ধন সনদ (Birth Certificate) হল নাগরিকদের সবচেয়ে গুরুত্বপূর্ণ ডকুমেন্টগুলোর একটি।
                        স্কুলে ভর্তির সময়, সরকারি বৃত্তি পাওয়া, পরিবহন সুবিধা নেওয়া ইত্যাদিতে জন্মনিবন্ধন সনদের সত্যতা খুবই জরুরি।
                        আপনার জন্মনিবন্ধন সনদ অনলাইনে যাচাই করা যায়, যা আপনাকে সময় বাচায় এবং প্রচলিত ভুল-ত্রুটি ধরতে সহায়তা করে।
                    </p>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">কেন আপনার জন্মনিবন্ধন সনদ যাচাই করবেন?</h2>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>অনলাইনের বেশির ভাগ সেবা (স্কুল ভর্তি, ভেন্ডর সেবা) সত্যতা যাচাই করে থাকে।</li>
                        <li>জন্মনিবন্ধন সনদে নাম, জন্ম তারিখ, পিতার নাম ভুল হলে ভবিষ্যতে সমস্যা হতে পারে।</li>
                        <li>অনলাইনে থাকা ডেটা ভুল হলে সংশোধন করানো যায়, তাই আগে যাচাই করা ভালো।</li>
                        <li>আপনি যদি নাগরিকত্ব বা ভিসা আবেদন করেন, তখন ঠিক তথ্য থাকা প্রয়োজন।</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">প্রয়োজনীয় তথ্য</h2>
                    <p className="text-muted-foreground mb-4">
                        অনলাইন যাচাইয়ের জন্য নিম্নলিখিত তথ্য অবশ্যই আপনার হাতে থাকতে হবে:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>জন্মনিবন্ধন সনদের রেজিস্ট্রেশন নম্বর (Register Number)</li>
                        <li>জন্ম সনদের জন্ম তারিখ</li>
                        <li>মা, বাবা বা অভিভাবকের নাম</li>
                        <li>জমার ঠিকানা (উপজেলা/জেলা)</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ধাপ ১: অফিসিয়াল ওয়েবসাইটে যান</h2>
                    <p className="text-muted-foreground mb-4">
                        সবার আগে বাংলাদেশের স্বাস্থ্য ও পরিবার কল্যাণ মন্ত্রণালয়ের বা জেলা প্রশাসক/উপজেলা নির্বাহী কর্মকর্তার সাইটে যান। সাধারণত এই লিঙ্ক ব্যবহার করা হয়:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>
                            <a
                                href="https://dghs.gov.bd/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-primary hover:underline"
                            >
                                স্বাস্থ্য ও পরিবার কল্যাণ মন্ত্রণালয় (DGHS)
                            </a>
                        </li>
                        <li>
                            আপনার স্থানীয় জেলা/উপজেলার সরকারি সেবা পোর্টাল (যদি থাকে)।
                        </li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ধাপ ২: রেজিস্ট্রেশন নম্বর দিয়ে খুঁজুন</h2>
                    <p className="text-muted-foreground mb-4">
                        ওয়েবসাইটে সাধারণত একটি সার্চ বক্স থাকে যেখানে আপনি আপনার জন্মনিবন্ধন রেজিস্ট্রেশন নম্বর প্রবেশ করিয়ে ভেরিফাই করতে পারেন।
                        ডেটা ইনপুটে ভুল করলে ফলাফল আসবে না।</p>
                    <ol className="list-decimal list-inside text-muted-foreground space-y-2 mb-6">
                        <li>রেজিস্ট্রেশন নম্বর পূরণ করুন।</li>
                        <li>জন্ম তারিখ (DD/MM/YYYY) সিলেক্ট করুন।</li>
                        <li>যদি প্রয়োজন হয় তবে পিতা/মাতার নাম অথবা ঠিকানা দিন।</li>
                        <li>সাবমিট করুন এবং প্রদত্ত ফলাফল পরীক্ষা করুন।</li>
                    </ol>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ধাপ ৩: ফলাফল পর্যবেক্ষণ</h2>
                    <p className="text-muted-foreground mb-4">
                        ফলাফল পেলে আপনি পেয়ে যাবেন আপনার নাম, পিতার নাম, মাতার নাম, জন্ম তারিখ, ঠিকানা এবং রেজিস্ট্রেশন নম্বর ইত্যাদি।
                        এগুলো যদি আপনার হাতে থাকা কপি বা আপনার স্মৃতির সাথে মিল না করে, তাহলে সংশোধনের প্রক্রিয়া নিন।
                    </p>

                    <h3 className="text-xl font-semibold mt-8 mb-3">ভুল হলে করণীয়</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>যদি নাম বা জন্মতারিখ ভুল থাকে, তাহলে সংশোধন আবেদন করতে হবে।</li>
                        <li>সংশোধনের জন্য আপনার কাছে প্রয়োজন হবে আপনার স্কুল/কলেজ সনদ, অভিভাবকের আইডি অথবা সংশ্লিষ্ট তোমার জন্মের রেকর্ড।</li>
                        <li>সংশোধনের আবেদন সংশ্লিষ্ট উপজেলা/থানা অফিসে দিতে হবে।</li>
                        <li>অনলাইনে সংশোধনের জন্য যদি অপশন থাকে, তাহলে প্রকৃত তথ্য দিয়ে আবেদন করুন।</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">বিনামূল্যে অনলাইন যাচাইয়ের সুবিধা</h2>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>সময় বাঁচে, আপনি বাড়ি থেকেই যাচাই করতে পারেন।</li>
                        <li>ভুল তথ্য দ্রুত ধরা পড়ে ও ঠিক করার সুযোগ থাকে।</li>
                        <li>সরকারি প্রয়োজনীয়তা পূরণে সহায়ক।</li>
                        <li>প্রথমবারই সঠিক তথ্য পেলে পরবর্তী সময়ে ব্যর্থতা কম হয়।</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">উপসংহার</h2>
                    <p className="text-muted-foreground mb-6">
                        জন্মনিবন্ধন সনদ যাচাই করা একটি গুরুত্বপূর্ণ ধাপ, কারণ এটি আপনার পরিচয়ের প্রধান প্রমাণ।
                        অনলাইনে যাচাই করে নিন যে আপনার তথ্য সঠিক আছে কি না, এবং প্রয়োজনে তা মেরামত করুন।
                        এতে আপনার ভবিষ্যৎ দিকেও সুবিধা ও নিরাপত্তা বাড়বে।
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
                                <Link to="/blog/passport-application" className="text-primary hover:underline">
                                    পাসপোর্ট আবেদন প্রক্রিয়া বাংলাদেশ
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog/vgd-vgf-card-application" className="text-primary hover:underline">
                                    ভিজিডি / ভিজিএফ কার্ড আবেদন
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

export default BirthCertificateVerificationPage;
