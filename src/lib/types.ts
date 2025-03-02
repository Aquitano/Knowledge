export type ArticleFrontmatter = {
    /**
     * The title of the article
     */
    title: string;

    /**
     * THe summary description of the article
     */
    description: string;

    /**
     * The tags of the article
     * (eg. ["JavaScript", "React", "Node.js"])
     */
    tags?: string[];

    /**
     * The estimated time to read the article in minutes
     */
    time: number;

    /**
     * Whether the article should be featured on the homepage
     */
    featured: boolean;

    /**
     * The timestamp the article was published in W3C format
     */
    timestamp: string;

    /**
     * The URL of the article on the website
     * (eg. https://zaggonaut.dev/blog/my-article)
     */
    filename: string;
};
