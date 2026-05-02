export default function sitemap() {
  const baseUrl = 'https://hackersunity.com';
  const routes = ['', '/hackathons', '/events', '/community', '/projects', '/sponsors', '/about', '/contact'];
  return routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
