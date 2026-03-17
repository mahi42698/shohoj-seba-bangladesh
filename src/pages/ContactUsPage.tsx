import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const ContactUsPage = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Simulate form submission (replace with your actual API endpoint)
            await new Promise((resolve) => setTimeout(resolve, 1000));

            toast({
                title: "বার্তা পাঠানো হয়েছে",
                description: "আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব। ধন্যবাদ!",
            });

            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            toast({
                title: "ত্রুটি",
                description: "বার্তা পাঠাতে সমস্যা হয়েছে। আবার চেষ্টা করুন।",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 container py-12">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-8">আমাদের সাথে যোগাযোগ করুন</h1>

                    <section className="mb-12">
                        <p className="text-muted-foreground mb-8">
                            আপনার যদি কোন প্রশ্ন, পরামর্শ বা সমস্যার রিপোর্ট থাকে, তবে নিচের ফর্ম পূরণ করুন এবং আমাদের কাছে পাঠান। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg border border-border">
                            <div className="space-y-2">
                                <Label htmlFor="name">নাম *</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="আপনার নাম"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">ইমেইল *</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="আপনার ইমেইল"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="subject">বিষয় *</Label>
                                <Input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    placeholder="বার্তার বিষয়"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message">বার্তা *</Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="আপনার বার্তা লিখুন"
                                    rows={6}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <Button type="submit" disabled={isSubmitting} className="w-full">
                                {isSubmitting ? "পাঠানো হচ্ছে..." : "বার্তা পাঠান"}
                            </Button>
                        </form>
                    </section>

                    <section className="grid md:grid-cols-2 gap-8">
                        <div className="bg-card p-6 rounded-lg border border-border">
                            <h2 className="text-xl font-semibold mb-4">ইমেইল</h2>
                            <p className="text-muted-foreground">
                                <a href="mailto:support@shohojseba.com" className="text-primary hover:underline">
                                    support@shohojseba.com
                                </a>
                            </p>
                        </div>

                        <div className="bg-card p-6 rounded-lg border border-border">
                            <h2 className="text-xl font-semibold mb-4">অফিস</h2>
                            <p className="text-muted-foreground">
                                ঢাকা, বাংলাদেশ
                            </p>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ContactUsPage;
