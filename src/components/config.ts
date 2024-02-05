import { TestBenchConfig } from '../models/testBench';

declare global {
    interface Window {
        httpClientNew:any;
    }
}

export async function config(): Promise<TestBenchConfig[]> {
    try {
        // Directly await and return the fetched configuration.
        // This assumes window.httpClientNew.config is a Promise that resolves to TestBenchConfig[].
        const configResponse = await window.httpClientNew.config;
        return configResponse;
    } catch (error) {
        console.error('Error fetching config:', error);
        // Return an empty array or some default configuration in case of error.
        return [];
    }
}