import type { ArticleFrontmatter } from './types';
import { getShortDescription, processContentInDir } from './utils';

export const featuredArticles = (
    await processContentInDir<ArticleFrontmatter, ArticleFrontmatter>('blog', (data) => {
        const shortDescription = getShortDescription(data.frontmatter.description);
        return {
            title: data.frontmatter.title,
            description: shortDescription,
            tags: data.frontmatter.tags,
            time: data.frontmatter.time,
            featured: data.frontmatter.featured,
            timestamp: data.frontmatter.timestamp,
            filename: `/blog/${data.frontmatter.filename}`,
        };
    })
)
    .filter((article) => article.featured)
    .sort((a, b) => {
        const dateA = new Date(a.timestamp);
        const dateB = new Date(b.timestamp);
        return dateB.getTime() - dateA.getTime();
    });
