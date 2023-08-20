namespace utils {
    export function parseUrlDomain(data: string): string {
        try {
            const parsedUrl = new URL(data);
            return parsedUrl.hostname.replace(/^www\./, '');
          } catch (error) {
            console.error('Invalid URL:', error);
            return "";
          }
    }
}

export default utils;