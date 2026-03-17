import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutUsPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 container py-12">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-8">আমাদের সম্পর্কে</h1>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">আমাদের মিশন</h2>
                        <p className="text-muted-foreground mb-4">
                            সহজ সেবা বাংলাদেশ এর মূল উদ্দেশ্য হল বাংলাদেশী নাগরিকদের জন্য সরকারি ফর্ম এবং নথি প্রক্রিয়াকরণ সহজ এবং সুবিধাজনক করা। আমরা ডিজিটাল যুগে সেবা প্রদানে বিশ্বাস করি।
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">আমাদের পরিষেবা</h2>
                        <p className="text-muted-foreground mb-4">
                            আমরা নিম্নলিখিত পরিষেবা প্রদান করি:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                            <li>পারিবারিক কার্ড আবেদন ফর্ম</li>
                            <li>NID স্ক্যানিং এবং প্রক্রিয়াকরণ</li>
                            <li>পাসপোর্ট ফটো সংশোধন</li>
                            <li>জন্মসনদ আবেদন</li>
                            <li>আবেদন পত্র তৈরি</li>
                            <li>আইডি কার্ড পিডিএফ রূপান্তর</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">আমাদের দল</h2>
                        <p className="text-muted-foreground mb-4">
                            আমাদের দল অভিজ্ঞ ডেভেলপার এবং নকশাবিদদের নিয়ে গঠিত যারা ব্যবহারকারী অভিজ্ঞতা উন্নত করতে প্রতিশ্রুতিবদ্ধ। আমরা ক্রমাগত আমাদের পরিষেবা উন্নত করছি এবং নতুন বৈশিষ্ট্য যোগ করছি।
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">প্রযুক্তি</h2>
                        <p className="text-muted-foreground mb-4">
                            আমরা পাতলা-স্ট্যাক প্রযুক্তি ব্যবহার করে আমাদের প্ল্যাটফর্ম নির্মাণ করেছি:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                            <li>React - ব্যবহারকারী ইন্টারফেসের জন্য</li>
                            <li>TypeScript - ধরন-নিরাপদ উন্নয়নের জন্য</li>
                            <li>Vite - দ্রুত বিল্ড টুলের জন্য</li>
                            <li>Tailwind CSS - আধুনিক ডিজাইনের জন্য</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">আমাদের প্রতিশ্রুতি</h2>
                        <p className="text-muted-foreground">
                            আমরা আমাদের ব্যবহারকারীদের নিরাপদ, নির্ভরযোগ্য এবং সহজ পরিষেবা প্রদান করতে প্রতিশ্রুতিবদ্ধ। আমাদের লক্ষ্য হল বাংলাদেশের সরকারি প্রক্রিয়াকে সবার জন্য অ্যাক্সেসযোগ্য করা।
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AboutUsPage;
