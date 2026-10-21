import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPublishedPosts } from '../utils/blog';

export async function GET(context: APIContext) {
  const posts = await getPublishedPosts();
  const site = context.site ? context.site.origin : 'https://hatemypdf.com';

  return rss({
    title: 'HateMyPDF Blog',
    description: 'Browser-based file tools, privacy guides, and technical explainers.',
    site: site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.description,
      link: `/blog/${post.id || post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
