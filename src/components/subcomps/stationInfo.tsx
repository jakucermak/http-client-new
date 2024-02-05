import { Status } from "../../models/testBench"

import classNames from 'classnames'

export interface TestBenchGlob {
    props: {
        status: Status
        name: string
        testRunner: boolean
        userName: string
    }
}

export function StationInfo({ props }: TestBenchGlob) {
    return (
        <table className="tbTable">
            <thead>
                <tr>
                    <th colSpan={2}><h4>Station Info</h4></th>
                    <th className="status slider"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className={classNames('status', props.status)}></td>
                    <td className="pivot">Name:</td>
                    <td className="data">{props.name}</td>
                </tr>
                <tr>
                    <td className="status"></td>
                    <td className="pivot">Test Runner:</td>
                    <td className="data">{props.testRunner ? "Active" : "Non Active"}</td>
                </tr>
                <tr>
                    <td className="status"></td>
                    <td className="pivot">Logged user:</td>
                    <td className="data">{props.userName}</td>
                </tr>
            </tbody>
        </table>
    )
}