namespace utils {
    export function parseUrlDomain(data: string): string {
        try {
            const parsedUrl = new URL(data.trim());
            return parsedUrl.hostname.split('.').slice(-2).join('.');
          } catch (error) {
            console.error('Invalid URL:', error);
            return "";
          }
    }
}

export default utils;