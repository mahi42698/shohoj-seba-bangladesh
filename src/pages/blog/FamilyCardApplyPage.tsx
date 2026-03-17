import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const FamilyCardApplyPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Seo
                title="পারিবারিক কার্ড আবেদন প্রক্রিয়া বাংলাদেশ - সম্পূর্ণ নির্দেশিকা"
                description="বাংলাদেশে পারিবারিক কার্ডের জন্য কোথায় ও কিভাবে আবেদন করবেন, প্রয়োজনীয় ডকুমেন্টস, অনলাইন ও অফলাইন ধাপ এবং সহজ টিপস।"
                keywords="পারিবারিক কার্ড, পরিবারিক কার্ড আবেদন, বাংলাদেশের পরিবারিক কার্ড, পরিবারিক পরিচয় পত্র"
            />
            <Navbar />
            <main className="flex-1 container py-12">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-6">পারিবারিক কার্ড আবেদন প্রক্রিয়া বাংলাদেশ: ধাপে ধাপে গাইড</h1>

                    <p className="text-muted-foreground mb-6">
                        বাংলাদেশে গ্রাম, শহর কিংবা পৌর এলাকায় যে কোনো পরিবারের প্রধান ডকুমেন্ট হলো পারিবারিক কার্ড।
                        এটি সামাজিক সেবা, সরকারি ভাতা, ভিসিডি/ভিজিএফ, শিক্ষা বৃত্তি এবং বিভিন্ন সরকারি প্রোগ্রামে পরিচিতি প্রমাণ হিসেবে ব্যবহার হয়।
                        সুতরাং পারিবারিক কার্ডের আবেদন প্রক্রিয়া জেনে রাখা খুবই গুরুত্বপূর্ণ।
                    </p>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">পারিবারিক কার্ড কেন লাগে?</h2>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>সরকারি ভাতা ও ভ্যাকসিন কার্ডে পরিবারিক কার্ড প্রয়োজন।</li>
                        <li>শিক্ষা বৃত্তি ও অঙ্গনের কাজের জন্য প্রায়শই প্রয়োজন।</li>
                        <li>ভিজিডি/ভিজিএফ, প্রধানমন্ত্রীর বাড়ি বাড়ি অনুষ্ঠান প্রভৃতি সুবিধা নিতে পারিবারিক কার্ডের প্রয়োজন হয়।</li>
                        <li>এটি আপনার পরিবারের সদস্যদের সংখ্যা, অবস্থান এবং অন্যান্য তথ্য নিশ্চিত করে সরকারী রেকর্ডে।</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">প্রয়োজনীয় ডকুমেন্টস</h2>
                    <p className="text-muted-foreground mb-4">
                        পারিবারিক কার্ডের জন্য আবেদন করার আগে নিচের ডকুমেন্টগুলো জোগাড় করুন:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>নমিনি সদস্যদের জাতীয় পরিচয়পত্র (NID) কপি।</li>
                        <li>পরিবারের সকলে থাকলে প্রত্যেকের জন্মনিবন্ধন সনদের কপি।</li>
                        <li>ঠিকানার প্রমাণ হিসেবে বিদ্যুৎ/পানি বিল, টিআর স্লিপ বা ভ্যাট বিল।</li>
                        <li>ক্যামেরা বা মোবাইল ফোন থেকে পারিবারিক সদস্যদের ছবি (আংশিক প্রয়োজন হতে পারে)।</li>
                        <li>নিজের NID ও অ্যাড্রেস প্রমাণ নিশ্চিতকরণ কাগজ।</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ধাপ ১: নিকটস্থ উপজেলা/থানা বা ইউনিয়ন পরিষদ কেন্দ্রে যান</h2>
                    <p className="text-muted-foreground mb-4">
                        পারিবারিক কার্ডের (Family Card) জন্য সাধারণত উপজেলা বা ইউনিয়ন পরিষদের গ্রাম উন্নয়ন সমিতির অফিসে আবেদন করতে হয়। অনেক স্থানে সমাজ সেবা অফিস বা স্থানীয় ইউনিয়ন পরিষদ কাঁচার ধাপ হিসাবে কাজ করে।
                    </p>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ধাপ ২: আবেদন ফরম সংগ্রহ ও পূরণ</h2>
                    <ol className="list-decimal list-inside text-muted-foreground space-y-2 mb-6">
                        <li>ফরম সংগ্রহ করুন (সাধারণত বিনামূল্য)।</li>
                        <li>ফরমে পরিবারের প্রধানের নাম, ঠিকানা, মোবাইল নম্বর এবং সদস্যদের তথ্য লিখুন।</li>
                        <li>প্রত্যেক সদস্যের NID নম্বর, নাম ও জন্ম তারিখটি সঠিকভাবে লিখুন।</li>
                        <li>যদি কেউ নথিপত্রে না থাকে তাহলে সেটির ব্যপারে কার্ড অফিসে উল্লেখ করুন।</li>
                    </ol>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ধাপ ৩: কাগজপত্র জমা ও যাচাই</h2>
                    <p className="text-muted-foreground mb-4">
                        আবেদন ফরমসহ সমস্ত ডকুমেন্ট জমা দিন। সাধারণত প্রশাসনিক কর্মকর্তা এটি যাচাই করে নিবেন এবং ফিল্ড ভেরিফিকেশন বা ঘর পরিদর্শনের জন্য নির্দেশ দিতে পারেন।</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>সমস্ত NID ও জন্মনিবন্ধন সনদের অনুলিপি দিয়ে নথি জমা দিন।</li>
                        <li>ফাঁকা স্থান থাকলে সেগুলো পূরণ করতে ভুলবেন না।</li>
                        <li>ভেরিফিকেশন প্রক্রিয়ায় কাউকে অনুপস্থিত পেলে পুনরায় ডাকা হতে পারে।</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">ধাপ ৪: কার্ড সংগ্রহ ও ব্যবহার</h2>
                    <p className="text-muted-foreground mb-4">
                        ভেরিফিকেশন শেষে অফিস থেকে আপনার পারিবারিক কার্ড প্রিন্ট করে বা সংগ্রহের জন্য জানানো হবে। কার্ড পাওয়ার সময় সাবধানে দেখুন যাতে সঠিক নাম, ঠিকানা ও সদস্য সংখ্যা আছে।
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>পারিবারিক কার্ডে ভুল থাকলে দ্রুত সংশোধনের জন্য আবেদন করুন।</li>
                        <li>কার্ড হারিয়ে গেলে পুনরায় আবেদন করতে হবে।</li>
                        <li>আবার নিয়মিত তথ্য আপডেট করাতে হবে, যদি পরিবারের সদস্য পরিবর্তিত হয়।</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">পারিবারিক কার্ডের মাধ্যমে পাওয়া সুবিধা</h2>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                        <li>ভিজিডি/ভিজিএফ কার্ড পেতে সাহায্য করে।</li>
                        <li>দুর্যোগকালীন সহায়তা প্রাপ্তিতে সহজ হয়।</li>
                        <li>সরকারি ভাতা, শিক্ষা বৃত্তি ও সামাজিক সেবায় গ্রহণযোগ্য পরিচয়।</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-10 mb-4">উপসংহার</h2>
                    <p className="text-muted-foreground mb-6">
                        পারিবারিক কার্ড একটি গণপরিষেবা ডকুমেন্ট যা আপনার পরিবারের সকল সদস্যের তথ্য এবং ভর্তুকি সুবিধার প্রমাণ হিসেবে কাজ করে।
                        সঠিকভাবে আবেদন ও জারি করলে আপনার অধিকাংশ সরকারি সুবিধা পেতে সহায়তা করবে।
                    </p>

                    <div className="bg-card border border-border rounded-xl p-6 mb-10">
                        <h3 className="text-xl font-semibold mb-3">আরও পড়ুন</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>
                                <Link to="/blog/vgd-vgf-card-application" className="text-primary hover:underline">
                                    ভিজিডি / ভিজিএফ কার্ড আবেদন
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

export default FamilyCardApplyPage;
