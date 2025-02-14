export default {
    async fetch(request, env) {
      const url = new URL(request.url);
  
      if (url.pathname.startsWith('/openai')) {
        url.hostname = 'api.openai.com';
      } else if (url.pathname.startsWith('/gemini')) {
        url.hostname = 'generativelanguage.googleapis.com';
      }
  
      return fetch(new Request(url, request));
    },
  };
  