import * as fs from 'fs' 

import {TestBenchConfig, defaults } from '../models/testBench'

interface Config{
  testBenches: [TestBenchConfig]
}

export function readConfig(filename: string): TestBenchConfig[] {
  let contents =  fs.existsSync(filename) ? fs.readFileSync(filename, 'utf-8') : `${filename} not found`
  var parsed = JSON.parse(contents)
  let testBenches: TestBenchConfig[] = []
  for (let i = 0; i < parsed.testBenches.length; i++) {
    const element = parsed.testBenches[i];
    var testBench: TestBenchConfig = {
      color: element.color || defaults.color,
      port: element.port || defaults.port,
      refreshInterval: element.refreshInterval || defaults.refreshInterval,
      hostName: element.hostName,
      testBenchName: element.testBenchName,
    }
    testBenches.push(testBench)
  }
  return testBenches
}