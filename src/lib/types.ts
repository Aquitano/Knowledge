export interface ArticleFrontmatter {
    /**
     * The title of the article
     */
    title: string;

    /**
     * The summary description of the article
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
    time?: number;

    /**
     * Whether the article should be featured on the homepage
     */
    featured?: boolean;

    /**
     * The timestamp the article was published in W3C format
     */
    timestamp: string;

    /**
     * The URL of the article on the website
     */
    filename: string;

    /**
     * The author of the article
     */
    author?: string;

    /**
     * The author's avatar URL
     */
    avatar?: string;

    /**
     * The article's cover image URL
     */
    cover?: string;

    /**
     * The article's cover image credit
     */
    coverCredit?: string;

    /**
     * Whether the article is a draft
     */
    draft?: boolean;
}
