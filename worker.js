export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname !== "/") {
      return Response.redirect(`https://github.com/lemonypancakes${url.pathname}`, 301);
    }

    return new Response(
      `Git Repository Proxy - git.lemonypancakes.me\n\n` +
      `This provides a shorthand URL for accessing GitHub repositories.\n\n` +
      `Repositories are hosted at:\n` +
      `https://github.com/lemonypancakes/`,
      { headers: { "Content-Type": "text/plain" } }
    );
  }
};
