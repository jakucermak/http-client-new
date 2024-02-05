
export interface TestData {
    props: {
        testRun: string
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
    }
}

export function TestDataInfo({ props }: TestData) {
    return (
    <div>
        <table className="tbTable">
            <thead>
                <tr>
                    <th colSpan={3}><h4>Test Info</h4></th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="status"></td>
                    <td className="pivot">Test run:</td>
                    <td className="data">{props.testRun}</td>
                </tr>
                <tr>
                    <td className="status"></td>
                    <td className="pivot">Test last update:</td>
                    <td className="data">{props.testStatusChangeTime}</td>
                </tr>
                <tr>
                    <td className="status"></td>
                    <td className="pivot">Test Sequence:</td>
                    <td className="data">{props.testSeqeunce}</td>
                </tr>
                <tr>
                    <td className="status"></td>
                    <td className="pivot">Test name:</td>
                    <td className="data">{props.testName}</td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}