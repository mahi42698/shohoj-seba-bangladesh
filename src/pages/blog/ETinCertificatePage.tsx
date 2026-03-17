import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const ETinCertificatePage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Seo
                title="ই-টিআইএন সার্টিফিকেট বাংলাদেশ - অনলাইন প্রক্রিয়া ও গাইড"
                description="ই-টিআইএন কী, কেন দরকার, এবং কিভাবে অনলাইনে ই-টিআইএন সার্টিফিকেট সংগ্রহ করবেন — ধাপে ধাপে সম্পূর্ণ নির্দেশিকা।"
                keywords="ই-টিআইএন, E-TIN, টিন সার্টিফিকেট, অনলাইন টিন আবেদন, বাংলাদেশ টিন"
            />
            <Navbar />
            <main className="flex-1 container py-12">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-6">ই-টিআইএন সার্টিফিকেট বাংলাদেশ: অনলাইনে আবেদন ও সংগ্রহ</h1>

                    <p className="text-muted-foreground mb-6">
                        ই-টিআইএন (ইলেকট্রনিক ট্যাক্স আইডেন্টিফিকেশন নম্বর) যেকোনো ব্যবসায়ী বা করদাতার জন্য অপরিহার্য।
                        এটি কর অফিসিয়াল সনাক্তকরণ নম্বর, যা কর পরিশোধ, ভ্যাট নিবন্ধন, ব্যাংক লেনদেন এবং সরকারি কাজের জন্য লাগে।
                        ই-টিআইএন সার্টিফিকেট সংগ্রহ করা সহজ; তবে সঠিক প্রক্রিয়া অনুসরণ করা অত্যন্ত গুরুত্বপূর্ণ।
                    </p>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ই-টিআইএন কি এবং কেন দরকার?</h2>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>ই-টিআইএন হল আপনার আর্থিক লেনদেনের জন্য অভিজ্ঞান নম্বর।</li>
                        <li>ব্যাংক অ্যাকাউন্ট খোলা, ভ্যাট বা TIN সনদের জন্য এটি বাধ্যতামূলক।</li>
                        <li>কর ফাইলিং, তথ্য আদানপ্রদান ও সরকারী নথিপত্রে এটি ব্যবহার হয়।</li>
                        <li>কোনো ব্যপারে কর সহায়তা নিলেও, ই-টিআইএন আপনার পরিচয়কে আরও শক্তিশালী করে।</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">প্রয়োজনীয় ডকুমেন্টস</h2>
                    <p className="text-muted-foreground mb-4">
                        ই-টিআইএনের জন্য আপনার প্রয়োজন হতে পারে:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>ন্যাশনাল আইডেন্টিটি কার্ড (NID) বা জন্মনিবন্ধন সনদ।</li>
                        <li>ব্যাংক হিসাবের বিবরণ (ব্যাংকে প্রাথমিক তথ্য) - প্রয়োজনে।</li>
                        <li>যোগাযোগের ঠিকানা ও মোবাইল নম্বর।</li>
                        <li>ব্যবসা করলে ব্যবসায়িক নিবন্ধন সনদ বা লাইসেন্স।</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ধাপ ১: ই-টিআইএন পোর্টালে রেজিস্ট্রেশন</h2>
                    <p className="text-muted-foreground mb-4">
                        সর্ব প্রথম <a href="https://etax.bdtax.gov.bd" className="text-primary hover:underline" target="_blank" rel="noreferrer">etax.bdtax.gov.bd</a> এ প্রবেশ করুন এবং "Register" বা "Sign Up" অপশন নির্বাচন করুন।
                        আপনার সঠিক NID ও মোবাইল নম্বর দিয়ে রেজিস্ট্রেশন করুন।</p>
                    <ol className="list-decimal list-inside text-muted-foreground space-y-2 mb-6">
                        <li>সঠিক NID নম্বর ও মোবাইল নম্বর দিন।</li>
                        <li>মোবাইলে পাঠানো OTP দিন নিশ্চিত করুন।</li>
                        <li>একটি স্থায়ী পিন বা পাসওয়ার্ড সেট করুন।</li>
                    </ol>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ধাপ ২: প্রোফাইল পূরণ ও যাচাই</h2>
                    <p className="text-muted-foreground mb-4">
                        রেজিস্ট্রেশন শেষে আপনি লগইন করলে আপনার প্রোফাইলে কিছু তথ্য পূরণ করতে হবে, যেমন ঠিকানা, ব্যবসার ধরন ইত্যাদি।</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>ব্যক্তিগত তথ্য, ঠিকানা ও যোগাযোগ ঠিকানা পূরণ করুন।</li>
                        <li>ব্যবসায়ী হলে ব্যবসার বিষয়াবলী ও লাইসেন্স নম্বর যোগ করুন।</li>
                        <li>যদি ইতিমধ্যে TIN থাকে, তাহলে সেটির তথ্য দিন।</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ধাপ ৩: ই-টিআইএন সার্টিফিকেট ডাউনলোড করা</h2>
                    <p className="text-muted-foreground mb-4">
                        আপনার প্রোফাইল সম্পূর্ণ হলে, সাইটে সাধারণত “Download TIN Certificate” অপশন দেখাবে। সেখানে ক্লিক করে পিডিএফ আকারে আপনার সার্টিফিকেট ডাউনলোড করুন।</p>
                    <ol className="list-decimal list-inside text-muted-foreground space-y-2 mb-6">
                        <li>লগইন করার পর ড্যাশবোর্ডে যান।</li>
                        <li>‘TIN Certificate’ বা ‘Download Certificate’ লিঙ্কে ক্লিক করুন।</li>
                        <li>পিডিএফ ডাউনলোড করে সংরক্ষণ করুন।</li>
                    </ol>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">সার্টিফিকেট হারিয়ে গেলে করণীয়</h2>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>আবার etax.bdtax.gov.bd এ লগইন করুন।</li>
                        <li>আপনার প্রোফাইলে “Re-download TIN Certificate” অপশন খুঁজুন।</li>
                        <li>নতুন করে ডাউনলোড করে রাখুন এবং প্রিন্ট করুন।</li>
                        <li>প্রয়োজন হলে নিকটস্থ ট্যাক্স অফিসে যোগাযোগ করুন।</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ইন্টেরনাল লিঙ্কঃ আরও প্রাসঙ্গিক নিবন্ধ</h2>
                    <p className="text-muted-foreground mb-4">
                        ই-টিআইএন প্রক্রিয়াটি অন্যান্য সরকারি স্বকীয়তার সাথে ঘনিষ্ঠভাবে জড়িত। নিচের নিবন্ধগুলিও আপনার জন্য গুরুত্বপূর্ণ হতে পারে।
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
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
                        <li>
                            <Link to="/blog/family-card-apply" className="text-primary hover:underline">
                                পারিবারিক কার্ড আবেদন প্রক্রিয়া
                            </Link>
                        </li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">উপসংহার</h2>
                    <p className="text-muted-foreground mb-6">
                        ই-টিআইএন সার্টিফিকেট আপনার কর ব্যবস্থাপনা ও সরকারি পরিষেবার জন্য একটি গুরুত্বপূর্ণ দস্তাবেজ।
                        অনলাইনে সহজেই এটি গ্রহণ করে সংরক্ষণ করলে ভবিষ্যতের কাজগুলো দ্রুত হবে।
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ETinCertificatePage;
