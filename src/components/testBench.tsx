import { Status, TestBenchStatus, TestBenchConfig } from "../models/testBench"
import { ChevronIcon } from "./subcomps/chevron"
import { TestBenchGlob, StationInfo } from "./subcomps/stationInfo"
import { useClassName, ClassNameProvider } from "./ContextProvider"
import { TestData, TestDataInfo } from "./subcomps/testData"
import { CustomData } from "./subcomps/customData"
import { Heading } from "./subcomps/heading"



export interface TestBenchInfo {
    testBenchConfig: TestBenchConfig
    testBench: TestBenchGlob,
    testData: TestData
}

interface IHiddenInfon {
    testData: TestData
    bgColor: string
}
function HiddenInfo({testData, bgColor}: IHiddenInfon){

    const {className} = useClassName()

    return (
        <div className={`subContainer ${className || "hidden"}`}>
            <hr className="solid" style={{borderColor: bgColor}}></hr>
            <TestDataInfo props={testData.props} />
            <hr className="solid" style={{borderColor: bgColor}}></hr>
            <CustomData />
        </div>
    )
}

export function TestBench({ testBench, testData, testBenchConfig}: TestBenchInfo) {

    return (
        <div className="testBench" style={{borderColor: testBenchConfig.color}}>
            <Heading stationName={testBenchConfig.testBenchName} bgColor={testBenchConfig.color} />
            <StationInfo props={testBench.props} />
            <ClassNameProvider>
            <HiddenInfo testData={testData} bgColor={testBenchConfig.color} />
            <ChevronIcon />
            </ClassNameProvider>
        </div>
    )
}