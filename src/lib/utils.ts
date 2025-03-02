import fs from 'node:fs/promises';

type MarkdownData<T extends object> = {
    frontmatter: T;
    file: string;
    url: string;
};

/**
 * This function processes the content of a directory and returns an array of processed content.
 * It takes a content type, a function to process the content, and an optional directory.
 * If no directory is provided, it defaults to the current working directory.
 *
 * @param contentType the type of content to process
 * @param processFn the function to process the content
 * @param dir the directory to process the content from
 * @returns a promise that resolves to an array of processed content
 */
export const processContentInDir = async <T extends object, K>(
    contentType: 'blog',
    processFn: (data: MarkdownData<T>) => K,
    dir: string = process.cwd(),
) => {
    const files = await fs.readdir(`${dir}/src/pages/${contentType}`);
    const markdownFiles = files.filter((file: string) => file.endsWith('.md')).map((file) => file.split('.')[0]);
    const readMdFileContent = async (file: string) => {
        const content = import.meta.glob('/src/pages/blog/*.md')[`/src/pages/blog/${file}.md`]();
        const data = (await content) as {
            frontmatter: T;
            file: string;
            url: string;
        };
        return processFn(data);
    };
    return await Promise.all(markdownFiles.map(readMdFileContent));
};

/**
 * Shortens a string by removing words at the end until it fits within a certain length.
 * @param content the content to shorten
 * @param maxLength the maximum length of the shortened content (default is 20)
 * @returns a shortened version of the content
 */
export const getShortDescription = (content: string, maxLength = 20) => {
    const splitByWord = content.split(' ');
    const length = splitByWord.length;
    return length > maxLength ? `${splitByWord.slice(0, maxLength).join(' ')}...` : content;
};

/**
 * Formats a date string into a human-readable format
 * @param dateString the date string to format
 * @returns a formatted date string
 */
export function processArticleDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

/**
 * Generates a source URL for the article
 * @param filename the filename of the article
 * @param type the type of article (default is 'blog')
 * @returns the source URL of the article
 */
export function generateSourceUrl(filename: string, type = 'blog'): string {
    const slug = filename.replace(/\.[^/.]+$/, '');
    return `/${type}/${slug}`;
}

/**
 * Sort posts by date (newest first)
 * @param posts the posts to sort
 * @returns the sorted posts
 */
export function sortPostsByDate<T extends { data: { timestamp: string } }>(posts: T[]): T[] {
    return [...posts].sort((a, b) => new Date(b.data.timestamp).getTime() - new Date(a.data.timestamp).getTime());
}

/**
 * Get related posts based on tags
 * @param currentPost the current post
 * @param allPosts all posts
 * @param count the number of related posts to return (default is 3)
 * @returns an array of related posts
 */
export function getRelatedPosts<T extends { id: string; data: { tags?: string[] } }>(
    currentPost: T,
    allPosts: T[],
    count = 3,
): T[] {
    const currentTags = currentPost.data.tags || [];

    // No related posts if there are no tags
    if (currentTags.length === 0) return [];

    return allPosts
        .filter((post) => post.id !== currentPost.id)
        .filter((post) => {
            const postTags = post.data.tags || [];
            return postTags.some((tag) => currentTags.includes(tag));
        })
        .sort((a, b) => {
            // Count matching tags for relevance
            const aTags = a.data.tags || [];
            const bTags = b.data.tags || [];

            const aMatches = aTags.filter((tag) => currentTags.includes(tag)).length;
            const bMatches = bTags.filter((tag) => currentTags.includes(tag)).length;

            return bMatches - aMatches;
        })
        .slice(0, count);
}
