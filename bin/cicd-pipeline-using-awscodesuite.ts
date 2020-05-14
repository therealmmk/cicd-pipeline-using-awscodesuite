#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CicdPipelineUsingAwscodesuiteStack } from '../lib/cicd-pipeline-using-awscodesuite-stack';

const app = new cdk.App();
new CicdPipelineUsingAwscodesuiteStack(app, 'CicdPipelineUsingAwscodesuiteStack');
