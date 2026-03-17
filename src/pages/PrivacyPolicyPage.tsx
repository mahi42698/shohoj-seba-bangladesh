import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicyPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 container py-12">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-8">গোপনীয়তা নীতি</h1>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">আমাদের প্রতিশ্রুতি</h2>
                        <p className="text-muted-foreground mb-4">
                            সহজ সেবা বাংলাদেশ আপনার ব্যক্তিগত তথ্য এবং গোপনীয়তা রক্ষায় প্রতিশ্রুতিবদ্ধ। এই গোপনীয়তা নীতি আমরা কীভাবে আপনার তথ্য সংগ্রহ, ব্যবহার এবং সুরক্ষা করি তা ব্যাখ্যা করে।
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">তথ্য সংগ্রহ</h2>
                        <p className="text-muted-foreground mb-4">
                            আমরা ফর্ম পূরণের সময় আপনার নাম, ঠিকানা, জন্মতারিখ এবং অন্যান্য প্রয়োজনীয় তথ্য সংগ্রহ করি। এই তথ্য শুধুমাত্র আপনার অনুরোধকৃত সেবা প্রদানের জন্য ব্যবহৃত হয়।
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">তথ্য ব্যবহার</h2>
                        <p className="text-muted-foreground mb-4">
                            আপনার তথ্য নিম্নলিখিত উদ্দেশ্যে ব্যবহৃত হয়:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                            <li>অনুরোধকৃত সেবা প্রদান</li>
                            <li>পরিষেবা উন্নত করা</li>
                            <li>প্রযুক্তিগত সহায়তা প্রদান</li>
                            <li>নিরাপত্তা এবং জালিয়াতি প্রতিরোধ</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">তথ্য সুরক্ষা</h2>
                        <p className="text-muted-foreground mb-4">
                            আমরা আপনার ব্যক্তিগত তথ্য রক্ষার জন্য শিল্পের মান অনুযায়ী নিরাপত্তা ব্যবস্থা প্রয়োগ করি। আমাদের সিস্টেম এনক্রিপশন এবং অন্যান্য সুরক্ষা প্রোটোকল ব্যবহার করে।
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">তৃতীয় পক্ষ শেয়ারিং</h2>
                        <p className="text-muted-foreground mb-4">
                            আমরা আপনার অনুমতি ছাড়া আপনার ব্যক্তিগত তথ্য তৃতীয় পক্ষের সাথে শেয়ার করি না। আইনি বাধ্যবাধকতা বা আইন প্রবর্তনের অনুরোধের ক্ষেত্রে ছাড়া।
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">যোগাযোগ</h2>
                        <p className="text-muted-foreground mb-4">
                            এই গোপনীয়তা নীতি সম্পর্কে যদি আপনার কোন প্রশ্ন থাকে, তবে আমাদের <Link to="/contact-us" className="text-primary hover:underline">যোগাযোগ পৃষ্ঠা</Link> থেকে আমাদের সাথে যোগাযোগ করুন।
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicyPage;
