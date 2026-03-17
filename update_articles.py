import re

filePath = 'src/pages/blog/BlogIndexPage.tsx'
with open(filePath, 'r', encoding='utf-8') as f:
    content = f.read()

# Find and replace the articles array - replace the first 3 articles with the new ones
old_start = '''const articles = [
    {
        title: "NID কার্ড চেক অনলাইন বাংলাদেশ: সহজ ও নিরাপদ পদ্ধতি",
        path: "/blog/nid-card-check-online",
        description:
            "আপনার NID কার্ড যাচাই করুন অনলাইনে: ধাপে ধাপে গাইড ও সরকারি সেবা সম্পর্কে প্রয়োজনীয় তথ্য।",
    },
    {
        title: "জন্মনিবন্ধন সনদ অনলাইন যাচাই: একটি পূর্ণাঙ্গ গাইড",
        path: "/blog/birth-certificate-verification",
        description:
            "জন্মনিবন্ধন সনদ ভ্যালিডেশন অনলাইনে কিভাবে করবেন ও কোন তথ্যগুলো জানার প্রয়োজন তা বিস্তারিতভাবে জানুন।",
    },
    {
        title: "পারিবারিক কার্ড আবেদন প্রক্রিয়া বাংলাদেশ: ধাপে ধাপে নির্দেশিকা",
        path: "/blog/family-card-apply",
        description:
            "পারিবারিক কার্ডের জন্য কিভাবে আবেদন করবেন, কি কি কাগজপত্র লাগবে এবং যেকরে আবেদন করতে পারবেন সব বিস্তারিত।",
    },'''

new_start = '''const articles = [
    {
        title: "অনলাইনে NID সংশোধন করার সম্পূর্ণ গাইড",
        path: "/blog/nid-correction-guide",
        description:
            "আপনার জাতীয় পরিচয়পত্র (NID) এর ভুল তথ্য অনলাইনে কিভাবে সংশোধন করবেন তার সম্পূর্ণ ধাপে ধাপে নির্দেশিকা।",
    },
    {
        title: "জন্ম নিবন্ধন সংশোধন করার নিয়ম বাংলাদেশ",
        path: "/blog/birth-cert-correction-guide",
        description:
            "জন্ম সার্টিফিকেটে ভুল থাকলে অনলাইনে কিভাবে সংশোধন করবেন এবং প্রয়োজনীয় ডকুমেন্টস সম্পর্কে বিস্তারিত জানুন।",
    },
    {
        title: "অনলাইনে পাসপোর্ট চেক করার নিয়ম",
        path: "/blog/passport-check-online",
        description:
            "আপনার পাসপোর্টের আবেদন অগ্রগতি ট্র্যাক করুন এবং অনলাইনে পাসপোর্টের তথ্য যাচাই করুন সহজ নিয়মে।",
    },
    {
        title: "NID কার্ড চেক অনলাইন বাংলাদেশ: সহজ ও নিরাপদ পদ্ধতি",
        path: "/blog/nid-card-check-online",
        description:
            "আপনার NID কার্ড যাচাই করুন অনলাইনে: ধাপে ধাপে গাইড ও সরকারি সেবা সম্পর্কে প্রয়োজনীয় তথ্য।",
    },
    {
        title: "জন্মনিবন্ধন সনদ অনলাইন যাচাই: একটি পূর্ণাঙ্গ গাইড",
        path: "/blog/birth-certificate-verification",
        description:
            "জন্মনিবন্ধন সনদ ভ্যালিডেশন অনলাইনে কিভাবে করবেন ও কোন তথ্যগুলো জানার প্রয়োজন তা বিস্তারিতভাবে জানুন।",
    },
    {
        title: "পারিবারিক কার্ড আবেদন প্রক্রিয়া বাংলাদেশ: ধাপে ধাপে নির্দেশিকা",
        path: "/blog/family-card-apply",
        description:
            "পারিবারিক কার্ডের জন্য কিভাবে আবেদন করবেন, কি কি কাগজপত্র লাগবে এবং যেকরে আবেদন করতে পারবেন সব বিস্তারিত।",
    },'''

content = content.replace(old_start, new_start)

with open(filePath, 'w', encoding='utf-8') as f:
    f.write(content)

print("✓ BlogIndexPage updated with 3 new articles!")
