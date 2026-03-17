import { useEffect } from "react";

interface SeoProps {
    title: string;
    description: string;
    keywords?: string;
}

const Seo = ({ title, description, keywords }: SeoProps) => {
    useEffect(() => {
        document.title = title;

        const setMeta = (name: string, content: string) => {
            let element = document.querySelector(`meta[name=\"${name}\"]`);
            if (!element) {
                element = document.createElement("meta");
                element.setAttribute("name", name);
                document.head.appendChild(element);
            }
            element.setAttribute("content", content);
        };

        setMeta("description", description);
        if (keywords) setMeta("keywords", keywords);
    }, [title, description, keywords]);

    return null;
};

export default Seo;
