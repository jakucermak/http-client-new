import {config} from './config';
import { TestBench, TestBenchInfo } from './testBench';
import { TestBenchGlob } from './subcomps/stationInfo';
import { TestData } from './subcomps/testData';
import {Status, TestBenchConfig} from '../models/testBench'

var testBenchConfigs: TestBenchConfig[] = []

config().then( configs => {
    useConfigs(configs)
})

function useConfigs (configs: TestBenchConfig[]) {
    testBenchConfigs = configs
}


let tb: TestBenchGlob = {
    props: {
            status: Status.Active,
            name: 'shadow',
            testRunner: false,
            userName: 'Jakub Cermak'
}}

let td: TestData ={
    props: {
        testRun: "false",
        testName: "string",
        testSeqeunce: "string",
        testStatusChangeTime: "string",
        customDataChangeTime: "string",
        customItems: [
            {
            item: "string",
            value: "string",
            }
        ]
    }}


var obj = {
        testBench: tb,
        testData: td

}

export function TestBenches(){

    var testBenches = testBenchConfigs.map( tb => {
        return <TestBench testBench={obj.testBench} testData={obj.testData} testBenchConfig={tb}/>
    })
    
return (
    <div className='app'>
        {testBenches}
    </div>
)
}