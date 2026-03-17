import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const OfficialWebsiteCard = () => {
  return (
    <section className="container pb-16">
      <div className="bg-card rounded-xl p-8 shadow-sm border border-border text-center max-w-2xl mx-auto">
        <Globe className="w-12 h-12 mx-auto mb-4 text-primary" />
        <h3 className="text-2xl font-bold mb-3">সরকারি ওয়েবসাইট</h3>
        <p className="text-muted-foreground mb-6 text-base">
          পারিবারিক কার্ড সম্পর্কিত বিস্তারিত তথ্যের জন্য সরকারি ওয়েবসাইট দেখুন।
        </p>
        <Button variant="outline" size="lg" asChild>
          <a href="https://familycard.gov.bd/" target="_blank" rel="noopener noreferrer">
            সরকারি ওয়েবসাইট দেখুন
          </a>
        </Button>
      </div>
    </section>
  );
};

export default OfficialWebsiteCard;
