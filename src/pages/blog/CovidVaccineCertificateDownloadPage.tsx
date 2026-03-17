import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const CovidVaccineCertificateDownloadPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Seo
                title="করোনা ভ্যাকসিন সার্টিফিকেট ডাউনলোড - দ্রুত ও সহজ প্রক্রিয়া"
                description="বাংলাদেশে করোনা ভ্যাকসিন সার্টিফিকেট অনলাইনে কিভাবে ডাউনলোড করবেন, প্রয়োজনীয় তথ্য ও অফিসিয়াল ওয়েবসাইট ব্যবহার করে স্টেপ-বাই-স্টেপ গাইড।"
                keywords="করোনা ভ্যাকসিন সার্টিফিকেট, Covid vaccine certificate, সার্টিফিকেট ডাউনলোড, বাংলাদেশ করোনা ভ্যাকসিন"
            />
            <Navbar />
            <main className="flex-1 container py-12">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-6">করোনা ভ্যাকসিন সার্টিফিকেট ডাউনলোড: দ্রুত ও সহজ প্রক্রিয়া</h1>

                    <p className="text-muted-foreground mb-6">
                        করোনা ভ্যাকসিনের সার্টিফিকেট আপনার স্বাস্থ্য রেকর্ড হিসেবে গুরুত্বপূর্ণ। এর মাধ্যমে আপনি ভ্যাকসিনেশন স্ট্যাটাস প্রমাণ করতে পারেন, ভ্রমণ, কাজ এবং সরকারি সেবাগুলিতে ব্যবহার করতে পারেন।
                        বাংলাদেশে সরকারির প্রদত্ত ডাটাবেস থেকে সহজেই সার্টিফিকেট ডাউনলোড করা যায়।
                    </p>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">সার্টিফিকেটের গুরুত্ব</h2>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>ভ্রমণে, বিশেষ করে আন্তর্জাতিক যাত্রায় করোনা ভ্যাকসিন সার্টিফিকেট প্রয়োজন।</li>
                        <li>কর্মক্ষেত্রে ও শিক্ষা প্রতিষ্ঠানে প্রবেশে প্রমাণিত হয় আপনি ভ্যাকসিনগ্রহণ করেছেন।</li>
                        <li>স্বাস্থ্যদানে ও নিরাপত্তা নিশ্চিতকরণে এটি গুরুত্বপূর্ণ প্রমাণিত হয়।</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">প্রয়োজনীয় তথ্য ও প্রস্তুতি</h2>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>আপনার NID নম্বর অথবা মোবাইল নম্বর যা ভ্যাকসিন রেজিস্ট্রেশনের সময় ব্যবহার করেছিলেন।</li>
                        <li>জন্ম তারিখ (DD/MM/YYYY) বা ভ্যাকসিন রেজিস্ট্রেশন আইডি।</li>
                        <li>আপনি যে মোবাইল নম্বর দিয়েছিলেন, সেটি ব্যবহার করে OTP বা কোড সংগ্রহ করতে পারেন।</li>
                        <li>যদি প্রয়োজনে নতুন কোড নেওয়ার দরকার হয়, আপনার মোবাইল ফোন হাতে রাখুন।</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ধাপ ১: অফিসিয়াল পোর্টালে যান</h2>
                    <p className="text-muted-foreground mb-4">
                        বাংলাদেশে করোনা ভ্যাকসিন সার্টিফিকেট ডাউনলোড করার জন্য সরকার কর্তৃক পরিচালিত ওয়েবসাইট ব্যবহার করুন। সাধারণত ব্যবহার করা হয়:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>
                            <a href="https://dashboard.bd.gov.bd" className="text-primary hover:underline" target="_blank" rel="noreferrer">
                                বাংলাদেশের সরকারী ড্যাশবোর্ড (dashboard.bd.gov.bd)
                            </a>
                        </li>
                        <li>
                            অন্য সরকারি হেলথ বিভাগ বা সেবা পোর্টাল, যা ভ্যাকসিন ডেটা দেখায়।
                        </li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ধাপ ২: আপনার তথ্য দিয়ে সার্চ করুন</h2>
                    <p className="text-muted-foreground mb-4">
                        ওয়েবসাইটে গেলে সাধারণত “Covid Vaccine Certificate” বা “Download Certificate” অপশন থাকবে। সেখানে আপনার NID, মোবাইল নম্বর বা ভ্যাকসিন রেজিস্ট্রেশনের তথ্য দিন।</p>
                    <ol className="list-decimal list-inside text-muted-foreground space-y-2 mb-6">
                        <li>প্রয়োজনীয় ফিল্ড (NID/MME/Vaccine ID) পূরণ করুন।</li>
                        <li>প্রয়োজন হলে OTP/কোড প্রবেশ করুন।</li>
                        <li>সার্চ অথবা ডাউনলোড বোতামে ক্লিক করুন।</li>
                    </ol>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ধাপ ৩: সার্টিফিকেট ডাউনলোড ও সংরক্ষণ</h2>
                    <p className="text-muted-foreground mb-4">
                        ডাউনলোড বাটনে ক্লিক করলে সাধারণত একটি PDF ফাইল ডাউনলোড হয়। সেটি ভালোভাবে সংরক্ষণ করুন এবং প্রয়োজনে প্রিন্ট করে রাখুন।</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>PDF ডাউনলোড করে নিরাপদ স্থানে রাখা উচিত।</li>
                        <li>ভ্রমণের জন্য প্রিন্ট কপি রাখলে সুবিধা হয়।</li>
                        <li>সার্টিফিকেটে আপনার নাম, জন্ম তারিখ এবং ভ্যাকসিন ডোজ সম্পর্কে তথ্য ঠিক আছে কিনা যাচাই করুন।</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">কোনো সমস্যা হলে করণীয়</h2>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>OTP না আসলে বা মোবাইল নম্বর পরিবর্তিত হলে সংশ্লিষ্ট স্বাস্থ্য সেবা কেন্দ্রে যোগাযোগ করুন।</li>
                        <li>সার্টিফিকেট তথ্য ভুল থাকলে স্বাস্থ্য বিভাগের সাথে যোগাযোগ করে সংশোধিত সংস্করণ নিন।</li>
                        <li>অনলাইনে সার্টিফিকেট না থাকলে নিকটস্থ স্বাস্থ্য কেন্দ্র বা ইউএনও অফিসে যান।</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">আন্তর্জাতিক ভ্রমণের জন্য টিপস</h2>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>ভ্রমণের আগে অবশ্যই আপনার ভ্যাকসিন সার্টিফিকেটের ইংরেজি ভার্সন প্রয়োজন হতে পারে।</li>
                        <li>কিছু দেশে অ্যাপ বা কোড স্ক্যান করে ভ্যাকসিন যাচাই করা হয়, সেজন্য QR কোড আছে কি দেখুন।</li>
                        <li>মুখোশ ও স্যানিটাইজার সব সময় সাথে রাখুন এবং স্বাস্থ্যবিধি মেনে চলুন।</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">উপসংহার</h2>
                    <p className="text-muted-foreground mb-6">
                        করোনা ভ্যাকসিন সার্টিফিকেট ডাউনলোড করা আজকের দিনে প্রয়োজনীয়।
                        এটি শুধু ব্যক্তিগত নিরাপত্তা নয়, আইনগত দিক থেকেও গুরুত্বপূর্ণ। সুতরাং, এটি সবসময় আপডেট রেখে সঠিকভাবে সংরক্ষণ করুন।
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
                                <Link to="/blog/birth-certificate-verification" className="text-primary hover:underline">
                                    জন্মনিবন্ধন সনদ অনলাইন যাচাই
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

export default CovidVaccineCertificateDownloadPage;
