import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as CicdPipelineUsingAwscodesuite from '../lib/cicd-pipeline-using-awscodesuite-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CicdPipelineUsingAwscodesuite.CicdPipelineUsingAwscodesuiteStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
