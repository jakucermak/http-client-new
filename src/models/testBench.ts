

export enum Status {
    Active = "active",
    NonActive = "non-active"
}

export interface TestBenchConfig {
    // configuration
    color:string
    hostName: string
    port: number
    refreshInterval: number
    testBenchName: string
}

export const defaults:Pick<TestBenchConfig, 'color' | 'refreshInterval' | 'port'> = {
    port: 50000,
    color: "white",
    refreshInterval: 1
}

export interface TestBenchStatus{
    // properties 
    status: Status
    testRunner: boolean
    testRun: boolean
    activeUser: boolean
    userName: string
    testName: string
    testSeqeunce: string
    testStatusChangeTime: string
    customDataChangeTime: string
    customItems: [
        {
        item: string
        value: string
        }
    ]
    id: string
    
}