import * as cdk from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2';
import * as codecommit from '@aws-cdk/aws-codecommit';
import * as ecs from '@aws-cdk/aws-ecs';

export class CicdPipelineUsingAwscodesuiteStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    // VPC creation
    const myVpc = new ec2.Vpc(this, "MyVPC");
    
    //Code Commit for all HelloWorldApp Storage
    const repo = new codecommit.Repository(this, 'Repository' ,{
          repositoryName: 'HelloWorldApp',
          description: 'Sample App to trigger Pipeline',
    });
    
    const cluster = new ecs.Cluster(this, 'Cluster', {
         vpc: myVpc
    });
    
  }
}
